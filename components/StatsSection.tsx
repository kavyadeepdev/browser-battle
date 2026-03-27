'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const accreditations = [
  { title: "NAAC", value: "A++", desc: "Third Cycle — Highest Grade" },
  { title: "NIRF 2022", value: "#83", desc: "National Institutional Ranking" },
  { title: "NBA", value: "✓", desc: "Multiple Programs Accredited" },
  { title: "AICTE", value: "✓", desc: "Approved Institution" }
];

const counters = [
  { value: 1946, label: "Established", sub: "Pioneering Education" },
  { value: 78, label: "Years of Legacy", sub: "Shaping Engineers", suffix: "+" },
  { value: 13, label: "UG Programs", sub: "Conventional & Emerging" },
  { value: 16, label: "PG Programs", sub: "Specialized Learning" },
  { value: 250, label: "Recruiters", sub: "Top Global Firms", suffix: "+" },
  { value: 83, label: "NIRF Rank", sub: "Among India's Best", suffix: "rd" }
];

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1800;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsAccreditations() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy-deep via-navy-deep/50 to-navy-deep pointer-events-none" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Institutional Excellence</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-cream leading-tight">
              A Legacy of <span className="text-gold italic">Academic Distinction</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-cream/40 font-gothic text-xs uppercase tracking-[0.2em] font-bold border-r-2 border-gold pr-6 text-right">
              NAAC A++ Accredited<br />Autonomous Institution
            </p>
          </div>
        </div>

        {/* Accreditations Grid - More defined */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-20 border border-white/10">
          {accreditations.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 text-center border-r border-b lg:border-b-0 border-white/10 group hover:bg-gold/5 transition-all duration-500 last:border-r-0"
            >
              <div className="font-gothic text-[10px] text-gold/60 uppercase tracking-[0.3em] font-bold mb-6">{item.title}</div>
              <div className="font-serif text-5xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform duration-500">{item.value}</div>
              <div className="text-cream/50 text-[11px] font-gothic uppercase tracking-widest font-semibold leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Counters Grid - More structured */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-white/10 border border-white/10 mb-20 shadow-2xl">
          {counters.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-navy-deep p-10 text-center group hover:bg-navy transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              <div className="relative z-10">
                <div className="font-serif text-5xl font-bold text-gold mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-cream font-gothic font-bold text-[11px] uppercase tracking-[0.2em] mb-3">{stat.label}</div>
                <div className="text-cream/30 text-[9px] uppercase tracking-[0.3em] font-bold">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner - Refined */}
        <div className="bg-navy border border-gold/20 p-10 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <div className="relative z-10">
            <h4 className="text-gold font-serif text-2xl font-bold mb-2">Times Engineering Survey Recognition</h4>
            <p className="text-cream/60 font-gothic text-sm leading-relaxed max-w-3xl">
              Consistently ranked among the elite institutions in India. <span className="text-cream font-bold">8th</span> among Top 140 Engineering Institutes and <span className="text-gold font-bold underline underline-offset-4">#1 for Placement Excellence</span> nationwide.
            </p>
          </div>
          <button className="bg-gold text-navy-deep px-10 py-4 font-gothic text-[11px] uppercase tracking-[0.2em] font-black hover:bg-cream transition-all duration-500 shrink-0 shadow-2xl shadow-gold/10">
            View Full Rankings
          </button>
        </div>
      </div>
    </section>
  );
}
