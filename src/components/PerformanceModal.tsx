import React, { useEffect } from 'react';
import { ExternalLink, X, Film, Sparkles } from 'lucide-react';
import { PerformanceVideo } from '../data/portfolioData';
import { audioEngine } from '../utils/audioEngine';

interface PerformanceModalProps {
  video: PerformanceVideo | null;
  onClose: () => void;
}

export const PerformanceModal: React.FC<PerformanceModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#fdf2f8] border-3 border-[#1e1e24] rounded-xl shadow-[8px_8px_0px_#1e1e24] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Window Header */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white px-3 py-2 border-b-2 border-[#1e1e24] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-yellow-300" />
            <span id="video-modal-title" className="font-pixel text-xs tracking-wider">
              ✦ MY STAGE / VIDEO PLAYER ✦
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-pixel bg-white/20 px-2 py-0.5 rounded text-pink-100 hidden sm:inline">
              ESC to close
            </span>
            <button
              onClick={() => {
                audioEngine.playClickSound();
                onClose();
              }}
              className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white font-bold border border-black/60 rounded flex items-center justify-center retro-btn-3d text-xs"
              aria-label="Close modal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Video Embed Frame */}
        <div className="p-3 sm:p-4 bg-[#18181b]">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-[#3f3f46] shadow-inner bg-black flex items-center justify-center">
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video Information & Links */}
        <div className="p-3 sm:p-4 bg-white border-t-2 border-[#1e1e24] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full font-bold">
                {video.year}
              </span>
              <span className="text-xs font-pixel text-slate-500">
                {video.tag}
              </span>
            </div>
            <h3 className="font-bold text-base text-slate-900 font-sans">
              {video.title}
            </h3>
            <p className="text-xs text-slate-600 flex items-center gap-1 font-sans">
              <Sparkles className="w-3 h-3 text-pink-500" />
              <span>{video.participation}</span>
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-pixel text-xs flex items-center justify-center gap-1.5 shadow border border-red-800 retro-btn-3d"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-3 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-pixel text-xs retro-btn-3d"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
