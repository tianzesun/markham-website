'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff, X } from 'lucide-react';
import { findAnswer } from '../lib/faq-data';
import { createSpeechRecognition, isFatalSpeechError, type ISpeechRecognition } from '../lib/speech';

const WAKE_PHRASES = ['hey markham', 'hi markham', 'okay markham', 'ok markham'];
// How long to wait for a question after the wake word before going back to standby
const QUESTION_TIMEOUT_MS = 8000;

type Status = 'idle' | 'standby' | 'awaiting-question' | 'answering' | 'unsupported' | 'blocked';

export const VoiceWakeWord = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [transcript, setTranscript] = useState('');
  const [exchange, setExchange] = useState<{ question: string; answer: string } | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  // Mirrors of state for recognition callbacks, so the recognizer is created once
  const isListeningRef = useRef(false);
  const isAwakeRef = useRef(false);
  const isSpeakingRef = useRef(false);
  const questionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Audio feedback tones
  const playTone = useCallback((frequency: number, duration: number, volume: number = 0.1) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const context = audioContextRef.current;
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      gainNode.gain.setValueAtTime(volume, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);

      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + duration);
    } catch {}
  }, []);

  const speak = useCallback((text: string, onDone?: () => void) => {
    const synth = window.speechSynthesis;
    if (!synth) {
      onDone?.();
      return;
    }
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-CA';
    utterance.rate = 1.0;
    utterance.pitch = 0.95;
    utterance.volume = 0.8;

    // Ignore the microphone while speaking so the assistant doesn't hear itself
    const finish = () => {
      isSpeakingRef.current = false;
      onDone?.();
    };
    utterance.onstart = () => { isSpeakingRef.current = true; };
    utterance.onend = finish;
    utterance.onerror = finish;

    isSpeakingRef.current = true;
    synth.speak(utterance);
  }, []);

  const clearQuestionTimeout = () => {
    if (questionTimeoutRef.current) clearTimeout(questionTimeoutRef.current);
    questionTimeoutRef.current = null;
  };

  const returnToStandby = useCallback(() => {
    clearQuestionTimeout();
    isAwakeRef.current = false;
    setTranscript('');
    if (isListeningRef.current) setStatus('standby');
  }, []);

  const answerQuestion = useCallback((question: string) => {
    clearQuestionTimeout();
    isAwakeRef.current = false;
    const answer = findAnswer(question);
    setExchange({ question, answer });
    setTranscript('');
    setStatus('answering');
    speak(answer, returnToStandby);
  }, [speak, returnToStandby]);

  useEffect(() => {
    const recognition = createSpeechRecognition(true);
    if (!recognition) return;
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      if (isSpeakingRef.current) return;

      const latest = event.results[event.results.length - 1];
      const text = latest[0].transcript.toLowerCase().trim();

      if (!isAwakeRef.current) {
        const phrase = WAKE_PHRASES.find(p => text.includes(p));
        if (!phrase) return;

        // "Hey Markham, when is garbage day?" in one breath: answer straight away
        const rest = text.slice(text.indexOf(phrase) + phrase.length).replace(/^[\s,.!?]+/, '');
        if (latest.isFinal && rest.split(/\s+/).filter(Boolean).length >= 2) {
          answerQuestion(rest);
          return;
        }

        isAwakeRef.current = true;
        setStatus('awaiting-question');
        playTone(660, 0.15);
        questionTimeoutRef.current = setTimeout(returnToStandby, QUESTION_TIMEOUT_MS);
        return;
      }

      // Awake: the wake word may still be in this result if it was said with the question
      const phrase = WAKE_PHRASES.find(p => text.includes(p));
      const question = phrase ? text.slice(text.indexOf(phrase) + phrase.length).replace(/^[\s,.!?]+/, '') : text;
      setTranscript(question);
      if (latest.isFinal && question) {
        answerQuestion(question);
      }
    };

    recognition.onerror = (event) => {
      if (isFatalSpeechError(event?.error)) {
        isListeningRef.current = false;
        clearQuestionTimeout();
        setStatus('blocked');
        setIsPanelOpen(true);
      }
    };
    recognition.onend = () => {
      // Chrome ends continuous sessions periodically; resume while the user wants listening
      if (isListeningRef.current) {
        try { recognition.start(); } catch {}
      }
    };

    return () => {
      isListeningRef.current = false;
      clearQuestionTimeout();
      recognition.onend = null;
      recognition.abort();
      window.speechSynthesis?.cancel();
    };
  }, [answerQuestion, playTone, returnToStandby]);

  const stopListening = () => {
    isListeningRef.current = false;
    isAwakeRef.current = false;
    clearQuestionTimeout();
    recognitionRef.current?.stop();
    window.speechSynthesis?.cancel();
    isSpeakingRef.current = false;
    setTranscript('');
    setStatus('idle');
  };

  const toggleListening = () => {
    if (isListeningRef.current) {
      stopListening();
      playTone(350, 0.15, 0.08);
      return;
    }

    setIsPanelOpen(true);
    // Browsers without the Web Speech API (e.g. Firefox) have nothing to start
    if (!recognitionRef.current) {
      setStatus('unsupported');
      return;
    }
    try {
      recognitionRef.current.start();
      isListeningRef.current = true;
      setStatus('standby');
    } catch {}
  };

  const closePanel = () => {
    window.speechSynthesis?.cancel();
    isSpeakingRef.current = false;
    setIsPanelOpen(false);
    if (status === 'answering') returnToStandby();
  };

  const isListening = status === 'standby' || status === 'awaiting-question' || status === 'answering';

  const statusText: Record<Status, string> = {
    idle: 'Voice assistant is off.',
    standby: 'Listening for "Hey Markham"…',
    'awaiting-question': transcript || "I'm listening. What's your question?",
    answering: 'Answering…',
    unsupported: "Voice isn't supported in this browser. Try Chrome, Edge or Safari, or type in the demo above.",
    blocked: 'Microphone access was blocked. Allow it in your browser settings to use voice.',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isPanelOpen && (
          <div
            className="animate-fade-up w-80 max-w-[calc(100vw-3rem)] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl p-4 text-sm"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-semibold text-slate-900 dark:text-white">HeyMarkham Voice</p>
              <button
                onClick={closePanel}
                aria-label="Close voice panel"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-3">{statusText[status]}</p>
            {exchange && (
              <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-3">
                <p className="text-slate-500 dark:text-slate-400">
                  You asked: <span className="text-slate-900 dark:text-white">&ldquo;{exchange.question}&rdquo;</span>
                </p>
                <p className="text-slate-700 dark:text-slate-200">{exchange.answer}</p>
                <p className="text-xs text-slate-400">
                  Sample answer. Confirm details at{' '}
                  <a href="https://www.markham.ca" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600 dark:hover:text-primary-300">markham.ca</a>.
                </p>
              </div>
            )}
          </div>
      )}

      <button
        onClick={toggleListening}
        aria-label={isListening ? 'Stop listening for "Hey Markham"' : 'Start listening for "Hey Markham"'}
        aria-pressed={isListening}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95 ${
          isListening
            ? 'bg-primary-600 text-white ring-4 ring-primary-300 ring-opacity-50'
            : 'bg-white text-slate-700 shadow-lg border border-slate-200'
        }`}
      >
        {/* Expanding ring while waiting for the question after the wake word */}
        {status === 'awaiting-question' && (
          <span className="absolute inset-0 rounded-full bg-primary-400 opacity-60 animate-ping" aria-hidden="true" />
        )}
        {isListening ? <Mic className="relative w-6 h-6" /> : <MicOff className="w-6 h-6" />}
      </button>
    </div>
  );
};
