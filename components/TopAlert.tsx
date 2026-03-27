'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';

export default function TopAlert() {
  return (
    <div className="bg-navy-deep text-cream py-3 px-8 relative z-[60] border-b border-gold/20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-4">
        <div className="flex items-center space-x-2 bg-gold/10 border border-gold/20 px-3 py-1 rounded-sm">
          <Info size={12} className="text-gold shrink-0" />
          <span className="text-[9px] font-gothic font-black text-gold uppercase tracking-[0.2em]">Notice</span>
        </div>
        <p className="text-[10px] font-gothic font-black uppercase tracking-[0.3em] text-center leading-none">
          Admissions Open for Management Quota seats — First Year B.E & PG Courses 2026-27. <span className="text-gold hover:text-cream cursor-pointer ml-3 border-b border-gold/30 hover:border-cream transition-all duration-500">View Details &rarr;</span>
        </p>
      </div>
    </div>
  );
}
