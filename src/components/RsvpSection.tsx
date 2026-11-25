"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BengaliAlpanaDivider } from "./DecorativeIcons";
import { Send, CheckCircle2, MessageSquare, Share2, Copy, Check } from "lucide-react";
import confetti from "canvas-confetti";

export const RsvpSection: React.FC = () => {
  const { lang } = useLanguage();
  const [guestName, setGuestName] = useState("");
  const [attendingCount, setAttendingCount] = useState("2");
  const [dietary, setDietary] = useState("all");
  const [warmWishes, setWarmWishes] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Generate authentic WhatsApp RSVP link
  const handleWhatsAppRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#dfbe83", "#f3d498", "#591c26"],
      });
    } catch {
      // ignore
    }

    const message = `*Wedding RSVP — Anamika & Subhadip (13 Dec 2026)*\n` +
      `Guest Name: ${guestName}\n` +
      `Attending: ${attendingCount} guest(s)\n` +
      `Dietary preference: ${dietary === "veg" ? "Pure Vegetarian" : "Traditional Feast (Non-Veg / Veg)"}\n` +
      (warmWishes ? `Wishes: "${warmWishes}"\n` : "") +
      `We look forward to celebrating together!`;

    // WhatsApp Web/App Universal Link
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const copyShareLink = () => {
    const url = typeof window !== "undefined" ? window.location.origin : "https://anamika-subhadip.wedding";
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const shareWhatsApp = () => {
    const url = typeof window !== "undefined" ? window.location.origin : "https://anamika-subhadip.wedding";
    const text = `শুভ বিবাহ: অনামিকা ও শুভদীপ, ১৩ই ডিসেম্বর ২০২৬। কুমুদিনী গেস্ট হাউস, গড়ময়না, ময়না। আপনাদের সাদর নিমন্ত্রণ: ${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="rsvp" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="ornate-card rounded-2xl p-6 sm:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#dfbe83] mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{lang === "bn" ? "উপস্থিতি নিশ্চিতকরণ ও শুভেচ্ছা" : "RSVP & Warm Wishes"}</span>
              <MessageSquare className="w-3.5 h-3.5" />
            </div>

            <h2 className="font-display text-3xl sm:text-5xl text-[#faf5eb] font-normal my-2">
              {lang === "bn" ? "আপনার শুভাগমন জানান" : "Will You Join Us?"}
            </h2>

            <BengaliAlpanaDivider className="my-3 max-w-xs" />

            <p className="font-serif italic text-base sm:text-lg text-[#mute] max-w-lg mx-auto">
              {lang === "bn"
                ? "আমাদের পারিবারিক মহা-উৎসবে আপনাদের উপস্থিতি ও আশীর্বাদ আমাদের পরম প্রাপ্তি"
                : "Please let us know if you can attend so we can arrange the warmest hospitality for you"}
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="py-8 px-6 text-center bg-[#591c26]/60 rounded-xl border border-[#dfbe83]/50 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#dfbe83] mx-auto mb-3" />
              <h3 className="font-display text-2xl text-[#faf5eb]">
                {lang === "bn" ? "অশেষ ধন্যবাদ!" : "Thank You Sincerely!"}
              </h3>
              <p className="font-sans text-sm text-[#mute] mt-2 max-w-md mx-auto">
                {lang === "bn"
                  ? "আপনার উপস্থিতি বার্তাটি হোয়াটসঅ্যাপে প্রেরণ করা হয়েছে। ১৩ই ডিসেম্বর আপনার শুভাগমনের অপেক্ষায় রইলাম।"
                  : "Your RSVP response is ready to share. We cannot wait to celebrate with you on 13 December 2026!"}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 rounded-full border border-[#dfbe83]/40 text-[#dfbe83] text-xs uppercase tracking-wider hover:bg-[#dfbe83]/15 transition-colors"
              >
                {lang === "bn" ? "আরেকটি প্রতিক্রিয়া দিন" : "Submit Another Response"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppRSVP} className="space-y-6 max-w-xl mx-auto">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#dfbe83] mb-2 font-sans">
                  {lang === "bn" ? "আপনার নাম (Guest Name)" : "Your Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder={lang === "bn" ? "যেমন: শ্রী সৌমেন চক্রবর্তী" : "e.g. Soumen Chakraborty"}
                  className="w-full px-4 py-3 rounded-xl bg-[#1e0307]/80 border border-[#dfbe83]/40 text-[#faf5eb] placeholder-[#dfbe83]/40 focus:outline-none focus:border-[#dfbe83] focus:ring-1 focus:ring-[#dfbe83] transition-all text-sm font-sans"
                />
              </div>

              {/* Number of attendees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#dfbe83] mb-2 font-sans">
                    {lang === "bn" ? "কতজন উপস্থিত থাকবেন" : "Number of Guests"}
                  </label>
                  <select
                    value={attendingCount}
                    onChange={(e) => setAttendingCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1e0307]/80 border border-[#dfbe83]/40 text-[#faf5eb] focus:outline-none focus:border-[#dfbe83] text-sm font-sans"
                  >
                    <option value="1">1 Person / একাকী</option>
                    <option value="2">2 Persons / দম্পতি</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Persons / সপরিবারে</option>
                  </select>
                </div>

                {/* Dietary preference */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#dfbe83] mb-2 font-sans">
                    {lang === "bn" ? "খাবারের পছন্দ" : "Meal Preference"}
                  </label>
                  <select
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1e0307]/80 border border-[#dfbe83]/40 text-[#faf5eb] focus:outline-none focus:border-[#dfbe83] text-sm font-sans"
                  >
                    <option value="all">Bengali Feast (Non-Veg & Veg)</option>
                    <option value="veg">Pure Vegetarian (নিরামিষ)</option>
                  </select>
                </div>
              </div>

              {/* Warm Wishes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#dfbe83] mb-2 font-sans">
                  {lang === "bn" ? "নবদম্পতির উদ্দেশ্যে আশীর্বাদ বা শুভবার্তা" : "Blessings or Message for Couple"}
                </label>
                <textarea
                  rows={3}
                  value={warmWishes}
                  onChange={(e) => setWarmWishes(e.target.value)}
                  placeholder={lang === "bn" ? "আপনার শুভকামনা এখানে লিখতে পারেন..." : "Share a heartfelt note for Anamika & Subhadip..."}
                  className="w-full px-4 py-3 rounded-xl bg-[#1e0307]/80 border border-[#dfbe83]/40 text-[#faf5eb] placeholder-[#dfbe83]/40 focus:outline-none focus:border-[#dfbe83] text-sm font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#dfbe83] via-[#f3d498] to-[#c29958] text-[#180306] font-sans font-semibold text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(223,190,131,0.6)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{lang === "bn" ? "হোয়াটসঅ্যাপে উপস্থিতি নিশ্চিত করুন" : "Confirm via WhatsApp"}</span>
              </button>
            </form>
          )}

          {/* Social Share wedding invitation */}
          <div className="mt-12 pt-8 border-t border-[#dfbe83]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#dfbe83]">
                {lang === "bn" ? "অন্যান্য আত্মীয়-স্বজনকে আমন্ত্রণ জানান" : "Share This Invitation"}
              </p>
              <p className="text-xs text-[#mute] mt-0.5">
                {lang === "bn" ? "হোয়াটসঅ্যাপ বা লিংকের মাধ্যমে শেয়ার করুন" : "Send invitation link to friends and relatives"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={shareWhatsApp}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={copyShareLink}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#dfbe83]/50 hover:bg-[#dfbe83]/15 text-[#dfbe83] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? (lang === "bn" ? "কপি হয়েছে!" : "Copied!") : (lang === "bn" ? "লিংক কপি" : "Copy Link")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
