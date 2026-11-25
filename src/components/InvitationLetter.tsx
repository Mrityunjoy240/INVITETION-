"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WEDDING_DATA } from "@/data/wedding-data";
import { RoyalFiligreeDivider, CornerFlourish } from "./RoyalHeirloomElements";

export const InvitationLetter: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="invitation" className="py-20 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        {/* Royal Heirloom Parchment Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#faf5eb] via-[#f7f0e1] to-[#ede3cd] text-[#392824] p-8 sm:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-[#dfbe83] overflow-hidden">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="top-right" />
          <CornerFlourish position="bottom-left" />
          <CornerFlourish position="bottom-right" />

          {/* Inner Rule */}
          <div className="absolute inset-3 sm:inset-4 border border-[#94754a]/30 rounded-2xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col items-center text-center">
            {/* Center Royal Monogram Seal */}
            <div className="w-12 h-12 rounded-full border-2 border-[#94754a] bg-[#591c26] text-[#dfbe83] flex items-center justify-center font-serif text-lg font-bold shadow-md mb-2">
              AS
            </div>

            <div className="text-[11px] uppercase tracking-[0.25em] text-[#94754a] font-semibold mb-1">
              {lang === "bn" ? "মাঙ্গলিক আমন্ত্রণ লিপি" : "Auspicious Wedding Epistle"}
            </div>

            <p className="font-bengali text-lg sm:text-xl text-[#591c26] font-medium tracking-wide">
              {WEDDING_DATA.invitationMessage.sanskritMotto}
            </p>

            <RoyalFiligreeDivider className="my-4 max-w-xs text-[#94754a]" />

            <h2 className="font-display text-3xl sm:text-4xl text-[#392824] font-normal my-2">
              {lang === "bn" ? "সবিনয় আমন্ত্রণ পত্র" : "Please Join Us in Moyna"}
            </h2>
          </div>

          {/* Letter Body */}
          <div className="mt-8 space-y-5 text-center sm:text-left text-[#392824] text-base sm:text-lg leading-relaxed">
            <p className="font-bengali text-justify sm:text-center text-[#2a0509] leading-loose">
              {lang === "bn"
                ? "মহাশয় / মহাশয়া, পরম করুণাময়ের কৃপায় আগামী ২৬শে অগ্রহায়ণ ১৪৩৩, রবিবার (ইং ১৩ই ডিসেম্বর ২০২৬) আমাদের আদরের কন্যা অনামিকা এবং পরম স্নেহের শুভদীপ-এর শুভ বিবাহ অনুষ্ঠান অনুষ্ঠিত হইবে।"
                : "Together with our families, we joyfully invite you to the sacred union of Anamika and Subhadip on Sunday, 13 December 2026."}
            </p>

            <p className="font-serif italic text-justify sm:text-center text-[#591c26] text-lg sm:text-xl leading-relaxed">
              {lang === "bn"
                ? "আমাদের আনন্দের এই বিশেষ দিনে আপনাদের শুভাগমন ও নবদম্পতির জন্য পরম আন্তরিক আশীর্বাদ একান্তভাবে প্রার্থনা করি।"
                : "From the auspicious morning touch of turmeric to the evening Vedic vows and royal banquet, we would be deeply honoured by your presence."}
            </p>

            <div className="pt-4 text-center">
              <p className="font-bengali text-base sm:text-lg font-medium text-[#7a2230]">
                {WEDDING_DATA.invitationMessage.blessingBn}
              </p>
              <p className="font-serif italic text-sm text-[#7a2230]/85 mt-1">
                {WEDDING_DATA.invitationMessage.blessingEn}
              </p>
            </div>
          </div>

          {/* Signatures */}
          <div className="mt-12 pt-8 border-t border-[#dfbe83]/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#94754a] font-sans font-semibold">
                {lang === "bn" ? "নম্র নিবেদন" : "Cordially Invited By"}
              </p>
              <p className="font-serif text-base text-[#392824] font-medium mt-1">
                {lang === "bn" ? "কপাট ও ভূঞ্যা পরিবারবর্গ" : "Kapat & Bhunya Families"}
              </p>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-xs uppercase tracking-widest text-[#94754a] font-sans font-semibold">
                {lang === "bn" ? "প্রণয়যুগল" : "With Love"}
              </p>
              <p className="font-display text-2xl text-[#591c26] font-normal mt-0.5">
                {lang === "bn" ? "অনামিকা ও শুভদীপ" : "Anamika & Subhadip"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
