"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Mic, Search, Brain, 
  ShieldCheck, Phone, Mail, CheckCircle2, 
  BarChart3, Clock, AlertCircle, FileSearch, MessageSquare,
  Send, Play, Building2, MapPin, Globe, Calendar, Users
} from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export default function HomePage() {
  const demoQuestions = [
    "When is my garbage pickup day?",
    "What time does the community centre close?",
    "How do I report a pothole?",
    "Where can I recycle electronics?",
  ];

  const [currentDemoQ, setCurrentDemoQ] = useState(0);

  useEffect(() => {
    const demoInterval = setInterval(() => {
      setCurrentDemoQ((prev) => (prev + 1) % demoQuestions.length);
    }, 5000);
    return () => clearInterval(demoInterval);
  }, []);

  const problemStats = [
    { value: "60%", label: "Repetitive Calls", description: "Call center queries are for basic info" },
    { value: "5+", label: "Platforms", description: "Residents must navigate multiple systems" },
    { value: "70%", label: "After-Hours", description: "Queries happen when offices are closed" },
    { value: "12+", label: "Clicks to Find Info", description: "Average on government websites" },
  ];

  const solutionStats = [
    { value: "<2s", label: "Response Time", description: "Instant answers vs 5-10 min search" },
    { value: "90%+", label: "Accuracy", description: "AI-powered with source citations" },
    { value: "24/7", label: "Availability", description: "Never closed, no hold times" },
    { value: "1", label: "Question Needed", description: "No navigation required" },
  ];

  const problems = [
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Information Fragmentation",
      description: "City data is scattered across multiple websites, PDFs, and databases. Residents struggle to find what they need."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Limited Service Hours",
      description: "Call centers operate 9-5 on weekdays, but 70% of resident queries happen outside these hours."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Overwhelmed Staff",
      description: "60% of calls are repetitive questions about basic information that could be automated."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Complex Navigation",
      description: "Average resident needs 12+ clicks to find simple information on municipal websites."
    },
  ];

  const ragBenefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "RAG Technology",
      description: "Retrieval-Augmented Generation ensures every answer is grounded in actual city data—no hallucinations, just accurate information with source citations."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language",
      description: "Residents ask in their own words. No need to know department names, form numbers, or website structures."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice-First Design",
      description: "Accessibility for seniors, visually impaired, and anyone who prefers speaking over navigating complex websites."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Data",
      description: "Daily integration with city databases means information is always current—no outdated PDFs or broken links."
    },
  ];

  const comparison = [
    { aspect: "Find garbage day", traditional: "5-10 min, 12 clicks", heymarkham: "5 seconds, 1 question" },
    { aspect: "After-hours help", traditional: "Wait until 9 AM next day", heymarkham: "Instant, 24/7" },
    { aspect: "Language support", traditional: "English/French only", heymarkham: "6+ languages" },
    { aspect: "Accessibility", traditional: "Screen reader required", heymarkham: "Voice-first built-in" },
    { aspect: "Information accuracy", traditional: "May be outdated", heymarkham: "Real-time data" },
  ];

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversational AI",
      description: "Ask anything in plain language—no keywords, no search operators, no forms."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Enabled",
      description: "Speak your question naturally. Perfect for accessibility and hands-free use."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Accurate & Cited",
      description: "Every answer links to official sources. No AI hallucinations or outdated info."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Insights Dashboard",
      description: "See what residents are asking. Identify service gaps and trending concerns."
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-slate-950">
      <main className="flex-grow">
        {/* Hero Section - Demo First */}
        <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 px-4 bg-primary-700 dark:bg-primary-900">
          <div className="max-w-7xl mx-auto">
            {/* Main Hero Content */}
            <div className="text-center mb-8">
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
                className="text-lg text-primary-100 max-w-2xl mx-auto mb-4"
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

              {/* Social Proof */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-6 text-primary-200 text-sm mb-8"
              >
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-green-400" />
                  <span>500+ questions answered in beta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-green-400" />
                  <span>Avg response time: 1.2 seconds</span>
                </div>
              </motion.div>
            </div>

            {/* Interactive Chat Demo - Front and Center */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Header */}
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
                    {/* Address Input */}
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

                {/* Chat Messages */}
                <div className="p-5 space-y-4 min-h-[280px] bg-slate-50">
                  {/* User Question */}
                  <div className="flex justify-end">
                    <div className="bg-primary-700 text-white px-4 py-3 rounded-lg max-w-[85%]">
                      <p className="text-sm">{demoQuestions[currentDemoQ]}</p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-white px-4 py-3 rounded-lg max-w-[85%] shadow-sm border border-slate-200">
                      <div className="flex items-start gap-2">
                        <Building2 className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                        <div>
                          <p className="text-sm text-slate-700">
                            {currentDemoQ === 0 && "Based on your address, your garbage pickup is every Thursday. Place bins at the curb by 7 AM."}
                            {currentDemoQ === 1 && "The Markham Pan Am Centre (16 Library Lane) is open today until 10 PM. Pool hours: 6 AM - 9 PM."}
                            {currentDemoQ === 2 && "Report potholes via the Markham Request app (iOS/Android) or call 905-415-7535 during business hours."}
                            {currentDemoQ === 3 && "Electronic waste: Milliken Transfer Station (7700 Kennedy Rd). Open Sat 8 AM - 4 PM. Free for Markham residents."}
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

                {/* Input Area */}
                <div className="p-4 border-t border-slate-200 bg-white">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors" title="Voice input">
                      <Mic size={20} />
                    </button>
                    <div className="flex-1 bg-slate-100 rounded-lg px-4 py-2.5 flex items-center">
                      <input 
                        type="text" 
                        placeholder="Ask about city services..."
                        className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none w-full"
                      />
                    </div>
                    <button className="p-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Link 
                href="#for-city"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 text-primary-800 rounded font-semibold transition-all shadow-lg"
              >
                <Calendar size={18} />
                Book a Demo
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
                <span>Official City Data</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </section>

        {/* What is HeyMarkham Section */}
        <section id="features" className="py-16 px-6 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4"
              >
                Your City Information, Simplified
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-400"
              >
                HeyMarkham helps residents find Markham city information instantly. No apps to download, no forms to fill—just ask.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded bg-slate-50 dark:bg-slate-900 border-l-4 border-primary-600"
                >
                  <div className="w-10 h-10 rounded bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Stats */}
        <section className="py-12 bg-slate-100 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                The Challenge We're Solving
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {problemStats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
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

        {/* Problems Detail */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                Why Current Systems Fall Short
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-16 bg-primary-50 dark:bg-slate-900/50 border-y border-primary-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                How HeyMarkham Helps
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Using AI technology, we make municipal information instantly accessible to all residents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {ragBenefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {solutionStats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
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

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                Traditional vs. AI-Powered Service
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-800">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 dark:text-slate-400">Traditional</th>
                    <th className="text-left py-3 px-4 font-semibold text-primary-600 dark:text-primary-400">HeyMarkham</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-3 px-4 text-slate-900 dark:text-white font-medium">{row.aspect}</td>
                      <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{row.traditional}</td>
                      <td className="py-3 px-4 text-primary-600 dark:text-primary-400 font-medium">{row.heymarkham}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* For City Officials Section */}
        <section id="for-city" className="py-16 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">
                <MapPin size={16} /> For Municipal Government
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                A Partner for Smart Cities
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                HeyMarkham helps municipalities deliver better service while reducing operational costs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Benefits */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Cost Savings", desc: "Reduce call center volume by up to 60% with automated answers to common questions" },
                    { title: "Staff Efficiency", desc: "Free staff to focus on complex issues requiring human judgment" },
                    { title: "Resident Insights", desc: "Comprehensive analytics on what residents are asking about" },
                    { title: "Smart City Leadership", desc: "Position your municipality as an innovation leader" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded bg-slate-50 dark:bg-slate-900">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white text-sm">{item.title}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Privacy & Compliance */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Privacy & Compliance</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded bg-slate-50 dark:bg-slate-900 border-l-4 border-primary-600">
                    <p className="font-medium text-slate-900 dark:text-white text-sm mb-1">MFIPPA Compliant</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Designed to meet Ontario's Municipal Freedom of Information and Protection of Privacy Act requirements.</p>
                  </div>
                  <div className="p-4 rounded bg-slate-50 dark:bg-slate-900 border-l-4 border-green-500">
                    <p className="font-medium text-slate-900 dark:text-white text-sm mb-1">PIPEDA Aligned</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Personal information handling follows federal privacy principles.</p>
                  </div>
                  <div className="p-4 rounded bg-slate-50 dark:bg-slate-900 border-l-4 border-blue-500">
                    <p className="font-medium text-slate-900 dark:text-white text-sm mb-1">Data Residency</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">All data stored and processed in Canada.</p>
                  </div>
                  <div className="p-4 rounded bg-slate-50 dark:bg-slate-900 border-l-4 border-purple-500">
                    <p className="font-medium text-slate-900 dark:text-white text-sm mb-1">WCAG 2.1 AA Accessible</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Meets accessibility requirements for public sector organizations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilot Program */}
            <div className="bg-primary-50 dark:bg-slate-900 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Start with a 90-Day Pilot
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Not ready for a full rollout? We offer a low-risk 90-day pilot program covering 3 service categories. 
                No long-term commitment required—see the results first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@heymarkham.ai?subject=Pilot Program Inquiry"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-600 text-white rounded font-semibold transition-all"
                >
                  <Calendar size={18} />
                  Book a Demo
                </a>
                <a 
                  href="mailto:info@heymarkham.ai?subject=ROI Information Request"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-primary-800 border border-primary-300 rounded font-semibold transition-all"
                >
                  Request ROI Details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4"
              >
                Implementation
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Connect Data", description: "We integrate with existing city databases, websites, and document systems." },
                { step: "02", title: "Customize", description: "Our team trains the AI on your specific content and procedures." },
                { step: "03", title: "Deploy", description: "Launch on your website, phone system, or as a standalone portal." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900 p-6 rounded border border-slate-200 dark:border-slate-800"
                >
                  <div className="text-4xl font-bold text-primary-200 dark:text-primary-800 mb-3 font-mono">{item.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
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
              Contact City Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary-100 mb-8"
            >
              Have questions about HeyMarkham? Contact the City of Markham for more information.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a 
                href="mailto:contact@markham.ca" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-primary-800 rounded font-semibold transition-all"
              >
                <Mail size={18} />
                contact@markham.ca
              </a>
              <a 
                href="tel:+19054748484" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white border border-primary-400 rounded font-semibold transition-all"
              >
                <Phone size={18} />
                905-474-8484
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
                <span>City of Markham</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Mon-Fri 8:30 AM - 4:30 PM</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}