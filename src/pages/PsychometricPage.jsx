import React from 'react';
import { Link } from 'react-router-dom';

export default function PsychometricPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">
            Empower Program
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Psychometric Assessments
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Scientifically validated tools that uncover a student's learning style, aptitude, and personality — giving parents and teachers a roadmap, not just a report.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm mb-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Why Psychometric Assessment?</h2>
          <p className="text-slate-600 leading-relaxed">
            Every child carries potential. Our psychometric assessments go beyond standard academic grades to reveal behavioral patterns, cognitive strengths, emotional intelligence, and natural inclinations.
          </p>
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-teal-50 rounded-md border-l-4 border-[#0A7E8C]">
              <h3 className="font-bold text-slate-900 mb-1">Aptitude & Intelligence</h3>
              <p className="text-xs text-slate-600">Identify core analytical, spatial, verbal, and numerical capabilities.</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-md border-l-4 border-[#0A7E8C]">
              <h3 className="font-bold text-slate-900 mb-1">Learning Styles</h3>
              <p className="text-xs text-slate-600">Understand whether the student is a visual, auditory, or kinesthetic learner.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#086773] transition-colors shadow-md"
          >
            Book an Assessment Session →
          </Link>
        </div>
      </div>
    </div>
  );
}