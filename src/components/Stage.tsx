import React, { useState } from 'react';
import { Sparkles, Flame, Film, Star, Music, Award } from 'lucide-react';
import { PERFORMANCE_VIDEOS, PerformanceVideo, EXTRACURRICULAR_LIST } from '../data/portfolioData';
import { PerformanceCard } from './PerformanceCard';
import { PerformanceModal } from './PerformanceModal';
import { Sticker } from './Sticker';
import { audioEngine } from '../utils/audioEngine';

export const Stage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<PerformanceVideo | null>(null);

  const handleOpenVideo = (video: PerformanceVideo) => {
    setActiveVideo(video);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className="space-y-4">
      {/* K-Pop Concert Stage Hero Banner */}
      <div className="relative bg-gradient-to-r from-rose-600 via-pink-600 to-purple-800 border-2 border-[#1e1e24] rounded-xl p-4 sm:p-5 text-white shadow-[4px_4px_0px_#1e1e24] overflow-hidden">
        {/* Animated stage lights & sparkles */}
        <div className="absolute top-0 left-10 w-24 h-40 bg-yellow-300/20 blur-xl transform -rotate-12 pointer-events-none"></div>
        <div className="absolute top-0 right-16 w-24 h-40 bg-pink-300/20 blur-xl transform rotate-12 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-pixel text-[10px] bg-yellow-300 text-black px-2 py-0.5 rounded font-bold shadow-xs">
                OFFICIAL STAGE ARCHIVE
              </span>
              <span className="font-pixel text-[10px] bg-white/20 text-white px-2 py-0.5 rounded">
                DANCE & VOCAL
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-wide mt-1 font-sans flex items-center gap-2">
              <span>MY STAGE ♡</span>
              <Flame className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse" />
            </h2>
            <p className="text-xs sm:text-sm text-pink-100 italic mt-0.5 font-sans">
              "some things are better shown than written."
            </p>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <Sticker label="3 PERFORMANCES" color="bg-yellow-300 border-yellow-500 text-yellow-950" />
            <Sticker label="LIVE VIDEO" color="bg-rose-400 border-rose-600 text-white" />
          </div>
        </div>
      </div>

      {/* Performance Cards Grid (Exact 3 Videos from User Prompt) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PERFORMANCE_VIDEOS.map((video) => (
          <PerformanceCard
            key={video.id}
            video={video}
            onOpenVideo={handleOpenVideo}
          />
        ))}
      </div>

      {/* Extracurricular Club Activities (Strictly from CV) */}
      <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-4 shadow-[3px_3px_0px_#1e1e24] space-y-3">
        <div className="flex items-center justify-between pb-2 border-b-2 border-dashed border-rose-200">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-rose-500" />
            <h3 className="font-pixel text-xs text-slate-900 font-bold uppercase">
              HOẠT ĐỘNG NGOẠI KHÓA & NGHỆ THUẬT (CV)
            </h3>
          </div>
          <span className="font-pixel text-[9px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
            EXTRACURRICULAR
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {EXTRACURRICULAR_LIST.map((act) => (
            <div
              key={act.id}
              className="p-3 bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-lg space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-pixel text-[10px] bg-rose-500 text-white font-bold px-2 py-0.5 rounded">
                  {act.period}
                </span>
                <span className="text-xs font-pixel text-slate-500">
                  {act.role}
                </span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 font-sans">
                {act.name}
              </h4>
              <p className="text-xs text-slate-700 font-sans leading-relaxed">
                {act.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      <PerformanceModal video={activeVideo} onClose={handleCloseVideo} />
    </div>
  );
};
