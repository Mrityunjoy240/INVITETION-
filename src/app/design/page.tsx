import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, BookOpen, Palette, Compass, Layers } from "lucide-react";
import { BengaliAlpanaDivider } from "@/components/DecorativeIcons";

export const metadata = {
  title: "Design Folio & Architecture · Anamika & Subhadip Wedding",
  description: "Creative direction, typography philosophy, and design system notes for Anamika & Subhadip's bespoke wedding experience.",
};

export default function DesignFolioPage() {
  return (
    <main className="min-h-screen bg-[#180306] text-[#faf5eb] py-16 px-4 sm:px-6 relative selection:bg-[#dfbe83] selection:text-[#180306]">
      {/* Back button */}
      <div className="max-w-4xl mx-auto mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#dfbe83]/40 bg-[#2a0509]/80 text-[#dfbe83] hover:text-[#faf5eb] hover:bg-[#dfbe83]/20 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Wedding Invitation</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto space-y-12">
        {/* Title Header */}
        <header className="ornate-card rounded-2xl p-8 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfbe83] mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Creative Direction &amp; Architectural Folio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl text-[#faf5eb] font-normal my-2">
            The Moyna Heritage Folio
          </h1>

          <BengaliAlpanaDivider className="my-4 max-w-xs" />

          <p className="font-serif italic text-lg sm:text-xl text-[#mute] max-w-xl mx-auto">
            A bespoke digital evolution of the printed wedding invitation for Anamika &amp; Subhadip.
          </p>
        </header>

        {/* 1. Creative Philosophy */}
        <section className="ornate-card rounded-2xl p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-3 text-[#dfbe83]">
            <Compass className="w-5 h-5" />
            <h2 className="font-display text-2xl sm:text-3xl font-normal">I. The Creative Philosophy</h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-[#faf5eb]/85">
            Rather than adopting generic Western pastel wedding templates, this experience draws directly from the physical red and gold Bengali print invitation and the pastoral topography of Garhmoyna, Purba Medinipur.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-[#faf5eb]/85">
            The experience unfolds like a cinematic narrative: the opening is anchored by an interactive wax-seal envelope, yielding to warm ivory parchment, hand-tinted copperplate engraving aesthetics, and live bilingual typography honoring Bengali customs.
          </p>
        </section>

        {/* 2. Color Palette & Materiality */}
        <section className="ornate-card rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3 text-[#dfbe83]">
            <Palette className="w-5 h-5" />
            <h2 className="font-display text-2xl sm:text-3xl font-normal">II. Color Palette &amp; Materials</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-[#dfbe83]/30 bg-[#591c26] text-center">
              <div className="w-full h-12 rounded-lg bg-[#591c26] border border-[#dfbe83]/40 mb-2 shadow" />
              <p className="font-serif text-sm font-semibold text-[#faf5eb]">Crimson Lac (#591C26)</p>
              <p className="text-[11px] text-[#dfbe83]/80">Sacred vermilion &amp; silk</p>
            </div>

            <div className="p-4 rounded-xl border border-[#dfbe83]/30 bg-[#2a0509] text-center">
              <div className="w-full h-12 rounded-lg bg-[#2a0509] border border-[#dfbe83]/40 mb-2 shadow" />
              <p className="font-serif text-sm font-semibold text-[#faf5eb]">Deep Maroon (#2A0509)</p>
              <p className="text-[11px] text-[#dfbe83]/80">Atmospheric nocturnal base</p>
            </div>

            <div className="p-4 rounded-xl border border-[#dfbe83]/30 bg-[#3a0b12] text-center">
              <div className="w-full h-12 rounded-lg bg-[#dfbe83] border border-[#dfbe83]/40 mb-2 shadow" />
              <p className="font-serif text-sm font-semibold text-[#dfbe83]">Antique Gold (#DFBE83)</p>
              <p className="text-[11px] text-[#faf5eb]/80">Zari threads &amp; foil print</p>
            </div>

            <div className="p-4 rounded-xl border border-[#dfbe83]/30 bg-[#3a0b12] text-center">
              <div className="w-full h-12 rounded-lg bg-[#faf5eb] border border-[#dfbe83]/40 mb-2 shadow" />
              <p className="font-serif text-sm font-semibold text-[#faf5eb]">Warm Ivory (#FAF5EB)</p>
              <p className="text-[11px] text-[#dfbe83]/80">Handmade cotton letter</p>
            </div>
          </div>
        </section>

        {/* 3. Typography Hierarchy */}
        <section className="ornate-card rounded-2xl p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-3 text-[#dfbe83]">
            <Layers className="w-5 h-5" />
            <h2 className="font-display text-2xl sm:text-3xl font-normal">III. Typography System</h2>
          </div>
          <div className="space-y-4">
            <div className="border-b border-[#dfbe83]/20 pb-3">
              <span className="text-xs uppercase tracking-wider text-[#dfbe83] font-semibold">Display English Font</span>
              <p className="font-display text-2xl text-[#faf5eb]">Cormorant Garamond Regular &amp; Italic</p>
              <p className="text-xs text-[#mute]">Conveys classical majesty, editorial balance, and poetic grace for names and titles.</p>
            </div>

            <div className="border-b border-[#dfbe83]/20 pb-3">
              <span className="text-xs uppercase tracking-wider text-[#dfbe83] font-semibold">Display Bengali Font</span>
              <p className="font-bengali text-2xl text-[#faf5eb]">Noto Serif Bengali &amp; Tiro Bangla</p>
              <p className="text-xs text-[#mute]">Provides authentic calligraphic curves for sacred Sanskrit invocations and Bengali invitations.</p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#dfbe83] font-semibold">Functional Body Font</span>
              <p className="font-sans text-base text-[#faf5eb]">Modern Clean System Sans-Serif</p>
              <p className="text-xs text-[#mute]">Guarantees instant legibility on all mobile screens for dates, timings, venues, and RSVP.</p>
            </div>
          </div>
        </section>

        {/* 4. Motion Storyboard & Accessibility */}
        <section className="ornate-card rounded-2xl p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-3 text-[#dfbe83]">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-display text-2xl sm:text-3xl font-normal">IV. Motion Score &amp; Accessibility</h2>
          </div>
          <ul className="list-disc list-inside text-sm sm:text-base text-[#faf5eb]/85 space-y-2">
            <li><strong>The Wax Seal Entrance:</strong> Simulates breaking a physical royal wax monogram seal accompanied by delicate golden petal bursts.</li>
            <li><strong>Diya Illumination:</strong> Interactive ceremonial diyas under each celebration stage provide meaningful tactile feedback.</li>
            <li><strong>Reduced Motion Compliance:</strong> When prefers-reduced-motion is detected or when entering directly, animations gracefully settle into their clean, final states.</li>
            <li><strong>Audio Experience:</strong> Pure client-side synthetic Tanpura/drone harmonics initialized strictly upon user interaction, with no forced autoplay.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
