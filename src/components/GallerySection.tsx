"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { WEDDING_DATA } from "@/data/wedding-data";
import { BengaliAlpanaDivider } from "./DecorativeIcons";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export const GallerySection: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % WEDDING_DATA.gallery.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + WEDDING_DATA.gallery.length) % WEDDING_DATA.gallery.length
    );
  };

  return (
    <section id="gallery" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfbe83] mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === "bn" ? "ছবির পাতা ও স্মৃতিকথা" : "Visual Album & Memories"}</span>
            <Camera className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-[#faf5eb] font-normal my-2">
            {lang === "bn" ? "মুহূর্ত ও পরম্পরা" : "Moments & Heritage"}
          </h2>

          <BengaliAlpanaDivider className="my-3 max-w-xs" />

          <p className="font-serif italic text-base sm:text-lg text-[#mute] max-w-xl mx-auto">
            {lang === "bn"
              ? "অনামিকা ও শুভদীপের সান্নিধ্য, পবিত্র নিমন্ত্রণপত্র ও বাঙালি ঐতিহ্যের অমূল্য ছবি"
              : "Featuring authentic couple portraits, the original handwritten invitation, and wedding motifs"}
          </p>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WEDDING_DATA.gallery.map((item, idx) => {
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#dfbe83]/30 bg-[#2a0509]/60 shadow-lg hover:border-[#dfbe83] transition-all duration-500 hover:-translate-y-1.5 ${
                  isFeatured ? "sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <Image
                    src={item.src}
                    alt={item.titleEn}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-108 filter saturate-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180306] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                  {/* Hover Icon Indicator */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-[#180306]/70 border border-[#dfbe83]/40 text-[#dfbe83] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption Information */}
                <div className="p-4 sm:p-5">
                  <div className="text-[11px] uppercase tracking-widest text-[#dfbe83]/80 font-sans font-semibold">
                    {item.category}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#faf5eb] font-normal mt-0.5 group-hover:text-[#dfbe83] transition-colors">
                    {lang === "bn" ? item.titleBn : item.titleEn}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#mute] mt-1 line-clamp-2">
                    {lang === "bn" ? item.captionBn : item.captionEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Modal Lightbox Viewer */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#180306]/80 border border-[#dfbe83]/40 text-[#dfbe83] hover:text-[#faf5eb] hover:bg-[#591c26] transition-colors"
            aria-label="Close photograph lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#180306]/80 border border-[#dfbe83]/40 text-[#dfbe83] hover:text-[#faf5eb] transition-colors"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#180306]/80 border border-[#dfbe83]/40 text-[#dfbe83] hover:text-[#faf5eb] transition-colors"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Center Content */}
          <div
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] max-h-[700px]">
              <Image
                src={WEDDING_DATA.gallery[selectedPhotoIndex].src}
                alt={WEDDING_DATA.gallery[selectedPhotoIndex].titleEn}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-center text-[#faf5eb] px-4 max-w-xl">
              <h4 className="font-display text-2xl text-[#dfbe83]">
                {lang === "bn"
                  ? WEDDING_DATA.gallery[selectedPhotoIndex].titleBn
                  : WEDDING_DATA.gallery[selectedPhotoIndex].titleEn}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#mute] mt-1">
                {lang === "bn"
                  ? WEDDING_DATA.gallery[selectedPhotoIndex].captionBn
                  : WEDDING_DATA.gallery[selectedPhotoIndex].captionEn}
              </p>
              <div className="text-[11px] text-[#dfbe83]/60 uppercase tracking-widest mt-2">
                {selectedPhotoIndex + 1} / {WEDDING_DATA.gallery.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
