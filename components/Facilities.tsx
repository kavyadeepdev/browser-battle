'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Hospital, BookOpen, Home, Server, Dumbbell, Heart, Users, Globe } from 'lucide-react';

const facilities = [
  { icon: Hospital, name: "BMS Hospital", desc: "On-campus healthcare for students and staff." },
  { icon: BookOpen, name: "Central Library", desc: "Vast collection of books, journals & e-resources." },
  { icon: Home, name: "Hostels", desc: "Comfortable accommodation for outstation students." },
  { icon: Server, name: "Data Center", desc: "State-of-the-art computing infrastructure." },
  { icon: Dumbbell, name: "Sports Complex", desc: "Outdoor & indoor sports facilities." },
  { icon: Heart, name: "Counselling Center", desc: "Mental wellness support for all students." },
  { icon: Users, name: "NSS & NCC", desc: "Social service and discipline programs." },
  { icon: Globe, name: "International Cell", desc: "Support for OCI & foreign passport holders." }
];

export default function Facilities() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Campus Life</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-cream leading-tight">
              World-Class <span className="text-gold italic">Facilities</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:text-cream transition-all group border-b border-gold/30 pb-2">
            <span>Life at BMSCE</span>
            <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-navy-deep p-10 group cursor-pointer hover:bg-navy transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy-deep transition-all duration-500">
                <fac.icon size={28} className="text-gold group-hover:text-navy-deep transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-cream mb-4 leading-tight group-hover:text-gold transition-colors">{fac.name}</h3>
              <p className="text-cream/40 font-gothic text-xs leading-relaxed uppercase tracking-widest font-semibold mb-8">{fac.desc}</p>
              <div className="flex items-center space-x-3 text-gold font-gothic text-[10px] uppercase tracking-[0.3em] font-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span>Explore Facility</span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
