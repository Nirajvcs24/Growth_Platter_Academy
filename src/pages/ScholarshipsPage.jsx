import React from 'react';
import { Link } from 'react-router-dom';

export default function ScholarshipsPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">
            Empower Program
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Study Abroad & Scholarships
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We've guided 150+ students through international applications, scholarship searches, and visa processes. Your dream university is closer than you think.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
            <div className="text-2xl font-bold text-[#0A7E8C] mb-2">150+</div>
            <h3 className="font-bold text-slate-900 mb-2">Students Counseled</h3>
            <p className="text-xs text-slate-600">Successfully placed into top institutions globally with financial support.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
            <div className="text-2xl font-bold text-[#0A7E8C] mb-2">100%</div>
            <h3 className="font-bold text-slate-900 mb-2">End-to-End Support</h3>
            <p className="text-xs text-slate-600">From essay review and profile building to visa interview training.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
            <div className="text-2xl font-bold text-[#0A7E8C] mb-2">Global</div>
            <h3 className="font-bold text-slate-900 mb-2">Scholarship Match</h3>
            <p className="text-xs text-slate-600">Uncovering merit-based and need-based scholarships tailored to your profile.</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#086773] transition-colors shadow-md"
          >
            Start Your Overseas Application →
          </Link>
        </div>
      </div>
    </div>
  );
}