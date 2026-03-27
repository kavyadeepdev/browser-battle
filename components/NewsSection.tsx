'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Bell, FileText } from 'lucide-react';

const news = [
  {
    date: "09",
    month: "MAR",
    category: "FDP",
    color: "text-blue-500 bg-blue-500/10",
    title: "DST-FIST Sponsored Faculty Development Program on Micro and Nano Characterization for Advanced Materials Research"
  },
  {
    date: "16",
    month: "FEB",
    category: "Workshop",
    color: "text-green-500 bg-green-500/10",
    title: "Comprehensive Workshop on Indian Standards, Codes and Regulations in Lighting — Illuminating the Future"
  },
  {
    date: "05",
    month: "FEB",
    category: "Scholarship",
    color: "text-amber-500 bg-amber-500/10",
    title: "Sri S Nijalingappa Scholarship 2025–26 — Applications Now Open"
  },
  {
    date: "14",
    month: "NOV",
    category: "Conference",
    color: "text-purple-500 bg-purple-500/10",
    title: "NETWORKING EMBEDDED AND WIRELESS SYSTEMS (NEWS) 2025 — National Conference by ECE Dept"
  },
  {
    date: "19",
    month: "SEP",
    category: "Event",
    color: "text-red-500 bg-red-500/10",
    title: "Phase Shift 2025 MERIDIAN — Annual Technical Festival on 19th & 20th September 2025"
  }
];

const notifications = [
  "Faculty Recruitment — Assistant Professor (CS Cluster). Apply by 25/03/2026.",
  "Admissions Open: Management Quota PG (M.Tech, MBA, MCA) 2026-27.",
  "B.S. Narayan Doctoral Fellowship 2025-26 — Apply before 31 Dec 2025.",
  "Change of Branch (COB) Circular for AY 2025-26 — Download Available.",
  "UG 2nd Year Fee Circular 2025-26 — Download Available."
];

const coeNotices = [
  "Time Table: IV Semester Makeup Examination MBA — Mar 2026.",
  "Circular: Photocopy / Challenge Valuation PG III Semester SEE Jan/Feb-26.",
  "Circular: Revaluation/Photocopy UG I, III Semesters SEE Jan/Feb-26.",
  "Makeup Registration for I and III Semester March 2026 — Fees Circular.",
  "Time Table: I Semester MBA (Re-Appear) SEE March 2026."
];

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState<'notifications' | 'coe'>('notifications');

  return (
    <section className="py-24 bg-cream relative overflow-hidden border-t border-navy/5">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">University Bulletin</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-navy-deep leading-tight">
              News & <span className="text-gold italic">Announcements</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
            <span>View All Press Releases</span>
            <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-navy/10 border border-navy/10">
          {/* Left - News List */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-px bg-navy/10">
            {news.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-cream p-8 flex items-center space-x-10 group cursor-pointer hover:bg-cream-dark transition-all duration-500"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-navy/5 border border-navy/5 rounded-sm flex flex-col items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-gold/20">
                  <span className="font-serif text-4xl font-black text-gold group-hover:text-cream leading-none transition-colors">{item.date}</span>
                  <span className="font-gothic text-[11px] text-navy/30 group-hover:text-cream/60 mt-3 font-bold transition-colors uppercase tracking-[0.2em]">{item.month}</span>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-gothic uppercase tracking-[0.3em] font-black border border-gold/20 ${item.color.split(' ')[0]}`}>
                      {item.category}
                    </span>
                    <div className="w-1.5 h-1.5 bg-gold/30 rounded-full" />
                    <span className="text-[11px] font-gothic uppercase tracking-[0.2em] text-navy/30 font-bold">Academic Year 2025–26</span>
                  </div>
                  <h3 className="font-serif font-bold text-navy-deep text-2xl leading-tight group-hover:text-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <div className="text-gold opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 pr-4">
                  <ArrowUpRight size={24} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Notifications Panel */}
          <div className="lg:col-span-4 bg-cream-dark flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <div className="flex border-b border-navy/5">
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`flex-1 flex items-center justify-center space-x-3 py-8 text-[10px] font-gothic uppercase tracking-[0.3em] font-black transition-all relative ${activeTab === 'notifications' ? 'text-gold' : 'text-navy/30 hover:text-navy/50'}`}
              >
                <Bell size={16} />
                <span>Bulletin</span>
                {activeTab === 'notifications' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />}
              </button>
              <button 
                onClick={() => setActiveTab('coe')}
                className={`flex-1 flex items-center justify-center space-x-3 py-8 text-[10px] font-gothic uppercase tracking-[0.3em] font-black transition-all relative ${activeTab === 'coe' ? 'text-gold' : 'text-navy/30 hover:text-navy/50'}`}
              >
                <FileText size={16} />
                <span>COE</span>
                {activeTab === 'coe' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />}
              </button>
            </div>
            
            <div className="flex-1 p-10 space-y-10 overflow-y-auto max-h-[600px] bg-navy/5">
              {(activeTab === 'notifications' ? notifications : coeNotices).map((text, idx) => (
                <div key={idx} className="flex items-start space-x-6 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-500" />
                  <p className="text-[12px] text-navy/40 font-gothic uppercase tracking-widest font-semibold leading-relaxed group-hover:text-gold transition-colors">{text}</p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-cream-dark border-t border-navy/5">
              <button className="w-full bg-navy/5 border border-navy/10 text-gold py-5 font-gothic text-[10px] uppercase tracking-[0.3em] font-black hover:bg-gold hover:text-cream transition-all duration-500 flex items-center justify-center space-x-3">
                <span>Access Portal</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrolling Ticker - Refined */}
        <div className="mt-20 bg-cream-dark border border-navy/5 py-5 px-10 overflow-hidden relative group">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream-dark to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream-dark to-transparent z-10" />
          <div className="flex whitespace-nowrap animate-marquee">
            {[...notifications, ...notifications].map((text, i) => (
              <div key={i} className="flex items-center text-navy/30 font-gothic text-[10px] uppercase tracking-[0.2em] font-black">
                <span className="text-gold mx-10">◆</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
