'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Quote, ArrowUpRight } from 'lucide-react';

const founders = [
  {
    initial: "B",
    name: "Late Sri. B.M. Sreenivasaiah",
    role: "Founder, B.M.S. Educational Trust",
    desc: "Visionary and philanthropist who pioneered private engineering education in India in 1946."
  },
  {
    initial: "N",
    name: "Late Sri. B.S. Narayan",
    role: "Donor Trustee, B.M.S. Educational Trust",
    desc: "Continued his father's legacy, transforming BMSCE into a world-class institution over decades."
  }
];

export default function Visionaries() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden border-t border-navy/5">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Our Foundation</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-navy-deep leading-tight">
              The <span className="text-gold italic">Visionaries</span>
            </h2>
          </div>
          <p className="max-w-md text-navy/40 font-gothic text-sm leading-relaxed border-l border-gold/30 pl-6">
            B.M.S. College of Engineering was founded in 1946 by Late Sri. B. M. Sreenivasaiah — a great visionary — and nurtured by his son Late Sri. B. S. Narayan.
          </p>
        </div>

        {/* Founders Grid - More defined */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-navy/10 border border-navy/10 mb-20">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cream p-12 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10 group hover:bg-cream-dark transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-sm bg-navy/5 border border-navy/5 flex items-center justify-center font-serif text-3xl font-black text-gold group-hover:bg-gold group-hover:text-cream transition-all duration-500 shrink-0">
                {founder.initial}
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold text-navy-deep leading-tight group-hover:text-gold transition-colors">{founder.name}</h3>
                <div className="font-gothic text-[10px] text-gold uppercase tracking-[0.3em] font-black">{founder.role}</div>
                <p className="text-navy/40 font-gothic text-xs leading-relaxed uppercase tracking-widest font-semibold">{founder.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Principal's Message - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cream-dark border border-gold/20 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <div className="grid lg:grid-cols-12">
            {/* Left Panel */}
            <div className="lg:col-span-4 p-12 lg:p-16 bg-navy/5 border-b lg:border-b-0 lg:border-r border-navy/5 flex flex-col items-center text-center space-y-8">
              <div className="w-32 h-32 rounded-sm border border-gold/30 p-1 group-hover:border-gold transition-all duration-500">
                <div className="w-full h-full rounded-sm bg-gold/10 flex items-center justify-center overflow-hidden">
                  <span className="font-serif text-5xl font-black text-gold">BA</span>
                </div>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-navy-deep">Dr. Bheemsha Arya</h4>
                <div className="font-gothic text-[10px] text-gold uppercase tracking-[0.3em] font-black mt-2">Principal, BMSCE</div>
              </div>
              <button className="flex items-center space-x-3 text-gold font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
                <span>View Profile</span>
                <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Panel */}
            <div className="lg:col-span-8 p-12 lg:p-16 relative flex flex-col justify-center">
              <Quote size={60} className="text-gold/10 absolute top-12 right-12" />
              <div className="space-y-8 relative z-10">
                <p className="text-navy-deep/80 text-2xl leading-relaxed italic font-serif">
                  &ldquo;A nation&apos;s real and sustainable growth is possible with technological advancement... The key to meet the demand for such quality engineers remains in providing <span className="text-gold font-bold">holistic engineering education</span>.&rdquo;
                </p>
                <p className="text-navy/40 font-gothic text-sm leading-relaxed max-w-3xl uppercase tracking-widest font-semibold">
                  BMSCE has been at the forefront of engineering education for over 75 years, consistently adapting to the changing needs of the industry while maintaining its core values of excellence and innovation.
                </p>
                <div className="w-20 h-0.5 bg-gold/30" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
