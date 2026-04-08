'use client';

import { useEffect, useRef } from 'react';
import { motion, animate, motionValue } from 'framer-motion';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const x = motionValue(0);
  const y = motionValue(0);
  const scale = motionValue(1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      animate(x, e.clientX - 16, { type: 'spring', stiffness: 800, damping: 35 });
      animate(y, e.clientY - 16, { type: 'spring', stiffness: 800, damping: 35 });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        animate(scale, 2.5, { type: 'spring', stiffness: 400, damping: 20 });
      }
    };

    const handleMouseOut = () => {
      animate(scale, 1, { type: 'spring', stiffness: 400, damping: 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary-500 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x,
        y,
        scale,
      }}
    />
  );
};