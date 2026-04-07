"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { 
  Mic, Search, Brain, 
  ShieldCheck, Phone, Mail, CheckCircle2, 
  BarChart3, Clock, AlertCircle, FileSearch, MessageSquare,
  Send, Building2, MapPin, Globe, Calendar, Users,
  MousePointer, Bot, Link2, Home, Baby, Heart, Zap, Play,
  Smartphone, Volume2, Headphones, CreditCard, BookOpen, Ticket,
  Car, Lightbulb, Shield, Check, PartyPopper, Sparkles, Wifi,
  PhoneCall, Leaf, Landmark, Waves, Trees, CalendarDays, RefreshCw,
  ArrowRight
} from 'lucide-react';
import { submitContactForm } from './actions/contact';

export default function HomePage() {
  // Generate static heights for voice bars to avoid hydration mismatch
  const voiceBarHeights = ['16px', '24px', '12px', '20px', '28px'];
  
  // Optimistic update for contact form
  const [optimisticContact, setOptimisticContact] = useState<{ status: 'idle' | 'success' | 'error'; error: string | null }>(
    { status: 'idle', error: null }
  );

  // Demo Chat State
  const [demoMessages, setDemoMessages] = useState<Array<{role: 'user' | 'assistant', content: string, isTyping?: boolean}>>([
    { role: 'assistant', content: "👋 Hi there! I'm HeyMarkham. Ask me anything about City of Markham services." }
  ]);
  const [demoInput, setDemoInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Demo responses
  const demoResponses: Record<string, string> = {
    'garbage': "Your garbage collection is every Thursday. Please place bins at the curb by 7 AM. Next pickup: April 10th.",
    'pool': "Markham Pan Am Centre pool closes at 10 PM today. Milliken Pool closes at 8 PM. The outdoor pools open May 18th.",
    'parking': "Residential parking permits are $70/year. You can apply online at markham.ca/parking. Processing takes 2 business days.",
    'cooling': "There are 7 cooling centers open right now. The nearest one to you is Milliken Mills Community Center, 5 minutes away.",
    'recycle': "Blue bin accepts plastic bottles, paper, cardboard, metal cans. No plastic bags, food waste, or styrofoam please."
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoInput.trim() || isProcessing) return;

    const userMessage = demoInput;
    setDemoInput('');
    setDemoMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsProcessing(true);

    // Add typing indicator
    setDemoMessages(prev => [...prev, { role: 'assistant', content: '', isTyping: true }]);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Find matching response
    let response = "I can help with that! For more specific information please request a full demo.";
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, value] of Object.entries(demoResponses)) {
      if (lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }

    // Replace typing indicator with actual response
    setDemoMessages(prev => {
      const newMessages = [...prev];
      newMessages.pop();
      newMessages.push({ role: 'assistant', content: response });
      return newMessages;
    });
    
    setIsProcessing(false);
  };

  const clickProblemStats = [
    { value: "10+", label: "Clicks to Find Info", description: "Average on municipal websites" },
    { value: "10+ min", label: "Search Time", description: "For simple questions like pickup schedules" },
    { value: "5+", label: "Platforms", description: "Residents must navigate multiple systems" },
    { value: "70%", label: "After-Hours", description: "Queries happen when offices are closed" },
  ];

  const winStories = [
    {
      icon: <Home className="w-6 h-6" />,
      persona: "The New Homeowner",
      question: '"I just moved to Unionville. How do I get a parking permit?"',
      traditionalPath: "Navigate to Parking Services → Permits → Residential → Download PDF form → Find office hours → Visit in person",
      heymarkhamPath: "Ask the question → Get instant answer with link to apply online → Done",
      outcome: "From confused to permitted in under 2 minutes"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      persona: "The Busy Parent",
      question: '"Are there any swimming lessons for toddlers on Saturday mornings?"',
      traditionalPath: "Find Recreation section → Browse program guide PDF → Search for swimming → Check schedules → Call to confirm availability",
      heymarkhamPath: "Ask naturally → See available programs with times → Click to register",
      outcome: "From searching to signed up in one conversation"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      persona: "The Senior",
      question: '"Where is the nearest cooling center open right now?"',
      traditionalPath: "Call 905.477.5530 → Wait on hold → Hope operator knows → Get transferred → Write down address",
      heymarkhamPath: "Speak the question → Get immediate location + hours → Option for directions",
      outcome: "Life-saving information, instantly accessible"
    },
  ];

  const ragBenefits = [
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Verified by Source",
      description: "Every answer comes with a direct link to the specific page on the official website. No more 'I don't trust the AI'—see exactly where the information came from."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language",
      description: 'Talk to it like a neighbor. Ask "Hey, what can I put in my blue bin?" instead of stiff, formal search terms. The AI understands context, not just keywords.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Contextual Understanding",
      description: "Unlike keyword-matching chatbots that fail when you phrase things differently, our RAG system understands what you're actually asking—not just what words you used."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "No Hallucinations",
      description: "RAG grounds every response in actual city data. If the information isn't in official sources, the AI says so—instead of making things up."
    },
  ];

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2]);
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['30%', '70%']);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['30%', '70%']);
  const glowPosition = useMotionTemplate`${glowX} ${glowY}`;

  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-slate-950">
      <main className="flex-grow">
        {/* Hero Section - Interactive Demo */}
        <section ref={heroRef} className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Mouse following glow orb */}
          <motion.div 
            className="absolute w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-3xl pointer-events-none"
            style={{
              left: glowX,
              top: glowY,
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-600/20 rounded-full text-primary-300 text-sm font-medium mb-6 border border-primary-500/30">
                  <Sparkles className="w-4 h-4" />
                  Now in Public Beta for Markham Residents
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Ask Markham.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
                  Get Answers Instantly.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
              >
                The AI voice assistant that answers your city questions 24/7. No hold times, no clicking through 12 pages. Just ask.
              </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a 
                href="#demo"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold text-lg transition-all shadow-xl shadow-primary-600/20 hover:shadow-primary-500/30"
              >
                <Play className="w-5 h-5 fill-current" />
                Try The Demo
              </motion.a>
              <motion.a 
                href="#how-it-works"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-lg transition-all border border-white/20"
              >
                How It Works
              </motion.a>
            </motion.div>
            </div>

            {/* Live Interactive Demo */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0
              }}
              style={{
                perspective: 1000,
                transformPerspective: 1000,
                rotateX: rotateX,
                rotateY: rotateY
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              id="demo"
              className="max-w-3xl mx-auto relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/0 via-primary-400/70 to-primary-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                {/* Chat Header */}
                <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">HeyMarkham Assistant</h3>
                      <div className="flex items-center gap-1.5 text-xs text-green-400">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        Online & Ready
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">Beta Demo</span>
                </div>
                
                {/* Chat Messages */}
                <div className="p-6 h-72 overflow-y-auto space-y-4 bg-slate-900/50 scroll-smooth">
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
                          <p className="text-white text-sm">{msg.content}</p>
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
                      onClick={() => setIsRecording(!isRecording)}
                      className={`w-12 h-12 ${isRecording 
                        ? 'bg-red-500 animate-pulse' 
                        : 'bg-primary-600 hover:bg-primary-500'} rounded-xl flex items-center justify-center transition-all active:scale-95`}
                    >
                      <Mic className="w-5 h-5 text-white" />
                    </button>
                    <input 
                      type="text" 
                      placeholder="Ask HeyMarkham anything..."
                      value={demoInput}
                      onChange={(e) => setDemoInput(e.target.value)}
                      disabled={isProcessing}
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50"
                    />
                    <button 
                      type="submit"
                      disabled={isProcessing || !demoInput.trim()}
                      className="w-12 h-12 bg-primary-600 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5 text-white" />
                    </button>
                  </form>
                  
                  {/* Quick Suggestions */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Garbage pickup', 'Pool hours', 'Parking permit', 'Cooling center'].map((suggestion) => (
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
            </motion.div>
          </div>
        </section>

        {/* Voice-First Experience Section */}
        <section className="py-16 px-6 bg-primary-700 dark:bg-primary-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-primary-200 text-sm font-medium mb-4">
                <Volume2 className="w-4 h-4" />
                Voice-First Experience
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                Just Say "Hey Markham" — Get Answers Instantly
              </h2>
              <p className="text-lg text-primary-200">
                Like having a personal city assistant in your pocket. Hands-free, hassle-free, available 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Phone Mockup */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-700">
                    <div className="w-full h-full bg-gradient-to-b from-primary-800 to-primary-900 rounded-[2.5rem] overflow-hidden relative">
                      <div className="flex justify-between items-center px-6 py-3 bg-black/20">
                        <span className="text-white text-xs">9:41</span>
                        <div className="flex gap-1">
                          <Wifi className="w-3 h-3 text-white" />
                          <PhoneCall className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="p-4 pt-8">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Building2 className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-white font-bold">HeyMarkham</h3>
                          <p className="text-primary-200 text-xs">Voice Assistant</p>
                        </div>
                        <div className="flex justify-center items-end gap-1 h-16 mb-6">
                          {voiceBarHeights.map((height, i) => (
                            <div key={i} className="w-2 bg-primary-300 rounded-full animate-pulse" style={{ height }} />
                          ))}
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white/10 rounded-lg p-3">
                            <p className="text-white text-sm">"Hey Markham, when's my garbage collection?"</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="text-slate-700 text-sm">Your garbage is collected every Thursday. Place bins at the curb by 7 AM.</p>
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                          <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                            <Mic className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Volume2 className="w-6 h-6 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Natural Voice Recognition</h3>
                    <p className="text-primary-200 text-sm">Speaks naturally, understands accents, and works with multiple languages.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Hands-Free Operation</h3>
                    <p className="text-primary-200 text-sm">Perfect for multitasking — use while driving or carrying groceries.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Works Everywhere</h3>
                    <p className="text-primary-200 text-sm">iOS, Android, web browser, smart speakers. Your assistant follows you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Wake Word Activation</h3>
                    <p className="text-primary-200 text-sm">Just say "Hey Markham" to start a conversation anytime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-primary-800 dark:bg-primary-950 border-b border-primary-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 text-primary-200 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>PIPEDA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>WCAG 2.1 AA Accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Powered by public city data</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Why Traditional City Portals Fail Residents */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4"
              >
                Why Traditional City Portals Fail Residents
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-400"
              >
                The search for the needle in the haystack
              </motion.p>
            </div>

            {/* The "12-Click" Problem */}
            <div className="mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <MousePointer className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The "Multiple-Click" Problem</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Finding simple info shouldn't be this hard</p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    <strong>Example:</strong> "When is the next yard waste pickup?"
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">Home</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">Services</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">Waste Management</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">Collections</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">Yard Waste</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">Schedule</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full font-medium">Find your zone...</span>
                  </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {clickProblemStats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The "Smart-ish" Chatbot Comparison */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The "Smart-ish" Chatbot Problem</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Why existing chatbots don't actually help</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                      Keyword Matching (Dumb)
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">User asks:</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">"When does the pool close?"</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-2xl">↓</div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">Chatbot response:</p>
                      <p className="text-sm text-red-700 dark:text-red-300">"I found 15 results for 'pool'. Did you mean: pool permits, pool schedule, pool fees?"</p>
                    </div>
                  </div>
                </div>

                <div className="border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                      Contextual Understanding (Smart)
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">User asks:</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">"When does the pool close?"</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-2xl">↓</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">HeyMarkham response:</p>
                      <p className="text-sm text-green-700 dark:text-green-300">"The Markham Pan Am Centre pool closes at 10 PM today. The Milliken Pool closes at 8 PM. Which one are you looking for?"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The "RAG" Difference */}
        <section className="py-16 px-6 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4"
              >
                Why Our Answers Are Trustworthy
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-400"
              >
                Why our AI is different—without getting too technical
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ragBenefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.015,
                  boxShadow: "0 20px 40px -12px rgba(var(--primary), 0.15)"
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.12,
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-4 p-6 rounded-xl bg-primary-50 dark:bg-slate-900 border border-primary-100 dark:border-slate-800 cursor-pointer will-change-transform"
              >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Win Stories */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4"
              >
                How It Works For You
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-400"
              >
                Real questions from real residents, answered instantly
              </motion.p>
            </div>

            <div className="space-y-6">
              {winStories.map((story, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                        {story.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{story.persona}</h3>
                        <p className="text-primary-600 dark:text-primary-400 text-sm italic">{story.question}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                          <span className="text-sm font-medium text-red-700 dark:text-red-300">Current Experience</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{story.traditionalPath}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm font-medium text-green-700 dark:text-green-300">With HeyMarkham</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{story.heymarkhamPath}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      {story.outcome}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Solution Section - Project Management Board */}
        <section className="py-16 px-6 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                All Your City Services in One Place
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Project Roadmap — From information to transactions
              </p>
            </div>

            {/* Kanban Board */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Column: Completed */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Completed</h3>
                  <span className="ml-auto text-xs text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">3 items</span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-t-xl p-4 border-b-2 border-green-400 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-green-700 dark:text-green-300 text-sm font-medium">Information Access</span>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-b-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex-1">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-green-500">
                      <div className="flex items-center gap-2 mb-1">
                        <Leaf className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Garbage & Recycling</span>
                      </div>
                      <p className="text-xs text-slate-500">Collection schedules, zones, what goes where</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-green-500">
                      <div className="flex items-center gap-2 mb-1">
                        <Trees className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Parks & Recreation</span>
                      </div>
                      <p className="text-xs text-slate-500">Park locations, facilities, programs</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-green-500">
                      <div className="flex items-center gap-2 mb-1">
                        <CalendarDays className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Events & Activities</span>
                      </div>
                      <p className="text-xs text-slate-500">Community events, workshops</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column: In Progress */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">In Progress</h3>
                  <span className="ml-auto text-xs text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">3 items</span>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-t-xl p-4 border-b-2 border-amber-400 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-700 dark:text-amber-300 text-sm font-medium">Integration Phase</span>
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-b-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex-1">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-amber-500">
                      <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="w-4 h-4 text-amber-600" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Library System</span>
                      </div>
                      <p className="text-xs text-slate-500">Q2 2026 — Check books, renew items</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-amber-500">
                      <div className="flex items-center gap-2 mb-1">
                        <Waves className="w-4 h-4 text-amber-600" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Recreation Booking</span>
                      </div>
                      <p className="text-xs text-slate-500">Q2 2026 — Book pools, courts</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-amber-500">
                      <div className="flex items-center gap-2 mb-1">
                        <Car className="w-4 h-4 text-amber-600" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Permit Applications</span>
                      </div>
                      <p className="text-xs text-slate-500">Q2 2026 — Parking, building permits</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column: Planned */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Planned</h3>
                  <span className="ml-auto text-xs text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">3 items</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-t-xl p-4 border-b-2 border-slate-300 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Payment Center</span>
                    <Calendar className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-b-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex-1">
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-slate-400">
                      <div className="flex items-center gap-2 mb-1">
                        <Home className="w-4 h-4 text-slate-500" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Property Tax</span>
                      </div>
                      <p className="text-xs text-slate-500">Q4 2026 — View, pay, payment plans</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-slate-400">
                      <div className="flex items-center gap-2 mb-1">
                        <Lightbulb className="w-4 h-4 text-slate-500" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Utility Bills</span>
                      </div>
                      <p className="text-xs text-slate-500">Q4 2026 — Hydro, water, gas</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-3 border-slate-400">
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="w-4 h-4 text-slate-500" />
                        <span className="font-medium text-slate-900 dark:text-white text-sm">Fines & Fees</span>
                      </div>
                      <p className="text-xs text-slate-500">Q4 2026 — Parking tickets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

         {/* Contact Section */}
         <section id="contact" className="py-16 md:py-20 px-6 bg-primary-700 dark:bg-primary-900">
           <div className="max-w-5xl mx-auto">
             <div className="text-center mb-12">
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 viewport={{ once: true }}
                 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4"
               >
                 Ready to Transform Resident Services?
               </motion.h2>
               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.1 }}
                 viewport={{ once: true }}
                 className="text-primary-100"
               >
                 Start with a pilot. See the results. Then decide.
               </motion.p>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
               {/* Contact Info */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 viewport={{ once: true }}
                 className="space-y-8"
               >
                 <div className="text-left">
                   <h3 className="text-xl font-bold text-white mb-4">Why Choose HeyMarkham?</h3>
                   <div className="space-y-4">
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Zap className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Quick Implementation</h4>
                         <p className="text-primary-200 text-sm">Deploy in weeks, not months. Our solution integrates with your existing systems.</p>
                       </div>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Users className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Reduce Call Volume</h4>
                         <p className="text-primary-200 text-sm">Handle 80% of common questions automatically, freeing staff for complex issues.</p>
                       </div>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <ShieldCheck className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Enterprise Security</h4>
                         <p className="text-primary-200 text-sm">PIPEDA compliant, WCAG 2.1 AA accessible, with 99.9% uptime guarantee.</p>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="pt-6">
                   <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                   <div className="space-y-3">
                     <div className="flex items-center gap-3 text-primary-200">
                       <Mail className="w-5 h-5" />
                       <a href="mailto:info@heymarkham.ai" className="hover:text-white transition-colors">info@heymarkham.ai</a>
                     </div>
                     <div className="flex items-center gap-3 text-primary-200">
                       <Building2 className="w-5 h-5" />
                       <span>City of Markham, Ontario</span>
                     </div>
                     <div className="flex items-center gap-3 text-primary-200">
                       <Globe className="w-5 h-5" />
                       <a href="https://markham.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">markham.ca</a>
                     </div>
                   </div>
                 </div>
               </motion.div>

               {/* Contact Form */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 <form 
                   onSubmit={async (e) => {
                     e.preventDefault();
                     const formData = new FormData(e.target as HTMLFormElement);
                     const result = await submitContactForm(formData);
                      if (result.success) {
                        setOptimisticContact({ status: 'success', error: null });
                      } else {
                        setOptimisticContact({ status: 'error', error: result.error || 'Failed to send' });
                      }
                   }}
                   className="space-y-5 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                 >
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-2">
                       Name
                     </label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       autoComplete="name"
                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                       placeholder="Your name"
                       required
                     />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-2">
                       Email
                     </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       autoComplete="email"
                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                       placeholder="your@email.com"
                       required
                     />
                   </div>
                   
                   <div>
                     <label htmlFor="subject" className="block text-sm font-medium text-primary-100 mb-2">
                       Subject
                     </label>
                     <input
                       type="text"
                       id="subject"
                       name="subject"
                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                       placeholder="How can we help?"
                       required
                     />
                   </div>
                   
                   <div>
                     <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-2">
                       Message
                     </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                        placeholder="Tell us more about your needs..."
                        required
                      />
                   </div>
                   
                   <div>
                     <button 
                       type="submit"
                       className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 text-primary-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                     >
                       Send Message
                       <ArrowRight size={18} />
                     </button>
                   </div>
                   
                    {/* Status message */}
                    <div className="text-center text-sm min-h-[20px]">
                     {optimisticContact.status === 'idle' && (
                       <p className="text-primary-200">
                         We'll get back to you within 24 hours
                       </p>
                     )}
                     {optimisticContact.status === 'success' && (
                       <p className="text-green-300">
                         Message sent! We'll get back to you shortly.
                       </p>
                     )}
                     {optimisticContact.status === 'error' && (
                       <p className="text-red-300">
                         {optimisticContact.error || 'Failed to send message'}
                       </p>
                     )}
                   </div>
                 </form>
               </motion.div>
             </div>
           </div>
         </section>
      </main>
    </div>
  );
}
