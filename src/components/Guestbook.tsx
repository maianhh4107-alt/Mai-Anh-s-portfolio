import React, { useState, useEffect } from 'react';
import { Heart, Send, MessageSquare, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface GuestbookEntry {
  id: string;
  nickname: string;
  message: string;
  date: string;
  emoji: string;
  hearts: number;
  isDemo?: boolean;
}

const INITIAL_DEMO_ENTRIES: GuestbookEntry[] = [
  {
    id: 'demo-1',
    nickname: 'Hương Trà (FTU)',
    message: 'Ghé thăm mini homepage của Mai Anh nè! Thiết kế đậm chất 2000s nhìn mê xỉu luôn á ♡ Chúc bà kỳ này đạt GPA cao chót vót nhé!',
    date: '2026.09.09 19:42',
    emoji: '🌸',
    hearts: 14,
    isDemo: true,
  },
  {
    id: 'demo-2',
    nickname: 'Red Dancing Club Mate',
    message: 'Stage Tết Quý Mão với Concert Ký hoạ đỉnh nóc kịch trần luôn bạn tui! Xem lại video vẫn thấy cháy rực rỡ 🔥',
    date: '2026.09.08 14:15',
    emoji: '💃',
    hearts: 28,
    isDemo: true,
  },
  {
    id: 'demo-3',
    nickname: 'Internet Traveler 2004',
    message: 'Nostalgia overloaded! Like visiting a real Cyworld mini-homepage from the golden 2000s web era ♡',
    date: '2026.09.07 10:20',
    emoji: '🌸',
    hearts: 9,
    isDemo: true,
  },
];

export const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(INITIAL_DEMO_ENTRIES);
  const [nickname, setNickname] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [selectedEmoji, setSelectedEmoji] = useState<string>('🎀');
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cyworld_guestbook_entries');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEntries(parsed);
        }
      }
    } catch {
      // Fallback
    }
  }, []);

  const saveEntries = (newEntries: GuestbookEntry[]) => {
    setEntries(newEntries);
    try {
      localStorage.setItem('cyworld_guestbook_entries', JSON.stringify(newEntries));
    } catch {
      // Ignore storage errors
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !message.trim()) return;

    audioEngine.playHeartSound();

    const now = new Date();
    const dateStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(
      now.getDate()
    ).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(
      now.getMinutes()
    ).padStart(2, '0')}`;

    const newEntry: GuestbookEntry = {
      id: `entry-${Date.now()}`,
      nickname: nickname.trim(),
      message: message.trim(),
      date: dateStr,
      emoji: selectedEmoji,
      hearts: 1,
      isDemo: false,
    };

    saveEntries([newEntry, ...entries]);
    setNickname('');
    setMessage('');
  };

  const handleHeartReaction = (id: string, e: React.MouseEvent) => {
    audioEngine.playHeartSound();

    // Trigger floating pixel hearts
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const heartId = Date.now();
    setFloatingHearts((prev) => [
      ...prev,
      { id: heartId, x: rect.left + rect.width / 2, y: rect.top },
    ]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== heartId));
    }, 1200);

    const updated = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, hearts: entry.hearts + 1 };
      }
      return entry;
    });

    saveEntries(updated);
  };

  return (
    <div className="space-y-4">
      {/* Guestbook Form */}
      <div className="bg-[#fff1f2] border-2 border-[#1e1e24] rounded-xl p-4 shadow-[4px_4px_0px_#1e1e24]">
        <div className="flex items-center gap-2 pb-2 border-b border-pink-300 mb-3">
          <MessageSquare className="w-4 h-4 text-pink-600" />
          <h3 className="font-pixel text-xs text-pink-950 font-bold uppercase">
            SIGN GUESTBOOK ♡ (방명록)
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-[11px] font-pixel text-pink-800 mb-1">
                YOUR NICKNAME:
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="e.g. Min Ah, FTUer, Friend..."
                maxLength={30}
                required
                className="w-full px-3 py-1.5 rounded bg-white border border-pink-300 text-xs font-sans focus:outline-pink-500 retro-sunken-3d"
              />
            </div>

            <div>
              <label className="block text-[11px] font-pixel text-pink-800 mb-1">
                AVATAR EMOJI:
              </label>
              <div className="flex items-center gap-1.5 bg-white p-1 rounded border border-pink-300">
                {['🎀', '🌸', '🐱', '🐰', '🍓', '🎧', '⭐'].map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => {
                      audioEngine.playClickSound();
                      setSelectedEmoji(emoji);
                    }}
                    className={`w-7 h-7 rounded flex items-center justify-center text-sm transition-transform ${
                      selectedEmoji === emoji
                        ? 'bg-pink-300 scale-110 shadow-xs'
                        : 'hover:bg-pink-100'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-pixel text-pink-800 mb-1">
              MESSAGE:
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a warm greeting or friendly cheer for Mai Anh ♡"
              rows={3}
              maxLength={300}
              required
              className="w-full px-3 py-2 rounded bg-white border border-pink-300 text-xs font-sans focus:outline-pink-500 retro-sunken-3d resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] font-pixel text-pink-600">
              * Messages persist in your browser localStorage
            </span>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-pixel text-xs flex items-center gap-1.5 border border-pink-700 shadow retro-btn-3d"
            >
              <Send className="w-3.5 h-3.5" />
              <span>POST NOTE ♡</span>
            </button>
          </div>
        </form>
      </div>

      {/* Entries List */}
      <div className="space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white border-2 border-[#1e1e24] rounded-xl p-3.5 shadow-[3px_3px_0px_#1e1e24] flex flex-col gap-2 relative"
          >
            <div className="flex items-center justify-between pb-1.5 border-b border-dashed border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-base p-1 bg-pink-100 rounded-full border border-pink-200">
                  {entry.emoji}
                </span>
                <div>
                  <span className="font-bold text-xs text-slate-900 font-sans">
                    {entry.nickname}
                  </span>
                  {entry.isDemo && (
                    <span className="ml-1.5 text-[9px] font-pixel bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded border border-amber-300">
                      [DEMO DATA]
                    </span>
                  )}
                </div>
              </div>

              <span className="text-[10px] font-mono text-slate-400">
                {entry.date}
              </span>
            </div>

            <p className="text-xs text-slate-700 font-sans leading-relaxed whitespace-pre-line">
              {entry.message}
            </p>

            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-[10px] font-pixel text-pink-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Cyworld Ilchon Note
              </span>

              <button
                type="button"
                onClick={(e) => handleHeartReaction(entry.id, e)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-300 font-pixel text-[10px] retro-btn-3d transition-transform active:scale-95"
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>{entry.hearts}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating hearts container */}
      {floatingHearts.map((h) => (
        <div
          key={h.id}
          style={{ left: h.x, top: h.y }}
          className="fixed pointer-events-none text-rose-500 text-xl font-bold animate-fade-out-up z-50 transform -translate-x-1/2 -translate-y-6 select-none transition-all duration-1000"
        >
          ♥
        </div>
      ))}
    </div>
  );
};
