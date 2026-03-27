'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Rocket, Layers, FlaskConical, Cpu, Lightbulb, Microscope } from 'lucide-react';

const stats = [
  { value: "100+", label: "Patents Filed" },
  { value: "50+", label: "Funded Projects" },
  { value: "20+", label: "Research Centers" },
  { value: "500+", label: "Ph.D Scholars" }
];

const labs = [
  { icon: Rocket, tag: "Propel Lab 1", name: "Product Innovation Lab", desc: "Robotics, embedded systems and product ideation" },
  { icon: Layers, tag: "Propel Lab 2", name: "3D Printing Lab", desc: "Advanced additive manufacturing and prototyping" },
  { icon: FlaskConical, tag: "Propel Lab 3", name: "Aerospace Propel Lab", desc: "Cutting-edge aerospace engineering experiments" },
  { icon: Cpu, tag: "Skill Lab", name: "IoT Lab", desc: "Internet of Things, sensors and connected devices" },
  { icon: Lightbulb, tag: "B.S. Narayan CoE", name: "AI & ML Centre", desc: "Research in artificial intelligence and machine learning" },
  { icon: Microscope, tag: "Research Lab", name: "Polymer Composites", desc: "Materials research and composite engineering" }
];

export default function Research() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">R&D & Innovation</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-cream leading-tight">
              Advancing <span className="text-gold italic">Global Knowledge</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:text-cream transition-all group border-b border-gold/30 pb-2">
            <span>Explore Research Repository</span>
            <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats Cells - More defined */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-navy-deep p-12 text-center group hover:bg-navy transition-colors duration-500"
            >
              <div className="font-serif text-5xl font-black text-cream mb-4 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="font-gothic text-gold/60 text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Lab Cards - More defined */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-20">
          {labs.map((lab, idx) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-navy-deep p-10 group hover:bg-navy transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                  <lab.icon size={28} className="text-gold group-hover:text-navy-deep transition-colors duration-500" />
                </div>
                <span className="font-gothic text-[9px] text-gold/40 uppercase tracking-[0.3em] font-bold border border-gold/20 px-3 py-1 rounded-full group-hover:border-gold group-hover:text-gold transition-colors">{lab.tag}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-4 leading-tight group-hover:text-gold transition-colors">{lab.name}</h3>
              <p className="text-cream/40 font-gothic text-xs leading-relaxed mb-10 uppercase tracking-widest font-semibold">{lab.desc}</p>
              <div className="flex items-center space-x-3 text-gold font-gothic font-black text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                <span>Case Study</span>
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CIIE Banner - Refined */}
        <div className="bg-navy border border-gold/20 p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-serif text-[15rem] font-black text-white/5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            CIIE
          </div>
          <div className="space-y-6 max-w-3xl relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              </div>
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-black">Entrepreneurship Wing</span>
            </div>
            <h3 className="font-serif text-4xl font-bold text-cream leading-tight">Centre for Innovation, Incubation & Entrepreneurship</h3>
            <p className="text-cream/50 font-gothic text-sm leading-relaxed max-w-2xl">
              A premier ecosystem empowering the next generation of entrepreneurs with world-class mentorship, state-of-the-art infrastructure, and strategic funding to transform groundbreaking ideas into market-leading ventures.
            </p>
          </div>
          <div className="relative z-10">
            <button className="bg-gold text-navy-deep px-12 py-5 font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:bg-cream transition-all duration-500 shadow-2xl shadow-gold/10">
              Explore CIIE Ecosystem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
