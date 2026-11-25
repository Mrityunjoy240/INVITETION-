"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { RoyalFiligreeDivider, CornerFlourish } from "./RoyalHeirloomElements";
import { Users, Home, MapPin } from "lucide-react";
import { WEDDING_DATA, FamilySide, FamilyMember } from "@/data/wedding-data";

export const FamilySection: React.FC = () => {
  const { lang } = useLanguage();

  const renderSide = (side: FamilySide) => (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#2a060a] to-[#180205] border border-[#dfbe83]/40 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between">
      <CornerFlourish position="top-left" />
      <CornerFlourish position="top-right" />
      <CornerFlourish position="bottom-left" />
      <CornerFlourish position="bottom-right" />

      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-[#dfbe83]/15 border border-[#dfbe83]/30 text-[#dfbe83] text-xs font-semibold tracking-wider uppercase mb-3 font-sans">
          {lang === "bn" ? side.sideBn : side.sideEn}
        </div>

        <h3 className="font-bengali text-2xl sm:text-3xl text-[#faf5eb] font-medium">
          {lang === "bn" ? `${side.memberTypeBn}: ${side.personNameBn}` : `${side.memberTypeEn}: ${side.personNameEn}`}
        </h3>

        <div className="h-[1px] w-16 bg-[#dfbe83]/50 my-4" />

        <ul className="space-y-4 my-6">
          {side.members.map((member: FamilyMember, idx: number) => (
            <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#dfbe83]/10 pb-2">
              <span className="text-xs uppercase tracking-wider text-[#dfbe83]/80 font-sans font-semibold">
                {lang === "bn" ? member.relationBn : member.relationEn}
              </span>
              <span className="font-serif text-base sm:text-lg text-[#faf5eb] font-normal sm:text-right">
                {lang === "bn" ? member.nameBn : member.nameEn}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-[#dfbe83]/20 space-y-2 text-xs sm:text-sm text-[#mute]">
        {side.ancestralHomeBn && (
          <div className="flex items-start gap-2">
            <Home className="w-4 h-4 text-[#dfbe83] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#dfbe83]/80 font-semibold">
                {lang === "bn" ? "আদিবাড়ি: " : "Ancestral: "}
              </span>
              <span>{lang === "bn" ? side.ancestralHomeBn : side.ancestralHomeEn}</span>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-[#dfbe83] shrink-0 mt-0.5" />
          <div>
            <span className="text-[#dfbe83]/80 font-semibold">
              {lang === "bn" ? "বর্তমান নিবাস: " : "Present Residence: "}
            </span>
            <span>{lang === "bn" ? side.presentHomeBn : side.presentHomeEn}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="family" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfbe83] mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>{lang === "bn" ? "উভয় পরিবার ও শুভাকাঙ্ক্ষী" : "Families & Lineage"}</span>
            <Users className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-[#faf5eb] font-normal my-2">
            {lang === "bn" ? "পারিবারিক আশীর্বাদ ও ঐতিহ্য" : "With The Blessings of Our Families"}
          </h2>

          <RoyalFiligreeDivider className="my-3 max-w-xs" />

          <p className="font-serif italic text-base sm:text-lg text-[#mute] max-w-xl mx-auto">
            {lang === "bn"
              ? "পিতা-মাতার স্নেহধন্য আশীর্বাদে দুটি পরিবারের পবিত্র মিলন"
              : "Honoring parents, beloved elders, and enduring roots"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderSide(WEDDING_DATA.family.brideSide)}
          {renderSide(WEDDING_DATA.family.groomSide)}
        </div>
      </div>
    </section>
  );
};
