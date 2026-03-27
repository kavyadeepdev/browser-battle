'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Building2, Cog, Radio, Zap, Database, Globe, FlaskConical, Microscope, Plane } from 'lucide-react';

const departments = [
  { code: "CE", name: "Civil Engineering", programs: "B.E · M.Tech", est: "1946", icon: Building2 },
  { code: "ME", name: "Mechanical Engineering", programs: "B.E · M.Tech", est: "1946", icon: Cog },
  { code: "EEE", name: "Electrical & Electronics", programs: "B.E · M.Tech", est: "1963", icon: Zap },
  { code: "ECE", name: "Electronics & Communication", programs: "B.E · M.Tech", est: "1962", icon: Radio },
  { code: "CSE", name: "Computer Science & Engineering", programs: "B.E · M.Tech", est: "1984", icon: Cpu },
  { code: "AI&ML", name: "AI & Machine Learning", programs: "B.E", est: "2020", icon: Database },
  { code: "CSE-DS", name: "Data Science", programs: "B.E", est: "2020", icon: Database },
  { code: "CSE-IoT", name: "IoT & Cyber Security", programs: "B.E", est: "2020", icon: Globe },
  { code: "ISE", name: "Information Science", programs: "B.E · M.Tech", est: "1996", icon: Database },
  { code: "CHE", name: "Chemical Engineering", programs: "B.E · M.Tech", est: "1964", icon: FlaskConical },
  { code: "BT", name: "Bio-Technology", programs: "B.E · M.Tech", est: "2000", icon: Microscope },
  { code: "ASE", name: "Aerospace Engineering", programs: "B.E", est: "2008", icon: Plane }
];

export default function Departments() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden border-t border-navy/5">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Academic Portfolio</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-navy-deep leading-tight">
              Schools & <span className="text-gold italic">Departments</span>
            </h2>
          </div>
          <p className="max-w-md text-navy/40 font-gothic text-sm leading-relaxed border-l border-gold/30 pl-6">
            Offering a comprehensive range of 13 undergraduate and 16 postgraduate programs across conventional and emerging engineering disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
          {departments.map((dept, idx) => (
            <motion.div
              key={dept.code}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-cream p-10 relative overflow-hidden transition-all duration-500 hover:bg-cream-dark cursor-pointer"
            >
              <div className="relative z-10 flex flex-col h-full justify-between space-y-10">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-sm bg-navy/5 border border-navy/5 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-gold/20">
                    <dept.icon size={32} className="text-gold group-hover:text-cream transition-colors duration-500" />
                  </div>
                  <ArrowRight size={24} className="text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-6 group-hover:translate-x-0" />
                </div>

                <div>
                  <div className="font-gothic text-[10px] text-gold uppercase tracking-[0.4em] font-bold mb-3">{dept.code}</div>
                  <h3 className="font-serif text-2xl font-bold text-navy-deep group-hover:text-gold transition-colors duration-500 leading-tight">
                    {dept.name}
                  </h3>
                </div>

                <div className="flex justify-between items-end pt-8 border-t border-navy/5 group-hover:border-gold/30 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-navy/30 group-hover:text-navy/50 transition-colors mb-2">Programs</span>
                    <span className="text-[12px] font-bold text-navy/60 group-hover:text-navy transition-colors">{dept.programs}</span>
                  </div>
                  <span className="font-gothic text-[10px] text-gold/30 group-hover:text-gold/60 transition-colors font-bold">EST. {dept.est}</span>
                </div>
              </div>
              
              {/* Subtle Background Accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}

          {/* More Departments Card - Refined */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="group bg-cream p-10 flex flex-col items-center justify-center text-center space-y-6 hover:bg-gold/5 transition-all duration-500 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold/20 group-hover:bg-gold transition-colors" />
            <div className="font-serif text-6xl font-black text-gold/20 group-hover:text-gold transition-colors duration-500">+8</div>
            <div>
              <div className="font-serif font-bold text-navy-deep text-lg mb-1">More Departments</div>
              <div className="text-[10px] font-gothic uppercase tracking-[0.2em] text-navy/30 font-bold">Science & Humanities</div>
            </div>
            <div className="flex items-center space-x-3 text-gold font-gothic text-[11px] uppercase tracking-[0.3em] font-black group-hover:translate-x-2 transition-transform">
              <span>View All</span>
              <ArrowRight size={16} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
