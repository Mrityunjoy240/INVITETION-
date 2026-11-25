"use client";

import React, { useState, useEffect } from "react";

// The exact decorative separator from Royal Heirloom
export const RoyalHeirloomTitle: React.FC<{
  title: string;
  subtitle?: string;
  description?: string;
  light?: boolean;
}> = ({ title, subtitle, description, light = false }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none w-full max-w-[420px] mx-auto px-4 my-2">
      {subtitle && (
        <span className="font-['Cinzel'] text-[11px] sm:text-[12px] tracking-[0.28em] uppercase text-[#8C5D38] font-bold mb-1">
          {subtitle}
        </span>
      )}

      <h2 className="font-['Cinzel_Decorative','Cinzel',serif] text-[26px] sm:text-[32px] font-bold text-[#4A2810] leading-tight tracking-wide mb-1.5">
        {title}
      </h2>

      {/* Exact Royal Heirloom Lotus & Ruled Divider */}
      <div className="flex items-center justify-center gap-2 select-none w-full max-w-[240px] mx-auto my-2">
        <div className="flex-1 flex items-center justify-end">
          <div className="h-[0.8px] w-full bg-gradient-to-r from-transparent via-[#8C5D38]/50 to-[#6B401D]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#6B401D] mx-1" />
          <span className="text-[7px] text-[#6B401D] opacity-90 inline-block">✦</span>
        </div>

        <svg viewBox="0 0 54 36" className="w-8 h-5.5 fill-none flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 31 C18 29 9 22 7 13 C13 15 20 21 27 31 Z" fill="#D9C2A7" fillOpacity="0.45" stroke="#7A4B24" strokeWidth="0.9" />
          <path d="M27 31 C36 29 45 22 47 13 C41 15 34 21 27 31 Z" fill="#D9C2A7" fillOpacity="0.45" stroke="#7A4B24" strokeWidth="0.9" />
          <path d="M27 30 C20 24 13 15 14 6 C20 10 25 20 27 30 Z" fill="#E8D5C0" fillOpacity="0.6" stroke="#683C1A" strokeWidth="1" />
          <path d="M27 30 C34 24 41 15 40 6 C34 10 29 20 27 30 Z" fill="#E8D5C0" fillOpacity="0.6" stroke="#683C1A" strokeWidth="1" />
          <path d="M27 29 C23 20 22 10 27 3 C32 10 31 20 27 29 Z" fill="#C99863" fillOpacity="0.85" stroke="#522C10" strokeWidth="1.1" />
          <path d="M21 31 Q27 34 33 31" stroke="#522C10" strokeWidth="1" />
        </svg>

        <div className="flex-1 flex items-center justify-start">
          <span className="text-[7px] text-[#6B401D] opacity-90 inline-block">✦</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#6B401D] mx-1" />
          <div className="h-[0.8px] w-full bg-gradient-to-l from-transparent via-[#8C5D38]/50 to-[#6B401D]" />
        </div>
      </div>

      {description && (
        <p className="font-['Cormorant_Garamond',serif] text-[15px] sm:text-[17px] text-[#6B401D] italic mt-1 leading-snug">
          {description}
        </p>
      )}
    </div>
  );
};

// Deterministic Falling Petals
const STATIC_PETALS = [
  { left: 4, duration: 9, delay: 0.2, size: 14 },
  { left: 88, duration: 11, delay: 1.5, size: 16 },
  { left: 12, duration: 8, delay: 2.3, size: 12 },
  { left: 92, duration: 13, delay: 0.8, size: 18 },
  { left: 6, duration: 10, delay: 3.1, size: 15 },
  { left: 85, duration: 9.5, delay: 2.7, size: 13 },
  { left: 14, duration: 12, delay: 4.0, size: 17 },
  { left: 96, duration: 10.5, delay: 1.2, size: 14 },
];

export const FallingPetals: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden w-full h-full">
      {STATIC_PETALS.map((p, idx) => (
        <div
          key={idx}
          className="absolute -top-8 animate-falling-leaf"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.35}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 32" width="100%" height="100%" fill="none" className="drop-shadow-[0_1px_3px_rgba(120,60,50,0.2)]">
            <path d="M12 2 C6 7, 3 17, 12 30 C21 17, 18 7, 12 2 Z" fill="#C49388" fillOpacity="0.75" stroke="#7E473D" strokeWidth="0.7" />
            <path d="M12 4 C11 11, 10 19, 12 28" stroke="#6B382F" strokeWidth="0.6" strokeLinecap="round" opacity="0.75" />
            <path d="M12 11 Q8 14 6 17" stroke="#6B382F" strokeWidth="0.45" strokeLinecap="round" opacity="0.6" />
            <path d="M12 16 Q16 19 18 22" stroke="#6B382F" strokeWidth="0.45" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      ))}
    </div>
  );
};
