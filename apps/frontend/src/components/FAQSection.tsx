'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqDatabase } from '../lib/faq-data';

export const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQ items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      // Show first 12 items when no search
      return faqDatabase.slice(0, 12);
    }

    // Every word of the query must appear in the item's keywords or answer
    const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    return faqDatabase.filter(item => {
      const haystack = `${item.keywords.join(' ')} ${item.answer}`.toLowerCase();
      return words.every(word => haystack.includes(word));
    });
  }, [searchQuery]);

  // Highlight matching text in results
  const highlightText = (text: string, query: string) => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length === 0) return text;
    
    const regex = new RegExp(`(${words.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      words.includes(part.toLowerCase())
        ? <mark key={i} className="bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100 px-1 rounded">{part}</mark>
        : part
    );
  };

  // Track the open item by its database position so it survives filtering
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Instant answers about City of Markham services</p>

          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              aria-label="Search FAQ"
            />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const index = faqDatabase.indexOf(item);
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium pr-4 capitalize text-slate-900 dark:text-white">
                      {highlightText(item.keywords[0], searchQuery)}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-0 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700">
                          <p className="pt-4">{highlightText(item.answer, searchQuery)}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-500 mb-2">No results found</h3>
                <p className="text-slate-400">Try searching for different keywords like "garbage", "parking", or "library"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results count */}
        {searchQuery && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-500 mt-8"
          >
            Showing {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} for "{searchQuery}"
          </motion.p>
        )}
      </div>
    </section>
  );
};