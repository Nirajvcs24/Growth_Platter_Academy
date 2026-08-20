import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            About Growth Platter Academy
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Growth Platter Academy was built on a single belief: that every school has the potential to be great — and that greatness begins with equipping the right people with the right tools, the right mindset, and the right support.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              We are a school transformation and student success platform dedicated to bridging the gap between where education is today and where it needs to be tomorrow.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-slate-600 leading-relaxed">
              Founded by Jaganathan Rajagopal, Growth Platter Academy grew out of years of firsthand experience working with students who were bright, capable, and completely lost when it came to their futures. JR realized that the problem was never the students — it was the system. Schools needed to evolve. Teachers needed tools. Students needed guidance. And that is exactly what Growth Platter Academy was built to provide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Makes Us Different</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We don't offer one-size-fits-all programs. We listen to your school's unique context, design a tailored pathway, and walk alongside you every step of the way — from the first workshop to the last student counseled.
            </p>
            <div className="p-4 bg-teal-50 border-l-4 border-[#0A7E8C] text-[#0A7E8C] font-semibold text-sm rounded-r">
              Transformation, not transaction. That is the Growth Platter promise.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}