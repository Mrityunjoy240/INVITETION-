import React from "react";

export const BengaliAlpanaDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 my-6 opacity-85 ${className}`}>
    <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#dfbe83] to-[#dfbe83]"></span>
    <svg viewBox="0 0 80 52" className="w-10 h-7 text-[#dfbe83] fill-none stroke-current" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 38C31 30 31 20 40 9c9 11 9 21 0 29Z" />
      <path d="M40 38C28 37 21 28 20 18c10 0 17 8 20 20Zm0 0c12-1 19-10 20-20-10 0-17 8-20 20Z" />
      <path d="M39 38c-13 4-23-1-31-12 13-2 22 3 31 12Zm2 0c13 4 23-1 31-12-13-2-22 3-31 12Z" />
      <path d="M12 39c9 6 17 7 27 4m2 0c10 3 18 2 27-4M39 15c-2 5-3 10-2 14m-12-6 7 10m23-10-7 10" />
      <path d="M35 45q5 0 5 5 0-5 5-5M40 2l1.6 2.7L40 7.5l-1.6-2.8Z" />
    </svg>
    <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#dfbe83] to-[#dfbe83]"></span>
  </div>
);

export const SacredMandala: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 380 }) => (
  <svg
    viewBox="0 0 400 400"
    width={size}
    height={size}
    className={`select-none pointer-events-none ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <circle cx="200" cy="200" r="190" strokeOpacity="0.25" strokeDasharray="4 4" />
    <circle cx="200" cy="200" r="175" strokeOpacity="0.4" />
    <circle cx="200" cy="200" r="150" strokeOpacity="0.3" strokeDasharray="6 3" />
    <circle cx="200" cy="200" r="120" strokeOpacity="0.5" />
    <circle cx="200" cy="200" r="85" strokeOpacity="0.6" />
    <circle cx="200" cy="200" r="45" strokeOpacity="0.8" />
    
    {/* Concentric Petals */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 200 200)`}>
        <path d="M200 80 Q215 120 200 150 Q185 120 200 80Z" strokeOpacity="0.45" />
        <path d="M200 25 Q230 75 200 120 Q170 75 200 25Z" strokeOpacity="0.35" />
        <circle cx="200" cy="55" r="3.5" fill="currentColor" fillOpacity="0.5" stroke="none" />
      </g>
    ))}
    
    {/* Intermediate points */}
    {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 200 200)`}>
        <path d="M200 120 L205 160 L195 160 Z" strokeOpacity="0.4" />
        <circle cx="200" cy="105" r="2" fill="currentColor" fillOpacity="0.4" stroke="none" />
      </g>
    ))}
  </svg>
);

export const AuspiciousDiya: React.FC<{ active?: boolean; className?: string }> = ({ active = true, className = "" }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    {/* Diya Flame */}
    <div className={`transition-all duration-700 ${active ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
      <div className="w-6 h-10 bg-gradient-to-t from-[#ff8c00] via-[#ffc107] to-[#fffde7] rounded-[50%_50%_35%_35%/70%_70%_30%_30%] animate-flame filter drop-shadow-[0_0_12px_#ffb347]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400/25 blur-md pointer-events-none" />
    </div>

    {/* Diya Clay Pot Base */}
    <svg viewBox="0 0 100 45" className="w-16 h-8 text-[#9c4a2f] fill-current -mt-1 drop-shadow-md">
      <path d="M10 15 Q50 50 90 15 Q80 8 50 12 Q20 8 10 15Z" />
      <ellipse cx="50" cy="14" rx="38" ry="7" fill="#bf6544" />
      <ellipse cx="50" cy="14" rx="30" ry="4" fill="#68291a" opacity="0.6" />
    </svg>
  </div>
);

export const ShankhaIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={`fill-none stroke-current ${className}`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 42 C10 32 16 20 28 14 C40 8 52 14 54 26 C56 38 46 48 34 50 C26 51 18 48 14 42 Z" />
    <path d="M28 14 C32 20 34 30 30 40 C28 44 24 48 20 49" />
    <path d="M34 18 C38 24 40 32 37 38" />
    <path d="M14 42 C18 42 22 45 26 52 C28 55 32 56 36 54" />
  </svg>
);
