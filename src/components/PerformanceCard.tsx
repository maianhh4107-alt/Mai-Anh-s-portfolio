import React from 'react';
import { Play, Sparkles, ExternalLink, Ticket } from 'lucide-react';
import { PerformanceVideo } from '../data/portfolioData';
import { audioEngine } from '../utils/audioEngine';

interface PerformanceCardProps {
  video: PerformanceVideo;
  onOpenVideo: (video: PerformanceVideo) => void;
}

export const PerformanceCard: React.FC<PerformanceCardProps> = ({ video, onOpenVideo }) => {
  const handleClick = () => {
    audioEngine.playHeartSound();
    onOpenVideo(video);
  };

  return (
    <div className="bg-white border-2 border-[#1e1e24] rounded-xl overflow-hidden shadow-[4px_4px_0px_#1e1e24] hover:shadow-[6px_6px_0px_#f43f5e] hover:-translate-y-1 transition-all flex flex-col justify-between">
      {/* Ticket Header Stub */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-2 border-b-2 border-[#1e1e24] flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-pixel text-[10px]">
          <Ticket className="w-3.5 h-3.5 text-yellow-300" />
          <span>STAGE PASS • {video.year}</span>
        </div>
        <span className="font-pixel text-[9px] bg-black/30 px-2 py-0.5 rounded text-yellow-200">
          {video.tag}
        </span>
      </div>

      {/* Stage Visual / Video Thumbnail Area */}
      <div
        onClick={handleClick}
        className={`relative aspect-video w-full bg-gradient-to-br ${video.posterBg} p-3 flex flex-col justify-between cursor-pointer group overflow-hidden`}
      >
        {/* Stage lights & pixel sparkle accents */}
        <div className="absolute top-0 inset-x-0 h-10 bg-white/20 blur-md pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-25 pointer-events-none"></div>

        {/* Top Badges */}
        <div className="relative z-10 flex justify-between items-start">
          <span className="font-pixel text-[9px] bg-black/70 text-yellow-300 px-2 py-0.5 rounded border border-yellow-400/50 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" /> OFFICIAL STAGE
          </span>
          <span className="text-xl group-hover:scale-125 transition-transform">
            💃
          </span>
        </div>

        {/* Center Play Button Overlay */}
        <div className="relative z-10 mx-auto w-14 h-14 rounded-full bg-white/90 border-2 border-black flex items-center justify-center text-rose-600 shadow-[3px_3px_0px_#000000] group-hover:scale-110 group-hover:bg-yellow-300 transition-all">
          <Play className="w-6 h-6 fill-current ml-0.5" />
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 bg-black/60 backdrop-blur-xs p-1.5 rounded border border-white/20 flex items-center justify-between text-white">
          <span className="font-pixel text-[10px] text-pink-200">
            ▶ CLICK TO PLAY
          </span>
          <span className="font-pixel text-[9px] text-yellow-300">
            YOUTUBE EMBED ↗
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-3.5 flex flex-col justify-between flex-1 gap-2.5 bg-[#fffdfa]">
        <div>
          <h4 className="font-bold text-base text-slate-900 leading-snug font-sans group-hover:text-rose-600 transition-colors">
            {video.title}
          </h4>
          <p className="text-xs text-slate-600 mt-1 flex items-start gap-1.5 font-sans">
            <span className="text-rose-500 font-bold">✦</span>
            <span>{video.participation}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-dashed border-slate-200 flex items-center justify-between gap-2">
          <button
            onClick={handleClick}
            className="flex-1 py-1.5 px-2.5 rounded bg-rose-500 hover:bg-rose-600 text-white font-pixel text-[10px] flex items-center justify-center gap-1 retro-btn-3d"
          >
            <Play className="w-3 h-3 fill-white" />
            <span>PLAY IN POPUP</span>
          </button>
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioEngine.playClickSound()}
            className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 retro-btn-3d"
            title="Open on YouTube in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
