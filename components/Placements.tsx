'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Trophy, Users, Building, Percent } from 'lucide-react';

const stats = [
  { icon: Trophy, value: "₹44 LPA", label: "Highest Package", desc: "International offer — AY 2024-25" },
  { icon: Trophy, value: "#1", label: "Placement Rank", desc: "Times Engineering Survey 2019" },
  { icon: Building, value: "250+", label: "Recruiting Partners", desc: "Fortune 500 & top Indian firms" },
  { icon: Percent, value: "90%+", label: "Placement Rate", desc: "Consistent across programs" }
];

const companies = [
  "Google", "Microsoft", "Amazon", "Infosys", "Wipro", "TCS", "Accenture", "Deloitte", "IBM", "Cisco", "Intel", "Qualcomm", "Bosch", "Siemens", "ABB", "Oracle", "SAP", "Capgemini", "HCL", "Tech Mahindra", "L&T", "ISRO", "DRDO", "BHEL"
];

export default function Placements() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden border-t border-navy/5">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Career Outcomes</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-navy-deep leading-tight">
              Placements & <span className="text-gold italic">Industry Impact</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
            <span>Download Placement Report</span>
            <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cream p-12 text-center group hover:bg-cream-dark transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-sm bg-navy/5 border border-navy/5 flex items-center justify-center mx-auto mb-10 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                <stat.icon size={28} className="text-gold group-hover:text-cream transition-colors duration-500" />
              </div>
              <div className="font-serif text-5xl font-black text-navy-deep mb-4 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="font-gothic text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">{stat.label}</div>
              <div className="text-navy/30 font-gothic text-[10px] uppercase tracking-widest font-semibold leading-relaxed">{stat.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Company Marquee - Refined */}
        <div className="space-y-12 mb-20">
          <div className="flex items-center justify-center space-x-6">
            <div className="h-px bg-gold/20 flex-1" />
            <div className="font-gothic font-black text-navy/30 uppercase tracking-[0.4em] text-[10px] whitespace-nowrap">
              Trusted by 250+ Industry Leaders
            </div>
            <div className="h-px bg-gold/20 flex-1" />
          </div>
          <div className="relative overflow-hidden py-10">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-cream to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-cream to-transparent z-10" />
            
            <div className="flex whitespace-nowrap animate-marquee">
              {[...companies, ...companies].map((company, i) => (
                <div key={i} className="mx-6 px-12 py-5 bg-cream-dark border border-navy/5 text-navy/40 font-serif font-bold text-xl min-w-[200px] text-center shadow-2xl hover:text-gold hover:border-gold/30 transition-all duration-500 cursor-default">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Strip - Refined */}
        <div className="bg-cream-dark border border-gold/20 p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <div className="space-y-6 text-center lg:text-left relative z-10 max-w-2xl">
            <h3 className="font-serif text-4xl font-bold text-navy-deep">Looking to recruit at BMSCE?</h3>
            <p className="text-navy/50 font-gothic text-sm leading-relaxed">
              Our Placement Cell facilitates seamless recruitment drives for global industry leaders, providing access to a diverse pool of highly skilled engineering talent.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="bg-gold text-cream px-12 py-5 font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy-deep transition-all duration-500 shadow-2xl shadow-gold/10">
              Corporate Relations
            </button>
            <button className="px-12 py-5 border border-navy/20 text-navy-deep font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:bg-navy/5 hover:border-gold transition-all duration-500">
              Placement Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
