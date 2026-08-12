import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <Link to="/" className="text-2xl font-bold text-slate-800 tracking-tight">
              Growth Platter Academy
            </Link>
            <span className="text-xs text-slate-500 font-medium">
              Nourishing Minds. Empowering Futures.
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-700">
            {/* We Dropdown */}
            <div className="relative group py-2">
              <button className="hover:text-[#0A7E8C] transition-colors flex items-center gap-1">
                We <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-lg rounded-md py-2 border border-gray-100">
                <Link to="/about" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">About Us</Link>
                <Link to="/vision-mission" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Vision & Mission</Link>
              </div>
            </div>

            {/* Empower Dropdown */}
            <div className="relative group py-2">
              <button className="hover:text-[#0A7E8C] transition-colors flex items-center gap-1">
                Empower <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100">
                <Link to="/empower/future-ready-school" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Future Ready School</Link>
                <Link to="/empower/student-success" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Student Success</Link>
              </div>
            </div>
          </nav>

          {/* Header CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-[#0A7E8C] text-white px-5 py-2.5 rounded-md font-medium hover:bg-[#086773] transition-colors shadow-sm"
            >
              Get Started →
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}