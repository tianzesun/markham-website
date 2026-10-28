'use client';

import { useEffect } from 'react';

// One observer for every [data-reveal] element, so server-rendered sections can fade in
// on scroll without shipping an animation library or hydrating each element
export const RevealOnScroll = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add('is-visible');
          // Drop the stagger delay once revealed so hover transitions stay snappy
          el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true });
          observer.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -40px 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};
