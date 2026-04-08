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
