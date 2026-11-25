"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { WEDDING_DATA } from "@/data/wedding-data";
import { Clock, CalendarCheck, CalendarPlus } from "lucide-react";

export const CountdownSection: React.FC = () => {
  const { lang } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATA.date.isoDate).getTime();

    const calculateTime = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  const toBengaliNumber = (num: number) => {
    return String(num)
      .padStart(2, "0")
      .split("")
      .map((d) => (d >= "0" && d <= "9" ? bengaliNumerals[parseInt(d, 10)] : d))
      .join("");
  };

  const timeUnits = [
    {
      labelEn: "Days",
      labelBn: "দিন",
      value: timeLeft.days,
    },
    {
      labelEn: "Hours",
      labelBn: "ঘণ্টা",
      value: timeLeft.hours,
    },
    {
      labelEn: "Minutes",
      labelBn: "মিনিট",
      value: timeLeft.minutes,
    },
    {
      labelEn: "Seconds",
      labelBn: "সেকেন্ড",
      value: timeLeft.seconds,
    },
  ];

  return (
    <section id="countdown" className="py-16 sm:py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="ornate-card rounded-2xl p-6 sm:p-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dfbe83] mb-3">
            <Clock className="w-4 h-4" />
            <span>{lang === "bn" ? "শুভ মিলনের দিন গণনা" : "Counting Down to Forever"}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl text-[#faf5eb] font-normal mb-2">
            {lang === "bn" ? "শুভ পরিণয় লগ্ন সমুপস্থিত" : "Until We Say Our Vows"}
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-[#mute] max-w-lg mx-auto mb-8">
            {lang === "bn"
              ? "রবিবার, ১৩ই ডিসেম্বর ২০২৬ · শুভ মুহূর্তটির দিকে প্রতীক্ষার প্রতিটি পল"
              : "Sunday, 13 December 2026 · Awaiting every precious moment in Moyna"}
          </p>

          {timeLeft.isPast ? (
            <div className="py-8 px-6 bg-[#591c26]/60 rounded-xl border border-[#dfbe83]/50">
              <p className="font-display text-3xl text-[#dfbe83] font-normal">
                {lang === "bn" ? "শুভ বিবাহ সুসম্পন্ন" : "Happily Married!"}
              </p>
              <p className="text-sm text-[#faf5eb]/80 mt-2">
                {lang === "bn" ? "আপনাদের আন্তরিক আশীর্বাদের জন্য ধন্যবাদ।" : "Thank you for sharing your love and blessings."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {timeUnits.map((unit) => (
                <div
                  key={unit.labelEn}
                  className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-gradient-to-b from-[#3a070e]/80 to-[#1e0307]/90 border border-[#dfbe83]/30 shadow-inner group hover:border-[#dfbe83] transition-colors"
                >
                  <span className="font-display text-4xl sm:text-5xl font-light text-[#dfbe83] tracking-tight group-hover:scale-105 transition-transform">
                    {lang === "bn" ? toBengaliNumber(unit.value) : String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#faf5eb]/70 mt-2 font-sans">
                    {lang === "bn" ? unit.labelBn : unit.labelEn}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Quick Add to Calendar Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Anamika+weds+Subhadip&dates=20261213T112000Z/20261213T183000Z&location=Kumudini+Guest+House%2C+Hoglabari%2C+Garhmoyna%2C+Moyna%2C+Purba+Medinipur&details=Gaye+Holud+from+12%3A03+PM.+Wedding+ceremony+from+4%3A50+PM.+Feast+from+7%3A00+PM."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#dfbe83]/50 bg-[#dfbe83]/10 hover:bg-[#dfbe83] hover:text-[#180306] text-[#dfbe83] text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>{lang === "bn" ? "গুগল ক্যালেন্ডারে যোগ করুন" : "Add to Google Calendar"}</span>
            </a>

            <a
              href="/calendars/lagna.ics"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#dfbe83]/30 hover:border-[#dfbe83] text-[#faf5eb] hover:text-[#dfbe83] text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{lang === "bn" ? ".ICS ক্যালেন্ডার ডাউনলোড" : "Download .ICS Event"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
