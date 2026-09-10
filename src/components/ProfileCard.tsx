import React, { useState, useEffect } from 'react';
import { Camera, Heart, Mail, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { audioEngine } from '../utils/audioEngine';

interface ProfileCardProps {
  onNavigateToTab?: (tab: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ onNavigateToTab }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [showUploader, setShowUploader] = useState<boolean>(false);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage first
    const savedPhoto = localStorage.getItem('user_profile_photo');
    if (savedPhoto) {
      setPhotoUrl(savedPhoto);
      return;
    }

    // Try standard candidate paths if the file is placed in public
    const candidatePaths = [
      '/meo meo self booth.jpg',
      '/assets/meo meo self booth.jpg',
      '/meo-meo-self-booth.jpg',
      '/assets/aistudio/meo meo self booth.jpg',
    ];

    let found = false;
    for (const path of candidatePaths) {
      const img = new Image();
      img.onload = () => {
        if (!found) {
          found = true;
          setPhotoUrl(path);
        }
      };
      img.src = path;
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        localStorage.setItem('user_profile_photo', result);
        audioEngine.playHeartSound();
      }
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedContact(type);
    audioEngine.playClickSound();
    setTimeout(() => setCopiedContact(null), 2000);
  };

  return (
    <div className="bg-[#fef2f6] border-2 border-[#1e1e24] rounded-xl p-3.5 shadow-[4px_4px_0px_#1e1e24] flex flex-col gap-3">
      {/* Cyworld Today Status Pill */}
      <div className="flex items-center justify-between text-[11px] font-pixel bg-pink-100 border border-pink-300 px-2 py-1 rounded">
        <div className="flex items-center gap-1.5 text-pink-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-retro-blink shadow-[0_0_6px_#10b981]"></span>
          <span>ONLINE</span>
        </div>
        <span className="text-pink-600 font-bold">CYWORLD v4.2</span>
      </div>

      {/* Decorated 2000s Photo Booth Polaroid Frame */}
      <div className="relative group mx-auto w-full max-w-[240px] bg-white p-2.5 pb-5 rounded-lg border-2 border-[#1e1e24] shadow-[4px_4px_0px_#f472b6] transform -rotate-1 hover:rotate-0 transition-transform">
        {/* Cute Corner Stickers */}
        <div className="absolute -top-2 -left-2 z-10 text-lg select-none filter drop-shadow">
          🎀
        </div>
        <div className="absolute -top-2 -right-2 z-10 text-xs font-pixel bg-yellow-300 text-yellow-950 px-1.5 py-0.5 rounded border border-black shadow">
          PHOTO BOOTH
        </div>
        <div className="absolute -bottom-2 -right-1 z-10 text-lg select-none filter drop-shadow">
          ✨
        </div>

        {/* Polaroid Inner Photo Container */}
        <div className="relative aspect-[4/5] w-full rounded overflow-hidden border border-slate-300 bg-gradient-to-b from-[#6b0f1a] to-[#450910] flex flex-col items-center justify-center text-white text-center p-2">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Nguyễn Mai Anh - meo meo self booth"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-3 text-center">
              {/* Photo Booth Sparkling Crimson Scene (Faithfully replicating the uploaded 'meo meo self booth' photo) */}
              <div className="absolute inset-0 bg-[#7a101d] overflow-hidden">
                {/* Scattered pink paper hearts replicating the photo booth background */}
                <div className="absolute top-2 left-3 text-pink-300 opacity-90 text-sm">♥</div>
                <div className="absolute top-5 right-4 text-pink-200 opacity-90 text-base">♥</div>
                <div className="absolute bottom-6 left-4 text-pink-300 opacity-90 text-xs">♥</div>
                <div className="absolute bottom-10 right-3 text-pink-200 opacity-90 text-sm">♥</div>
                <div className="absolute top-1/3 left-2 text-pink-300 opacity-80 text-xs">♥</div>
                <div className="absolute top-1/2 right-2 text-pink-200 opacity-80 text-xs">♥</div>
                {/* Tiny star sparkles */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] opacity-30"></div>
              </div>

              {/* Character Illustration / Profile Avatar */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-pink-200 shadow-[0_0_12px_rgba(255,255,255,0.4)] overflow-hidden bg-white/10 flex items-center justify-center">
                  <span className="text-3xl filter drop-shadow">👧🏻</span>
                </div>
                <span className="mt-2 font-pixel text-[11px] font-bold text-pink-200 tracking-wider">
                  NGUYỄN MAI ANH
                </span>
                <span className="text-[10px] font-pixel text-pink-300">
                  meo meo self booth
                </span>
                <div className="mt-1.5 flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full text-[9px] text-pink-100">
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                  <span>Real Photo Booth 2024</span>
                </div>
              </div>
            </div>
          )}

          {/* Quick upload overlay */}
          <button
            onClick={() => setShowUploader(!showUploader)}
            title="Đổi ảnh đại diện / Upload your photo"
            className="absolute bottom-2 right-2 z-20 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full text-xs shadow transition-transform hover:scale-110"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Polaroid Handwritten Style Label */}
        <div className="mt-2 text-center">
          <div className="font-bold text-sm text-slate-800 tracking-wide font-sans">
            Nguyễn Mai Anh ♡
          </div>
          <div className="font-pixel text-[10px] text-pink-600 mt-0.5">
            04.10.2007 • Hanoi
          </div>
        </div>
      </div>

      {/* Optional Photo Uploader panel */}
      {showUploader && (
        <div className="p-2.5 bg-white border border-pink-300 rounded text-xs space-y-1.5">
          <p className="text-[11px] text-slate-600 font-sans">
            Tải ảnh từ máy tính (lưu trên trình duyệt):
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="w-full text-[10px] text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:bg-pink-500 file:text-white hover:file:bg-pink-600 cursor-pointer"
          />
        </div>
      )}

      {/* Cyworld Mini Profile Details (Strictly from CV) */}
      <div className="bg-white border border-pink-200 rounded p-2.5 space-y-2 text-xs">
        <div className="border-b border-dashed border-pink-200 pb-1.5">
          <span className="font-pixel text-[10px] text-pink-500 uppercase block">STATUS QUOTE</span>
          <p className="italic text-slate-700 font-sans text-xs mt-0.5">
            "{PERSONAL_INFO.statusMessage}"
          </p>
        </div>

        <div className="space-y-1 text-[11px] text-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="text-pink-500 font-pixel text-[10px] w-12">DOB:</span>
            <span className="font-mono text-slate-900 font-semibold">{PERSONAL_INFO.birthDate}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-pink-500 font-pixel text-[10px] w-12 flex-shrink-0">SCHOOL:</span>
            <span className="text-slate-900 font-medium">ĐH Ngoại Thương <span className="font-bold text-pink-600">(GPA: 3.83/4.0)</span></span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-pink-500 font-pixel text-[10px] w-12 flex-shrink-0">THPT:</span>
            <span className="text-slate-900">THPT Nhân Chính <span className="font-bold text-amber-600">(GPA: 9.5/10)</span></span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-pink-500 font-pixel text-[10px] w-12 flex-shrink-0">MAJOR:</span>
            <span className="text-slate-900">Kinh tế quốc tế</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-pink-500 font-pixel text-[10px] w-12 flex-shrink-0">LOCATION:</span>
            <span className="text-slate-800 flex items-center gap-0.5">
              <MapPin className="w-3 h-3 text-red-500 flex-shrink-0" />
              <span>Thanh Xuân, Hà Nội</span>
            </span>
          </div>
        </div>

        {/* Quick Contact Buttons (Exact CV Email & Phone) */}
        <div className="pt-2 border-t border-dashed border-pink-200 flex flex-col gap-1">
          <button
            onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
            className="w-full text-left py-1 px-2 rounded bg-pink-50 hover:bg-pink-100 border border-pink-200 flex items-center justify-between text-[11px] text-slate-700 transition-colors"
          >
            <span className="flex items-center gap-1.5 truncate">
              <Mail className="w-3 h-3 text-pink-600 flex-shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </span>
            {copiedContact === 'email' ? (
              <span className="text-emerald-600 font-pixel text-[9px] flex items-center gap-0.5">
                <CheckCircle2 className="w-3 h-3" /> Copied!
              </span>
            ) : (
              <span className="text-[9px] font-pixel text-pink-500">COPY</span>
            )}
          </button>

          <button
            onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
            className="w-full text-left py-1 px-2 rounded bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-between text-[11px] text-slate-700 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-blue-600 flex-shrink-0" />
              <span className="font-mono">{PERSONAL_INFO.phone}</span>
            </span>
            {copiedContact === 'phone' ? (
              <span className="text-emerald-600 font-pixel text-[9px] flex items-center gap-0.5">
                <CheckCircle2 className="w-3 h-3" /> Copied!
              </span>
            ) : (
              <span className="text-[9px] font-pixel text-blue-500">COPY</span>
            )}
          </button>
        </div>
      </div>

      {/* Cyworld Bestie / Quick Navigation Links */}
      <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded p-2 text-center text-xs">
        <div className="font-pixel text-[10px] text-blue-600 mb-1 flex items-center justify-center gap-1">
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          <span>CYWORLD ILCHON (1촌)</span>
        </div>
        <div className="flex justify-center gap-1.5">
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('guestbook')}
            className="px-2 py-0.5 bg-white hover:bg-rose-50 text-rose-600 border border-rose-300 rounded text-[10px] font-pixel retro-btn-3d"
          >
            ✍️ Leave Note
          </button>
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('profile')}
            className="px-2 py-0.5 bg-white hover:bg-blue-50 text-blue-600 border border-blue-300 rounded text-[10px] font-pixel retro-btn-3d"
          >
            🔍 View CV
          </button>
        </div>
      </div>
    </div>
  );
};
