"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { RoyalFiligreeDivider, RoyalCrestEmblem } from "./RoyalHeirloomElements";
import { ArrowUp, Sparkles } from "lucide-react";

export const FooterSection: React.FC<{ onReplayOpening?: () => void }> = ({ onReplayOpening }) => {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-[#dfbe83]/20 bg-[#100103] overflow-hidden text-center z-10">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Royal Crest Monogram Center */}
        <RoyalCrestEmblem brideInitial="A" groomInitial="S" className="mb-2" />

        <RoyalFiligreeDivider className="my-2 max-w-xs" />

        <div className="text-xs uppercase tracking-[0.25em] text-[#dfbe83] font-semibold my-1">
          {lang === "bn" ? "মাঙ্গলিক সমাপ্তি" : "With Gratitude & Respect"}
        </div>

        <h3 className="font-display text-3xl sm:text-4xl text-[#faf5eb] font-normal my-2">
          {lang === "bn" ? "অনামিকা ও শুভদীপ" : "Anamika & Subhadip"}
        </h3>

        <p className="font-serif italic text-base sm:text-lg text-[#mute] max-w-md my-2">
          {lang === "bn"
            ? "আপনাদের আশীর্বাদ ও শুভকামনায় আমাদের নবজীবনের যাত্রা সফল হোক"
            : "May your blessings illuminate the beginning of our lifelong union"}
        </p>

        <p className="text-xs uppercase tracking-widest text-[#dfbe83]/80 font-sans mt-2">
          13 December 2026 · Kumudini Guest House, Moyna, Purba Medinipur
        </p>

        {/* Footer Navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-sans uppercase tracking-wider text-[#dfbe83]/90">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#dfbe83]/35 hover:border-[#dfbe83] hover:text-[#faf5eb] transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{lang === "bn" ? "শীর্ষে ফিরে যান" : "Back to Top"}</span>
          </button>

          {onReplayOpening && (
            <button
              onClick={onReplayOpening}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#dfbe83]/35 hover:border-[#dfbe83] hover:text-[#faf5eb] transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === "bn" ? "রয়্যাল প্রারম্ভিকা" : "Royal Opening"}</span>
            </button>
          )}

          <a
            href="/design"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#dfbe83]/35 hover:border-[#dfbe83] hover:text-[#faf5eb] transition-colors"
          >
            <span>{lang === "bn" ? "ডিজাইন দর্শন" : "Royal Heirloom Folio"}</span>
          </a>
        </div>

        <div className="mt-12 text-[11px] text-[#faf5eb]/35 font-sans tracking-wide">
          Anamika &amp; Subhadip · The Royal Heirloom Wedding Experience · Moyna, West Bengal
        </div>
      </div>
    </footer>
  );
};
