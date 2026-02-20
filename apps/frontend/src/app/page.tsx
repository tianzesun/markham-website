"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Mic, Search, Brain, Sparkles, 
  ShieldCheck, Users, Phone, Mail, CheckCircle2, 
  BarChart3, Clock, AlertCircle, FileSearch, MessageSquare
} from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const words = ["Garbage Schedules", "Park Information", "City Events"];

  useEffect(() => {
    const wordInterval = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(wordInterval);
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

  const governmentBenefits = [
    "$150K-$300K annual savings in call center costs",
    "Free staff to focus on complex issues requiring human judgment",
    "Comprehensive analytics on resident needs and service gaps",
    "Position Markham as a smart city leader",
    "Reduce resident frustration and improve satisfaction",
    "Compliance with accessibility requirements (WCAG 2.1 AA)",
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
                <span>AI-Powered Municipal Information System</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
              >
                Government Information,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
                  Simplified
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Residents shouldn't need a map to find {" "}
                <span className="relative inline-block h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={words[index]} 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -20 }} 
                      transition={{ duration: 0.5 }}
                      className="text-primary-600 dark:text-primary-400 font-semibold absolute left-0 right-0"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                . HeyMarkham uses AI and RAG technology to make municipal information instantly accessible.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  href="#solution"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl"
                >
                  See How It Works
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

        {/* Problem Stats */}
        <section className="py-16 bg-red-50 dark:bg-red-950/30 border-y border-red-200 dark:border-red-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                The Problem with Current Systems
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Municipal information is too complicated for residents to find
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {problemStats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
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
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why Current Systems Fail Residents
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Government websites were built for storing information, not for helping residents find it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 p-6 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                AI & RAG: The Solution
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Retrieval-Augmented Generation makes municipal information instantly accessible—no navigation required.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {ragBenefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {solutionStats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
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
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Traditional Website vs HeyMarkham AI
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                See the difference AI makes for residents
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">Task</th>
                    <th className="text-left py-4 px-4 font-semibold text-red-600 dark:text-red-400">Traditional Website</th>
                    <th className="text-left py-4 px-4 font-semibold text-primary-600 dark:text-primary-400">HeyMarkham AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-4 px-4 text-slate-900 dark:text-white font-medium">{row.aspect}</td>
                      <td className="py-4 px-4 text-slate-500 dark:text-slate-400">{row.traditional}</td>
                      <td className="py-4 px-4 text-primary-600 dark:text-primary-400 font-medium">{row.heymarkham}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Government Benefits */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
                  <ShieldCheck size={18} /> For Municipal Government
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Benefits for the City
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  HeyMarkham isn't just better for residents—it delivers measurable improvements for municipal operations.
                </p>
                <ul className="space-y-3">
                  {governmentBenefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                <FeatureCard title="PIPEDA" description="Compliant" iconType="shield" index={0} />
                <FeatureCard title="SOC 2" description="Ready" iconType="lock" index={1} />
                <FeatureCard title="WCAG 2.1" description="Accessible" iconType="globe" index={2} />
                <FeatureCard title="99.9%" description="Uptime SLA" iconType="server" index={3} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Modernize Municipal Information?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Let's discuss how HeyMarkham can make city services more accessible for your residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}