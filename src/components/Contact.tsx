import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sticker } from './Sticker';
import { audioEngine } from '../utils/audioEngine';

interface ContactProps {
  onGoToGuestbook: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onGoToGuestbook }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyText = (text: string, type: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedType(type);
    audioEngine.playHeartSound();
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-100 via-teal-50 to-pink-100 border-2 border-[#1e1e24] rounded-xl p-4 shadow-[4px_4px_0px_#1e1e24] flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💌</span>
            <h3 className="font-pixel text-xs sm:text-sm text-slate-900 font-bold uppercase tracking-wider">
              SEND A NOTE ♡ CONTACT (연락처)
            </h3>
          </div>
          <p className="text-xs text-slate-600 font-sans mt-0.5">
            Thông tin liên lạc trực tiếp và chính thức của Nguyễn Mai Anh.
          </p>
        </div>
        <Sticker label="OFFICIAL CONTACT" color="bg-emerald-200 border-emerald-400 text-emerald-950" />
      </div>

      {/* Main Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Card */}
        <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-4 shadow-[3px_3px_0px_#1e1e24] flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-pink-200">
              <span className="font-pixel text-[10px] text-pink-600 uppercase">
                DIRECT EMAIL
              </span>
              <Mail className="w-4 h-4 text-pink-500" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mt-2 font-mono break-all">
              {PERSONAL_INFO.email}
            </h4>
            <p className="text-xs text-slate-500 mt-1 font-sans">
              Liên hệ hợp tác công việc, booking, hoặc trao đổi học thuật.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => copyText(PERSONAL_INFO.email, 'email')}
              className="flex-1 py-1.5 px-3 rounded bg-pink-500 hover:bg-pink-600 text-white font-pixel text-xs flex items-center justify-center gap-1.5 retro-btn-3d"
            >
              {copiedType === 'email' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="py-1.5 px-3 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-pixel text-xs border border-slate-300 retro-btn-3d"
            >
              OPEN MAIL
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-4 shadow-[3px_3px_0px_#1e1e24] flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-blue-200">
              <span className="font-pixel text-[10px] text-blue-600 uppercase">
                PHONE / ZALO
              </span>
              <Phone className="w-4 h-4 text-blue-500" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mt-2 font-mono">
              {PERSONAL_INFO.phone}
            </h4>
            <p className="text-xs text-slate-500 mt-1 font-sans">
              Số điện thoại cá nhân chính thức từ CV.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => copyText(PERSONAL_INFO.phone, 'phone')}
              className="flex-1 py-1.5 px-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-pixel text-xs flex items-center justify-center gap-1.5 retro-btn-3d"
            >
              {copiedType === 'phone' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY NUMBER</span>
                </>
              )}
            </button>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="py-1.5 px-3 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-pixel text-xs border border-slate-300 retro-btn-3d"
            >
              CALL
            </a>
          </div>
        </div>
      </div>

      {/* Address & Guestbook redirect callout */}
      <div className="bg-[#fffbeb] border-2 border-[#1e1e24] rounded-xl p-4 shadow-[3px_3px_0px_#1e1e24] flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div className="flex items-start gap-2.5">
          <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-pixel text-[10px] text-amber-800 uppercase block">
              LOCATION BASE
            </span>
            <h4 className="font-bold text-sm text-slate-900 font-sans">
              {PERSONAL_INFO.address}
            </h4>
            <p className="text-xs text-slate-600 font-sans">
              Sinh viên Trường Đại học Ngoại Thương (2025–2029)
            </p>
          </div>
        </div>

        <button
          onClick={onGoToGuestbook}
          className="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-pixel text-xs flex items-center justify-center gap-2 border border-pink-700 shadow retro-btn-3d self-start sm:self-center"
        >
          <MessageSquare className="w-4 h-4" />
          <span>LEAVE A NOTE IN GUESTBOOK ↗</span>
        </button>
      </div>
    </div>
  );
};
