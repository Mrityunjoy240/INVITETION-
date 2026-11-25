"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Music, VolumeX, Menu, X, Globe, RotateCcw } from "lucide-react";

interface HeaderProps {
  onReplayOpening?: () => void;
  audioPlaying?: boolean;
  toggleAudio?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onReplayOpening, audioPlaying = false, toggleAudio }) => {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#invitation", labelEn: "Invitation", labelBn: "আমন্ত্রণ" },
    { href: "#countdown", labelEn: "Countdown", labelBn: "শুভ দিন" },
    { href: "#schedule", labelEn: "Schedule", labelBn: "অনুষ্ঠানসূচি" },
    { href: "#traditions", labelEn: "Traditions", labelBn: "ঐতিহ্য" },
    { href: "#family", labelEn: "Family", labelBn: "পরিবার" },
    { href: "#venue", labelEn: "Venue", labelBn: "বিবাহ বাসর" },
    { href: "#rsvp", labelEn: "RSVP", labelBn: "উপস্থিতি" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#160205]/95 backdrop-blur-md border-b border-[#dfbe83]/25 py-3 shadow-lg shadow-black/60"
          : "bg-gradient-to-b from-[#180306]/90 via-[#180306]/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram Crest */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfbe83]"
          aria-label="Anamika & Subhadip, back to top"
        >
          <div className="w-8 h-8 rounded-full border border-[#dfbe83] bg-[#4a121b] flex items-center justify-center text-[#dfbe83] text-xs font-serif font-bold group-hover:scale-105 transition-transform">
            AS
          </div>
          <span className="font-display text-lg sm:text-xl font-normal tracking-wide text-[#faf5eb] group-hover:text-[#dfbe83] transition-colors">
            Anamika <span className="italic text-[#dfbe83]">&amp;</span> Subhadip
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest font-sans text-[#faf5eb]/85 hover:text-[#dfbe83] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#dfbe83] group"
            >
              <span>{lang === "bn" ? link.labelBn : link.labelEn}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#dfbe83] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onReplayOpening && (
            <button
              onClick={onReplayOpening}
              className="p-2 rounded-full border border-[#dfbe83]/30 text-[#dfbe83] hover:bg-[#dfbe83]/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfbe83]"
              title={lang === "bn" ? "প্রারম্ভিক দৃশ্য পুনরায় দেখুন" : "Replay Royal Opening"}
              aria-label="Replay Opening"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {toggleAudio && (
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition-all ${
                audioPlaying
                  ? "border-[#dfbe83] text-[#180306] bg-[#dfbe83] shadow-[0_0_12px_rgba(223,190,131,0.5)]"
                  : "border-[#dfbe83]/30 text-[#dfbe83] hover:bg-[#dfbe83]/15"
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfbe83]`}
              title={audioPlaying ? "Mute music" : "Play ambient music"}
              aria-label={audioPlaying ? "Mute music" : "Play ambient music"}
            >
              {audioPlaying ? <Music className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#dfbe83]/45 bg-[#2a0509]/80 text-[#dfbe83] text-xs font-semibold tracking-wider hover:bg-[#dfbe83] hover:text-[#180306] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfbe83]"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "bn" ? "English" : "বাংলা"}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-[#dfbe83]/30 text-[#dfbe83] hover:bg-[#dfbe83]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfbe83]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#160205]/98 border-b border-[#dfbe83]/30 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#faf5eb] hover:text-[#dfbe83] py-2 border-b border-[#dfbe83]/10"
              >
                {lang === "bn" ? link.labelBn : link.labelEn}
              </a>
            ))}
            <div className="pt-2 flex justify-center gap-3">
              <a
                href="/design"
                className="text-xs uppercase tracking-widest text-[#dfbe83]/80 hover:text-[#dfbe83] py-1"
              >
                {lang === "bn" ? "রয়্যাল এয়ারলুম দর্শন" : "Royal Heirloom Folio"}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
