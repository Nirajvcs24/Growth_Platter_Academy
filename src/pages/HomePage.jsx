import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const stats = [
    { value: '4,300+', label: 'Students Career Counseled' },
    { value: '150+', label: 'Study Abroad Counseled' },
    { value: '200+', label: 'Student Success Programs Delivered' },
    { value: '839+', label: 'Students Who Bridged the Learning Gap' },
  ];

  const programs = [
    {
      title: 'Future Ready School',
      description: 'We partner with school leaders and teachers to integrate AI literacy, digital skills, and 21st-century pedagogy into everyday classrooms — building institutions that are ready for the world of tomorrow, today.',
      cta: 'Learn More →',
      link: '/empower/future-ready-school',
    },
    {
      title: 'Student Success',
      description: 'From career counseling and psychometric assessments to study abroad guidance and scholarship discovery, we walk alongside every student — helping them find their path, build their confidence, and step boldly into their future.',
      cta: 'Learn More →',
      link: '/empower/student-success',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 text-center border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-teal-100 text-[#0A7E8C] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            On-Demand Programs for Schools, Teachers & Students
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Transforming Schools. Empowering Teachers. Launching Student Futures.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            At Growth Platter Academy, we partner with schools across India to build AI-ready classrooms, career-confident students, and future-focused educators — one skill, one story, one success at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/empower/future-ready-school"
              className="w-full sm:w-auto bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold text-base hover:bg-[#086773] transition-colors shadow-md"
            >
              Explore Our Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Stats Bar */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by Schools, Parents & Students — Across India and Beyond.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl md:text-4xl font-extrabold text-[#0A7E8C] mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">What We Offer</h2>
          <p className="text-slate-600 mt-2">Two flagship programs. One powerful mission. Complete school transformation.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-8 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{prog.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{prog.description}</p>
              </div>
              <Link to={prog.link} className="text-[#0A7E8C] font-semibold text-sm hover:underline">
                {prog.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}