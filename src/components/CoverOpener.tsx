"use client";

import React, { useRef, useState } from "react";

interface CoverOpenerProps {
  hasOpened: boolean;
  onOpen: () => void;
}

export const CoverOpener: React.FC<CoverOpenerProps> = ({ hasOpened, onOpen }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpenedState, setIsOpenedState] = useState(false);

  const handleOpenClick = () => {
    if (isPlaying || hasOpened) return;
    setIsPlaying(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => {
          // Video plays the curtain/envelope reveal
        })
        .catch(() => {
          setIsOpenedState(true);
          onOpen();
        });
    } else {
      setIsOpenedState(true);
      onOpen();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const v = videoRef.current;
      if (v.duration && v.currentTime >= v.duration - 0.25) {
        setIsOpenedState(true);
        onOpen();
      }
    }
  };

  const handleEnded = () => {
    setIsOpenedState(true);
    onOpen();
  };

  if (hasOpened || isOpenedState) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#181311] overflow-hidden select-none">
      {/* Video element playing the exact Royal Heirloom opening animation */}
      <video
        ref={videoRef}
        src="/assets/cover-opening-video.MP4"
        poster="/assets/cover-first-frame.webp"
        playsInline
        muted
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="w-full h-full object-cover object-center"
      />

      {/* Tap to Open Curtain Overlay */}
      {!isPlaying && (
        <div
          onClick={handleOpenClick}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/30 backdrop-blur-[1px] cursor-pointer"
        >
          <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-[#ECE3D1]/90 border border-[#8C5D38] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-w-xs transition-transform duration-500 hover:scale-105 active:scale-95">
            <span className="font-['Cinzel'] text-[11px] tracking-[0.25em] uppercase text-[#6B401D] font-bold mb-1">
              THE ROYAL HEIRLOOM
            </span>
            <h1 className="font-['Cinzel_Decorative','Cinzel',serif] text-2xl font-bold text-[#4A2810] my-1">
              Anamika &amp; Subhadip
            </h1>
            <p className="font-['Cormorant_Garamond'] italic text-sm text-[#7A4B24] mb-4">
              Sunday, 13 December 2026
            </p>

            <button
              onClick={handleOpenClick}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8C5329] to-[#6B3D1A] text-[#FDEBD0] font-['Cinzel'] text-xs uppercase tracking-[0.2em] font-bold shadow-md hover:shadow-lg transition-all"
            >
              Open Invitation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
