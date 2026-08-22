import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function FutureReadySchoolPage() {
  const features = [
    "AI Literacy & Digital Skills Integration for Teachers",
    "21st-Century Pedagogy Workshops for School Leadership",
    "Classroom Innovation Framework",
    "Student Tech-Readiness Assessments",
    "Ongoing Coaching & Support for Teachers",
    "Certification for Participating Schools"
  ];

  return (
    <PageTransition>
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">Empower Program</span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Future Ready School</h1>
          <p className="text-xl font-medium text-slate-700 max-w-2xl mx-auto mb-6">
            Helping School Leaders & Teachers Build AI-Powered, Future-Focused Classrooms
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Is your school ready for the world your students will graduate into? Technology is reshaping every career, every industry, and every classroom. Future Ready School is our flagship program that helps schools make that shift — systematically, confidently, and sustainably.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">What Your School Gets</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-md bg-slate-50">
                <span className="text-[#0A7E8C] font-bold">✓</span>
                <span className="text-slate-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#086773] transition-colors shadow-md"
          >
            Book a School Discovery Call →
          </Link>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}