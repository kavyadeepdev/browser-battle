'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Camera, Music, Trophy, Users } from 'lucide-react';
import Image from 'next/image';

const activities = [
  { icon: Music, name: "Utsav", desc: "Inter-collegiate cultural festival." },
  { icon: Trophy, name: "Sports", desc: "Annual sports meet and tournaments." },
  { icon: Camera, name: "Clubs", desc: "Technical and non-technical student clubs." },
  { icon: Users, name: "Alumni", desc: "Global network of 50,000+ graduates." }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden border-t border-navy/5">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-gothic text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Visual Story</span>
            </div>
            <h2 className="font-serif text-5xl font-black text-navy-deep leading-tight">
              Gallery & <span className="text-gold italic">Campus Life</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-gothic text-[11px] uppercase tracking-[0.3em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
            <span>View Full Gallery</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Photo Grid - More defined */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-navy/10 border border-navy/10 mb-20">
          <div className="md:col-span-2 md:row-span-2 relative h-[400px] md:h-auto overflow-hidden group">
            <Image
              src="https://picsum.photos/seed/bmsce-campus/1200/800"
              alt="BMSCE Campus"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
              <div className="text-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="font-serif text-3xl font-bold text-gold">Main Academic Block</div>
                <div className="text-sm opacity-70 font-gothic uppercase tracking-widest mt-2">The heart of BMSCE campus.</div>
              </div>
            </div>
          </div>
          <div className="relative h-[250px] overflow-hidden group">
            <Image
              src="https://picsum.photos/seed/bmsce-lab/600/400"
              alt="BMSCE Lab"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative h-[250px] overflow-hidden group">
            <Image
              src="https://picsum.photos/seed/bmsce-students/600/400"
              alt="BMSCE Students"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-2 relative h-[250px] overflow-hidden group">
            <Image
              src="https://picsum.photos/seed/bmsce-event/1200/400"
              alt="BMSCE Event"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Activities Strip - More structured */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
          {activities.map((act, idx) => (
            <motion.div
              key={act.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-cream p-10 flex items-center space-x-6 group cursor-pointer hover:bg-cream-dark transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-sm bg-navy/5 border border-navy/5 flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-500">
                <act.icon size={24} className="text-gold group-hover:text-cream transition-colors duration-500" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-navy-deep leading-tight group-hover:text-gold transition-colors">{act.name}</h4>
                <p className="text-navy/40 font-gothic text-[10px] uppercase tracking-widest font-bold mt-2">{act.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
