import React from 'react';
import { Link } from 'react-router-dom';

export default function InternshipPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">
          Growth Program
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Internship & Readiness Program
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Preparing high school and college students for real-world industry experience through hands-on projects, professional mentorship, and career readiness training.
        </p>

        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 mb-10 text-left space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Program Highlights:</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-2">✔ Resume & Portfolio Building</li>
            <li className="flex items-center gap-2">✔ Real-world Project Mentorship</li>
            <li className="flex items-center gap-2">✔ Communication & Professional Etiquette</li>
            <li className="flex items-center gap-2">✔ Industry Certificate & Recommendations</li>
          </ul>
        </div>

        <Link
          to="/contact"
          className="inline-block bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#086773] transition-colors shadow-md"
        >
          Apply for Internship Program →
        </Link>
      </div>
    </div>
  );
}