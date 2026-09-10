import React from 'react';
import { GraduationCap, Award, CheckCircle, Sparkles, BookOpen, Star, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_LIST, SKILLS_LIST, ACHIEVEMENTS_LIST } from '../data/portfolioData';
import { AchievementBadge } from './AchievementBadge';
import { Sticker } from './Sticker';

export const Profile: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Scrapbook Header Banner */}
      <div className="bg-gradient-to-r from-pink-200 via-yellow-100 to-rose-200 border-2 border-[#1e1e24] rounded-xl p-4 shadow-[4px_4px_0px_#1e1e24] relative overflow-hidden">
        <div className="flex items-center justify-between flex-wrap gap-2 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎀</span>
              <h3 className="font-pixel text-sm text-pink-950 font-bold uppercase tracking-wider">
                MY PROFILE ♡ (프로필)
              </h3>
            </div>
            <p className="text-xs text-slate-700 font-sans mt-0.5">
              Hồ sơ học vấn, kỹ năng và thành tích thực tế trích xuất 100% từ CV của Mai Anh.
            </p>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <Sticker label="FTU GPA 3.83/4.0" color="bg-rose-300 border-rose-500 text-rose-950" />
            <Sticker label="THPT GPA 9.5/10" color="bg-yellow-300 border-yellow-500 text-yellow-950" />
          </div>
        </div>
      </div>

      {/* Grid: Left Column (Personal & Education), Right Column (Skills & Achievements) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Education & Academic History */}
        <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-4 shadow-[3px_3px_0px_#1e1e24] space-y-3 relative">
          {/* Washi tape visual */}
          <div className="absolute -top-2.5 left-8 w-20 h-5 bg-pink-300/80 border border-pink-400 rotate-2 shadow-xs pointer-events-none"></div>

          <div className="flex items-center gap-2 pb-2 border-b-2 border-dashed border-pink-200">
            <GraduationCap className="w-5 h-5 text-pink-600" />
            <h4 className="font-pixel text-xs text-slate-900 font-bold uppercase">
              HỌC VẤN / EDUCATION
            </h4>
          </div>

          <div className="space-y-3">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className="p-3 rounded-lg bg-[#fff8fa] border border-pink-200 relative group hover:border-pink-400 transition-colors"
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-sm text-slate-900 font-sans">
                    {edu.school}
                  </span>
                  <span className="font-pixel text-[10px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded border border-pink-300">
                    {edu.period}
                  </span>
                </div>

                <div className="text-xs text-slate-700 font-sans space-y-0.5">
                  <div className="font-medium text-pink-700 flex items-center gap-1">
                    <span>✦ {edu.degree}</span>
                  </div>
                  {edu.gpa && (
                    <div className="inline-block mt-1 font-pixel text-[11px] bg-yellow-200 text-yellow-950 px-2 py-0.5 rounded font-bold border border-yellow-400">
                      GPA: {edu.gpa}
                    </div>
                  )}
                  {edu.details && (
                    <p className="text-[11px] text-slate-500 italic mt-0.5">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Recap */}
          <div className="mt-3 p-2.5 bg-sky-50 border border-sky-200 rounded-lg space-y-1 text-xs font-sans text-slate-700">
            <div className="font-pixel text-[10px] text-sky-800 font-bold uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-sky-600" />
              THÔNG TIN LIÊN HỆ CHÍNH THỨC:
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <Mail className="w-3 h-3 text-sky-600" />
              <span>{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <Phone className="w-3 h-3 text-sky-600" />
              <span className="font-mono">{PERSONAL_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <MapPin className="w-3 h-3 text-sky-600" />
              <span>{PERSONAL_INFO.address}</span>
            </div>
          </div>
        </div>

        {/* Skills & Verified Achievements */}
        <div className="space-y-4">
          {/* Skills Section */}
          <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-4 shadow-[3px_3px_0px_#1e1e24] space-y-3 relative">
            <div className="absolute -top-2.5 right-8 w-20 h-5 bg-yellow-300/80 border border-yellow-400 -rotate-2 shadow-xs pointer-events-none"></div>

            <div className="flex items-center gap-2 pb-2 border-b-2 border-dashed border-yellow-300">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <h4 className="font-pixel text-xs text-slate-900 font-bold uppercase">
                KỸ NĂNG / SKILLS (CV)
              </h4>
            </div>

            <div className="space-y-2.5">
              {SKILLS_LIST.map((skill) => (
                <div
                  key={skill.id}
                  className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900 font-sans flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      {skill.name}
                    </span>
                    <span className="font-pixel text-[9px] bg-white text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                      {skill.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 flex-wrap pt-0.5">
                    {skill.items.map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-pixel bg-white text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Badges Section */}
          <div className="bg-white border-2 border-[#1e1e24] rounded-xl p-4 shadow-[3px_3px_0px_#1e1e24] space-y-3 relative">
            <div className="flex items-center justify-between pb-2 border-b-2 border-dashed border-amber-300">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <h4 className="font-pixel text-xs text-slate-900 font-bold uppercase">
                  ACHIEVEMENT UNLOCKED ✦ (CV)
                </h4>
              </div>
              <span className="font-pixel text-[9px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold">
                2 AWARDS
              </span>
            </div>

            <p className="text-xs text-slate-600 font-sans">
              Các giải thưởng nghệ thuật biểu diễn chính thức được ghi nhận trong CV:
            </p>

            <div className="space-y-2.5">
              {ACHIEVEMENTS_LIST.map((ach) => (
                <AchievementBadge key={ach.id} achievement={ach} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
