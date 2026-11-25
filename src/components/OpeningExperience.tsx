"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { RoyalCrestEmblem, RoyalFiligreeDivider } from "./RoyalHeirloomElements";
import { Sparkles, MailOpen, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface OpeningExperienceProps {
  onEnter: () => void;
}

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({ onEnter }) => {
  const { lang } = useLanguage();
  const [envelopeState, setEnvelopeState] = useState<"sealed" | "breaking-seal" | "opening" | "revealed">("sealed");
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanSkip(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const triggerOpen = () => {
    if (envelopeState !== "sealed") return;

    try {
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#dfbe83", "#c29958", "#591c26", "#faf5eb"],
      });
    } catch {
      // ignore
    }

    setEnvelopeState("breaking-seal");
    setTimeout(() => {
      setEnvelopeState("opening");
      setTimeout(() => {
        setEnvelopeState("revealed");
        setTimeout(() => {
          onEnter();
        }, 850);
      }, 900);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#100204] overflow-hidden select-none">
      {/* Background Subtle Geometric Lattice Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heirloom-lattice" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#dfbe83" strokeWidth="0.8" />
              <circle cx="30" cy="30" r="3" fill="#dfbe83" fillOpacity="0.4" />
              <path d="M0 0 L30 30 M60 0 L30 30 M0 60 L30 30 M60 60 L30 30" stroke="#dfbe83" strokeWidth="0.4" strokeDasharray="2 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heirloom-lattice)" />
        </svg>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#180306]/85 to-[#100204]" />
      </div>

      {/* Main Interactive Royal Heirloom Envelope Card */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg mx-4 px-2">
        <div
          className={`relative rounded-3xl bg-gradient-to-b from-[#4a141d] via-[#2f070e] to-[#1a0205] border-2 border-[#dfbe83]/70 shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-all duration-1000 transform ${
            envelopeState === "breaking-seal"
              ? "scale-102"
              : envelopeState === "opening"
              ? "scale-105 -translate-y-4"
              : envelopeState === "revealed"
              ? "scale-110 opacity-0 -translate-y-12"
              : "scale-100 hover:border-[#dfbe83]"
          }`}
        >
          {/* Inner Golden Filigree Inset */}
          <div className="absolute inset-2.5 sm:inset-3.5 border border-[#dfbe83]/35 rounded-[1.4rem] pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 border border-[#dfbe83]/20 rounded-[1.2rem] pointer-events-none" />

          {/* Top Decorative Emblem */}
          <div className="pt-10 pb-2 px-6 text-center">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfbe83] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === "bn" ? "মাঙ্গলিক শুভ বিবাহ নিমন্ত্রণ" : "The Royal Heirloom"}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            <p className="font-bengali text-lg sm:text-xl text-[#dfbe83] tracking-wider mb-2 font-medium">
              শ্রী শ্রী প্রজাপতয়ে নমঃ
            </p>

            <RoyalFiligreeDivider className="my-2" />

            <h1 className="font-display text-4xl sm:text-5xl text-[#faf5eb] font-normal tracking-wide my-3">
              Anamika <span className="italic text-[#dfbe83] font-light">&amp;</span> Subhadip
            </h1>

            <p className="font-serif italic text-base sm:text-lg text-[#f3ebdc]/85 mt-1">
              {lang === "bn" ? "অনামিকা ও শুভদীপ" : "A Regal Wedding Celebration"}
            </p>

            <div className="my-4 text-xs tracking-widest text-[#dfbe83]/90 uppercase font-sans">
              <span>Moyna, West Bengal</span>
              <span className="mx-2 text-[#dfbe83]/40">·</span>
              <span>13 December 2026</span>
            </div>
          </div>

          {/* Center Royal Wax Monogram Seal */}
          <div className="py-6 flex flex-col items-center justify-center">
            <button
              onClick={triggerOpen}
              className="group relative focus:outline-none focus-visible:ring-4 focus-visible:ring-[#dfbe83]"
              aria-label="Open Wedding Invitation"
            >
              {/* Outer Golden Glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#dfbe83] via-[#f3d498] to-[#c29958] opacity-35 blur-md group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />

              {/* Royal Seal Medallion */}
              <RoyalCrestEmblem brideInitial="A" groomInitial="S" />

              {/* Action Prompt */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-serif tracking-widest text-[#dfbe83] uppercase group-hover:text-[#faf5eb] transition-colors">
                <MailOpen className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "সিলমোহরে স্পর্শ করে প্রবেশ করুন" : "Tap Seal to Open Invitation"}</span>
              </div>
            </button>
          </div>

          {/* Card Footer Note */}
          <div className="pb-8 pt-1 text-center text-xs text-[#faf5eb]/65 font-sans">
            {lang === "bn"
              ? "সাদর আমন্ত্রণ জানিয়ে আপনাদের শুভকামনা প্রার্থনা করছি"
              : "Together with our families, we request the honour of your presence"}
          </div>
        </div>
      </div>

      {/* Skip button for quick access */}
      {canSkip && (
        <button
          onClick={onEnter}
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-[#180306]/85 hover:bg-[#591c26] border border-[#dfbe83]/45 text-[#dfbe83] hover:text-[#faf5eb] text-xs font-sans tracking-wider uppercase transition-all duration-300 backdrop-blur-sm shadow-lg"
        >
          <span>{lang === "bn" ? "সরাসরি প্রবেশ" : "Enter Directly"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
