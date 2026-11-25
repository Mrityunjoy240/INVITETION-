"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 1. Exact Letter-by-Letter Blur & Shimmer Reveal from Royal Heirloom
export const AnimatedNameReveal: React.FC<{
  name: string;
  isTriggered: boolean;
  delay?: number;
  fontSizeClass?: string;
}> = ({
  name,
  isTriggered,
  delay = 0.2,
  fontSizeClass = "text-[48px] sm:text-[60px] md:text-[76px]",
}) => {
  const letters = useMemo(() => Array.from(String(name || "")), [name]);
  const [shimmerReady, setShimmerReady] = useState(false);

  useEffect(() => {
    if (!isTriggered) return;
    const timeout = setTimeout(() => {
      setShimmerReady(true);
    }, (delay + letters.length * 0.14 + 2) * 1000);
    return () => {
      clearTimeout(timeout);
      setShimmerReady(false);
    };
  }, [isTriggered, delay, letters.length]);

  return (
    <div className="relative inline-flex items-center justify-center select-none overflow-visible px-2 py-4 -my-4">
      <span className="relative z-10 flex items-center justify-center overflow-visible">
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 22, scale: 0.82, filter: "blur(8px)" }}
            animate={
              isTriggered
                ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, y: 22, scale: 0.82, filter: "blur(8px)" }
            }
            transition={{
              duration: 3.2,
              delay: delay + index * 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`font-['Allura','Alex_Brush',cursive] ${fontSizeClass} leading-[1.3] inline-block font-normal overflow-visible`}
            style={{
              display: "inline-block",
              whiteSpace: char === " " ? "pre" : "normal",
              color: "#4A2810",
              textShadow: "0 1px 1px rgba(255,255,255,0.6)",
              filter: "drop-shadow(0px 1px 2px rgba(80, 40, 15, 0.25))",
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>

      {shimmerReady && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundPosition: ["200% center", "-200% center"],
          }}
          transition={{
            opacity: { duration: 1 },
            backgroundPosition: { repeat: Infinity, duration: 7.5, ease: "easeInOut", repeatDelay: 3 },
          }}
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none z-20 flex items-center justify-center font-['Allura','Alex_Brush',cursive] ${fontSizeClass} leading-[1.3] overflow-visible select-none`}
          style={{
            background:
              "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.9) 47%, rgba(255,230,150,0.98) 50%, rgba(255,255,255,0.9) 53%, transparent 75%)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {name}
        </motion.span>
      )}
    </div>
  );
};

// 2. Smooth Section Motion Wrapper with Viewport Trigger
export const FadeUpItem: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 22, filter: "blur(3px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// 3. Flying Save-The-Date Airplane Animation
export const FlyingAirplane: React.FC = () => (
  <div className="absolute top-0 left-0 right-0 h-[80svh] z-40 pointer-events-none overflow-hidden select-none">
    <motion.div
      initial={{ x: "-240px", y: "50svh" }}
      animate={{ x: ["-240px", "100vw"], y: ["50svh", "10svh"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 w-[200px] drop-shadow-[0_4px_10px_rgba(70,35,15,0.3)] select-none"
    >
      <Image
        src="/assets/aeroplane-savethedate.webp"
        alt="Save the Date Aeroplane"
        width={200}
        height={64}
        className="w-full h-auto object-contain pointer-events-none transform -rotate-12"
      />
    </motion.div>
  </div>
);

// 4. Fixed Mechanical Sliding Receipt Story Ticket
// Outer container stays stationary so whileInView reliably triggers!
const receiptVariants = {
  hidden: { y: "-100%" },
  visible: {
    y: ["-100%", "-82%", "-82%", "-64%", "-64%", "-46%", "-46%", "-28%", "-28%", "-12%", "-12%", "0%"],
    transition: {
      duration: 3.4,
      ease: "linear" as const,
      times: [0, 0.08, 0.18, 0.26, 0.36, 0.44, 0.54, 0.62, 0.72, 0.8, 0.9, 1],
    },
  },
};

export const MechanicalReceiptSlide: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="relative z-20 w-full max-w-[310px] -mt-[14px] overflow-hidden"
    style={{ minHeight: "420px" }}
  >
    <motion.div
      variants={receiptVariants}
      className="w-full flex flex-col drop-shadow-[0_12px_20px_rgba(40,20,10,0.22)]"
    >
      {children}
    </motion.div>
  </motion.div>
);
