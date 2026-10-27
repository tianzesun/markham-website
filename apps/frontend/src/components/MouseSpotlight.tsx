'use client';

import { useEffect, useRef } from 'react';

export const MouseSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse following spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
      spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.06), transparent 40%)`,
      }}
    />
  );
};
