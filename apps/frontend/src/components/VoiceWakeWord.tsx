'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
}

interface SpeechRecognitionConstructor {
  new (): ISpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

export {};

export const VoiceWakeWord = () => {
  const [isListening, setIsListening] = useState(false);
  const [isWakeWordActive, setIsWakeWordActive] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const speak = useCallback((text: string) => {
    if (synthRef.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 0.95;
      utterance.volume = 0.8;
      synthRef.current.speak(utterance);
    }
  }, []);

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognitionAPI) {
      recognitionRef.current = new SpeechRecognitionAPI();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-CA';

      recognitionRef.current.onresult = (event: any) => {
        const current = event.results[event.results.length - 1];
        const text = current[0].transcript.toLowerCase().trim();
        setTranscript(text);

        if (text.includes('hey markham') || text.includes('hi markham') || text.includes('okay markham')) {
          setIsWakeWordActive(true);
          speak("Hi there, how can I help you?");
        }
      };

      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => {
        if (isListening && recognitionRef.current) {
          try { recognitionRef.current.start(); } catch {}
        }
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [isListening, speak]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setIsWakeWordActive(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch {}
    }
  };

  return (
    <motion.button
      onClick={toggleListening}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all ${
        isListening 
          ? 'bg-primary-600 text-white ring-4 ring-primary-300 ring-opacity-50' 
          : 'bg-white text-slate-700 shadow-lg border border-slate-200'
      }`}
    >
      <AnimatePresence mode="wait">
        {isListening ? (
          <motion.div
            key="mic-on"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            className="relative"
          >
            <Mic className="w-6 h-6" />
            {isWakeWordActive && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute inset-0 rounded-full bg-primary-400"
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="mic-off"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
          >
            <MicOff className="w-6 h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};