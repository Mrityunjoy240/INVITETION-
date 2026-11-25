"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CoverOpener } from "@/components/CoverOpener";
import { RoyalHeirloomTitle, FallingPetals } from "@/components/ExactHeirloomParts";
import {
  AnimatedNameReveal,
  FadeUpItem,
  FlyingAirplane,
  MechanicalReceiptSlide,
} from "@/components/ExactMotionComponents";
import { Volume2, VolumeX, MapPin, Calendar, Navigation, ExternalLink, Download, Sparkles } from "lucide-react";

// Handcrafted Royal Heirloom Ceremony Medallions
const CeremonyMedallion: React.FC<{ id: string }> = ({ id }) => {
  if (id === "haldi") {
    return (
      <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm" fill="none">
        <circle cx="40" cy="40" r="37" fill="#FDF7EC" stroke="#8C5D38" strokeWidth="1.2" />
        <circle cx="40" cy="40" r="33" stroke="#C99863" strokeWidth="0.7" strokeDasharray="3 2" />
        {/* Brass Kalash & Turmeric / Marigold */}
        <path d="M40 22 C44 28 53 32 53 47 C53 58 27 58 27 47 C27 32 36 28 40 22 Z" fill="#D97706" fillOpacity="0.22" stroke="#7A4B24" strokeWidth="1.3" />
        <ellipse cx="40" cy="27" rx="9" ry="2.5" fill="#C99863" stroke="#7A4B24" strokeWidth="1" />
        <path d="M31 24 Q40 16 49 24" stroke="#6B401D" strokeWidth="1.4" />
        <circle cx="40" cy="18" r="2.2" fill="#D97706" />
        {/* Marigold bloom */}
        <circle cx="40" cy="45" r="7" fill="#F59E0B" fillOpacity="0.7" stroke="#92400E" strokeWidth="0.9" />
        <circle cx="40" cy="45" r="3" fill="#B45309" />
      </svg>
    );
  }
  if (id === "lagna") {
    return (
      <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm" fill="none">
        <circle cx="40" cy="40" r="37" fill="#FDF7EC" stroke="#8C5D38" strokeWidth="1.2" />
        <circle cx="40" cy="40" r="33" stroke="#C99863" strokeWidth="0.7" strokeDasharray="3 2" />
        {/* Shola Topor Crown */}
        <polygon points="40,15 51,38 29,38" fill="#FAF5EB" stroke="#7A4B24" strokeWidth="1.2" />
        <line x1="40" y1="11" x2="40" y2="15" stroke="#8C5D38" strokeWidth="1.5" />
        <circle cx="40" cy="10" r="2" fill="#8C5D38" />
        {/* Sacred Havan Kund & Flame */}
        <path d="M23 61 L28 48 L52 48 L57 61 Z" fill="#8B1A1A" fillOpacity="0.22" stroke="#7A4B24" strokeWidth="1.2" />
        <path d="M40 36 Q47 45 40 50 Q33 45 40 36 Z" fill="#EA580C" fillOpacity="0.85" />
        <path d="M40 40 Q43 45 40 48 Q37 45 40 40 Z" fill="#FDE047" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16 drop-shadow-sm" fill="none">
      <circle cx="40" cy="40" r="37" fill="#FDF7EC" stroke="#8C5D38" strokeWidth="1.2" />
      <circle cx="40" cy="40" r="33" stroke="#C99863" strokeWidth="0.7" strokeDasharray="3 2" />
      {/* Royal Brass Thali */}
      <circle cx="40" cy="42" r="21" fill="#C99863" fillOpacity="0.18" stroke="#7A4B24" strokeWidth="1.3" />
      <circle cx="40" cy="42" r="17" stroke="#8C5D38" strokeWidth="0.7" strokeDasharray="2 2" />
      <circle cx="32" cy="36" r="4.5" fill="#D9C2A7" fillOpacity="0.5" stroke="#7A4B24" strokeWidth="0.9" />
      <circle cx="48" cy="36" r="4.5" fill="#D9C2A7" fillOpacity="0.5" stroke="#7A4B24" strokeWidth="0.9" />
      <circle cx="40" cy="49" r="5" fill="#D9C2A7" fillOpacity="0.5" stroke="#7A4B24" strokeWidth="0.9" />
    </svg>
  );
};

// Delicate Gold Corner Flourish for Cards
const CardCorner: React.FC<{ pos: "tl" | "tr" | "bl" | "br" }> = ({ pos }) => {
  const cls =
    pos === "tl"
      ? "top-2 left-2"
      : pos === "tr"
      ? "top-2 right-2 scale-x-[-1]"
      : pos === "bl"
      ? "bottom-2 left-2 scale-y-[-1]"
      : "bottom-2 right-2 scale-[-1]";
  return (
    <svg viewBox="0 0 32 32" className={`absolute ${cls} w-6 h-6 text-[#8C5D38]/45 pointer-events-none`} fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M2 2 L18 2 M2 2 L2 18" />
      <path d="M4 4 Q12 4 14 14 Q4 12 4 4 Z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
};

export default function RoyalHeirloomPage() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-12-13T16:50:00+05:30").getTime();
    const updateCountdown = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleAudio = () => {
    if (!isPlayingAudio) {
      try {
        if (!audioContextRef.current) {
          const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new AudioContextClass();
          audioContextRef.current = ctx;

          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();
          gainNodeRef.current = gain;

          osc1.type = "sine";
          osc1.frequency.setValueAtTime(146.83, ctx.currentTime);
          osc2.type = "triangle";
          osc2.frequency.setValueAtTime(220.0, ctx.currentTime);

          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 1.5);

          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(ctx.destination);

          osc1.start();
          osc2.start();
        } else if (audioContextRef.current.state === "suspended") {
          audioContextRef.current.resume();
        }

        if (gainNodeRef.current && audioContextRef.current) {
          gainNodeRef.current.gain.setValueAtTime(0.001, audioContextRef.current.currentTime);
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.05, audioContextRef.current.currentTime + 1);
        }
        setIsPlayingAudio(true);
      } catch (err) {
        console.warn("Audio init prevented:", err);
      }
    } else {
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioContextRef.current.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 0.4);
      }
      setIsPlayingAudio(false);
    }
  };

  const scheduleEvents = [
    {
      id: "haldi",
      bengali: "গায়ে হলুদ",
      title: "Gaye Holud",
      subtitle: "Turmeric Ceremony",
      dateStr: "Sunday, 13 Dec 2026",
      time: "12:03 PM – 02:54 PM",
      venue: "Courtyard & Lawn",
      dressCode: "Traditional Yellow & Festive",
      desc: "Sacred anointing with turmeric paste, accompanied by folk melodies and family blessings.",
      icsUrl: "/calendars/haldi.ics",
      gCalUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Gaye+Holud+%C2%B7+Anamika+%26+Subhadip&dates=20261213T063300Z/20261213T092400Z&location=Kumudini+Guest+House%2C+Garhmoyna%2C+Moyna&details=Gaye+Holud+ceremony.",
    },
    {
      id: "lagna",
      bengali: "বিবাহ লগ্ন",
      title: "Bibaho Lagna",
      subtitle: "Sacred Wedding Ceremony",
      dateStr: "Sunday, 13 Dec 2026",
      time: "04:50 PM onwards",
      venue: "Grand Mandap",
      dressCode: "Royal Traditional Bengali Wear",
      desc: "Saat Paak, Shubhodrishti, Mala Bodol & Vedic vows around the consecrated fire.",
      icsUrl: "/calendars/lagna.ics",
      gCalUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bibaho+Lagna+%C2%B7+Anamika+%26+Subhadip&dates=20261213T112000Z/20261213T183000Z&location=Kumudini+Guest+House%2C+Garhmoyna%2C+Moyna&details=Wedding+Ceremony.",
    },
    {
      id: "bhoj",
      bengali: "প্রীতিভোজ",
      title: "Pritibhoj",
      subtitle: "Grand Wedding Feast",
      dateStr: "Sunday, 13 Dec 2026",
      time: "07:00 PM onwards",
      venue: "Banquet Hall & Pavilion",
      dressCode: "Ethnic Elegance / Formals",
      desc: "A sumptuous evening banquet celebrating the newlywed couple with authentic Bengali hospitality.",
      icsUrl: "/calendars/bhoj.ics",
      gCalUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pritibhoj+%C2%B7+Anamika+%26+Subhadip&dates=20261213T133000Z/20261213T173000Z&location=Kumudini+Guest+House%2C+Garhmoyna%2C+Moyna&details=Grand+Wedding+Feast.",
    },
  ];

  const calendarDays = [
    { day: 29, isCurrent: false, isTarget: false },
    { day: 30, isCurrent: false, isTarget: false },
    { day: 1, isCurrent: true, isTarget: false },
    { day: 2, isCurrent: true, isTarget: false },
    { day: 3, isCurrent: true, isTarget: false },
    { day: 4, isCurrent: true, isTarget: false },
    { day: 5, isCurrent: true, isTarget: false },
    { day: 6, isCurrent: true, isTarget: false },
    { day: 7, isCurrent: true, isTarget: false },
    { day: 8, isCurrent: true, isTarget: false },
    { day: 9, isCurrent: true, isTarget: false },
    { day: 10, isCurrent: true, isTarget: false },
    { day: 11, isCurrent: true, isTarget: false },
    { day: 12, isCurrent: true, isTarget: false },
    { day: 13, isCurrent: true, isTarget: true },
    { day: 14, isCurrent: true, isTarget: false },
    { day: 15, isCurrent: true, isTarget: false },
    { day: 16, isCurrent: true, isTarget: false },
    { day: 17, isCurrent: true, isTarget: false },
    { day: 18, isCurrent: true, isTarget: false },
    { day: 19, isCurrent: true, isTarget: false },
    { day: 20, isCurrent: true, isTarget: false },
    { day: 21, isCurrent: true, isTarget: false },
    { day: 22, isCurrent: true, isTarget: false },
    { day: 23, isCurrent: true, isTarget: false },
    { day: 24, isCurrent: true, isTarget: false },
    { day: 25, isCurrent: true, isTarget: false },
    { day: 26, isCurrent: true, isTarget: false },
    { day: 27, isCurrent: true, isTarget: false },
    { day: 28, isCurrent: true, isTarget: false },
    { day: 29, isCurrent: true, isTarget: false },
    { day: 30, isCurrent: true, isTarget: false },
    { day: 31, isCurrent: true, isTarget: false },
    { day: 1, isCurrent: false, isTarget: false },
    { day: 2, isCurrent: false, isTarget: false },
  ];

  return (
    <div className="relative min-h-screen bg-[#181311] text-[#4A3326] flex justify-center selection:bg-[#E8C29D]/40">
      {/* 1. Exact Video Curtain Opening Sequence */}
      <CoverOpener hasOpened={hasOpened} onOpen={() => setHasOpened(true)} />

      {/* Main Container: Unified warm ivory parchment #F4EDE2 so transitions never clash */}
      <main className="relative w-full max-w-[480px] md:max-w-[760px] mx-auto bg-[#F4EDE2] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
        {/* Floating Audio Button */}
        {hasOpened && (
          <button
            onClick={toggleAudio}
            className="fixed bottom-6 right-4 z-50 p-3 rounded-full bg-[#3A1F10]/85 backdrop-blur-sm text-[#F5D78E] border border-[#F5D78E]/30 shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all hover:scale-105 hover:bg-[#3A1F10]"
            aria-label="Toggle music"
          >
            {isPlayingAudio ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
          </button>
        )}

        {/* ============================================================
            SECTION 1: HERO
           ============================================================ */}
        <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#F4EDE2]">
          <motion.div
            initial={{ scale: 1.14, opacity: 0 }}
            animate={hasOpened ? { scale: 1, opacity: 1 } : { scale: 1.14, opacity: 0 }}
            transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: "url(/assets/hero-bg-mobile.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          {/* Smooth bottom feathering into next section */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-[#F4EDE2] z-[2] pointer-events-none" />

          {hasOpened && <FallingPetals />}

          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center pt-6 pb-20 px-6 text-[#4A3223]">
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={hasOpened ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 16, filter: "blur(6px)" }}
              transition={{ duration: 3.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-1.5 mb-2 md:mb-4"
            >
              <span className="font-['Cinzel'] text-[10px] sm:text-[12px] tracking-[0.25em] uppercase text-[#6B4330] font-semibold leading-tight text-center max-w-[280px]">
                WE CORDIALLY INVITE YOU TO
              </span>
              <span className="font-['Cinzel'] text-[10px] sm:text-[12px] tracking-[0.25em] uppercase text-[#6B4330] font-semibold leading-tight text-center max-w-[280px]">
                THE WEDDING CELEBRATION OF
              </span>
            </motion.div>

            <div className="flex flex-col items-center my-1 md:my-2">
              <AnimatedNameReveal name="Subhadip" isTriggered={hasOpened} delay={0.3} />
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={hasOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                transition={{ duration: 2.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Cinzel'] text-[10px] sm:text-[12px] tracking-[0.16em] uppercase text-[#6B4734] font-medium mt-0.5 text-center"
              >
                S/O SMT. TULSI RANI BHUNYA &amp; SRI RAMNARAYAN BHUNYA
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={hasOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              transition={{ duration: 3.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="my-1 text-center select-none"
            >
              <span className="font-['Allura','Alex_Brush',cursive] text-[30px] sm:text-[38px] md:text-[50px] leading-none text-[#6B401D] drop-shadow-[0px_1px_2px_rgba(90,45,15,0.25)]">
                &amp;
              </span>
            </motion.div>

            <div className="flex flex-col items-center my-1 md:my-2">
              <AnimatedNameReveal name="Anamika" isTriggered={hasOpened} delay={1.1} />
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={hasOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                transition={{ duration: 2.5, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Cinzel'] text-[10px] sm:text-[12px] tracking-[0.16em] uppercase text-[#6B4734] font-medium mt-0.5 text-center"
              >
                D/O SMT. TANUSHYAMA KAPAT &amp; SRI GOPAL CHANDRA KAPAT
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={hasOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 3.5, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center w-full max-w-[320px] md:max-w-[440px] my-4 px-2"
            >
              <div className="flex-1 flex flex-col justify-center">
                <div className="h-[0.8px] w-full bg-[#8C6044]/70 mb-1.5" />
                <span className="font-['Cinzel'] text-[10px] sm:text-[12px] tracking-[0.28em] uppercase text-[#6B4330] font-semibold text-center whitespace-nowrap">
                  DECEMBER
                </span>
                <div className="h-[0.8px] w-full bg-[#8C6044]/70 mt-1.5" />
              </div>

              <div className="px-3 sm:px-4">
                <span className="font-['Bodoni_Moda','Cinzel',serif] text-[28px] sm:text-[36px] md:text-[44px] leading-none font-bold text-[#4F301D] tracking-tight whitespace-nowrap">
                  13
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="h-[0.8px] w-full bg-[#8C6044]/70 mb-1.5" />
                <span className="font-['Cinzel'] text-[10px] sm:text-[12px] tracking-[0.28em] uppercase text-[#6B4330] font-semibold text-center whitespace-nowrap">
                  2026
                </span>
                <div className="h-[0.8px] w-full bg-[#8C6044]/70 mt-1.5" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
              animate={hasOpened ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 14, filter: "blur(4px)" }}
              transition={{ duration: 3.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1"
            >
              <span className="font-['Allura','Alex_Brush',cursive] text-[18px] sm:text-[22px] leading-none text-[#6E4424] drop-shadow-[0px_1px_1px_rgba(90,45,15,0.2)]">
                #AnamikaWedsSubhadip
              </span>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: OUR STORY (Fixed Mechanical Receipt Slide!)
           ============================================================ */}
        <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-start px-6 py-16 bg-[#F4EDE2] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-90"
            style={{
              backgroundImage: "url(/assets/our-photo.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Top & Bottom Soft Feather Masks so floral illustration never cuts abruptly */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#F4EDE2] to-transparent z-[1] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F4EDE2] to-transparent z-[1] pointer-events-none" />

          <FadeUpItem className="relative z-10 w-full flex flex-col items-center text-center pt-2 mb-4">
            <RoyalHeirloomTitle
              subtitle="HOW IT ALL BEGAN"
              title="OUR STORY"
              description="Two souls, one destiny, and a journey written in the stars."
            />
          </FadeUpItem>

          {/* Receipt Story Card Dispenser */}
          <div className="relative z-10 w-full flex flex-col items-center mt-4 flex-1 mb-10">
            {/* Wooden/Brass Dispenser Slot */}
            <div className="relative z-30 w-full max-w-[350px] bg-gradient-to-b from-[#8C5D38] to-[#6B401D] pt-3 pb-2.5 px-3 rounded-md shadow-[0_8px_16px_rgba(40,20,10,0.25)] border-t border-[#A87442]">
              <div className="relative w-full h-[14px] bg-[#150A03] rounded-sm shadow-[inset_0_5px_8px_rgba(0,0,0,0.95)]" />
              <div className="absolute top-[3px] left-0 right-0 text-center pointer-events-none">
                <span className="font-['Cinzel'] text-[6.5px] tracking-[0.4em] uppercase text-[#FDEBD0] font-bold opacity-70">
                  EST. 2026
                </span>
              </div>
            </div>

            <div className="relative z-30 w-full max-w-[310px] h-[10px] bg-gradient-to-b from-[#0a0502]/80 to-transparent pointer-events-none -mt-[2px]" />

            {/* Fixed Mechanical Slide Wrapper */}
            <MechanicalReceiptSlide>
              <div className="w-full bg-[#FAF5EB] border-x border-[#D8C7B0] flex flex-col items-center text-center px-6 pt-10 pb-6 shadow-[0_15px_30px_rgba(40,20,10,0.25)] relative">
                <div className="absolute top-4 opacity-5 pointer-events-none">
                  <span className="font-['Cinzel'] text-[50px] font-bold">❦</span>
                </div>

                <h3 className="font-mono text-[14px] sm:text-[15px] font-bold tracking-[0.1em] uppercase text-[#4A2810] mb-4 border-b-2 border-dotted border-[#C2B29D] pb-3 w-full">
                  ** THE BEGINNING **
                </h3>

                <p className="font-['Cormorant_Garamond'] text-[17px] sm:text-[19px] text-[#5A3825] leading-[1.6] italic mb-6 font-normal">
                  “From childhood memories in Medinipur to conversations that stretched into midnight hours, our hearts found an unbreakable bond. With the blessings of our elders and the laughter of our families, we step into a sacred lifelong journey.”
                </p>

                <div className="w-full border-t-2 border-dotted border-[#C2B29D] my-2" />

                <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.1em] uppercase text-[#7A5034] font-bold leading-loose w-full text-left">
                  <div className="flex justify-between">
                    <span>ITEM: LOVE</span>
                    <span>100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STATUS: FOREVER</span>
                    <span>CONFIRMED</span>
                  </div>
                </div>

                <div className="mt-6 text-[#8C5D38] font-['Allura','Alex_Brush',cursive] text-[28px] sm:text-[32px] leading-none text-right w-full pr-1">
                  Subhadip &amp; Anamika
                </div>
              </div>

              <svg className="w-full h-3 text-[#FAF5EB] -mt-[1px]" viewBox="0 0 100 5" preserveAspectRatio="none">
                <polygon fill="currentColor" points="0,0 100,0 95,5 90,0 85,5 80,0 75,5 70,0 65,5 60,0 55,5 50,0 45,5 40,0 35,5 30,0 25,5 20,0 15,5 10,0 5,5 0,0" />
              </svg>
            </MechanicalReceiptSlide>
          </div>
        </section>

        {/* ============================================================
            SECTION 3: THE CEREMONIES (Creative Royal Heirloom Arch Timeline)
           ============================================================ */}
        <section className="relative w-full py-16 px-5 bg-gradient-to-b from-[#F4EDE2] via-[#ECE0CE] to-[#F4EDE2] overflow-hidden">
          <FallingPetals />

          <FadeUpItem className="relative z-10 w-full flex flex-col items-center text-center mb-10">
            <RoyalHeirloomTitle
              subtitle="CELEBRATION TIMELINE"
              title="THE CEREMONIES"
              description="Join us as we celebrate sacred rituals and timeless celebrations."
            />
          </FadeUpItem>

          {/* Vertical Golden Timeline Thread */}
          <div className="relative z-10 w-full max-w-[380px] md:max-w-[540px] mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#8C5D38]/40 to-transparent pointer-events-none" />

            <div className="flex flex-col gap-10">
              {scheduleEvents.map((evt, idx) => (
                <FadeUpItem key={evt.id} delay={idx * 0.18}>
                  <div className="relative rounded-t-[110px] rounded-b-[24px] bg-gradient-to-b from-[#FAF5EB] to-[#F4E9D7] border border-[#C9AD88] p-6 pt-8 shadow-[0_12px_30px_rgba(80,40,20,0.12)] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(80,40,20,0.18)]">
                    {/* Inner Arch Frame */}
                    <div className="absolute inset-2.5 rounded-t-[102px] rounded-b-[18px] border border-[#8C5D38]/25 pointer-events-none" />
                    <CardCorner pos="bl" />
                    <CardCorner pos="br" />

                    {/* Handcrafted Medallion */}
                    <div className="relative z-10 mb-3">
                      <CeremonyMedallion id={evt.id} />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8C5D38]/12 border border-[#8C5D38]/25 text-[#8C5D38] font-['Cinzel'] text-[9.5px] uppercase font-bold tracking-[0.22em] mb-1.5">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Chapter 0{idx + 1}</span>
                    </div>

                    {/* Bengali + English Royal Heading */}
                    <p className="font-['Tiro_Bangla',serif] text-[17px] text-[#7A4B24] font-medium">
                      {evt.bengali}
                    </p>
                    <h3 className="font-['Cinzel_Decorative','Cinzel',serif] text-[21px] sm:text-[24px] font-bold text-[#4A2810] leading-snug">
                      {evt.title}
                    </h3>
                    <span className="font-['Cormorant_Garamond'] italic text-[14px] text-[#8C5D38] font-semibold">
                      {evt.subtitle}
                    </span>

                    {/* Time Pill */}
                    <div className="mt-3 px-4 py-1.5 rounded-full bg-[#4A2810] text-[#FDEBD0] font-['Cinzel'] text-[11px] tracking-[0.14em] font-semibold shadow-sm">
                      {evt.time}
                    </div>

                    <span className="font-['Cinzel'] text-[10px] tracking-[0.16em] uppercase text-[#8C5D38] font-semibold mt-2.5">
                      {evt.dateStr}
                    </span>

                    <div className="flex items-center gap-1 text-xs text-[#6B401D] font-['Cormorant_Garamond'] italic font-semibold mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8C5D38]" />
                      <span>{evt.venue} · Kumudini Guest House</span>
                    </div>

                    <div className="w-full border-t border-[#8C6044]/20 pt-3 mt-3">
                      <span className="font-['Cinzel'] text-[9px] uppercase tracking-widest text-[#6B401D] font-bold">
                        Attire: {evt.dressCode}
                      </span>
                      <p className="font-['Cormorant_Garamond'] italic text-[13.5px] text-[#5A3825] mt-1 leading-relaxed px-2">
                        {evt.desc}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2.5 relative z-10">
                      <a
                        href={evt.gCalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8C5329] to-[#6B3D1A] text-[#FDEBD0] font-['Cinzel'] text-[9.5px] uppercase tracking-wider font-bold hover:shadow-md transition-all inline-flex items-center gap-1"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Google Cal</span>
                      </a>
                      <a
                        href={evt.icsUrl}
                        download
                        className="px-3.5 py-1.5 rounded-full border border-[#8C5329]/50 text-[#8C5329] font-['Cinzel'] text-[9.5px] uppercase tracking-wider font-bold hover:bg-[#8C5329]/10 transition-colors inline-flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        <span>.ICS</span>
                      </a>
                    </div>
                  </div>
                </FadeUpItem>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 4: OUR VENUE (Seamless Feathering)
           ============================================================ */}
        <section className="relative w-full min-h-[100svh] flex flex-col px-6 pt-16 pb-16 bg-[#F4EDE2] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: "url(/assets/hotel-bg.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#F4EDE2] to-transparent z-[1] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F4EDE2] to-transparent z-[1] pointer-events-none" />

          <FadeUpItem className="relative z-10 w-full flex flex-col items-center text-center pt-2 mb-4">
            <RoyalHeirloomTitle
              subtitle="WHERE WE UNITE"
              title="OUR VENUE"
              description="An enclave of timeless serenity where our sacred vows will be celebrated."
            />
          </FadeUpItem>

          <FadeUpItem className="relative z-10 w-full max-w-[340px] md:max-w-[440px] mx-auto flex flex-col items-center text-center mt-2 bg-[#FAF5EB]/92 backdrop-blur-md rounded-2xl p-6 border border-[#CBB89D] shadow-[0_15px_35px_rgba(70,35,15,0.16)]">
            <span className="font-['Cinzel'] text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#8C5D38] font-bold">
              CELEBRATION VENUE
            </span>

            <h3 className="font-['Cinzel_Decorative','Cinzel',serif] text-[22px] sm:text-[26px] font-bold text-[#4A2810] mt-1 mb-1 select-none">
              Kumudini Guest House
            </h3>

            <div className="h-[0.8px] w-24 bg-[#8C5D38]/50 my-1.5" />

            <div className="flex flex-col items-center justify-center my-1.5 px-3 py-1 bg-[#8C5D38]/10 rounded-md border border-[#8C5D38]/30">
              <p className="font-['Cinzel'] text-[11px] sm:text-[12px] tracking-widest uppercase text-[#8C5D38] font-semibold text-center leading-snug">
                SUNDAY, 13 DECEMBER 2026 · 4:50 PM ONWARDS
              </p>
            </div>

            <p className="font-['Cinzel'] text-[12px] sm:text-[13px] tracking-wider uppercase text-[#683C1A] leading-relaxed max-w-[280px] font-medium mt-1">
              Jogalbari, Garhmoyna, Moyna, Purba Medinipur, West Bengal, India
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kumudini+Guest+House+Garhmoyna+Moyna+Purba+Medinipur"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 px-8 py-2.5 rounded-full bg-gradient-to-r from-[#8C5329] to-[#6B3D1A] text-[#FDEBD0] font-['Cinzel'] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </FadeUpItem>
        </section>

        {/* ============================================================
            SECTION 5: THE DATE & INTEGRATED COUNTDOWN
            (Removed cluttered separate countdown slide; clean readable typography)
           ============================================================ */}
        <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center px-5 py-16 bg-gradient-to-b from-[#F4EDE2] via-[#F6EBD8] to-[#F4EDE2] overflow-hidden">
          <FlyingAirplane />

          <FadeUpItem className="relative z-10 w-full flex flex-col items-center text-center mb-6">
            <RoyalHeirloomTitle
              subtitle="MARK YOUR CALENDAR"
              title="THE DATE"
              description="Save the auspicious date and celebrate our sacred matrimony."
            />
          </FadeUpItem>

          {/* Calendar Card */}
          <FadeUpItem className="relative z-10 w-full max-w-[360px] bg-[#FAF5EB]/95 backdrop-blur-md border border-[#CBB89D] rounded-[22px] p-6 shadow-[0_20px_50px_rgba(90,50,20,0.12)] flex flex-col items-center text-center">
            <span className="font-['Cinzel'] text-[11px] tracking-[0.28em] uppercase text-[#8C5D38] font-bold mb-3">
              DECEMBER 2026
            </span>

            <div className="grid grid-cols-7 w-full gap-1 mb-2 text-center text-[#6B401D] font-['Cinzel'] text-[11px] sm:text-[12px] font-bold tracking-wider">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 w-full gap-1 text-center">
              {calendarDays.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-center py-1.5 h-8">
                  {item.isTarget ? (
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#8C5329] text-[#FFF6E5] shadow-md"
                    >
                      <span className="font-['Bodoni_Moda','Cinzel',serif] text-[15px] font-bold leading-none z-10">
                        {item.day}
                      </span>
                      <span className="absolute -top-1 -right-1 text-[11px] text-[#8B1A1A] select-none">
                        ♥
                      </span>
                    </motion.div>
                  ) : (
                    <span
                      className={`font-['Bodoni_Moda','Cinzel',serif] text-[14px] leading-none ${
                        item.isCurrent ? "text-[#4A2810] font-semibold" : "text-[#C5B49D]/60 font-normal"
                      }`}
                    >
                      {item.day}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full border-t border-[#D5C6AC] mt-4 pt-3 flex items-center justify-between text-[#8C5D38] font-['Cinzel'] text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-bold">
              <span>DECEMBER</span>
              <span className="text-[#A87442]">✦</span>
              <span>2026</span>
            </div>
          </FadeUpItem>

          {/* Clean Integrated Countdown directly under the Calendar */}
          <FadeUpItem delay={0.15} className="relative z-10 w-full max-w-[360px] mt-8 flex flex-col items-center text-center">
            <span className="font-['Cinzel'] text-[10px] tracking-[0.28em] uppercase text-[#8C5D38] font-bold mb-3">
              COUNTING DOWN TO THE BIG DAY
            </span>

            <div className="grid grid-cols-4 gap-2.5 w-full">
              {[
                { val: timeLeft.days, label: "DAYS" },
                { val: timeLeft.hours, label: "HOURS" },
                { val: timeLeft.minutes, label: "MIN" },
                { val: timeLeft.seconds, label: "SEC" },
              ].map((unit, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-[#FAF5EB] border border-[#CBB89D] shadow-[0_6px_15px_rgba(90,50,20,0.08)]"
                >
                  <span className="font-['Cormorant_Garamond'] text-[30px] sm:text-[34px] font-semibold italic text-[#4A2810] leading-none">
                    {String(unit.val).padStart(2, "0")}
                  </span>
                  <span className="font-['Cinzel'] text-[8.5px] uppercase tracking-[0.18em] text-[#8C5D38] font-bold mt-1.5">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUpItem>
        </section>

        {/* ============================================================
            SECTION 6: LOVE & REGARDS (Seamless Feathering)
           ============================================================ */}
        <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center px-6 py-16 bg-[#F4EDE2] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: "url(/assets/thanks-regards.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#F4EDE2] to-transparent z-[1] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#361B0E]/20 to-transparent z-[1] pointer-events-none" />

          <FadeUpItem className="relative z-10 w-full flex flex-col items-center text-center max-w-[300px]">
            <RoyalHeirloomTitle title="LOVE & REGARDS" />
            <p className="font-['Cinzel'] text-[15px] sm:text-[17px] font-bold tracking-[0.25em] uppercase text-[#6B401D] leading-relaxed mt-4 whitespace-pre-line text-center">
              Kapat &amp; Bhunya{"\n"}Family
            </p>
          </FadeUpItem>
        </section>

        {/* ============================================================
            SECTION 7: FOOTER
           ============================================================ */}
        <footer className="w-full py-10 px-6 bg-[#361B0E] text-[#FDEBD0] text-center flex flex-col items-center">
          <span className="font-['Cinzel'] text-[11px] tracking-[0.25em] uppercase text-[#D5A876] font-bold mb-1">
            WITH LOVE &amp; GRATITUDE
          </span>
          <h4 className="font-['Cinzel_Decorative','Cinzel',serif] text-xl font-bold my-1">
            Anamika &amp; Subhadip
          </h4>
          <span className="font-['Allura','Alex_Brush',cursive] text-lg text-[#E8C29D]">
            #AnamikaWedsSubhadip
          </span>
          <div className="mt-6 text-[10px] tracking-widest text-[#D5A876]/60 font-mono">
            ROYAL HEIRLOOM EXPERIENCE · 13 DECEMBER 2026
          </div>
        </footer>
      </main>
    </div>
  );
}
