import React, { useState } from 'react';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Sticker } from './Sticker';
import { audioEngine } from '../utils/audioEngine';

interface IntroScreenProps {
  onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [isEntering, setIsEntering] = useState<boolean>(false);

  const handleEnterClick = () => {
    audioEngine.playHeartSound();
    setIsEntering(true);

    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-retro-stars transition-all duration-700 ${
        isEntering ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Floating Pixel Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-2xl animate-gentle-bob">⭐</div>
        <div className="absolute top-20 right-16 text-3xl animate-bounce">💖</div>
        <div className="absolute bottom-16 left-20 text-2xl animate-pulse">🎀</div>
        <div className="absolute bottom-24 right-24 text-3xl animate-gentle-bob">✨</div>
        <div className="absolute top-1/2 left-8 text-xl animate-pulse">🌸</div>
        <div className="absolute top-1/3 right-10 text-xl animate-pulse">🍓</div>
      </div>

      {/* Retro 2000s Window Container */}
      <div className="relative w-full max-w-lg bg-[#fff8fb] border-3 border-[#1e1e24] rounded-2xl shadow-[8px_8px_0px_#1e1e24] overflow-hidden flex flex-col">
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white px-3.5 py-2 border-b-2 border-[#1e1e24] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="text-sm">🌐</span>
            <span className="font-pixel text-xs tracking-wider">
              CYWORLD://MAI-ANH.MINI-HOMEPAGE.COM
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-xs bg-white/90 border border-black/40 text-black font-bold text-[9px] flex items-center justify-center">
              _
            </span>
            <span className="w-3.5 h-3.5 rounded-xs bg-white/90 border border-black/40 text-black font-bold text-[9px] flex items-center justify-center">
              □
            </span>
            <span className="w-3.5 h-3.5 rounded-xs bg-rose-500 border border-black/50 text-white font-bold text-[9px] flex items-center justify-center">
              ✕
            </span>
          </div>
        </div>

        {/* Interior Hero Content */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden bg-gradient-to-b from-[#fff0f6] to-[#fdf2f8]">
          {/* Welcome Badge Pill */}
          <div className="flex items-center gap-2 bg-pink-100 border border-pink-300 px-3 py-1 rounded-full text-pink-700 font-pixel text-[11px] mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
            <span>AUTHENTIC 2000s CYWORLD EXPERIENCE</span>
          </div>

          {/* Nostalgic Profile Stamp Graphic */}
          <div className="relative my-2">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-amber-300 p-1 border-3 border-[#1e1e24] shadow-[4px_4px_0px_#1e1e24] flex items-center justify-center">
              <div className="w-full h-full rounded-xl bg-white flex flex-col items-center justify-center">
                <span className="text-3xl">👧🏻</span>
                <span className="font-pixel text-[8px] text-pink-600 font-bold mt-0.5">MAI ANH</span>
              </div>
            </div>
            {/* Sparkle Badges */}
            <div className="absolute -top-2 -right-3 text-lg select-none filter drop-shadow animate-bounce">
              ✨
            </div>
            <div className="absolute -bottom-2 -left-3 text-lg select-none filter drop-shadow animate-pulse">
              💖
            </div>
          </div>

          {/* Main Titles */}
          <div className="space-y-1 mt-3">
            <div className="font-pixel text-xs text-pink-500 font-bold uppercase tracking-widest">
              ☆ WELCOME TO ☆
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wide font-sans">
              NGUYỄN MAI ANH'S
            </h1>
            <div className="font-pixel text-sm sm:text-base text-rose-600 font-bold">
              MINI HOMEPAGE ♡
            </div>
            <p className="text-xs text-slate-600 font-sans italic pt-1">
              "since 2007 • Foreign Trade University (FTU) • Dance & Media"
            </p>
          </div>

          {/* Cute Sticker Row */}
          <div className="flex items-center gap-2 my-4 flex-wrap justify-center">
            <Sticker label="FTU 2025-2029" color="bg-yellow-200 border-yellow-400 text-yellow-950" rotate={-2} />
            <Sticker label="CYWORLD 1촌" color="bg-pink-200 border-pink-400 text-pink-950" rotate={3} />
            <Sticker label="MINI ROOM" color="bg-cyan-200 border-cyan-400 text-cyan-950" rotate={-1} />
          </div>

          {/* Big Action Button: ENTER MY WORLD */}
          <button
            type="button"
            onClick={handleEnterClick}
            disabled={isEntering}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white font-pixel text-sm tracking-wider border-3 border-[#1e1e24] shadow-[5px_5px_0px_#1e1e24] hover:shadow-[3px_3px_0px_#1e1e24] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 select-none cursor-pointer"
          >
            <span>ENTER MY WORLD ♡</span>
            <ArrowRight className="w-4 h-4 text-yellow-300" />
          </button>

          {/* Retro loading ticker */}
          <div className="mt-4 text-[10px] font-pixel text-slate-500 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>READY TO EXPLORE • FTU & DANCE & MEDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
