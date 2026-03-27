'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  {
    title: "Admissions",
    links: [
      { name: "UG Programs", href: "#" },
      { name: "PG Programs", href: "#" },
      { name: "Ph.D Programs", href: "#" },
      { name: "Management Quota", href: "#" },
      { name: "Fee Structure", href: "#" }
    ]
  },
  {
    title: "Important",
    links: [
      { name: "NIRF Data", href: "#" },
      { name: "NAAC SSR", href: "#" },
      { name: "Mandatory Disclosure", href: "#" },
      { name: "IQAC", href: "#" },
      { name: "RTI Cell", href: "#" }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { name: "Student Portal", href: "#" },
      { name: "Faculty Portal", href: "#" },
      { name: "Alumni Association", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-20 pb-10 text-cream border-t border-gold/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-navy border border-gold/30 flex items-center justify-center font-serif text-2xl font-black text-gold shadow-[0_0_20px_rgba(190,18,60,0.1)]">
                BMS
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold leading-tight">B.M.S. College of <br />Engineering</h2>
                <p className="font-gothic text-[10px] text-gold uppercase tracking-widest font-bold mt-1">Autonomous Institute · Est. 1946</p>
              </div>
            </div>
            
            <p className="text-cream/45 text-sm font-gothic leading-relaxed max-w-md">
              India&apos;s first private sector initiative in engineering education. Consistently ranked among the top engineering colleges in the country, BMSCE is committed to excellence in academic and research pursuits.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <MapPin size={18} className="text-gold group-hover:text-navy-deep transition-colors duration-300" />
                </div>
                <span className="text-cream/60 text-xs font-gothic leading-tight group-hover:text-cream transition-colors">P.B. No. 1908, Bull Temple Road, <br />Bangalore - 560 019</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Phone size={18} className="text-gold group-hover:text-navy-deep transition-colors duration-300" />
                </div>
                <span className="text-cream/60 text-xs font-gothic group-hover:text-cream transition-colors">+91-80-26622130-35</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Mail size={18} className="text-gold group-hover:text-navy-deep transition-colors duration-300" />
                </div>
                <span className="text-cream/60 text-xs font-gothic group-hover:text-cream transition-colors">principal@bmsce.ac.in</span>
              </div>
            </div>

            <div className="flex items-center space-x-5 pt-6">
              <button className="bg-white/5 hover:bg-gold w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500 group shadow-lg hover:shadow-gold/20">
                <Facebook size={20} className="text-gold group-hover:text-navy-deep transition-colors" />
              </button>
              <button className="bg-white/5 hover:bg-gold w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500 group shadow-lg hover:shadow-gold/20">
                <Twitter size={20} className="text-gold group-hover:text-navy-deep transition-colors" />
              </button>
              <button className="bg-white/5 hover:bg-gold w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500 group shadow-lg hover:shadow-gold/20">
                <Linkedin size={20} className="text-gold group-hover:text-navy-deep transition-colors" />
              </button>
              <button className="bg-white/5 hover:bg-gold w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500 group shadow-lg hover:shadow-gold/20">
                <Instagram size={20} className="text-gold group-hover:text-navy-deep transition-colors" />
              </button>
              <button className="bg-white/5 hover:bg-gold w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500 group shadow-lg hover:shadow-gold/20">
                <Youtube size={20} className="text-gold group-hover:text-navy-deep transition-colors" />
              </button>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-8">
              <h3 className="font-gothic text-[11px] text-gold uppercase tracking-[0.2em] font-bold">{col.title}</h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-cream/45 text-sm font-gothic hover:text-gold transition-colors flex items-center group">
                      <span>{link.name}</span>
                      <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-cream/30 text-[10px] font-gothic uppercase tracking-widest">
            © 2026 B.M.S. College of Engineering. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-8 text-cream/30 text-[10px] font-gothic uppercase tracking-widest">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
