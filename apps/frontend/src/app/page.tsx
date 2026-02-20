"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Mic, Users, Brain, Sparkles, 
  ShieldCheck, Clock, Globe, Phone,
  Mail, MessageSquare, CheckCircle2, BarChart3,
  MapPin, Calendar, Trash2
} from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const words = ["Garbage Collection", "Parks & Recreation", "City Events"];

  useEffect(() => {
    const wordInterval = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(wordInterval);
  }, []);

  const stats = [
    { value: "20%", label: "Call Reduction", description: "Less burden on city staff" },
    { value: "<2s", label: "Response Time", description: "Instant answers" },
    { value: "24/7", label: "Availability", description: "Never closed" },
    { value: "90%+", label: "Accuracy", description: "Reliable information" },
  ];

  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice-First Interface",
      description: "Just say 'Hey Markham' to activate. Natural conversation makes city services accessible to everyone, including seniors and those with visual impairments."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Answers",
      description: "Advanced AI ensures accurate, contextual responses based on real city data. No more searching through multiple websites or waiting on hold."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location-Aware",
      description: "Get personalized information based on your address—garbage schedules, nearby parks, and local events automatically tailored to you."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual Support",
      description: "Serve Markham's diverse population with support for English, French, Mandarin, Cantonese, Tamil, Urdu, and more languages coming soon."
    },
  ];

  const examples = [
    { icon: <Trash2 className="w-5 h-5" />, query: "When is my garbage collection?", category: "Waste" },
    { icon: <MapPin className="w-5 h-5" />, query: "What parks are near me?", category: "Parks" },
    { icon: <Calendar className="w-5 h-5" />, query: "What events are this weekend?", category: "Events" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-slate-950">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 bg-gradient-to-br from-primary-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8"
              >
                <Sparkles size={16} />
                <span>AI-Powered Municipal Assistant</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
              >
                Get Instant Answers About{" "}
                <span className="relative inline-block h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={words[index]} 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -20 }} 
                      transition={{ duration: 0.5 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500 absolute left-0 right-0"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Just say "Hey Markham" and ask anything. Get instant answers about city services—24/7. 
                No more searching through websites or waiting on hold.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl"
                >
                  Try Demo
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
              >
                One Voice Assistant for All City Services
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-400"
              >
                HeyMarkham consolidates all municipal information into a single, intelligent assistant accessible anytime, anywhere.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 md:py-28 px-6 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Try HeyMarkham
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                See how easy it is to get answers about Markham services
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-medium text-slate-400 ml-2">HeyMarkham Demo</span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-800 rounded-lg p-4">
                  <p className="text-slate-300 text-sm mb-2">Click a question to see the response:</p>
                  <div className="flex flex-wrap gap-2">
                    {examples.map((ex, i) => (
                      <button 
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 text-sm transition-colors"
                      >
                        {ex.icon}
                        {ex.query}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm">
                    🎤
                  </div>
                  <div className="flex-1 bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-300">"When is my garbage collection?"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-sm">
                    🤖
                  </div>
                  <div className="flex-1 bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-300">Your garbage collection is on <strong className="text-white">Thursday</strong>. Please place bins at the curb before 7 AM. Recycling is collected on the same day.</p>
                    <p className="text-xs text-slate-500 mt-2">Source: Markham Waste Management</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  placeholder="Ask me anything about Markham..." 
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
                  <ShieldCheck size={18} /> Privacy First
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Your Privacy Matters
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  We collect only what's necessary, protect it with military-grade encryption, and never sell your data. Your information stays within City of Markham systems.
                </p>
                <ul className="space-y-3">
                  {[
                    "End-to-end encryption for all data",
                    "No personal information stored",
                    "Voice data deleted after 90 days",
                    "PIPEDA and GDPR compliant"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                <FeatureCard title="PIPEDA" description="Compliant" iconType="shield" index={0} />
                <FeatureCard title="GDPR" description="Ready" iconType="globe" index={1} />
                <FeatureCard title="AES-256" description="Encryption" iconType="lock" index={2} />
                <FeatureCard title="WCAG" description="Accessible" iconType="server" index={3} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 px-6 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Ready to Transform Markham's Resident Experience?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8"
            >
              Join the smart city revolution. Let's discuss how HeyMarkham can serve your community.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a 
                href="mailto:contact@heymarkham.ai" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg"
              >
                <Mail size={18} />
                contact@heymarkham.ai
              </a>
              <a 
                href="tel:+14165550100" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-all"
              >
                <Phone size={18} />
                (416) 555-0100
              </a>
            </motion.div>
            
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
              <MapPin size={16} />
              <span>City of Markham, Ontario, Canada</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}