'use client';

import { useRef, useEffect } from 'react';
import { animate, motionValue, useTransform } from 'framer-motion';

export const useMagneticEffect = (strength: number = 30) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = motionValue(0);
  const y = motionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    animate(x, distanceX * 0.3, { type: 'spring', stiffness: 150, damping: 15 });
    animate(y, distanceY * 0.3, { type: 'spring', stiffness: 150, damping: 15 });
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 150, damping: 15 });
    animate(y, 0, { type: 'spring', stiffness: 150, damping: 15 });
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { ref, x, y };
};