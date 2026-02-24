"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Mic, Search, Brain, 
  ShieldCheck, Phone, Mail, CheckCircle2, 
  BarChart3, Clock, AlertCircle, FileSearch, MessageSquare,
  Send, Building2, MapPin, Globe, Calendar, Users,
  MousePointer, Bot, Link2, Home, Baby, Heart, Zap, Play
} from 'lucide-react';

export default function HomePage() {
  const demoQuestions = [
    "When is my garbage pickup day?",
    "What can I put in my blue bin?",
    "How do I get a parking permit?",
    "Are there swimming lessons for toddlers?",
  ];

  const [currentDemoQ, setCurrentDemoQ] = useState(0);

  useEffect(() => {
    const demoInterval = setInterval(() => {
      setCurrentDemoQ((prev) => (prev + 1) % demoQuestions.length);
    }, 5000);
    return () => clearInterval(demoInterval);
  }, []);

  const clickProblemStats = [
    { value: "12+", label: "Clicks to Find Info", description: "Average on municipal websites" },
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
      traditionalPath: "Call 311 → Wait on hold → Hope operator knows → Get transferred → Write down address",
      heymarkhamPath: "Speak the question → Get immediate location + hours → Option for directions",
      outcome: "Life-saving information, instantly accessible"
    },
  ];

  const featureComparison = [
    { feature: "Finding information", current: "12+ clicks, multiple pages", heymarkham: "1 question, instant answer" },
    { feature: "Intelligence", current: "Keyword search only", heymarkham: "Understands natural conversation" },
    { feature: "Source trust", current: "No citations shown", heymarkham: "Every answer cites official sources" },
    { feature: "Availability", current: "Hard to navigate on mobile", heymarkham: "Mobile-first, voice-enabled" },
    { feature: "City insights", current: "Basic page view stats", heymarkham: "Real-time resident needs dashboard" },
  ];

  const pilotInfo = {
    duration: "90-day pilot",
    categories: "3 service categories",
    commitment: "No long-term commitment",
  };

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

  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-slate-950">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 px-4 bg-primary-700 dark:bg-primary-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
                >
                  HeyMarkham
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-primary-100 mb-4"
                >
                  Get instant answers about Markham city services. Ask anything—garbage schedules, recreation programs, bylaw info, and more.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-sm text-primary-200 mb-6"
                >
                  24/7 • Free • Powered by official city data
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-6 text-primary-200 text-sm mb-8"
                >
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-green-400" />
                    <span>Already answered 500+ questions in beta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-green-400" />
                    <span>Avg response time: 1.2 seconds</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link 
                    href="#pilot"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 text-primary-800 rounded font-semibold transition-all shadow-lg"
                  >
                    <Calendar size={18} />
                    Start Your Pilot
                  </Link>
                  <a 
                    href="mailto:info@heymarkham.ai?subject=HeyMarkham Inquiry"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white border border-primary-400 rounded font-semibold transition-all"
                  >
                    <Mail size={18} />
                    Contact Us
                  </a>
                </motion.div>
              </div>

              {/* Right side - Chat Demo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
              <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-primary-700 px-5 py-4 border-b border-primary-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                        <Building2 className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">HeyMarkham</h3>
                        <p className="text-primary-200 text-sm flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          Online • Ready to help
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded px-3 py-1.5">
                      <MapPin size={14} className="text-primary-200" />
                      <input 
                        type="text" 
                        placeholder="Enter your address for personalized answers"
                        className="bg-transparent text-white text-sm placeholder-primary-300 outline-none w-48"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4 min-h-[280px] bg-slate-50">
                  <div className="flex justify-end">
                    <div className="bg-primary-700 text-white px-4 py-3 rounded-lg max-w-[85%]">
                      <p className="text-sm">{demoQuestions[currentDemoQ]}</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-3 rounded-lg max-w-[85%] shadow-sm border border-slate-200">
                      <div className="flex items-start gap-2">
                        <Building2 className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                        <div>
                          <p className="text-sm text-slate-700">
                            {currentDemoQ === 0 && "Based on your address, your garbage pickup is every Thursday. Place bins at the curb by 7 AM."}
                            {currentDemoQ === 1 && "In your blue bin: paper, cardboard, metal cans, plastic bottles #1-7. No plastic bags, styrofoam, or food waste."}
                            {currentDemoQ === 2 && "Unionville residents can get parking permits online at markham.ca/parking or in person at the Civic Centre (101 Town Centre Blvd)."}
                            {currentDemoQ === 3 && "Yes! Parent & Tot swim programs run Saturdays at Markham Pan Am Centre (9-10 AM) and Milliken Pool (10:30-11:30 AM)."}
                          </p>
                          <p className="text-xs text-primary-600 mt-2 font-medium flex items-center gap-1">
                            <ShieldCheck size={12} />
                            Source: markham.ca
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-200 bg-white">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors" title="Voice input" disabled>
                      <Mic size={20} />
                    </button>
                    <div className="flex-1 bg-slate-100 rounded-lg px-4 py-2.5 flex items-center">
                      <input 
                        type="text" 
                        placeholder="Ask about city services..."
                        className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none w-full cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <button className="p-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors cursor-not-allowed" disabled>
                      <Send size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-center text-slate-400 mt-2">
                    <a href="#pilot" className="text-primary-600 hover:underline">Request a live demo →</a> to experience the full chatbot
                  </p>
                </div>
              </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                AI-Powered Solution
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Meet HeyMarkham
              </h2>
              <p className="text-lg text-slate-300">
                The most advanced AI assistant for municipal services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">Smart AI</h3>
                  <p className="text-slate-400 text-sm text-center">Advanced LLM understands natural language and context, not just keywords</p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-1 text-xs text-primary-400">
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                      Understands plain English
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">Verified Answers</h3>
                  <p className="text-slate-400 text-sm text-center">Every response is grounded in official city data with source citations</p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-1 text-xs text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Grounded in official sources
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">Lightning Fast</h3>
                  <p className="text-slate-400 text-sm text-center">Average response time under 2 seconds, available 24/7/365</p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-1 text-xs text-blue-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                      99.9% Uptime
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {['Answers in under 2 seconds', 'Multilingual support', 'Available 24/7'].map((badge) => (
                <div key={badge} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-400 text-sm">
                  {badge}
                </div>
              ))}
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
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The "12-Click" Problem</h3>
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
                  <p className="text-red-600 dark:text-red-400 text-sm mt-3 font-medium">
                    Result: 10+ clicks and still searching
                  </p>
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-xl bg-primary-50 dark:bg-slate-900 border border-primary-100 dark:border-slate-800"
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

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Link2 className="w-5 h-5 text-primary-600" />
                See It In Action: Verified by Source
              </h3>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <Building2 className="text-primary-600 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      "Yard waste collection runs from April to December on your regular garbage day. Bundle branches in 1.2m lengths, tie with string."
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      <span className="text-primary-600 dark:text-primary-400 font-medium">Source:</span>
                      <a href="#" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">
                        markham.ca/waste-and-environment/yard-waste
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Built Around Residents */}
        <section className="py-16 px-6 bg-primary-700 dark:bg-primary-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-serif font-bold text-white mb-4"
              >
                Built Around How Residents Actually Behave
              </motion.h2>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white text-lg mb-4">
                    When we asked Markham residents why they don't use the city website, the answer was always the same: it's too hard to find anything. Most just call or ask neighbors instead.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Designed for Residents, Not Bureaucrats
                </h3>
                <p className="text-primary-100 mb-6">
                  The UI is built for the phone in your hand while you're standing at the curb with a bag of trash—not for a desktop computer in an office. No training needed. No manual required.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">📱</div>
                    <h4 className="font-semibold text-white mb-1">Mobile-First</h4>
                    <p className="text-primary-200 text-sm">Works perfectly on any phone, no app download</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">🗣️</div>
                    <h4 className="font-semibold text-white mb-1">Voice-Enabled</h4>
                    <p className="text-primary-200 text-sm">Speak naturally, get instant answers</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold text-white mb-1">Instant Results</h4>
                    <p className="text-primary-200 text-sm">Under 2 seconds, any time of day</p>
                  </div>
                </div>

                {/* Multilingual Support */}
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <h4 className="font-semibold text-white">Multilingual Support</h4>
                      <p className="text-primary-200 text-sm">
                        HeyMarkham answers in the language residents are most comfortable in—including Cantonese, Mandarin, Farsi, Tamil, and more. Because 40% of Markham residents speak a language other than English at home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Department-Specific "Win" Stories */}
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

        {/* Section 5: Feature Comparison Table */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4"
              >
                A Clear Comparison
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700">
                    <th className="text-left py-4 px-6 font-semibold text-slate-900 dark:text-white">Feature</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-500 dark:text-slate-400">City Website Today</th>
                    <th className="text-left py-4 px-6 font-semibold text-primary-600 dark:text-primary-400">HeyMarkham</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr key={i} className="border-t border-slate-100 dark:border-slate-700">
                      <td className="py-4 px-6 text-slate-900 dark:text-white font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-slate-500 dark:text-slate-400">{row.current}</td>
                      <td className="py-4 px-6 text-primary-600 dark:text-primary-400 font-medium">{row.heymarkham}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>


        {/* Pilot Program Section */}
        <section id="pilot" className="py-16 px-6 bg-white dark:bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                No Risk Trial
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                Start with a 90-Day Pilot
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                We launch on 3 service categories. No long-term commitment. No upfront costs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">90</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Day pilot program</div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Service categories</div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">0</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Long-term commitment</div>
              </div>
            </div>

            {/* How It Works Steps */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "We Scan Your Site", description: "Our system reads your existing website, PDFs, and documents—no manual data entry needed." },
                  { step: "02", title: "You Customize", description: "Add specific workflows, refine responses, and train the AI on your municipal procedures." },
                  { step: "03", title: "Residents Get Answers", description: "Launch on your website, as a standalone portal, or via phone. 24/7 instant service." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-700"
                  >
                    <div className="text-3xl font-bold text-primary-200 dark:text-primary-800 mb-2 font-mono">{item.step}</div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-xl p-6 mb-10 border border-primary-100 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Real-Time Resident Insights Dashboard</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    During the pilot, city staff get a live dashboard showing the top questions residents are asking each week—revealing service gaps no survey could capture. Know exactly what your community needs, in real time.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="mailto:info@heymarkham.ai?subject=Pilot Program Request"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all shadow-lg"
              >
                <Calendar size={18} />
                Request Pilot Details
              </a>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-6 bg-primary-700 dark:bg-primary-900">
          <div className="max-w-4xl mx-auto text-center">
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
              className="text-primary-100 mb-8"
            >
              Start with a pilot. See the results. Then decide.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a 
                href="mailto:info@heymarkham.ai?subject=Pilot Program Request" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-primary-800 rounded-lg font-semibold transition-all"
              >
                <Mail size={18} />
                info@heymarkham.ai
              </a>
              <a 
                href="mailto:info@heymarkham.ai?subject=Schedule a Call" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white border border-primary-400 rounded-lg font-semibold transition-all"
              >
                <Calendar size={18} />
                Schedule a Call
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 text-primary-200 text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Serving Markham, Ontario</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Response within 24 hours</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
