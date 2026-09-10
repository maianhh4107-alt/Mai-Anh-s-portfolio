import React from 'react';
import { audioEngine } from '../utils/audioEngine';

interface RetroWindowProps {
  title: string;
  icon?: string;
  subtitle?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
  headerColor?: 'pink' | 'blue' | 'purple' | 'green' | 'yellow';
  actions?: React.ReactNode;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({
  title,
  icon = '💾',
  subtitle,
  children,
  onClose,
  className = '',
  headerColor = 'pink',
  actions,
}) => {
  const headerStyles = {
    pink: 'bg-gradient-to-r from-[#ec4899] via-[#f43f5e] to-[#fb7185] text-white',
    blue: 'bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#60a5fa] text-white',
    purple: 'bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#a855f7] text-white',
    green: 'bg-gradient-to-r from-[#059669] via-[#10b981] to-[#34d399] text-white',
    yellow: 'bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] text-amber-950 font-bold',
  }[headerColor];

  const handleBtnSound = () => {
    audioEngine.playClickSound();
  };

  return (
    <div className={`bg-[#fdfafb] border-2 border-[#1e1e24] rounded-lg shadow-[5px_5px_0px_#1e1e24] overflow-hidden flex flex-col ${className}`}>
      {/* Title Bar */}
      <div className={`px-3 py-1.5 flex items-center justify-between select-none border-b-2 border-[#1e1e24] ${headerStyles}`}>
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm filter drop-shadow">{icon}</span>
          <span className="font-pixel text-xs tracking-wide truncate uppercase">
            {title}
          </span>
          {subtitle && (
            <span className="hidden sm:inline text-[10px] opacity-80 font-mono">
              [{subtitle}]
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
          {actions}
          <button
            type="button"
            onClick={handleBtnSound}
            aria-label="Minimize window"
            className="w-4 h-4 bg-white/90 hover:bg-white text-slate-800 text-[10px] font-bold border border-black/40 rounded-sm flex items-center justify-center retro-btn-3d"
          >
            _
          </button>
          <button
            type="button"
            onClick={handleBtnSound}
            aria-label="Maximize window"
            className="w-4 h-4 bg-white/90 hover:bg-white text-slate-800 text-[10px] font-bold border border-black/40 rounded-sm flex items-center justify-center retro-btn-3d"
          >
            □
          </button>
          {onClose && (
            <button
              type="button"
              onClick={() => {
                handleBtnSound();
                onClose();
              }}
              aria-label="Close window"
              className="w-4 h-4 bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold border border-black/60 rounded-sm flex items-center justify-center retro-btn-3d"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-3 md:p-4 flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};
