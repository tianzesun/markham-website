'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Mic, Send, Building2, Users, Bot, Sparkles
} from 'lucide-react';
import { findFaq } from '../lib/faq-data';
import { AnswerSource } from './AnswerSource';
import { createSpeechRecognition, type ISpeechRecognition } from '../lib/speech';

// The interactive hero: demo chat, voice input and mouse parallax
export const HeroDemo = () => {
  // Demo Chat State
  const [demoMessages, setDemoMessages] = useState<Array<{role: 'user' | 'assistant', content: string, isTyping?: boolean, source?: string}>>([
    { role: 'assistant', content: "👋 Hi there! I'm HeyMarkham. Ask me anything about City of Markham services." }
  ]);
  const [demoInput, setDemoInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  // Ref copy so voice callbacks registered once still see the current value
  const isProcessingRef = useRef(false);

  // Auto scroll chat to bottom
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [demoMessages]);

  const askDemo = async (question: string) => {
    if (!question.trim() || isProcessingRef.current) return;
    isProcessingRef.current = true;

    const userMessage = question.trim();
    setDemoInput('');
    setDemoMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsProcessing(true);

    // Add typing indicator
    setDemoMessages(prev => [...prev, { role: 'assistant', content: '', isTyping: true }]);
    
    // Brief "looking it up" pause so the reply reads as an answer, not a page swap
    await new Promise(resolve => setTimeout(resolve, 350));
    
    // Find actual matching response from knowledge base
    const { answer: response, source } = findFaq(userMessage);

    // Stream the reply in word by word
    setDemoMessages(prev => {
      const newMessages = [...prev];
      newMessages.pop();
      newMessages.push({ role: 'assistant', content: '', isTyping: false, source });
      return newMessages;
    });
    
    // Long answers finish in about the same time as short ones (~0.7 s)
    const words = response.split(' ');
    const delay = Math.min(30, 700 / words.length);
    for (let i = 1; i <= words.length; i++) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setDemoMessages(prev => {
        const newMessages = [...prev];
        const last = newMessages[newMessages.length - 1];
        newMessages[newMessages.length - 1] = { ...last, content: words.slice(0, i).join(' ') };
        return newMessages;
      });
    }
    
    isProcessingRef.current = false;
    setIsProcessing(false);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    askDemo(demoInput);
  };

  // Voice input for the demo: one utterance, transcribed into the input, then asked
  const demoRecognitionRef = useRef<ISpeechRecognition | null>(null);
  const [isVoiceSupported, setIsVoiceSupported] = useState(true);

  useEffect(() => {
    const recognition = createSpeechRecognition(false);
    if (!recognition) {
      setIsVoiceSupported(false);
      return;
    }
    recognition.onresult = (event) => {
      const latest = event.results[event.results.length - 1];
      const text = latest[0].transcript;
      setDemoInput(text);
      if (latest.isFinal) {
        setIsRecording(false);
        askDemo(text);
      }
    };
    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);
    demoRecognitionRef.current = recognition;
    return () => recognition.abort();
    // askDemo only touches refs and state setters, so the first-render closure stays correct
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDemoRecording = () => {
    const recognition = demoRecognitionRef.current;
    if (!recognition) return;
    if (isRecording) {
      recognition.stop();
      setIsRecording(false);
    } else {
      try {
        recognition.start();
        setIsRecording(true);
      } catch {}
    }
  };

  // Mouse parallax: pointer position (-0.5 to 0.5) goes into CSS variables, once per frame
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', String((e.clientX - rect.left) / rect.width - 0.5));
        hero.style.setProperty('--my', String((e.clientY - rect.top) / rect.height - 0.5));
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative pt-12 pb-16 md:pt-20 md:pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Mouse following glow orb */}
      {/* Radial gradient instead of a blur filter: same soft glow, far cheaper to paint */}
      <div 
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(98,125,152,0.18)_0%,transparent_65%)]"
        style={{
          left: 'calc(50% + var(--mx, 0) * 40%)',
          top: 'calc(50% + var(--my, 0) * 40%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* CSS rather than JS animations, so the hero paints before scripts load */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-600/20 rounded-full text-primary-300 text-sm font-medium mb-6 border border-primary-500/30">
              <Sparkles className="w-4 h-4" />
              Beta Demo for Markham Residents
            </div>
          </div>
          
          <h1 className="animate-rise text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ask Markham.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
              Get Answers Instantly.
            </span>
          </h1>

          <p className="animate-rise text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto [animation-delay:100ms]">
            Quick, accurate answers to your city questions, 24/7, drawn from official City of Markham information with a link to the source. No hold times, no clicking through pages.
          </p>
        </div>

        {/* Live Interactive Demo: CSS entrance on the wrapper, mouse tilt on the card */}
        <div className="animate-fade-up [animation-delay:200ms]">
        <div 
          style={{
            transform: 'perspective(1000px) rotateX(calc(var(--my, 0) * -4deg)) rotateY(calc(var(--mx, 0) * 4deg))',
          }}
          id="demo"
          className="max-w-3xl mx-auto relative group scroll-mt-24"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 rounded-2xl shadow-[0_0_40px_8px_rgba(98,125,152,0.35)] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/0 via-primary-400/70 to-primary-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">HeyMarkham Assistant</p>
                  <div className="flex items-center gap-1.5 text-xs text-green-400">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Answers checked against official sources
                  </div>
                </div>
              </div>
              <span className="text-xs text-slate-500">Beta Demo</span>
            </div>
            
            {/* Chat Messages */}
            <div ref={chatContainerRef} className="p-6 h-72 overflow-y-auto space-y-4 bg-slate-900/50 scroll-smooth">
              {demoMessages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`${msg.role === 'user' 
                    ? 'bg-primary-600 rounded-2xl rounded-tr-none' 
                    : 'bg-slate-800 rounded-2xl rounded-tl-none'} px-4 py-3 max-w-md`}>
                    {msg.isTyping ? (
                      <div className="flex gap-1 items-center h-5">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    ) : (
                      <>
                        <p className="text-white text-sm">{msg.content}</p>
                        {msg.source && (
                          <p className="mt-2 text-xs text-slate-400">
                            <AnswerSource source={msg.source} linkClassName="hover:text-white" />
                          </p>
                        )}
                      </>
                    )}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Input Area */}
            <div className="p-4 border-t border-slate-700 bg-slate-900">
              <form onSubmit={handleDemoSubmit} className="flex gap-3">
                 <button 
                   type="button"
                   onClick={toggleDemoRecording}
                   disabled={!isVoiceSupported || isProcessing}
                   title={isVoiceSupported ? undefined : "Voice input isn't supported in this browser"}
                   aria-label={isRecording ? 'Stop voice input' : 'Ask by voice'}
                   aria-pressed={isRecording}
                   className={`w-12 h-12 ${isRecording 
                     ? 'bg-red-500 animate-pulse' 
                     : 'bg-white hover:bg-gray-100'} rounded-xl flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
                 >
                   <Mic className={`w-5 h-5 ${isRecording ? 'text-white' : 'text-gray-600'}`} />
                 </button>
                 <input 
                  type="text" 
                  placeholder="Ask HeyMarkham anything..."
                  aria-label="Ask HeyMarkham a question"
                  value={demoInput}
                  onChange={(e) => setDemoInput(e.target.value)}
                  disabled={isProcessing}
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={isProcessing || !demoInput.trim()}
                  aria-label="Send message"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </form>
              
              {/* Quick Suggestions: topics whose answers are checked against markham.ca */}
              <div className="mt-3 flex flex-wrap gap-2">
                {['Garbage pickup', 'Overnight parking', 'Green bin', 'Backyard fireworks', 'Tree permit'].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setDemoInput(suggestion)}
                    className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
