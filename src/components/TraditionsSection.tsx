"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { RoyalFiligreeDivider, CornerFlourish } from "./RoyalHeirloomElements";
import { Sparkles, Heart, Bell, Sun } from "lucide-react";

export const TraditionsSection: React.FC = () => {
  const { lang } = useLanguage();

  const traditions = [
    {
      titleBn: "শুভদৃষ্টি ও মালাবদল",
      titleEn: "Shubhodrishti & Mala Bodol",
      descBn: "সাতপাকের পর পানের আড়াল সরিয়ে যুগলের প্রথম পবিত্র নয়ন মিলন ও পুষ্পমাল্য অর্পণ।",
      descEn: "The auspicious first exchange of glances followed by the solemn ritual of exchanging sacred floral garlands.",
      icon: Heart,
    },
    {
      titleBn: "সাতপাক ও পবিত্র সপ্তপদী",
      titleEn: "Saat Paak & Vedic Vows",
      descBn: "পবিত্র অগ্নিশিখাকে সাক্ষী রাখিয়া আজীবন একসাথে চলার অমর প্রতিশ্রুতি।",
      descEn: "Circumambulating the sacred wedding fire seven times, taking solemn vows for peace, prosperity, and companionship.",
      icon: Sun,
    },
    {
      titleBn: "শঙ্খধ্বনি ও উলুধ্বনি",
      titleEn: "Shankha & Uludhoni",
      descBn: "মাঙ্গলিক শঙ্খ ও মাতৃকণ্ঠের উলুধ্বনিতে অমঙ্গল দূরীকরণ ও শুভশক্তির আবাহন।",
      descEn: "Auspicious conch blowing and melodic festive ululations heralding happiness and divine protection.",
      icon: Bell,
    },
    {
      titleBn: "সিন্ধুরদান ও লাজাহোম",
      titleEn: "Sindoor Daan & Lajahom",
      descBn: "অগ্নিতে খই অর্পণ এবং নববধূর সীমন্তে মাঙ্গলিক রক্তিম সিঁদুরের অভিষেক।",
      descEn: "Offering puffed grains into the consecrated flame and anointing the bride's parting with sacred vermilion.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="traditions" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfbe83] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "bn" ? "বাঙালি বৈদিক রীতি" : "Vedic Traditions & Rituals"}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-[#faf5eb] font-normal my-2">
            {lang === "bn" ? "মাঙ্গলিক ঐতিহ্য ও সংস্কার" : "The Sacred Bengali Rites"}
          </h2>

          <RoyalFiligreeDivider className="my-3 max-w-xs" />

          <p className="font-serif italic text-base sm:text-lg text-[#mute] max-w-xl mx-auto">
            {lang === "bn"
              ? "শতাব্দী প্রাচীন বাঙালি সংস্কৃতি ও পরম্পরায় দুটি প্রাণের একাত্ম হওয়া"
              : "Timeless matrimonial ceremonies echoing through generations of devotion and joy"}
          </p>
        </div>

        {/* 4-Card Grid with Royal Heirloom styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {traditions.map((tradition, index) => {
            const Icon = tradition.icon;
            return (
              <div
                key={index}
                className="relative rounded-3xl bg-gradient-to-b from-[#2a060a] to-[#180205] border border-[#dfbe83]/40 p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.7)] group hover:border-[#dfbe83] transition-all duration-300"
              >
                <CornerFlourish position="top-left" />
                <CornerFlourish position="top-right" />
                <CornerFlourish position="bottom-left" />
                <CornerFlourish position="bottom-right" />

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#4a121b]/70 border border-[#dfbe83]/50 text-[#dfbe83] shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#dfbe83]/70 font-sans font-semibold">
                      Ritual 0{index + 1}
                    </span>
                    <h3 className="font-bengali text-xl sm:text-2xl text-[#faf5eb] font-medium mt-0.5">
                      {lang === "bn" ? tradition.titleBn : tradition.titleEn}
                    </h3>
                    <h4 className="font-serif italic text-sm text-[#dfbe83] mb-2">
                      {lang === "bn" ? tradition.titleEn : tradition.titleBn}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#mute] leading-relaxed">
                      {lang === "bn" ? tradition.descBn : tradition.descEn}
                    </p>
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
