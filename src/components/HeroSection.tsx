"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WEDDING_DATA } from "@/data/wedding-data";
import { RoyalCrestEmblem, RoyalFiligreeDivider, RoyalHeirloomArch } from "./RoyalHeirloomElements";
import { SacredMandala } from "./DecorativeIcons";
import { Calendar, MapPin, ChevronDown, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Background Architectural Lattice / Jali Geometry (Zero raster images) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="palace-jali" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="32" fill="none" stroke="#dfbe83" strokeWidth="0.8" />
              <polygon points="40,8 72,40 40,72 8,40" fill="none" stroke="#dfbe83" strokeWidth="0.6" strokeDasharray="3 3" />
              <circle cx="40" cy="40" r="16" fill="none" stroke="#dfbe83" strokeWidth="0.8" />
              <circle cx="40" cy="40" r="3" fill="#dfbe83" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#palace-jali)" />
        </svg>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#180306]/85 to-[#120204]" />
      </div>

      {/* Decorative Rotating Celestial Mandalas in Background */}
      <div className="absolute right-[-12%] top-[8%] text-[#dfbe83] opacity-8 pointer-events-none hidden md:block">
        <SacredMandala size={650} className="spin-slow" />
      </div>
      <div className="absolute left-[-12%] bottom-[5%] text-[#dfbe83] opacity-6 pointer-events-none hidden md:block">
        <SacredMandala size={550} className="spin-reverse-slow" />
      </div>

      {/* Centerpiece Royal Heirloom Arch Architecture */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <RoyalHeirloomArch>
          <div className="flex flex-col items-center text-center py-6 sm:py-10 px-2 sm:px-6">
            {/* Royal Crest Monogram Header */}
            <div
              className={`transition-all duration-1000 transform ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <RoyalCrestEmblem brideInitial="A" groomInitial="S" className="mb-4" />

              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#dfbe83]/40 bg-[#2a0509]/80 text-[#dfbe83] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                <Sparkles className="w-3 h-3" />
                <span>{WEDDING_DATA.invitationMessage.sanskritMotto}</span>
                <Sparkles className="w-3 h-3" />
              </div>

              <div className="text-xs sm:text-sm font-serif italic text-[#dfbe83]/90 tracking-widest uppercase">
                {lang === "bn" ? "মাঙ্গলিক শুভ বিবাহ নিমন্ত্রণ" : "The Royal Wedding Of"}
              </div>
            </div>

            {/* Couple's Names in Regal Typography */}
            <div
              className={`my-4 sm:my-6 transition-all duration-1000 delay-300 transform ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide text-[#faf5eb] leading-[1.12]">
                <span className="block hover:text-[#dfbe83] transition-colors duration-500">
                  {lang === "bn" ? WEDDING_DATA.couple.bride.bengaliName : WEDDING_DATA.couple.bride.firstName}
                </span>
                <span className="inline-block my-1 font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#dfbe83] font-light">
                  {lang === "bn" ? "ও" : "&"}
                </span>
                <span className="block hover:text-[#dfbe83] transition-colors duration-500">
                  {lang === "bn" ? WEDDING_DATA.couple.groom.bengaliName : WEDDING_DATA.couple.groom.firstName}
                </span>
              </h1>
            </div>

            <RoyalFiligreeDivider className="my-2 max-w-sm" />

            {/* Date & Location */}
            <div
              className={`transition-all duration-1000 delay-500 transform ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-serif text-xl sm:text-2xl text-[#faf5eb] tracking-wide font-normal">
                {lang === "bn" ? WEDDING_DATA.date.fullDateBn : WEDDING_DATA.date.fullDateEn}
              </p>
              <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#dfbe83] mt-1.5 opacity-90">
                {lang === "bn"
                  ? `ইংরেজি ${WEDDING_DATA.date.gregorianBn} · শুভ লগ্ন অপরাহ্ন ৪:৫০`
                  : "Sunday, 13 December 2026 · Auspicious Lagna 4:50 PM"}
              </p>

              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#f3ebdc]/85 font-serif italic mt-3">
                <MapPin className="w-4 h-4 text-[#dfbe83]" />
                <span>
                  {lang === "bn"
                    ? `${WEDDING_DATA.venue.nameBn}, ${WEDDING_DATA.venue.landmarkBn}`
                    : `${WEDDING_DATA.venue.nameEn}, Moyna, West Bengal`}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-wrap items-center justify-center gap-4 mt-8 transition-all duration-1000 delay-700 transform ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#invitation"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#dfbe83] via-[#f3d498] to-[#c29958] text-[#180306] font-sans font-semibold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(223,190,131,0.6)] hover:scale-105 transition-all duration-300"
              >
                {lang === "bn" ? "আমন্ত্রণ পত্র দর্শন" : "View Invitation"}
              </a>
              <a
                href="#schedule"
                className="px-8 py-3 rounded-full border border-[#dfbe83]/60 bg-[#2a0509]/70 hover:bg-[#dfbe83]/15 text-[#faf5eb] hover:text-[#dfbe83] font-sans font-medium text-xs uppercase tracking-wider backdrop-blur-sm transition-all duration-300"
              >
                {lang === "bn" ? "অনুষ্ঠান নির্ঘণ্ট" : "Celebration Events"}
              </a>
            </div>
          </div>
        </RoyalHeirloomArch>

        {/* Scroll prompt */}
        <div className="mt-8 flex justify-center animate-bounce opacity-70">
          <a href="#invitation" aria-label="Scroll to invitation letter">
            <ChevronDown className="w-6 h-6 text-[#dfbe83]" />
          </a>
        </div>
      </div>
    </section>
  );
};
