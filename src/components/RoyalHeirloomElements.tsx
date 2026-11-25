import React from "react";

// Royal Heirloom Arch Frame: Intricate Mughal / Rajputana Palace Arch with Jali Lattice & Pillars
export const RoyalHeirloomArch: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`relative mx-auto ${className}`}>
    {/* Outer Double Gold Border */}
    <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] border border-[#dfbe83]/50 bg-gradient-to-b from-[#3a0910] via-[#240408] to-[#160205] p-5 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
      {/* Inner Inset Filigree Border */}
      <div className="absolute inset-2 sm:inset-4 rounded-[2rem] sm:rounded-[3rem] border border-[#dfbe83]/30 pointer-events-none" />
      <div className="absolute inset-3 sm:inset-5 rounded-[1.8rem] sm:rounded-[2.7rem] border border-[#dfbe83]/15 pointer-events-none" />

      {/* Top Center Palace Arch Apex Ornament */}
      <div className="flex justify-center -mt-9 sm:-mt-14 mb-4 select-none">
        <svg viewBox="0 0 240 70" className="w-48 sm:w-64 h-auto text-[#dfbe83] fill-none stroke-current" strokeWidth="1.2">
          {/* Central Finial Kalash & Lotus Motif */}
          <path d="M120 4 C116 12 113 18 120 25 C127 18 124 12 120 4 Z" fill="currentColor" fillOpacity="0.8" />
          <circle cx="120" cy="2" r="2.5" fill="currentColor" />
          <path d="M110 24 C115 28 125 28 130 24 C132 30 120 36 120 36 C120 36 108 30 110 24 Z" fill="currentColor" fillOpacity="0.4" />
          {/* Sweeping S-curve Arch Crest */}
          <path d="M120 36 Q100 36 80 48 T40 68" strokeWidth="1.5" />
          <path d="M120 36 Q140 36 160 48 T200 68" strokeWidth="1.5" />
          <path d="M120 42 Q105 42 85 53 T48 70" strokeWidth="0.8" strokeDasharray="2 2" />
          <path d="M120 42 Q135 42 155 53 T192 70" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Small drop beads */}
          <circle cx="95" cy="46" r="2" fill="currentColor" />
          <circle cx="145" cy="46" r="2" fill="currentColor" />
          <circle cx="65" cy="58" r="2" fill="currentColor" />
          <circle cx="175" cy="58" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Card Content Area */}
      <div className="relative z-10">{children}</div>

      {/* Bottom Center Arch Inverted Finial */}
      <div className="flex justify-center -mb-8 sm:-mb-12 mt-4 select-none">
        <svg viewBox="0 0 200 50" className="w-40 sm:w-52 h-auto text-[#dfbe83] fill-none stroke-current" strokeWidth="1.2">
          <path d="M100 46 C97 38 95 32 100 25 C105 32 103 38 100 46 Z" fill="currentColor" fillOpacity="0.8" />
          <circle cx="100" cy="48" r="2" fill="currentColor" />
          <path d="M100 14 Q80 14 60 25 T30 45" strokeWidth="1.3" />
          <path d="M100 14 Q120 14 140 25 T170 45" strokeWidth="1.3" />
        </svg>
      </div>
    </div>
  </div>
);

// Royal Crest & Monogram Emblem
export const RoyalCrestEmblem: React.FC<{ brideInitial?: string; groomInitial?: string; className?: string }> = ({
  brideInitial = "A",
  groomInitial = "S",
  className = "",
}) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
      {/* Outer Rotating Subtle Rays */}
      <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full text-[#dfbe83] animate-[spin_180s_linear_infinite] opacity-60">
        <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="80" cy="80" r="62" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <circle key={deg} cx={80 + 70 * Math.cos((deg * Math.PI) / 180)} cy={80 + 70 * Math.sin((deg * Math.PI) / 180)} r="1.5" fill="currentColor" />
        ))}
      </svg>

      {/* Royal Shield / Medallion Center */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#dfbe83] bg-gradient-to-br from-[#681a25] via-[#480d15] to-[#250308] shadow-[0_0_25px_rgba(223,190,131,0.35)] flex items-center justify-center">
        <span className="font-display text-2xl sm:text-3xl font-normal text-[#dfbe83] tracking-widest pl-1">
          {brideInitial}<span className="text-sm sm:text-base font-serif italic text-[#f3ebdc] mx-0.5">&amp;</span>{groomInitial}
        </span>
      </div>

      {/* Crown Top Ornament */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
        <svg viewBox="0 0 40 24" className="w-8 h-5 text-[#dfbe83] fill-current drop-shadow">
          <path d="M20 2 L25 12 L34 6 L30 20 L10 20 L6 6 L15 12 Z" />
          <circle cx="20" cy="1" r="1.5" fill="#fff" />
          <circle cx="6" cy="5" r="1.2" fill="#fff" />
          <circle cx="34" cy="5" r="1.2" fill="#fff" />
        </svg>
      </div>
    </div>
  </div>
);

// Intricate Floral Alpana Separator
export const RoyalFiligreeDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-2 my-5 select-none ${className}`}>
    <span className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent via-[#dfbe83]/70 to-[#dfbe83]"></span>
    <svg viewBox="0 0 100 30" className="w-16 sm:w-24 h-6 text-[#dfbe83] fill-none stroke-current" strokeWidth="1.2">
      <path d="M50 4 C44 12 44 20 50 26 C56 20 56 12 50 4 Z" fill="currentColor" fillOpacity="0.75" />
      <path d="M50 15 C36 15 28 8 20 15 C28 22 36 15 50 15 Z" />
      <path d="M50 15 C64 15 72 8 80 15 C72 22 64 15 50 15 Z" />
      <circle cx="15" cy="15" r="2" fill="currentColor" />
      <circle cx="85" cy="15" r="2" fill="currentColor" />
      <circle cx="50" cy="2" r="1.5" fill="currentColor" />
      <circle cx="50" cy="28" r="1.5" fill="currentColor" />
    </svg>
    <span className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent via-[#dfbe83]/70 to-[#dfbe83]"></span>
  </div>
);

// Corner Floral Flourish for cards
export const CornerFlourish: React.FC<{ position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }> = ({ position }) => {
  const getTransform = () => {
    switch (position) {
      case "top-left":
        return "top-2 left-2";
      case "top-right":
        return "top-2 right-2 scale-x-[-1]";
      case "bottom-left":
        return "bottom-2 left-2 scale-y-[-1]";
      case "bottom-right":
        return "bottom-2 right-2 scale-[-1]";
    }
  };

  return (
    <div className={`absolute ${getTransform()} pointer-events-none select-none text-[#dfbe83]/45`}>
      <svg viewBox="0 0 50 50" className="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current" strokeWidth="1.2">
        <path d="M2 2 L25 2 C18 6 12 12 12 25 L12 2" strokeWidth="0.8" />
        <path d="M2 2 L2 25 C6 18 12 12 25 12 L2 12" strokeWidth="0.8" />
        <path d="M5 5 Q18 5 22 18 Q5 22 5 5 Z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="2" cy="2" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};
