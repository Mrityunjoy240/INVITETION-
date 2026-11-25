"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WEDDING_DATA } from "@/data/wedding-data";
import { RoyalFiligreeDivider, CornerFlourish } from "./RoyalHeirloomElements";
import { MapPin, Navigation, Compass, ExternalLink, Copy, Check } from "lucide-react";

export const VenueSection: React.FC = () => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(
      `${WEDDING_DATA.venue.nameEn}, ${WEDDING_DATA.venue.addressEn}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfbe83] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === "bn" ? "বিবাহ বাসর ও দিকনির্দেশ" : "The Venue & Destination"}</span>
            <Compass className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-[#faf5eb] font-normal my-2">
            {lang === "bn" ? "কুমুদিনী গেস্ট হাউস" : "Kumudini Guest House"}
          </h2>

          <RoyalFiligreeDivider className="my-3 max-w-xs" />

          <p className="font-serif italic text-base sm:text-lg text-[#mute] max-w-xl mx-auto">
            {lang === "bn"
              ? "ঐতিহাসিক গড়ময়না প্রাঙ্গণ · মেদিনীপুরের শ্যামল প্রাকৃতিক পরিবেশে মিলনমেলা"
              : "Set in historic Moyna, Purba Medinipur · Surrounded by Bengal's verdant heritage"}
          </p>
        </div>

        {/* Venue Architectural Card (Pure Vector Layout) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#2e070c] via-[#1f0307] to-[#140204] border border-[#dfbe83]/45 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-6 sm:p-12 overflow-hidden">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="top-right" />
          <CornerFlourish position="bottom-left" />
          <CornerFlourish position="bottom-right" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Architectural Palace Pavilion Vector Illustration */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#140204]/90 border border-[#dfbe83]/30">
              <svg viewBox="0 0 160 160" className="w-36 h-36 sm:w-44 sm:h-44 text-[#dfbe83] fill-none stroke-current" strokeWidth="1.2">
                {/* Traditional Chala Roof Temple Pavilion */}
                <path d="M20 70 Q80 30 140 70 L130 76 Q80 40 30 76 Z" fill="#b45309" fillOpacity="0.3" stroke="#dfbe83" strokeWidth="1.5" />
                <path d="M80 18 L80 35" stroke="#dfbe83" strokeWidth="2" />
                <circle cx="80" cy="16" r="3.5" fill="#f59e0b" />
                <path d="M35 76 L35 135" stroke="#dfbe83" strokeWidth="2.5" />
                <path d="M125 76 L125 135" stroke="#dfbe83" strokeWidth="2.5" />
                <path d="M60 76 L60 135" stroke="#dfbe83" strokeWidth="1.5" />
                <path d="M100 76 L100 135" stroke="#dfbe83" strokeWidth="1.5" />
                {/* Arch over entrance */}
                <path d="M60 98 Q80 75 100 98" stroke="#dfbe83" strokeWidth="1.5" fill="none" />
                {/* Stone base plinth */}
                <rect x="20" y="135" width="120" height="12" fill="#78350f" fillOpacity="0.4" stroke="#dfbe83" strokeWidth="1.2" rx="2" />
                {/* Surrounding water ripples of Moyna moat */}
                <path d="M15 152 Q40 148 80 152 Q120 156 145 152" stroke="#dfbe83" strokeWidth="0.8" strokeDasharray="3 3" />
              </svg>

              <p className="font-serif italic text-xs text-[#dfbe83] mt-3 tracking-wider text-center">
                {lang === "bn" ? "ঐতিহাসিক গড়ময়না প্রাঙ্গণ" : "Historic Moyna Garh Courtyard"}
              </p>
            </div>

            {/* Right Venue Address & Guidance */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#dfbe83]/15 border border-[#dfbe83]/30 text-[#dfbe83] text-xs font-semibold tracking-wider uppercase font-sans mb-3">
                  {lang === "bn" ? "প্রধান বিবাহ বাসর" : "Sacred Ceremony Grounds"}
                </div>

                <h3 className="font-bengali text-2xl sm:text-3xl text-[#faf5eb] font-medium">
                  {lang === "bn" ? WEDDING_DATA.venue.nameBn : WEDDING_DATA.venue.nameEn}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#dfbe83] font-medium mt-1">
                  {lang === "bn" ? WEDDING_DATA.venue.landmarkBn : WEDDING_DATA.venue.landmarkEn}
                </p>

                <div className="mt-4 p-4 rounded-xl bg-[#2a0509]/80 border border-[#dfbe83]/30 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-[#dfbe83] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bengali text-base text-[#faf5eb] leading-relaxed">
                        {WEDDING_DATA.venue.addressBn}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-[#mute] mt-1">
                        {WEDDING_DATA.venue.addressEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={WEDDING_DATA.venue.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#dfbe83] to-[#c29958] text-[#180306] font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(223,190,131,0.6)] transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{lang === "bn" ? "গুগল ম্যাপসে দিকনির্দেশ" : "Get Google Maps Directions"}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <button
                  onClick={copyAddress}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#dfbe83]/50 hover:bg-[#dfbe83]/15 text-[#dfbe83] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? (lang === "bn" ? "কপি হয়েছে!" : "Copied!") : (lang === "bn" ? "ঠিকানা কপি" : "Copy Address")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
