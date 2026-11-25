"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WEDDING_DATA, EventItem } from "@/data/wedding-data";
import { RoyalFiligreeDivider, CornerFlourish } from "./RoyalHeirloomElements";
import { AuspiciousDiya } from "./DecorativeIcons";
import { Calendar, Clock, Download, ExternalLink, Sparkles } from "lucide-react";

// Pure Vector Heritage Emblems for each Ceremony
const CeremonyVectorEmblem: React.FC<{ type: string }> = ({ type }) => {
  if (type === "haldi") {
    // Turmeric Kalash & Marigold Vector Artwork
    return (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#f59e0b] fill-none stroke-current" strokeWidth="1.5">
        <circle cx="50" cy="50" r="46" stroke="#dfbe83" strokeWidth="1.2" strokeDasharray="3 2" />
        <path d="M50 15 C55 25 70 30 70 55 C70 75 30 75 30 55 C30 30 45 25 50 15 Z" fill="#b45309" fillOpacity="0.3" />
        <ellipse cx="50" cy="22" rx="14" ry="4" fill="#d97706" />
        <path d="M38 18 Q50 6 62 18" stroke="#dfbe83" strokeWidth="2" />
        <circle cx="50" cy="10" r="3" fill="#fbbf24" stroke="none" />
        {/* Marigold petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <ellipse key={deg} cx={50 + 14 * Math.cos((deg * Math.PI) / 180)} cy={52 + 14 * Math.sin((deg * Math.PI) / 180)} rx="4" ry="7" fill="#f59e0b" fillOpacity="0.7" transform={`rotate(${deg} ${50 + 14 * Math.cos((deg * Math.PI) / 180)} ${52 + 14 * Math.sin((deg * Math.PI) / 180)})`} />
        ))}
        <circle cx="50" cy="52" r="5" fill="#78350f" />
      </svg>
    );
  } else if (type === "lagna") {
    // Sacred Wedding Mandap, Topor & Holy Fire Vector
    return (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#ef4444] fill-none stroke-current" strokeWidth="1.5">
        <circle cx="50" cy="50" r="46" stroke="#dfbe83" strokeWidth="1.2" strokeDasharray="3 2" />
        {/* Shola Topor Apex */}
        <polygon points="50,14 62,45 38,45" fill="#fef2f2" fillOpacity="0.25" stroke="#dfbe83" strokeWidth="1.2" />
        <line x1="50" y1="10" x2="50" y2="14" stroke="#dfbe83" strokeWidth="2" />
        <circle cx="50" cy="8" r="2.5" fill="#dfbe83" stroke="none" />
        {/* Sacred Havan Kund Fire Base */}
        <path d="M25 78 L32 58 L68 58 L75 78 Z" fill="#991b1b" fillOpacity="0.4" stroke="#dfbe83" strokeWidth="1.2" />
        {/* Flame */}
        <path d="M50 42 Q60 55 50 62 Q40 55 50 42 Z" fill="#f59e0b" />
        <path d="M50 48 Q55 56 50 60 Q45 56 50 48 Z" fill="#fef08a" />
      </svg>
    );
  } else {
    // Pritibhoj Royal Feast Thali Vector
    return (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#dfbe83] fill-none stroke-current" strokeWidth="1.5">
        <circle cx="50" cy="50" r="46" stroke="#dfbe83" strokeWidth="1.2" strokeDasharray="3 2" />
        {/* Brass Thali Plate */}
        <circle cx="50" cy="50" r="32" fill="#78350f" fillOpacity="0.25" stroke="#dfbe83" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="28" stroke="#dfbe83" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* Katori bowls */}
        <circle cx="36" cy="38" r="7" fill="#dfbe83" fillOpacity="0.3" stroke="#dfbe83" strokeWidth="1" />
        <circle cx="64" cy="38" r="7" fill="#dfbe83" fillOpacity="0.3" stroke="#dfbe83" strokeWidth="1" />
        <circle cx="50" cy="62" r="8" fill="#dfbe83" fillOpacity="0.3" stroke="#dfbe83" strokeWidth="1" />
        <circle cx="50" cy="46" r="4" fill="#fbbf24" stroke="none" />
      </svg>
    );
  }
};

