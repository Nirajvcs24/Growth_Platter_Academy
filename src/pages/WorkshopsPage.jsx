import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function WorkshopsPage() {
  return (
    <PageTransition>
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">
            Growth Programs
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Workshops & Growth Programs
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            High-energy, interactive workshops for students, teachers, and school communities — covering leadership, life skills, internship readiness, and mindset development. Real learning that sticks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Student Mindset & Leadership</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Interactive sessions designed to build confidence, resilience, critical thinking, and goal-setting capabilities in young learners.
            </p>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Teacher Enablement & Pedagogy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Equipping educators with practical AI tools, modern teaching frameworks, and strategies to inspire classroom engagement.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#086773] transition-colors shadow-md"
          >
            Host a Workshop at Your School →
          </Link>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}