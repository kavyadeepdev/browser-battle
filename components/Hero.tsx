'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    pill: "NAAC A++ Accredited",
    line1: "Engineering",
    line2: "Excellence",
    sub: "Since 1946",
    accent: "Ranked 83rd in NIRF 2022",
    body: "B.M.S. College of Engineering is India's first private sector initiative in engineering education, fostering innovation for over 78 years."
  },
  {
    pill: "Research & Innovation",
    line1: "Pioneering",
    line2: "Discovery",
    sub: "Across 20+ Research Centers",
    accent: "100+ Patents Filed",
    body: "Our commitment to research and development has led to groundbreaking discoveries and a culture of continuous learning."
  },
  {
    pill: "Placements 2024–25",
    line1: "Limitless",
    line2: "Careers",
    sub: "#1 in Placements — Times Survey",
    accent: "250+ Recruiting Companies",
    body: "Connecting our talented students with global industry leaders, ensuring a bright and successful future for every graduate."
  }
];

const stats = [
  { value: "78+", label: "Years of Excellence", desc: "Shaping engineers since 1946" },
  { value: "A++", label: "NAAC Rating", desc: "Third Cycle Accreditation" },
  { value: "250+", label: "Recruiting Partners", desc: "Top global companies" },
  { value: "83rd", label: "NIRF 2022 Rank", desc: "Among India's best" }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[95vh] bg-navy-deep overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/bmsce-campus-traditional/1920/1080" 
          alt="BMSCE Campus" 
          fill
          className="object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30 z-10" />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none dot-grid" />

      <div className="max-w-[1280px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-30 py-20">
        {/* Left Content */}
        <div className="relative h-[450px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8 font-serif"
            >
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-gold/10 border border-gold/20">
                <span className="font-sans text-[11px] text-gold uppercase tracking-[0.3em] font-bold">{slides[currentSlide].pill}</span>
              </div>

              <h1 className="font-serif font-black text-cream leading-[0.9] tracking-tighter text-[clamp(3.5rem,7vw,6rem)]">
                <div>{slides[currentSlide].line1}</div>
                <div className="text-gold italic mt-2">{slides[currentSlide].line2}</div>
              </h1>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-gold/50" />
                <span className="font-gothic text-xs text-gold/80 tracking-[0.4em] uppercase font-semibold">{slides[currentSlide].sub}</span>
              </div>

              <p className="max-w-lg text-cream/80 font-serif leading-relaxed text-lg border-l border-white/10 pl-6 italic">
                {slides[currentSlide].body}
              </p>

              <div className="flex flex-wrap gap-6 pt-6">
                <button className="group bg-gold text-navy-deep px-12 py-5 rounded-sm font-gothic font-bold flex items-center space-x-4 hover:bg-cream transition-all duration-500 shadow-[0_20px_40px_rgba(220,38,38,0.3)] uppercase tracking-[0.2em] text-[11px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10">Explore Programs</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform relative z-10" />
                </button>
                <button className="px-10 py-5 rounded-sm border border-white/20 text-cream font-gothic font-bold hover:bg-white/5 hover:border-gold transition-all duration-300 uppercase tracking-[0.2em] text-[11px] opacity-70 hover:opacity-100">
                  Virtual Tour
                </button>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-6 pt-8">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition-all duration-300 group"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition-all duration-300 group"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="pt-4 flex items-center space-x-3 text-gold/60 font-gothic text-[10px] uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 bg-gold rotate-45" />
                <span>{slides[currentSlide].accent}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content - Circular Stats Figure */}
        <div className="hidden lg:flex items-center justify-center relative h-[600px] w-full">
          {mounted && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[500px] h-[500px] flex items-center justify-center"
            >
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_100s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-gold/10 animate-[spin_80s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />

              {/* Central Core */}
              <div className="absolute w-44 h-44 rounded-full border-2 border-gold/30 flex items-center justify-center bg-navy-deep/60 backdrop-blur-2xl z-20 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                <div className="text-center">
                  <div className="font-serif text-gold text-4xl font-black tracking-tighter">BMSCE</div>
                  <div className="font-gothic text-[9px] text-cream/40 uppercase tracking-[0.4em] mt-2">Est. 1946</div>
                </div>
              </div>

            {/* Stats positioned circularly */}
            {stats.map((stat, idx) => {
              // Position them at 270 (Top), 0 (Right), 90 (Bottom), 180 (Left) for perfect symmetry
              const angles = [270, 0, 90, 180]; 
              const angle = angles[idx];
              const radius = 180; 
              const xPos = Math.round(Math.cos((angle * Math.PI) / 180) * radius);
              const yPos = Math.round(Math.sin((angle * Math.PI) / 180) * radius);

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x: xPos, y: yPos }}
                  transition={{ 
                    delay: 0.5 + idx * 0.1, 
                    duration: 0.8, 
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="absolute w-40 h-40 p-6 bg-navy-deep/80 border border-white/10 backdrop-blur-xl rounded-full flex flex-col items-center justify-center text-center hover:border-gold/50 transition-all duration-500 group cursor-default z-30 shadow-2xl"
                >
                  <div className="font-serif text-4xl font-bold text-gold group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-cream font-sans font-bold text-[10px] uppercase tracking-wider mt-2 leading-tight">{stat.label}</div>
                  <div className="text-cream/30 font-sans text-[8px] uppercase tracking-widest mt-2 max-w-[80px] leading-relaxed">{stat.desc}</div>
                </motion.div>
              );
            })}
            </motion.div>
          )}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-12 flex flex-col space-y-4 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 h-12 w-[2px] ${
              currentSlide === idx ? 'bg-gold' : 'bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* Bottom Info Bar - More defined and professional */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-deep/90 backdrop-blur-md border-t border-white/5 py-4 z-40 hidden lg:block">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <div className="flex space-x-12">
            {["13 UG Programs", "16 PG Programs", "NAAC A++", "Global Alumni"].map((text) => (
              <div key={text} className="flex items-center space-x-3 group cursor-default">
                <div className="w-1 h-1 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-cream/50 text-[10px] font-gothic uppercase tracking-[0.2em] font-bold group-hover:text-gold transition-colors">{text}</span>
              </div>
            ))}
          </div>
          <div className="text-gold/40 font-gothic text-[9px] uppercase tracking-[0.3em] font-bold">
            Engineering Excellence Since 1946
          </div>
        </div>
      </div>
    </section>
  );
}
