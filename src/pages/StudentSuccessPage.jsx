import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentSuccessPage() {
  const services = [
    {
      title: "Career Counseling",
      desc: "One-on-one sessions helping students identify their strengths, interests, and the career paths that align with who they truly are. Data-backed, heart-led."
    },
    {
      title: "Psychometric Assessments",
      desc: "Scientifically validated tools that uncover a student's learning style, aptitude, and personality — giving parents and teachers a roadmap, not just a report."
    },
    {
      title: "Study Abroad & Scholarships",
      desc: "We've guided 150+ students through international applications, scholarship searches, and visa processes. Your dream university is closer than you think."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">Empower Program</span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Student Success</h1>
          <p className="text-sm md:text-base font-semibold text-[#0A7E8C] uppercase tracking-wide mb-6">
            Career Counseling · Psychometric Assessments · Scholarships · Study Abroad · Online Tuition
          </p>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Every student carries potential. Our job is to help them find it, name it, and act on it. The Student Success program is a holistic support system that guides students from confusion to clarity — with the tools, assessments, and personal coaching that actually make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#086773] transition-colors shadow-md"
          >
            Start Your Student's Success Journey →
          </Link>
        </div>
      </div>
    </div>
  );
}