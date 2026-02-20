"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Mic, Building2, TrendingUp, Sparkles, 
  ShieldCheck, Users, Phone, Mail, CheckCircle2, 
  BarChart3, DollarSign, Clock, Award
} from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const words = ["Municipal Services", "Smart City Innovation", "Resident Engagement"];

  useEffect(() => {
    const wordInterval = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(wordInterval);
  }, []);

  const roiStats = [
    { value: "$150K-$300K", label: "Annual Savings", description: "Reduced call center costs" },
    { value: "8-12 Months", label: "ROI Break-even", description: "Payback period" },
    { value: "$450K-$900K", label: "3-Year Net Savings", description: "Total cost reduction" },
    { value: "35%", label: "Call Reduction", description: "Similar cities" },
  ];

  const sponsorBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven ROI",
      description: "Documented cost savings of $150K-$300K annually in call center reduction. Break-even within 8-12 months with measurable impact."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Smart City Leadership",
      description: "Position Markham as a Canadian leader in municipal AI innovation. Attract tech talent, investment, and positive media coverage."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enhanced Resident Services",
      description: "24/7 availability for all residents. Accessibility-first design serves seniors, visually impaired, and diverse communities."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics on resident needs, service gaps, and operational efficiency to inform policy decisions."
    },
  ];

  const caseStudies = [
    { city: "Boston", result: "35% call reduction, 92% satisfaction", metric: "15K+ queries/month" },
    { city: "Singapore", result: "60% monthly adoption rate", metric: "Full city integration" },
    { city: "Amsterdam", result: "€2M annual savings", metric: "Operational efficiency" },
  ];

  const investmentTiers = [
    { tier: "Pilot Partner", amount: "$50K-$100K", benefits: ["6-month pilot program", "Brand recognition", "Impact reporting", "Quarterly reviews"] },
    { tier: "Founding Sponsor", amount: "$100K-$250K", benefits: ["Full deployment support", "Logo placement", "Press coverage", "Board advisory role"] },
    { tier: "Strategic Partner", amount: "$250K+", benefits: ["Multi-year agreement", "White-label options", "Exclusive territory", "Joint IP development"] },
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
                <span>Investment & Partnership Opportunity</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
              >
                Transform{" "}
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
                HeyMarkham is a production-ready AI voice assistant delivering measurable ROI for municipal governments. 
                Partner with us to bring smart city innovation to communities across Canada.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  href="#investment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl"
                >
                  Investment Opportunities
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

        {/* ROI Stats Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Measurable Impact, Proven Results
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Based on deployments in similar municipalities
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {roiStats.map((stat, i) => (
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

        {/* Why Sponsor Section */}
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
                Why Partner with HeyMarkham?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 dark:text-slate-400"
              >
                Join the municipal AI revolution. We offer sponsors and partners meaningful impact with measurable returns.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sponsorBenefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
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
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Proven Track Record
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Similar implementations in municipalities worldwide
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{study.city}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">{study.result}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{study.metric}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Tiers */}
        <section id="investment" className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Choose the level of engagement that fits your organization
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {investmentTiers.map((tier, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl border ${i === 1 ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tier.tier}</h3>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">{tier.amount}</p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
                  <ShieldCheck size={18} /> Enterprise Ready
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Built for Government
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Production-grade infrastructure meeting all municipal security and compliance requirements. 
                  PIPEDA compliant, SOC 2 ready, with Canadian data residency.
                </p>
                <ul className="space-y-3">
                  {[
                    "Canadian data centers with 24/7 monitoring",
                    "PIPEDA & GDPR compliant architecture",
                    "SOC 2 Type II certified infrastructure",
                    "99.9% uptime SLA guarantee"
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
                <FeatureCard title="SOC 2" description="Ready" iconType="lock" index={1} />
                <FeatureCard title="GDPR" description="Aligned" iconType="globe" index={2} />
                <FeatureCard title="99.9%" description="Uptime SLA" iconType="server" index={3} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Ready to Discuss Partnership?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8"
            >
              Let's explore how HeyMarkham can create value for your organization and the communities you serve.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a 
                href="mailto:partners@heymarkham.ai" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg"
              >
                <Mail size={18} />
                partners@heymarkham.ai
              </a>
              <a 
                href="tel:+14165550100" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-all"
              >
                <Phone size={18} />
                (416) 555-0100
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}