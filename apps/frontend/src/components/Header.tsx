'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Mic, Menu, X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Shadow and border appear once the page scrolls under the header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    // Root-relative so the links also work from other pages such as /privacy
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#solution' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'For Municipalities', href: '/#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] border-b bg-slate-900/[0.97] transition-[box-shadow,border-color] duration-300 ${
        isScrolled ? 'border-slate-700/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.25)]' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="animate-fade-up flex items-center gap-3">
            <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
              <Mic className="text-white" size={18} />
            </div>
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-white">
                HeyMarkham
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="animate-fade-up text-sm font-medium text-white hover:text-primary-200 transition-colors"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="animate-fade-up hidden md:flex items-center gap-3 [animation-delay:300ms]">
            <ThemeToggle />
            <Link
              href="/#demo"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-all shadow-sm hover:-translate-y-0.5"
            >
              Try the Demo
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="p-2 text-slate-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation: grid row height animates from 0 to content height */}
        <div
          className={`md:hidden grid transition-[grid-template-rows,opacity] duration-300 ${
            isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
          inert={!isMenuOpen}
        >
          <div className="overflow-hidden">
            <div className="py-4 space-y-1 border-t border-slate-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-slate-800">
                <Link
                  href="/#demo"
                  className="block mx-4 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm text-center transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try the Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
