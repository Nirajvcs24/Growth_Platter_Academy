import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <Link to="/" onClick={closeMobileMenu} className="text-2xl font-bold text-slate-800 tracking-tight">
              Growth Platter Academy
            </Link>
            <span className="text-xs text-slate-500 font-medium">
              Nourishing Minds. Empowering Futures.
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-700">
            
            {/* 1. WE Dropdown */}
            <div className="relative group py-2">
              <button className="hover:text-[#0A7E8C] transition-colors flex items-center gap-1 font-semibold">
                We <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-lg rounded-md py-2 border border-gray-100 z-50">
                <Link to="/about" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">About Us</Link>
                <Link to="/vision-mission" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Vision & Mission</Link>
              </div>
            </div>

            {/* 2. EMPOWER Dropdown */}
            <div className="relative group py-2">
              <button className="hover:text-[#0A7E8C] transition-colors flex items-center gap-1 font-semibold">
                Empower <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100 z-50">
                <Link to="/empower/future-ready-school" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Future Ready School</Link>
                <Link to="/empower/student-success" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Student Success</Link>
                <Link to="/empower/psychometric" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Psychometric</Link>
                <Link to="/empower/scholarships" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Scholarships</Link>
                <Link to="/empower/online-tuition" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Online Tuition</Link>
              </div>
            </div>

            {/* 3. GROWTH Dropdown */}
            <div className="relative group py-2">
              <button className="hover:text-[#0A7E8C] transition-colors flex items-center gap-1 font-semibold">
                Growth <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-lg rounded-md py-2 border border-gray-100 z-50">
                <Link to="/growth/workshops" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Workshops</Link>
                <Link to="/growth/stories" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Stories</Link>
                <Link to="/growth/internship" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Internship</Link>
                <Link to="/growth/gallery" className="block px-4 py-2 hover:bg-teal-50 hover:text-[#0A7E8C]">Gallery</Link>
              </div>
            </div>

          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-[#0A7E8C] text-white px-5 py-2.5 rounded-md font-medium hover:bg-[#086773] transition-colors shadow-sm"
            >
              Get Started →
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0A7E8C] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          
          {/* WE Category */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('we')}
              className="w-full flex justify-between items-center py-2 text-slate-800 font-semibold text-base"
            >
              We <span>{openMobileDropdown === 'we' ? '▲' : '▼'}</span>
            </button>
            {openMobileDropdown === 'we' && (
              <div className="pl-4 space-y-2 py-1 text-sm text-slate-600">
                <Link to="/about" onClick={closeMobileMenu} className="block py-1">About Us</Link>
                <Link to="/vision-mission" onClick={closeMobileMenu} className="block py-1">Vision & Mission</Link>
              </div>
            )}
          </div>

          {/* EMPOWER Category */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('empower')}
              className="w-full flex justify-between items-center py-2 text-slate-800 font-semibold text-base"
            >
              Empower <span>{openMobileDropdown === 'empower' ? '▲' : '▼'}</span>
            </button>
            {openMobileDropdown === 'empower' && (
              <div className="pl-4 space-y-2 py-1 text-sm text-slate-600">
                <Link to="/empower/future-ready-school" onClick={closeMobileMenu} className="block py-1">Future Ready School</Link>
                <Link to="/empower/student-success" onClick={closeMobileMenu} className="block py-1">Student Success</Link>
                <Link to="/empower/psychometric" onClick={closeMobileMenu} className="block py-1">Psychometric</Link>
                <Link to="/empower/scholarships" onClick={closeMobileMenu} className="block py-1">Scholarships</Link>
                <Link to="/empower/online-tuition" onClick={closeMobileMenu} className="block py-1">Online Tuition</Link>
              </div>
            )}
          </div>

          {/* GROWTH Category */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('growth')}
              className="w-full flex justify-between items-center py-2 text-slate-800 font-semibold text-base"
            >
              Growth <span>{openMobileDropdown === 'growth' ? '▲' : '▼'}</span>
            </button>
            {openMobileDropdown === 'growth' && (
              <div className="pl-4 space-y-2 py-1 text-sm text-slate-600">
                <Link to="/growth/workshops" onClick={closeMobileMenu} className="block py-1">Workshops</Link>
                <Link to="/growth/stories" onClick={closeMobileMenu} className="block py-1">Stories</Link>
                <Link to="/growth/internship" onClick={closeMobileMenu} className="block py-1">Internship</Link>
                <Link to="/growth/gallery" onClick={closeMobileMenu} className="block py-1">Gallery</Link>
              </div>
            )}
          </div>

          {/* Mobile CTA Button */}
          <div className="pt-4 border-t border-gray-100">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block text-center bg-[#0A7E8C] text-white py-3 rounded-md font-medium"
            >
              Get Started →
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}