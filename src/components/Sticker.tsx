import React from 'react';
import { audioEngine } from '../utils/audioEngine';

interface StickerProps {
  emoji?: string;
  label?: string;
  className?: string;
  color?: string;
  rotate?: number;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const Sticker: React.FC<StickerProps> = ({
  emoji,
  label,
  className = '',
  color = 'bg-yellow-200 border-yellow-400 text-yellow-900',
  rotate = 0,
  onClick,
  size = 'md',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioEngine.playHeartSound();
    if (onClick) onClick();
  };

  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-xs md:text-sm px-2 py-1',
    lg: 'text-sm md:text-base px-3 py-1.5 font-bold',
  }[size];

  return (
    <div
      onClick={handleClick}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1 border-2 rounded-full shadow-[2px_2px_0px_#00000025] cursor-pointer select-none transition-transform hover:scale-110 active:scale-95 ${color} ${sizeClasses} ${className}`}
    >
      {emoji && <span>{emoji}</span>}
      {label && <span className="font-pixel whitespace-nowrap">{label}</span>}
    </div>
  );
};
