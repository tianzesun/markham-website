'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mic, Menu, X, ArrowRight } from 'lucide-react';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 80], [0.7, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 80], ['blur(8px)', 'blur(20px)']);
  const headerShadow = useTransform(scrollY, [0, 80], ['0 0 0 0 transparent', '0 4px 20px -5px rgba(0, 0, 0, 0.1)']);
  const headerBorder = useTransform(scrollY, [0, 80], ['rgba(255, 255, 255, 0)', 'rgba(229, 231, 235, 0.8)']);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Solution', href: '#solution' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      style={{
        backgroundColor: headerOpacity,
        WebkitBackdropFilter: headerBlur,
        backdropFilter: headerBlur,
        boxShadow: headerShadow,
        borderColor: headerBorder,
      } as any}
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md border-b transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
              <Mic className="text-white" size={18} />
            </div>
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                HeyMarkham
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center gap-3"
          >
            <MagneticButton>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm btn-hover"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <div className="flex items-center gap-3">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 15H10V17H8V15ZM12 15H14V17H12V15ZM16 15H18V17H16V15ZM8 11H10V13H8V11ZM12 11H14V13H12V11ZM16 11H18V13H16V11ZM8 7H10V9H8V7ZM12 7H14V9H12V7ZM16 7H18V9H16V7Z" fill="currentColor" />
                  <path d="M10 18H14L16 16L14 14H10L8 16L10 18Z" fill="currentColor" />
                  <path d="M6 8H18C19.1 8 20 8.9 20 10V14C20 15.1 19.1 16 18 16H16V18H18C19.66 18 21 16.66 21 15V10C21 8.34 19.66 7 18 7H6C4.34 7 3 8.34 3 10V15C3 16.66 4.34 18 6 18H8V16H6C4.9 16 4 15.1 4 14V10C4 8.9 4.9 8 6 8Z" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM12 3C16.4 3 20 6.6 20 11C20 15.4 16.4 19 12 19C7.6 19 4 15.4 4 11C4 6.6 7.6 3 12 3ZM13 8H11V15L16 9L13 8Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800"
        >
          <div className="py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="#contact"
                className="block mx-4 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const { ref, x, y } = useMagneticEffect();
  return (
    <motion.div ref={ref} style={{ x, y }}>
      {children}
    </motion.div>
  );
};
