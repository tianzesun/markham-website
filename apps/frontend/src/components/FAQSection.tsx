'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { faqDatabase } from '../lib/faq-data';
import { AnswerSource } from './AnswerSource';

export const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQ items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      // With no search, show 12 items, answers checked against markham.ca first
      return [...faqDatabase.filter(item => item.source), ...faqDatabase.filter(item => !item.source)].slice(0, 12);
    }

    // Every word of the query must appear in the item's keywords or answer
    const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    return faqDatabase.filter(item => {
      const haystack = `${item.question} ${item.keywords.join(' ')} ${item.answer}`.toLowerCase();
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
        ? <mark key={i} className="bg-primary-100 text-primary-900 dark:bg-primary-800 dark:text-primary-50 px-0.5 rounded">{part}</mark>
        : part
    );
  };

  // Track the open item by its database position so it survives filtering
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div data-reveal className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Answers about City of Markham services, with links to the official source where we&rsquo;ve checked them. Always confirm details at markham.ca.</p>

          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              aria-label="Search FAQ"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const index = faqDatabase.indexOf(item);
              const isOpen = openIndex === index;
              return (
              <div
                key={index}
                className="animate-fade-up bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <h3>
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-medium pr-4 text-slate-900 dark:text-white">
                      {highlightText(item.question, searchQuery)}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                
                {/* Answers stay in the HTML (good for search engines); grid rows animate the height */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  inert={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-0 text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700">
                      <p className="pt-4">{highlightText(item.answer, searchQuery)}</p>
                      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                        <AnswerSource source={item.source} linkClassName="hover:text-primary-600 dark:hover:text-primary-300" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              );
            })
          ) : (
            <div className="animate-fade-up text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" aria-hidden="true" />
              <p className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-2">No results found</p>
              <p className="text-slate-500 dark:text-slate-400">Try searching for different keywords like &ldquo;garbage&rdquo;, &ldquo;parking&rdquo; or &ldquo;library&rdquo;</p>
            </div>
          )}
        </div>

        {/* Results count, announced to screen readers as the visitor types */}
        <p className="text-center text-slate-500 dark:text-slate-400 mt-8 min-h-[1.5rem]" aria-live="polite">
          {searchQuery && <>Showing {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;</>}
        </p>
      </div>
    </section>
  );
};
