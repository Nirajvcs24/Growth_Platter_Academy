import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function OnlineTuitionPage() {
  return (
    <PageTransition>
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">
            Empower Program
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Online Tuition & Learning Support
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Personalized academic support that helps students bridge learning gaps, master difficult subjects, and build lasting academic confidence.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm mb-10 text-center">
          <div className="text-4xl font-extrabold text-[#0A7E8C] mb-2">839+</div>
          <p className="text-slate-700 font-semibold mb-6">Students Who Bridged the Learning Gap</p>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Our online tuition delivers structured, interactive learning customized to each student's pace — ensuring conceptual clarity and measurable academic improvement.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#086773] transition-colors shadow-md"
          >
            Inquire for Classes →
          </Link>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}