export const ScheduleSection: React.FC = () => {
  const { lang } = useLanguage();
  const [litDiyas, setLitDiyas] = useState<Record<string, boolean>>({
    haldi: true,
    lagna: true,
    bhoj: true,
  });

  const toggleDiya = (id: string) => {
    setLitDiyas((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="schedule" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfbe83] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "bn" ? "মাঙ্গলিক অনুষ্ঠানসূচি" : "Auspicious Celebrations"}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-[#faf5eb] font-normal my-2">
            {lang === "bn" ? "শুভ বিবাহ অনুষ্ঠান নির্ঘণ্ট" : "Royal Wedding Itinerary"}
          </h2>

          <RoyalFiligreeDivider className="my-3 max-w-xs" />

          <p className="font-serif italic text-base sm:text-lg text-[#mute] max-w-xl mx-auto">
            {lang === "bn"
              ? "রবিবার, ১৩ই ডিসেম্বর ২০২৬ · শুভ মুহূর্তগুলির সময়সূচি"
              : "Sunday, 13 December 2026 · Celebrating time-honored rituals and royal hospitality"}
          </p>
        </div>

        {/* Ceremonies List: Pure Vector Heirloom Architecture */}
        <div className="space-y-8 sm:space-y-12">
          {WEDDING_DATA.events.map((event: EventItem, index: number) => {
            const isLit = litDiyas[event.id] ?? true;

            return (
              <div
                key={event.id}
                className="relative rounded-3xl bg-gradient-to-r from-[#2f060b] via-[#200307] to-[#170204] border border-[#dfbe83]/45 shadow-[0_15px_45px_rgba(0,0,0,0.7)] p-6 sm:p-10 transition-all duration-500 hover:border-[#dfbe83] group"
              >
                <CornerFlourish position="top-left" />
                <CornerFlourish position="top-right" />
                <CornerFlourish position="bottom-left" />
                <CornerFlourish position="bottom-right" />

                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                  {/* Left Vector Emblem & Diya */}
                  <div className="md:col-span-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#dfbe83]/20 pb-6 md:pb-0 md:pr-6">
                    <div className="p-3 rounded-full bg-[#160205] border border-[#dfbe83]/40 shadow-inner group-hover:scale-105 transition-transform duration-500">
                      <CeremonyVectorEmblem type={event.id} />
                    </div>

                    <button
                      onClick={() => toggleDiya(event.id)}
                      className="mt-4 flex flex-col items-center group/diya focus:outline-none"
                      title={isLit ? "Extinguish ceremonial flame" : "Light sacred flame"}
                    >
                      <AuspiciousDiya active={isLit} />
                      <span className="text-[11px] uppercase tracking-wider text-[#dfbe83]/80 group-hover/diya:text-[#faf5eb] mt-1 transition-colors font-sans">
                        {isLit
                          ? lang === "bn"
                            ? "প্রদীপ প্রজ্জ্বলিত"
                            : "Diya is Lit"
                          : lang === "bn"
                          ? "প্রদীপ জ্বালান"
                          : "Light Diya"}
                      </span>
                    </button>
                  </div>

                  {/* Right Details */}
                  <div className="md:col-span-8 space-y-4 text-center md:text-left">
                    <div className="inline-block px-3.5 py-1 rounded-full bg-[#dfbe83]/15 border border-[#dfbe83]/30 text-[#dfbe83] text-xs font-semibold tracking-wider uppercase font-sans">
                      {lang === "bn" ? `পর্ব ০${index + 1}` : `Function 0${index + 1}`}
                    </div>

                    <div>
                      <h3 className="font-bengali text-2xl sm:text-3xl text-[#dfbe83] font-medium">
                        {event.bengaliTitle}
                      </h3>
                      <h4 className="font-display text-xl sm:text-2xl text-[#faf5eb] font-normal tracking-wide mt-1">
                        {event.englishTitle}
                      </h4>
                    </div>

                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#4a121b]/60 border border-[#dfbe83]/35 text-amber-200 text-sm sm:text-base font-medium">
                      <Clock className="w-4 h-4 text-[#dfbe83]" />
                      <span>{lang === "bn" ? event.timeDisplayBn : event.timeDisplayEn}</span>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#faf5eb]/85 leading-relaxed max-w-xl">
                      {lang === "bn" ? event.descriptionBn : event.descriptionEn}
                    </p>

                    {/* Action Links */}
                    <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <a
                        href={event.googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#dfbe83] to-[#c29958] text-[#180306] text-xs font-semibold tracking-wider uppercase hover:shadow-[0_0_15px_rgba(223,190,131,0.5)] transition-all"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{lang === "bn" ? "গুগল ক্যালেন্ডার" : "Google Calendar"}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>

                      <a
                        href={event.icsFile}
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#dfbe83]/40 hover:border-[#dfbe83] text-[#dfbe83] hover:text-[#faf5eb] text-xs font-semibold tracking-wider uppercase transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>.ICS Event</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
