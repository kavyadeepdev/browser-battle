'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';

const programs = [
  {
    level: "UG",
    title: "Bachelor of Engineering",
    duration: "4 Years",
    intake: "13 Programs",
    status: "Open for 2026–27",
    statusColor: "text-green-400 bg-green-400/10",
    features: ["CET / COMEDK Admission", "Management Quota Available", "Hostel Facilities", "Scholarship Schemes"]
  },
  {
    level: "PG",
    title: "M.Tech / MBA / MCA",
    duration: "2 Years",
    intake: "16 Programs",
    status: "Open for 2026–27",
    statusColor: "text-green-400 bg-green-400/10",
    features: ["GATE / PGCET / KMAT", "Management Quota Available", "Research Opportunities", "Industry Collaborations"]
  },
  {
    level: "Ph.D",
    title: "Doctoral Programs",
    duration: "3–5 Years",
    intake: "All Departments",
    status: "Rolling Admissions",
    statusColor: "text-blue-400 bg-blue-400/10",
    features: ["B.S. Narayan Fellowship", "Funded Research Projects", "20+ Research Centers", "VTU Affiliation"]
  },
  {
    level: "INT'L",
    title: "International Admissions",
    duration: "Varies",
    intake: "All UG & PG",
    status: "Applications Open",
    statusColor: "text-purple-400 bg-purple-400/10",
    features: ["OCI / Foreign Passport", "UK / US / AU Scholarships", "Dedicated Support Cell", "Global Alumni Network"]
  }
];

const steps = [
  { id: "01", label: "Check Eligibility" },
  { id: "02", label: "Apply Online" },
  { id: "03", label: "Document Verification" },
  { id: "04", label: "Enrollment" }
];

export default function Admissions() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Enrollment 2026–27</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-cream leading-tight">
              Begin Your <span className="text-gold italic">Academic Journey</span>
            </h2>
          </div>
          <p className="max-w-md text-cream/40 font-gothic text-sm leading-relaxed border-l border-gold/30 pl-6">
            Applications for the academic year 2026–27 are now open. Explore our diverse range of undergraduate, postgraduate, and doctoral programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-20">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.level}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-navy-deep p-10 flex flex-col group hover:bg-navy transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold/10 group-hover:bg-gold transition-colors" />
              
              <div className="space-y-8 mb-10">
                <div className="flex justify-between items-start">
                  <span className="font-serif text-5xl font-black text-cream group-hover:text-gold transition-colors">{prog.level}</span>
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-gothic uppercase tracking-[0.2em] font-black border ${prog.statusColor.includes('green') ? 'border-green-400/30 text-green-400' : 'border-blue-400/30 text-blue-400'}`}>
                    {prog.status}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-cream mb-3 leading-tight group-hover:text-gold transition-colors">{prog.title}</h3>
                  <div className="flex items-center space-x-4 text-cream/30 font-gothic text-[10px] uppercase tracking-[0.2em] font-bold">
                    <div className="flex items-center space-x-2">
                      <Clock size={14} className="text-gold" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="w-1 h-1 bg-gold/30 rounded-full" />
                    <span>{prog.intake}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-5 mb-10">
                {prog.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-[12px] text-cream/50 font-gothic uppercase tracking-widest font-semibold leading-tight group-hover:text-cream/70 transition-colors">{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gold text-navy-deep py-5 font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:bg-cream transition-all duration-500 shadow-2xl shadow-gold/10 flex items-center justify-center space-x-3">
                <span>Apply Now</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Timeline Banner - Refined */}
        <div className="bg-navy border border-gold/20 p-12 lg:p-20 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-md space-y-4">
              <h3 className="font-serif text-3xl font-bold text-cream">Admission Process</h3>
              <p className="text-cream/40 font-gothic text-sm leading-relaxed">
                A streamlined, transparent four-step process designed to facilitate your transition into the BMSCE academic community.
              </p>
            </div>
            
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full relative">
              {/* Progress Line */}
              <div className="absolute top-8 left-0 w-full h-[1px] bg-gold/10 hidden lg:block" />
              
              {steps.map((step, idx) => (
                <div key={step.id} className="relative flex flex-col items-center text-center space-y-6 z-10">
                  <div className="w-16 h-16 rounded-sm bg-navy border border-gold/30 flex items-center justify-center font-serif text-gold font-black text-2xl group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-500">
                    {step.id}
                  </div>
                  <span className="text-cream/60 font-gothic font-bold text-[11px] uppercase tracking-[0.2em] group-hover:text-gold transition-colors">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
