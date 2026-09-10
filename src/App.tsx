import React, { useState } from 'react';
import { RetroBrowser } from './components/RetroBrowser';
import { Navigation } from './components/Navigation';
import { ProfileCard } from './components/ProfileCard';
import { MiniRoom } from './components/MiniRoom';
import { Profile } from './components/Profile';
import { Workroom } from './components/Workroom';
import { Stage } from './components/Stage';
import { Guestbook } from './components/Guestbook';
import { Contact } from './components/Contact';
import { IntroScreen } from './components/IntroScreen';
import { Sticker } from './components/Sticker';
import { ACHIEVEMENTS_LIST } from './data/portfolioData';
import { audioEngine } from './utils/audioEngine';
import { Sparkles, Heart, Award, Flame, GraduationCap, Briefcase, MessageSquare, Volume2, VolumeX } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(false);

  const handleEnterWorld = () => {
    setShowIntro(false);
  };

  const handleRefresh = () => {
    audioEngine.playHeartSound();
    setActiveTab('home');
  };

  const handleToggleSound = () => {
    const newMutedState = audioEngine.toggleMute();
    setIsSoundMuted(newMutedState);
  };

  return (
    <div className="min-h-screen bg-retro-checker py-2 sm:py-6 px-2 sm:px-4 flex flex-col items-center justify-start text-[#2b2327]">
      {/* Intro Landing Screen Gate */}
      {showIntro && <IntroScreen onEnter={handleEnterWorld} />}

      {/* Retro Browser Container */}
      <RetroBrowser
        activeTab={activeTab}
        onNavigateHome={() => setActiveTab('home')}
        onRefresh={handleRefresh}
      >
        {/* Top Header Banner with Decorative Stickers */}
        <div className="mb-3 flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-pink-200">
          <div className="flex items-center gap-2">
            <span className="text-xl animate-gentle-bob">🌸</span>
            <div>
              <div className="font-pixel text-[11px] text-pink-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span>NGUYỄN MAI ANH'S HOMEPAGE</span>
                <span className="text-rose-500 font-normal">♡ 싸이월드</span>
              </div>
              <p className="text-[11px] text-slate-500 font-sans">
                Sinh viên Ngoại Thương (FTU) • Nghệ thuật biểu diễn & Truyền thông
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <Sticker label="WELCOME" color="bg-yellow-200 border-yellow-400 text-yellow-950" rotate={-2} />
            <Sticker label="FTU 2025-2029" color="bg-pink-200 border-pink-400 text-pink-950" rotate={1} />
            <button
              onClick={() => setShowIntro(true)}
              className="px-2 py-0.5 rounded bg-white hover:bg-pink-50 text-pink-600 border border-pink-300 font-pixel text-[10px] retro-btn-3d"
            >
              🚪 Intro Screen
            </button>
          </div>
        </div>

        {/* Retro Folder Tabs Navigation */}
        <div className="mb-4">
          <Navigation activeTab={activeTab} onSelectTab={setActiveTab} />
        </div>

        {/* Three-Column Cyworld Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Left Column: Profile, Photo Booth, Academic GPA, Contacts */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <ProfileCard onNavigateToTab={setActiveTab} />
          </aside>

          {/* Center Column: Primary Dynamic Content Area */}
          <main className="w-full lg:flex-1 min-w-0">
            {activeTab === 'home' && (
              <div className="space-y-4">
                {/* Centerpiece: Interactive Mini Room */}
                <MiniRoom onNavigate={setActiveTab} />

                {/* Quick Highlights: Extracurricular & Achievements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Latest Stage Spotlight */}
                  <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-3.5 shadow-[3px_3px_0px_#1e1e24] flex flex-col justify-between gap-2">
                    <div>
                      <div className="flex items-center justify-between pb-1.5 border-b border-dashed border-rose-200">
                        <span className="font-pixel text-[10px] text-rose-600 font-bold uppercase flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 fill-rose-500" />
                          STAGE SPOTLIGHT
                        </span>
                        <span className="font-pixel text-[9px] bg-rose-100 text-rose-800 px-1.5 py-0.2 rounded">
                          RED DANCING
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 mt-1.5 font-sans">
                        Red Dancing Club & Stage Performances
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 font-sans line-clamp-2">
                        Tham gia Ban Chuyên môn và biểu diễn tại Concert Ký hoạ, Project Tết Quý Mão 2023.
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('stage')}
                      className="w-full py-1.5 rounded bg-rose-500 hover:bg-rose-600 text-white font-pixel text-[10px] flex items-center justify-center gap-1 retro-btn-3d cursor-pointer"
                    >
                      <span>XEM TOÀN BỘ VIDEO STAGE ↗</span>
                    </button>
                  </div>

                  {/* Achievement Spotlight */}
                  <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-3.5 shadow-[3px_3px_0px_#1e1e24] flex flex-col justify-between gap-2">
                    <div>
                      <div className="flex items-center justify-between pb-1.5 border-b border-dashed border-amber-200">
                        <span className="font-pixel text-[10px] text-amber-700 font-bold uppercase flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-amber-500" />
                          HONORS & AWARDS
                        </span>
                        <span className="font-pixel text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded">
                          TOP PRIZE
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 mt-1.5 font-sans">
                        {ACHIEVEMENTS_LIST[0].title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 font-sans">
                        {ACHIEVEMENTS_LIST[0].level} • Cụm Thanh Xuân - Cầu Giấy ({ACHIEVEMENTS_LIST[0].year})
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('profile')}
                      className="w-full py-1.5 rounded bg-amber-400 hover:bg-amber-500 text-amber-950 font-pixel text-[10px] font-bold flex items-center justify-center gap-1 retro-btn-3d cursor-pointer"
                    >
                      <span>XEM HỒ SƠ HỌC VẤN (GPA 3.83 / 9.5) ↗</span>
                    </button>
                  </div>
                </div>

                {/* Status Quote Strip */}
                <div className="bg-[#fffbeb] border-2 border-[#1e1e24] rounded-xl p-3 shadow-[2px_2px_0px_#1e1e24] flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💭</span>
                    <span className="italic text-slate-700 font-sans">
                      "Là một người hòa đồng, có trách nhiệm trong công việc, luôn tiếp thu và học hỏi."
                    </span>
                  </div>
                  <span className="font-pixel text-[10px] text-amber-800 bg-amber-200 px-2 py-0.5 rounded">
                    — NGUYỄN MAI ANH
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'profile' && <Profile />}
            {activeTab === 'work' && <Workroom />}
            {activeTab === 'stage' && <Stage />}
            {activeTab === 'guestbook' && <Guestbook />}
            {activeTab === 'contact' && (
              <Contact onGoToGuestbook={() => setActiveTab('guestbook')} />
            )}
          </main>

          {/* Right Column: Mini Desk, Academic Summary & Cyworld Community Widgets */}
          <aside className="w-full lg:w-80 flex-shrink-0 space-y-4">
            {/* Quick Resume & Academic Summary Card */}
            <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-3.5 shadow-[4px_4px_0px_#1e1e24] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-pink-200">
                <div className="flex items-center gap-1.5 font-pixel text-xs text-slate-900 font-bold">
                  <GraduationCap className="w-4 h-4 text-pink-600" />
                  <span>ACADEMIC OVERVIEW</span>
                </div>
                <span className="font-pixel text-[9px] bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {/* FTU */}
                <div className="p-2 bg-pink-50/70 border border-pink-200 rounded-lg">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs">
                    <span>ĐH Ngoại Thương (FTU)</span>
                    <span className="font-pixel text-[10px] text-pink-600 bg-white px-1.5 py-0.2 rounded border border-pink-300">
                      2025–2029
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Chuyên ngành Kinh tế quốc tế</div>
                  <div className="mt-1 font-pixel text-[10px] font-bold text-rose-700 bg-rose-100/80 px-1.5 py-0.5 rounded inline-block">
                    ★ GPA: 3.83 / 4.0
                  </div>
                </div>

                {/* THPT */}
                <div className="p-2 bg-amber-50/70 border border-amber-200 rounded-lg">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-xs">
                    <span>THPT Nhân Chính</span>
                    <span className="font-pixel text-[10px] text-amber-700 bg-white px-1.5 py-0.2 rounded border border-amber-300">
                      2022–2025
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Thanh Xuân, Hà Nội</div>
                  <div className="mt-1 font-pixel text-[10px] font-bold text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded inline-block">
                    ★ GPA: 9.5 / 10
                  </div>
                </div>
              </div>

              {/* Quick Jump Buttons */}
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <button
                  onClick={() => setActiveTab('work')}
                  className="py-1.5 px-2 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-300 rounded font-pixel text-[10px] flex items-center justify-center gap-1 retro-btn-3d cursor-pointer"
                >
                  <Briefcase className="w-3 h-3" />
                  <span>Kinh nghiệm</span>
                </button>
                <button
                  onClick={() => setActiveTab('stage')}
                  className="py-1.5 px-2 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300 rounded font-pixel text-[10px] flex items-center justify-center gap-1 retro-btn-3d cursor-pointer"
                >
                  <Flame className="w-3 h-3" />
                  <span>Stage Vũ đạo</span>
                </button>
              </div>
            </div>

            {/* Retro UI Sound Controls */}
            <div className="bg-[#fdf4ff] border-2 border-[#1e1e24] rounded-xl p-3 shadow-[3px_3px_0px_#1e1e24] flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isSoundMuted ? (
                  <VolumeX className="w-4 h-4 text-slate-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-purple-600 animate-pulse" />
                )}
                <div>
                  <div className="font-pixel text-[10px] text-slate-800 font-bold">
                    RETRO SOUND FX
                  </div>
                  <div className="text-[10px] text-slate-500 font-sans">
                    {isSoundMuted ? 'Âm thanh đã tắt' : 'Hiệu ứng âm thanh nút bấm'}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleToggleSound}
                className={`px-2.5 py-1 rounded font-pixel text-[10px] border border-[#1e1e24] retro-btn-3d cursor-pointer ${
                  isSoundMuted
                    ? 'bg-slate-200 text-slate-700'
                    : 'bg-purple-500 hover:bg-purple-600 text-white font-bold'
                }`}
              >
                {isSoundMuted ? 'MUTE ON' : 'SFX ON'}
              </button>
            </div>

            {/* Cyworld Sticker Collection Box */}
            <div className="bg-[#fff7ed] border-2 border-[#1e1e24] rounded-xl p-3 shadow-[3px_3px_0px_#1e1e24] space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-amber-200">
                <span className="font-pixel text-[10px] text-amber-900 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  STICKER BOX (스티커)
                </span>
                <span className="text-[9px] font-pixel text-amber-700">CLICKABLE</span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center py-1">
                <Sticker emoji="🐰" label="BUNNY" color="bg-pink-200 border-pink-400 text-pink-900" size="sm" />
                <Sticker emoji="⭐" label="STAR" color="bg-yellow-200 border-yellow-400 text-yellow-900" size="sm" />
                <Sticker emoji="🎀" label="RIBBON" color="bg-rose-200 border-rose-400 text-rose-900" size="sm" />
                <Sticker emoji="🎓" label="FTU" color="bg-cyan-200 border-cyan-400 text-cyan-900" size="sm" />
                <Sticker emoji="🍓" label="BERRY" color="bg-red-200 border-red-400 text-red-900" size="sm" />
                <Sticker emoji="💖" label="HEART" color="bg-purple-200 border-purple-400 text-purple-900" size="sm" />
              </div>
            </div>

            {/* Cyworld Ilchon / Guestbook Invitation */}
            <div className="bg-[#f0fdf4] border-2 border-[#1e1e24] rounded-xl p-3 shadow-[3px_3px_0px_#1e1e24] space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-emerald-200">
                <span className="font-pixel text-[10px] text-emerald-900 font-bold flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  GUESTBOOK (방명록)
                </span>
                <span className="text-[9px] font-pixel text-emerald-700">ILCHON 1촌</span>
              </div>
              <p className="text-[11px] text-slate-600 font-sans">
                Ghé thăm phòng của Mai Anh? Hãy để lại lời nhắn động viên hoặc kết nối nhé!
              </p>
              <button
                onClick={() => setActiveTab('guestbook')}
                className="w-full py-1.5 rounded bg-emerald-500 hover:bg-emerald-600 text-white font-pixel text-[10px] font-bold flex items-center justify-center gap-1.5 retro-btn-3d cursor-pointer"
              >
                <span>VIẾT LỜI NHẮN VÀO SỔ ♡</span>
              </button>
            </div>
          </aside>
        </div>
      </RetroBrowser>

      {/* Footer Signature */}
      <footer className="mt-3 mb-4 text-center font-pixel text-[11px] text-pink-800 select-none flex items-center justify-center gap-1">
        <span>© 2007–2026 NGUYỄN MAI ANH ♡ CYWORLD NOSTALGIC PORTFOLIO</span>
      </footer>
    </div>
  );
}
