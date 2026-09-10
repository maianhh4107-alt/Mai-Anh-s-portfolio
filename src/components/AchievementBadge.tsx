import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { AchievementItem } from '../data/portfolioData';
import { audioEngine } from '../utils/audioEngine';

interface AchievementBadgeProps {
  achievement: AchievementItem;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement }) => {
  const handleClick = () => {
    audioEngine.playHeartSound();
  };

  return (
    <div
      onClick={handleClick}
      className="group relative p-3.5 bg-gradient-to-br from-amber-50 via-yellow-50 to-pink-50 border-2 border-amber-300 rounded-xl shadow-[3px_3px_0px_#f59e0b] hover:shadow-[4px_4px_0px_#d97706] hover:-translate-y-0.5 transition-all cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-tr from-amber-400 to-yellow-200 border-2 border-amber-500 shadow-inner flex items-center justify-center text-amber-900">
          {achievement.iconType === 'trophy' ? (
            <Trophy className="w-6 h-6 animate-bounce" />
          ) : (
            <Award className="w-6 h-6 animate-pulse" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
            <span className="font-pixel text-[10px] bg-amber-400 text-amber-950 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              {achievement.level}
            </span>
            <span className="text-[11px] font-pixel text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
              {achievement.year}
            </span>
          </div>
          <h4 className="font-bold text-sm text-slate-900 leading-snug">
            {achievement.title}
          </h4>
          <p className="text-xs text-slate-600 mt-1 flex items-center gap-1">
            <span className="text-pink-500">✦</span>
            <span>{achievement.category}</span>
          </p>
        </div>
      </div>
      <div className="mt-2.5 pt-2 border-t border-dashed border-amber-200 flex justify-between items-center text-[10px] font-pixel text-amber-700">
        <span>COLLECTIBLE BADGE # {achievement.id}</span>
        <span className="text-pink-600 font-bold">CLICK TO CELEBRATE ♫</span>
      </div>
    </div>
  );
};
