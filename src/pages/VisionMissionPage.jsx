import React from 'react';
import PageTransition from '../components/PageTransition';

export default function VisionMissionPage() {
  const values = [
    { title: "Humanize Every Interaction", desc: "We see people, not just participants." },
    { title: "Data-Driven Outcomes", desc: "Every program we run is measured by real-world results." },
    { title: "Whole-School Thinking", desc: "We never transform one classroom while ignoring the rest." },
    { title: "Lifelong Learning", desc: "We model what we teach." },
    { title: "Courage to Change", desc: "We challenge the status quo — gently, firmly, effectively." }
  ];

  return (
    <PageTransition>
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 text-center mb-16">
          Our Vision & Mission
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm">
            <span className="text-[#0A7E8C] text-xs font-bold uppercase tracking-wider block mb-2">Our Vision</span>
            <p className="text-slate-600 text-lg leading-relaxed">
              A world where every school is future-ready, every teacher is empowered, and every student is career-confident.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-sm">
            <span className="text-[#0A7E8C] text-xs font-bold uppercase tracking-wider block mb-2">Our Mission</span>
            <p className="text-slate-600 text-lg leading-relaxed">
              To transform schools through AI-integrated learning, career-focused counseling, and whole-school programs that build lasting capability — so that students don't just survive the future, they lead it.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="border border-slate-200 p-6 rounded-lg bg-slate-50">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-slate-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}