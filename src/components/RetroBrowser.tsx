import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Home, Lock, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface RetroBrowserProps {
  children: React.ReactNode;
  activeTab: string;
  onNavigateHome: () => void;
  onRefresh: () => void;
}

export const RetroBrowser: React.FC<RetroBrowserProps> = ({
  children,
  activeTab,
  onNavigateHome,
  onRefresh,
}) => {
  const [isAudioActive, setIsAudioActive] = useState<boolean>(true);
  const [urlPath, setUrlPath] = useState<string>('http://cyworld.nate.com/maianh_2007');

  useEffect(() => {
    setUrlPath(`http://cyworld.nate.com/maianh_2007/${activeTab}`);
  }, [activeTab]);

  const handleToggleAudio = () => {
    const isMuted = audioEngine.toggleMute();
    setIsAudioActive(!isMuted);
  };

  const handleSoundBtn = (cb: () => void) => {
    audioEngine.playClickSound();
    cb();
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-2 sm:my-5 bg-[#fff8fc] border-3 border-[#1e1e24] rounded-2xl shadow-[8px_8px_0px_#1e1e24] overflow-hidden flex flex-col">
      {/* Top Title Bar */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white px-3 sm:px-4 py-2 border-b-2 border-[#1e1e24] flex items-center justify-between select-none">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm">🌐</span>
          <span className="font-pixel text-xs sm:text-xs truncate tracking-wide">
            Nguyễn Mai Anh ♡ Cyworld Mini-Homepage [2007 - Present]
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Audio Master Toggle */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`px-2 py-0.5 rounded font-pixel text-[10px] flex items-center gap-1 border border-black/40 retro-btn-3d cursor-pointer ${
              isAudioActive
                ? 'bg-emerald-400 text-slate-900 font-bold'
                : 'bg-slate-200 text-slate-700'
            }`}
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3 h-3" />
                <span className="hidden sm:inline">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3" />
                <span className="hidden sm:inline">SFX OFF</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-1">
            <span className="w-4 h-4 rounded-xs bg-white/90 border border-black/40 text-black font-bold text-[10px] flex items-center justify-center">
              _
            </span>
            <span className="w-4 h-4 rounded-xs bg-white/90 border border-black/40 text-black font-bold text-[10px] flex items-center justify-center">
              □
            </span>
            <span className="w-4 h-4 rounded-xs bg-rose-500 border border-black/50 text-white font-bold text-[10px] flex items-center justify-center">
              ✕
            </span>
          </div>
        </div>
      </div>

      {/* Browser Toolbar & Address Bar */}
      <div className="bg-[#fce7f3] px-2 sm:px-4 py-2 border-b-2 border-[#1e1e24] flex items-center gap-2 sm:gap-3 flex-wrap">
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleSoundBtn(onNavigateHome)}
            title="Back to home"
            className="p-1 rounded bg-white border border-slate-400 text-slate-700 hover:bg-slate-100 retro-btn-3d"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => audioEngine.playClickSound()}
            title="Forward"
            className="p-1 rounded bg-white border border-slate-400 text-slate-400 cursor-not-allowed retro-btn-3d"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleSoundBtn(onRefresh)}
            title="Refresh page"
            className="p-1 rounded bg-white border border-slate-400 text-slate-700 hover:bg-slate-100 retro-btn-3d"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleSoundBtn(onNavigateHome)}
            title="Homepage"
            className="p-1 rounded bg-white border border-slate-400 text-slate-700 hover:bg-slate-100 retro-btn-3d"
          >
            <Home className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Address Input Bar */}
        <div className="flex-1 min-w-[200px] flex items-center gap-1.5 bg-white border-2 border-slate-400 rounded-md px-2.5 py-1 text-xs shadow-inner">
          <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
          <span className="font-mono text-slate-800 truncate select-all">
            {urlPath}
          </span>
          <span className="ml-auto font-pixel text-[9px] bg-pink-100 text-pink-700 px-1.5 py-0.2 rounded">
            CYWORLD
          </span>
        </div>
      </div>

      {/* Main App Content Viewport */}
      <div className="p-3 sm:p-5 flex-1 bg-retro-stars min-h-[600px]">
        {children}
      </div>

      {/* Bottom Browser Status Bar */}
      <div className="bg-[#fce7f3] border-t-2 border-[#1e1e24] px-3 py-1 flex items-center justify-between text-[10px] font-pixel text-slate-600 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Done • Local intranet zone</span>
        </div>
        <div className="flex items-center gap-2">
          <span>100% READY</span>
          <span>CYWORLD KOREA / VIETNAM</span>
        </div>
      </div>
    </div>
  );
};
