import React from 'react';
import PageTransition from '../components/PageTransition';

export default function GalleryPage() {
  const placeholders = [
    "Future Ready School Workshop",
    "Career Counseling Session",
    "Psychometric Evaluation Event",
    "AI Literacy Training for Teachers",
    "Student Leadership Summit",
    "Study Abroad Guidance Seminar"
  ];

  return (
    <PageTransition>
    <div className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0A7E8C] text-xs font-semibold uppercase tracking-widest block mb-2">
            Visual Story
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Growth Platter Gallery
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            A glimpse into transformed classrooms, engaged teachers, and empowered students across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {placeholders.map((title, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400 font-medium text-sm">
                [ Photo: {title} ]
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
}