import React from 'react';
import PageTransition from '../components/PageTransition';

export default function StoriesPage() {
  const testimonials = [
    {
      quote: "Before I met Jagan sir, I had no idea what I wanted to do after school. After my psychometric session and career counseling, I had clarity for the first time in years. I applied for scholarships, got accepted abroad, and I'm now living the future I was told to dream about.",
      name: "Priya S.",
      role: "Grade 10 Student, Arison School, Maharashtra"
    },
    {
      quote: "The Future Ready School workshop changed the way I think about my classroom. I now use AI tools in my lessons, and my students are more engaged than ever. It felt less like training and more like a wake-up call — in the best way.",
      name: "Ramesh K.",
      role: "St. James School Teacher, Bengaluru"
    },
    {
      quote: "Growth Platter Academy didn't just run a program for us — they became a partner. The transformation in our teachers' confidence and our students' aspirations has been remarkable. Jagan understands schools from the inside out.",
      name: "Mrs. Anitha L.",
      role: "Principal, Sergeant CBSE School, Chennai"
    }
  ];

  return (
    <PageTransition>
    <div className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">
            Real Stories. Real Impact.
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            What Our Students, Teachers & Schools Are Saying
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Every number we share has a face behind it. Here are just a few of the thousands of lives that have changed through Growth Platter Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
}