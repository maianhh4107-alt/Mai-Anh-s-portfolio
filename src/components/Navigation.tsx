import React from 'react';
import { Home, User, Briefcase, Film, MessageSquare, Mail } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export interface NavTab {
  id: string;
  label: string;
  korean: string;
  icon: React.ReactNode;
  color: string;
}

interface NavigationProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const TABS: NavTab[] = [
  { id: 'home', label: 'HOME', korean: '홈', icon: <Home className="w-3.5 h-3.5" />, color: 'from-pink-500 to-rose-500' },
  { id: 'profile', label: 'PROFILE', korean: '프로필', icon: <User className="w-3.5 h-3.5" />, color: 'from-rose-500 to-pink-500' },
  { id: 'work', label: 'MY WORK', korean: '경력', icon: <Briefcase className="w-3.5 h-3.5" />, color: 'from-blue-500 to-cyan-500' },
  { id: 'stage', label: 'MY STAGE', korean: '무대', icon: <Film className="w-3.5 h-3.5" />, color: 'from-red-500 to-orange-500' },
  { id: 'guestbook', label: 'GUESTBOOK', korean: '방명록', icon: <MessageSquare className="w-3.5 h-3.5" />, color: 'from-emerald-500 to-teal-500' },
  { id: 'contact', label: 'CONTACT', korean: '연락처', icon: <Mail className="w-3.5 h-3.5" />, color: 'from-amber-500 to-orange-500' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onSelectTab }) => {
  const handleTabClick = (id: string) => {
    audioEngine.playClickSound();
    onSelectTab(id);
  };

  return (
    <div className="w-full flex items-end gap-1 sm:gap-1.5 overflow-x-auto pb-0.5 select-none no-scrollbar">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-t-lg font-pixel text-[10px] sm:text-xs tracking-wider transition-all cursor-pointer flex-shrink-0 border-2 border-b-0 border-[#1e1e24] ${
              isActive
                ? 'bg-white text-slate-900 font-bold shadow-[2px_-2px_0px_#1e1e24] -translate-y-1 relative z-10'
                : 'bg-[#fed7aa]/60 hover:bg-[#fed7aa] text-slate-700 opacity-85 hover:opacity-100'
            }`}
          >
            <span className={isActive ? 'text-pink-600 scale-110' : 'text-slate-500'}>
              {tab.icon}
            </span>
            <span>{tab.label}</span>
            <span className="text-[9px] opacity-70 hidden md:inline font-sans">
              ({tab.korean})
            </span>
          </button>
        );
      })}
    </div>
  );
};
