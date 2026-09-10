import React, { useState } from 'react';
import { Sparkles, Monitor, Award, Heart, Flame, MessageSquare, BookOpen, GraduationCap } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface MiniRoomProps {
  onNavigate: (tab: string) => void;
}

export const MiniRoom: React.FC<MiniRoomProps> = ({ onNavigate }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [plushieBounces, setPlushieBounces] = useState<number>(0);
  const [plantWatered, setPlantWatered] = useState<boolean>(false);

  const handleItemClick = (tab: string, sound: () => void) => {
    sound();
    onNavigate(tab);
  };

  const handlePlushieClick = () => {
    audioEngine.playHeartSound();
    setPlushieBounces((prev) => prev + 1);
  };

  const handlePlantClick = () => {
    audioEngine.playClickSound();
    setPlantWatered(true);
    setTimeout(() => setPlantWatered(false), 2000);
  };

  return (
    <div className="relative w-full rounded-xl border-2 border-[#1e1e24] overflow-hidden shadow-[4px_4px_0px_#1e1e24] select-none">
      {/* Top Mini Room Bar */}
      <div className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 px-3 py-1.5 border-b-2 border-[#1e1e24] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-pixel text-[11px] text-slate-900 font-bold flex items-center gap-1">
            🏠 MAI ANH'S MINI ROOM (미니룸)
          </span>
          <span className="text-[10px] bg-white/70 px-1.5 py-0.5 rounded font-pixel text-pink-600 hidden sm:inline">
            INTERACTIVE 2000s ROOM
          </span>
        </div>

        {/* Hover helper notice */}
        <div className="text-[10px] font-pixel text-slate-700 bg-white/80 px-2 py-0.5 rounded border border-slate-400">
          {hoveredItem ? (
            <span className="text-pink-600 font-bold animate-pulse">👉 {hoveredItem}</span>
          ) : (
            <span>CLICK OBJECTS TO EXPLORE!</span>
          )}
        </div>
      </div>

      {/* Main Room Canvas */}
      <div className="relative h-[340px] sm:h-[380px] w-full overflow-hidden flex flex-col justify-between">
        {/* Wall Section */}
        <div className="relative h-[65%] w-full bg-miniroom-wall p-3 border-b-4 border-[#d97706]">
          {/* Wall Pattern & Window */}
          <div className="absolute top-3 left-4 w-20 sm:w-24 h-24 sm:h-28 bg-sky-200 border-2 border-white rounded shadow-md overflow-hidden flex flex-col justify-between p-1">
            <div className="w-full h-full bg-gradient-to-b from-sky-400 to-sky-200 relative flex items-center justify-center">
              <div className="absolute top-2 left-2 text-yellow-300 text-xs">☀️</div>
              <div className="text-[10px] opacity-80 text-white font-pixel">BLUE SKY</div>
              {/* Window Panes */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none border border-white/60">
                <div className="border-r border-b border-white/60"></div>
                <div className="border-b border-white/60"></div>
                <div className="border-r border-white/60"></div>
                <div></div>
              </div>
            </div>
            <div className="text-[9px] font-pixel text-center text-slate-600 bg-white/80 py-0.5 rounded-sm">
              HANOI 🌤️
            </div>
          </div>

          {/* Wall Object 1: Stage Poster (Click opens STAGE) */}
          <button
            type="button"
            onClick={() => handleItemClick('stage', () => audioEngine.playHeartSound())}
            onMouseEnter={() => setHoveredItem('STAGE POSTER → Open My Stage Performance')}
            onMouseLeave={() => setHoveredItem(null)}
            className="absolute top-3 right-4 sm:right-8 w-24 sm:w-28 h-32 sm:h-36 bg-gradient-to-b from-rose-600 to-purple-800 p-1 rounded shadow-lg border-2 border-white transform rotate-2 hover:scale-105 hover:rotate-0 transition-all cursor-pointer text-left"
          >
            {/* Taped top */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-yellow-200/80 border border-yellow-400 rotate-1"></div>
            <div className="w-full h-full border border-pink-300/40 rounded p-1 flex flex-col justify-between text-white">
              <div>
                <div className="text-[9px] font-pixel text-yellow-300 flex items-center gap-0.5">
                  <Flame className="w-2.5 h-2.5 fill-yellow-300" /> STAGE POSTER
                </div>
                <div className="font-extrabold text-[11px] leading-tight mt-0.5 text-pink-100 font-sans">
                  RED DANCING CLUB
                </div>
                <div className="text-[8px] font-pixel text-pink-200 opacity-90">
                  CONCERT & SHOWCASE
                </div>
              </div>
              <div className="text-[8px] font-pixel bg-yellow-400 text-black px-1 py-0.5 rounded text-center font-bold">
                WATCH VIDEO ↗
              </div>
            </div>
          </button>

          {/* Wall Object 2: Honors & Awards Board (Click opens PROFILE) */}
          <button
            type="button"
            onClick={() => handleItemClick('profile', () => audioEngine.playClickSound())}
            onMouseEnter={() => setHoveredItem('HONORS BOARD → View Education & Awards')}
            onMouseLeave={() => setHoveredItem(null)}
            className="absolute top-5 left-28 sm:left-36 w-28 sm:w-36 h-24 sm:h-28 bg-[#c28e57] border-2 border-[#8b5a2b] rounded-lg shadow-md p-1.5 transform -rotate-1 hover:scale-105 hover:rotate-0 transition-all cursor-pointer text-left"
          >
            <div className="w-full h-full bg-[#dfb17b] rounded p-1 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-[9px] font-pixel text-amber-950">
                <span className="flex items-center gap-0.5">
                  <Award className="w-2.5 h-2.5 text-amber-900" /> HONORS
                </span>
                <span>📌</span>
              </div>
              {/* Sticky Notes with Real CV Facts */}
              <div className="flex flex-col gap-1">
                <div className="bg-yellow-100 border border-yellow-400 rounded px-1 py-0.5 text-[8px] text-amber-950 font-bold shadow-xs flex items-center gap-1">
                  <GraduationCap className="w-2.5 h-2.5 text-pink-600 flex-shrink-0" />
                  <span>FTU GPA 3.83/4.0</span>
                </div>
                <div className="bg-pink-100 border border-pink-300 rounded px-1 py-0.5 text-[8px] text-pink-950 shadow-xs">
                  ★ THPT GPA 9.5/10
                </div>
              </div>
              <span className="text-[8px] font-pixel text-amber-900 underline text-right">
                View Details 🔍
              </span>
            </div>
          </button>

          {/* Wall Object 3: Polaroid Photo of Mai Anh (Click opens PROFILE) */}
          <button
            type="button"
            onClick={() => handleItemClick('profile', () => audioEngine.playClickSound())}
            onMouseEnter={() => setHoveredItem('POLAROID PHOTO → Open Full Profile & Education')}
            onMouseLeave={() => setHoveredItem(null)}
            className="absolute top-2 right-36 sm:right-48 w-16 h-20 bg-white border border-slate-300 p-1 shadow-md transform -rotate-6 hover:scale-110 hover:rotate-0 transition-all cursor-pointer hidden md:flex flex-col justify-between"
          >
            <div className="w-full h-13 bg-[#7a101d] rounded flex items-center justify-center text-white text-xs">
              👧🏻
            </div>
            <span className="text-[7px] font-pixel text-center text-slate-800">
              Mai Anh ♡
            </span>
          </button>

          {/* Wall Stickers & Bunting */}
          <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none opacity-80">
            <span className="text-xs">🎏</span>
            <span className="text-xs">⭐</span>
            <span className="text-xs">🎀</span>
            <span className="text-xs">💖</span>
            <span className="text-xs">✨</span>
          </div>
        </div>

        {/* Floor Section */}
        <div className="relative h-[35%] w-full bg-miniroom-floor p-2 flex items-end justify-between">
          {/* Checkered Room Rug */}
          <div className="absolute inset-x-12 bottom-1 h-20 bg-pink-200/90 border-2 border-pink-400 rounded-full flex items-center justify-center pointer-events-none shadow-inner">
            <div className="font-pixel text-[10px] text-pink-600 opacity-60">
              ♡ MAI ANH'S ROOM ♡
            </div>
          </div>

          {/* Floor Object 1: Bookshelf & Trophy */}
          <div className="relative z-10 w-24 sm:w-32 bg-[#a3683a] border-2 border-[#5c3a1e] rounded-t-md p-1 flex flex-col justify-between shadow-lg">
            <div className="bg-[#784c28] h-3 rounded-xs mb-1 flex items-center justify-around px-1">
              <span className="text-[9px]">🏆</span>
              <span className="text-[8px] text-yellow-300 font-pixel">PRIZE '22</span>
            </div>
            <div className="flex gap-0.5 justify-around items-end h-10 px-0.5 bg-[#4a2e18] rounded-xs border border-[#38230f]">
              <div className="w-2.5 h-8 bg-blue-500 rounded-xs border border-blue-200"></div>
              <div className="w-3 h-9 bg-rose-500 rounded-xs border border-rose-200"></div>
              <div className="w-2.5 h-7 bg-amber-400 rounded-xs border border-amber-200"></div>
              <div className="w-3 h-9 bg-emerald-500 rounded-xs border border-emerald-200"></div>
              <div className="w-2.5 h-8 bg-purple-500 rounded-xs border border-purple-200"></div>
            </div>
            <div className="text-[7px] font-pixel text-center text-amber-200 mt-0.5">
              BOOKS & AWARDS
            </div>
          </div>

          {/* Floor Object 2: Retro Computer & Desk (Click opens WORKROOM) */}
          <button
            type="button"
            onClick={() => handleItemClick('work', () => audioEngine.playClickSound())}
            onMouseEnter={() => setHoveredItem('COMPUTER DESK → Open Workroom & Media Projects')}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative z-10 w-36 sm:w-44 bg-[#e2e8f0] border-2 border-[#475569] rounded-t-lg p-1.5 shadow-xl hover:scale-105 transition-transform cursor-pointer text-center"
          >
            {/* Monitor */}
            <div className="mx-auto w-24 sm:w-28 bg-[#cbd5e1] border-2 border-[#334155] rounded-md p-1 shadow-inner">
              <div className="w-full h-14 bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] rounded flex flex-col items-center justify-center text-white border border-[#0284c7] relative overflow-hidden">
                <Monitor className="w-4 h-4 text-cyan-300 animate-pulse mb-0.5" />
                <span className="text-[8px] font-pixel text-cyan-200 font-bold">
                  GTP MEDIA & NP
                </span>
                <span className="text-[7px] font-pixel text-emerald-300">
                  ● PORTFOLIO READY
                </span>
              </div>
              <div className="w-6 h-1.5 bg-[#64748b] mx-auto mt-0.5 rounded-b"></div>
            </div>

            {/* Keyboard & Mouse on Desk */}
            <div className="mt-1 flex items-center justify-center gap-2">
              <div className="w-16 h-2 bg-slate-300 border border-slate-500 rounded-xs"></div>
              <div className="w-2.5 h-2 bg-slate-300 border border-slate-500 rounded-full"></div>
            </div>
            <div className="font-pixel text-[8px] text-slate-800 font-bold mt-0.5 bg-yellow-200 border border-yellow-400 rounded px-1 py-0.2">
              MY WORKROOM ✦
            </div>
          </button>

          {/* Floor Object 3: Guestbook & Memory Station (Click opens GUESTBOOK) */}
          <button
            type="button"
            onClick={() => handleItemClick('guestbook', () => audioEngine.playHeartSound())}
            onMouseEnter={() => setHoveredItem('GUESTBOOK STATION → Sign Guestbook & Leave a Note')}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative z-10 w-24 sm:w-28 bg-emerald-50 border-2 border-emerald-400 rounded-t-lg p-1.5 shadow-lg hover:scale-105 transition-transform cursor-pointer text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-tr from-emerald-300 to-teal-200 border-2 border-emerald-500 flex flex-col items-center justify-center shadow-md">
              <MessageSquare className="w-6 h-6 text-emerald-800" />
            </div>
            <div className="mt-1 font-pixel text-[8px] text-emerald-800 font-bold bg-white border border-emerald-300 rounded px-1 py-0.5">
              GUESTBOOK ♡
            </div>
          </button>

          {/* Floor Object 4: Cute Plushie & Plant */}
          <div className="relative z-10 flex flex-col items-center gap-1">
            {/* Interactive Teddy Plushie */}
            <button
              type="button"
              onClick={handlePlushieClick}
              title="Click to cuddle plushie!"
              className="text-2xl filter drop-shadow cursor-pointer transition-transform active:scale-125"
              style={{
                transform: `translateY(${plushieBounces % 2 === 1 ? '-6px' : '0px'}) scale(${1 + (plushieBounces % 4) * 0.05})`,
              }}
            >
              🧸
            </button>
            {/* Interactive Plant */}
            <button
              type="button"
              onClick={handlePlantClick}
              title="Click to water plant!"
              className="text-lg filter drop-shadow cursor-pointer hover:scale-110 active:scale-95"
            >
              {plantWatered ? '🪴💧' : '🪴'}
            </button>
          </div>
        </div>

        {/* Floating Ambient Sparkles */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-none">
          <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
          <Heart className="w-3 h-3 text-red-400 animate-bounce fill-red-400" />
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
        </div>
      </div>

      {/* Mini Room Interactive Footer Bar */}
      <div className="bg-[#fff7ed] px-3 py-2 border-t-2 border-[#1e1e24] flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-pixel text-[10px] text-amber-900 font-bold">SHORTCUTS:</span>
          <button
            onClick={() => onNavigate('work')}
            className="px-2 py-0.5 rounded bg-blue-100 hover:bg-blue-200 text-blue-800 border border-blue-300 font-pixel text-[10px] retro-btn-3d"
          >
            💻 Workroom
          </button>
          <button
            onClick={() => onNavigate('stage')}
            className="px-2 py-0.5 rounded bg-rose-100 hover:bg-rose-200 text-rose-800 border border-rose-300 font-pixel text-[10px] retro-btn-3d"
          >
            💃 My Stage
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="px-2 py-0.5 rounded bg-pink-100 hover:bg-pink-200 text-pink-800 border border-pink-300 font-pixel text-[10px] retro-btn-3d"
          >
            🎀 Profile & CV
          </button>
          <button
            onClick={() => onNavigate('guestbook')}
            className="px-2 py-0.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300 font-pixel text-[10px] retro-btn-3d"
          >
            ✍️ Guestbook
          </button>
        </div>

        <div className="text-[10px] font-pixel text-pink-600">
          ROOM VISITOR #024 ♡
        </div>
      </div>
    </div>
  );
};

