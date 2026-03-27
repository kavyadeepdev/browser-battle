import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, GraduationCap, Globe, FileCheck, Search, BookMarked } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-navy-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/admissions/1920/1080')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/90 to-navy-deep z-10"></div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6 mt-10">
            <span className="font-sans text-[10px] text-gold uppercase tracking-[0.3em] font-bold">Admissions</span>
          </div>
          <h1 className="font-serif font-black text-cream text-5xl md:text-7xl mb-6 tracking-tighter">
            Join the <span className="text-gold italic">Legacy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-cream/70 font-sans text-lg leading-relaxed">
            Take the first step towards an illustrious engineering career. We welcome bright minds from across the globe to be a part of our diverse, vibrant community.
          </p>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-24 bg-cream border-b border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="#ug" className="bg-white p-8 border border-navy-deep/10 hover:border-gold transition-all duration-300 group hover:-translate-y-2 shadow-sm">
            <GraduationCap className="text-navy-deep w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
            <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">UG Programs</h3>
            <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">BE programs across diverse cutting-edge disciplines.</p>
          </a>
          <a href="#pg" className="bg-white p-8 border border-navy-deep/10 hover:border-gold transition-all duration-300 group hover:-translate-y-2 shadow-sm">
            <BookOpen className="text-navy-deep w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
            <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">PG Programs</h3>
            <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">M.Tech, MBA, and MCA with industry alignment.</p>
          </a>
          <a href="#phd" className="bg-white p-8 border border-navy-deep/10 hover:border-gold transition-all duration-300 group hover:-translate-y-2 shadow-sm">
            <Search className="text-navy-deep w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
            <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">Ph.D Research</h3>
            <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">Rigorous doctoral programs in various research centers.</p>
          </a>
          <a href="#intl" className="bg-white p-8 border border-navy-deep/10 hover:border-gold transition-all duration-300 group hover:-translate-y-2 shadow-sm">
            <Globe className="text-navy-deep w-10 h-10 mb-6 group-hover:text-gold transition-colors" />
            <h3 className="font-serif text-xl font-bold text-navy-deep mb-2">International</h3>
            <p className="text-sm text-navy-deep/60 line-clamp-2 leading-relaxed">Admissions for NRI, PIO, OCI, and foreign nationals.</p>
          </a>
        </div>
      </section>

      {/* Specific Sections */}
      <section id="ug" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-deep mb-8">Under Graduation <span className="text-gold italic">Admissions</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-navy-deep/70 leading-relaxed font-sans">Our undergraduate programs (Bachelor of Engineering) span 4 years (8 semesters). Candidates must have passed 10+2 with Physics and Mathematics as compulsory subjects.</p>
              <ul className="space-y-3 font-sans">
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-gold rotate-45"></span><span className="text-navy-deep/80 text-sm">CET (Karnataka Candidates)</span></li>
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-gold rotate-45"></span><span className="text-navy-deep/80 text-sm">COMEDK (All India Candidates)</span></li>
                <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-gold rotate-45"></span><span className="text-navy-deep/80 text-sm">Management Quota</span></li>
              </ul>
              <button className="bg-navy-deep text-cream px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-navy-deep transition-colors mt-4">Apply for UG</button>
            </div>
            <div className="bg-cream p-8 border border-navy-deep/5">
              <h4 className="font-serif text-xl font-bold text-navy-deep mb-4">Eligibility Criteria</h4>
              <p className="text-sm text-navy-deep/60 leading-relaxed mb-6 font-sans">Minimum 45% marks in aggregate in optional subjects (Physics, Maths and Chemistry/Bio-Technology/Biology/Computer Science/Electronics) for General Merit candidates.</p>
              <div className="text-xs font-bold text-navy-deep uppercase tracking-widest flex items-center space-x-2 cursor-pointer hover:text-gold transition-colors"><span>Read More Requirements</span> <span>→</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="pg" className="py-24 bg-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-10 shadow-xl border border-navy-deep/5">
            <h4 className="font-serif text-xl font-bold text-navy-deep mb-6">M.Tech / MBA / MCA</h4>
            <div className="space-y-4">
              <div className="border-b border-navy-deep/10 pb-4">
                <div className="text-sm font-bold text-navy-deep">PGCET</div>
                <div className="text-xs text-navy-deep/60 mt-1 font-sans">For Karnataka candidates across all PG programs</div>
              </div>
              <div className="border-b border-navy-deep/10 pb-4">
                <div className="text-sm font-bold text-navy-deep">GATE / KMAT / CMAT</div>
                <div className="text-xs text-navy-deep/60 mt-1 font-sans">Accepting national level entrance scores</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-deep">Post Graduation</h2>
            <p className="text-navy-deep/70 leading-relaxed font-sans">Advance your expertise with our specialized Master&apos;s programs designed to meet current industry demands and technological advancements.</p>
            <button className="text-gold font-bold uppercase tracking-widest text-xs flex items-center space-x-2"><span>View PG Specializations</span> <span>→</span></button>
          </div>
        </div>
      </section>

      <section id="phd" className="py-24 bg-navy-deep text-cream scroll-mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 text-center max-w-3xl relative z-10">
          <Search className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ph.D Admissions</h2>
          <p className="text-cream/70 leading-relaxed mb-8 font-sans">BMSCE offers Ph.D and M.Sc (Engg) by research programs affiliated to VTU, Belagavi. We have 14 recognized research centers fostering innovation across engineering and basic sciences.</p>
          <button className="border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-navy-deep transition-colors">Doctoral Guidelines</button>
        </div>
      </section>

      <section id="intl" className="py-24 bg-white scroll-mt-16 border-b border-navy-deep/5">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep">International <span className="text-gold italic">Admissions</span></h2>
            <p className="text-navy-deep/70 leading-relaxed font-sans">We welcome global perspectives. Admissions are open for Foreign Nationals, PIO, OCI, and NRI students under the supernumerary quota.</p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start space-x-3"><Globe className="w-5 h-5 text-gold shrink-0"/><span className="text-sm text-navy-deep/80 font-sans font-medium">Dedicated International Student Cell</span></li>
              <li className="flex items-start space-x-3"><Globe className="w-5 h-5 text-gold shrink-0"/><span className="text-sm text-navy-deep/80 font-sans font-medium">Seamless equivalence verification with AIU</span></li>
              <li className="flex items-start space-x-3"><Globe className="w-5 h-5 text-gold shrink-0"/><span className="text-sm text-navy-deep/80 font-sans font-medium">On-campus accommodation and support</span></li>
            </ul>
          </div>
          <div className="bg-navy-deep p-10 text-cream shadow-2xl">
            <h4 className="font-serif text-2xl font-bold mb-4">Contact International Office</h4>
            <p className="text-sm text-cream/70 mb-8 font-sans">Email: international.admissions@bmsce.ac.in</p>
            <button className="bg-gold text-navy-deep px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors w-full">Request Info</button>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-cream scroll-mt-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-deep">Admission Process</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-navy-deep/10 hidden md:block -translate-y-1/2"></div>
            {[
              { step: "01", title: "Entrance Exam", desc: "Appear for CET, COMEDK, PGCET, or GATE as applicable." },
              { step: "02", title: "Counseling", desc: "Participate in central counseling or apply for management quota." },
              { step: "03", title: "Document Verification", desc: "Submit original academic and identity documents." },
              { step: "04", title: "Enrollment", desc: "Pay fees and complete the formal campus onboarding." }
            ].map((s) => (
              <div key={s.step} className="bg-white p-8 relative z-10 border border-navy-deep/5 shadow-sm text-center group hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-navy-deep text-gold rounded-full flex items-center justify-center font-serif text-xl font-bold mx-auto mb-6 group-hover:bg-gold group-hover:text-navy-deep">{s.step}</div>
                <h4 className="font-sans font-bold text-navy-deep mb-3 text-lg">{s.title}</h4>
                <p className="text-sm text-navy-deep/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="syllabus" className="py-24 bg-navy-deep text-cream scroll-mt-16">
         <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <BookMarked className="w-12 h-12 text-gold mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Scheme & Syllabus</h2>
              <p className="text-cream/70 leading-relaxed mb-8 font-sans">As an autonomous institution under VTU, BMSCE offers a contemporary, industry-aligned syllabus updated regularly through Boards of Studies.</p>
              <button className="bg-white text-navy-deep px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors">Download Curricula</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-8 border border-white/10 hover:border-gold transition-colors cursor-pointer text-center group">
                <span className="block font-serif text-4xl text-cream mb-2 group-hover:text-gold transition-colors">UG</span>
                <span className="text-[10px] uppercase tracking-widest text-cream/50 font-bold group-hover:text-gold transition-colors">Latest Scheme</span>
              </div>
              <div className="bg-white/5 p-8 border border-white/10 hover:border-gold transition-colors cursor-pointer text-center group">
                <span className="block font-serif text-4xl text-cream mb-2 group-hover:text-gold transition-colors">PG</span>
                <span className="text-[10px] uppercase tracking-widest text-cream/50 font-bold group-hover:text-gold transition-colors">Latest Scheme</span>
              </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
