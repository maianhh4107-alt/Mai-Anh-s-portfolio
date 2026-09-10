import React, { useState } from 'react';
import { Folder, FileText, CheckCircle2, Calendar, Briefcase, Sparkles, X } from 'lucide-react';
import { WORK_LIST, WorkItem } from '../data/portfolioData';
import { audioEngine } from '../utils/audioEngine';

export const Workroom: React.FC = () => {
  const [activeWork, setActiveWork] = useState<WorkItem | null>(WORK_LIST[0]);

  const handleSelectFolder = (work: WorkItem) => {
    audioEngine.playClickSound();
    setActiveWork(work);
  };

  return (
    <div className="space-y-4">
      {/* Intro Header */}
      <div className="bg-[#eff6ff] border-2 border-[#1e1e24] rounded-xl p-3.5 shadow-[3px_3px_0px_#1e1e24] flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📁</span>
            <h3 className="font-pixel text-xs text-blue-950 font-bold uppercase tracking-wide">
              MY WORKROOM ✦ (경력 폴더)
            </h3>
          </div>
          <p className="text-xs text-slate-600 font-sans mt-0.5">
            Nhấp vào từng thư mục cổ điển để xem chi tiết kinh nghiệm thực tế từ CV.
          </p>
        </div>
        <span className="text-[10px] font-pixel bg-blue-200 text-blue-900 px-2 py-0.5 rounded border border-blue-400">
          2 FOLDERS FOUND
        </span>
      </div>

      {/* Desktop Folders Shelf */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
        {WORK_LIST.map((work) => {
          const isSelected = activeWork?.id === work.id;
          return (
            <div
              key={work.id}
              onClick={() => handleSelectFolder(work)}
              className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 select-none ${
                isSelected
                  ? 'bg-gradient-to-r from-yellow-100 to-pink-100 border-[#1e1e24] shadow-[4px_4px_0px_#1e1e24] translate-x-0.5 -translate-y-0.5'
                  : 'bg-white hover:bg-slate-50 border-[#1e1e24] shadow-[2px_2px_0px_#1e1e24]'
              }`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-xs border border-black/20"
                style={{ backgroundColor: work.color }}
              >
                <Folder className="w-6 h-6 fill-white" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-pixel text-[9px] bg-slate-800 text-yellow-300 px-1.5 py-0.2 rounded font-bold">
                    {work.year}
                  </span>
                  <span className="font-bold text-xs text-slate-900 truncate font-sans">
                    {work.company}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 truncate mt-0.5 font-sans">
                  {work.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Retro Window for Active Work */}
      {activeWork && (
        <div className="bg-[#fdfafb] border-2 border-[#1e1e24] rounded-xl shadow-[5px_5px_0px_#1e1e24] overflow-hidden animate-in fade-in duration-200">
          {/* Title Bar */}
          <div className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white px-3 py-1.5 border-b-2 border-[#1e1e24] flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-yellow-300" />
              <span className="font-pixel text-xs tracking-wide">
                EXPLORER://{activeWork.company}_{activeWork.year}.DOC
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 bg-white/80 rounded-xs flex items-center justify-center text-[10px] text-slate-800 font-bold border border-black/40">
                _
              </span>
              <span className="w-3.5 h-3.5 bg-white/80 rounded-xs flex items-center justify-center text-[10px] text-slate-800 font-bold border border-black/40">
                □
              </span>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-4 space-y-4">
            {/* Header info */}
            <div className="p-3 bg-white border border-slate-300 rounded-lg shadow-inner flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <span className="font-pixel text-[10px] text-blue-600 uppercase">
                  ORGANIZATION & POSITION
                </span>
                <h4 className="text-lg font-black text-slate-900 font-sans">
                  {activeWork.company}
                </h4>
                <p className="text-xs font-bold text-pink-600 flex items-center gap-1 font-sans">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{activeWork.role}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="font-pixel text-xs bg-yellow-300 text-yellow-950 font-bold px-2.5 py-1 rounded border border-yellow-500 shadow-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {activeWork.year}
                </span>
                <span className="font-pixel text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-1 rounded font-bold">
                  CV FACTUAL
                </span>
              </div>
            </div>

            {/* Responsibilities list (Exact CV text) */}
            <div className="space-y-2">
              <h5 className="font-pixel text-xs text-slate-800 font-bold flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                NHIỆM VỤ & TRÁCH NHIỆM CHÍNH (CV):
              </h5>
              <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-2">
                {activeWork.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 font-sans leading-relaxed">
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Retro stamp */}
            <div className="flex justify-between items-center pt-2 border-t border-dashed border-slate-200 text-[10px] font-pixel text-slate-500">
              <span>PATH: C:\PORTFOLIO\WORK\{activeWork.id}</span>
              <span className="text-pink-600 font-bold">100% FACTUAL EXPERIENCE</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
