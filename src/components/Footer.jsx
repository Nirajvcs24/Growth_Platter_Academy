import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Growth Platter Academy</h3>
          <p className="text-xs text-[#F4A840] font-medium mb-4">Nourishing Minds. Empowering Futures.</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            We are India's trusted partner for school transformation, student success, and career readiness — helping schools, teachers, and students grow together.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <Link to="/" className="hover:text-[#F4A840] transition-colors">Home</Link> | <Link to="/about" className="hover:text-[#F4A840] transition-colors">About Us</Link> | <Link to="/vision-mission" className="hover:text-[#F4A840] transition-colors">Vision & Mission</Link>
            </li>
            <li>
              <Link to="/empower/future-ready-school" className="hover:text-[#F4A840] transition-colors">Future Ready School</Link> | <Link to="/empower/student-success" className="hover:text-[#F4A840] transition-colors">Student Success</Link> | <Link to="/empower/psychometric" className="hover:text-[#F4A840] transition-colors">Psychometric</Link>
            </li>
            <li>
              <Link to="/empower/scholarships" className="hover:text-[#F4A840] transition-colors">Scholarships</Link> | <Link to="/empower/online-tuition" className="hover:text-[#F4A840] transition-colors">Online Tuition</Link>
            </li>
            <li>
              <Link to="/growth/workshops" className="hover:text-[#F4A840] transition-colors">Workshops</Link> | <Link to="/growth/stories" className="hover:text-[#F4A840] transition-colors">Stories</Link> | <Link to="/growth/internship" className="hover:text-[#F4A840] transition-colors">Internship</Link> | <Link to="/growth/gallery" className="hover:text-[#F4A840] transition-colors">Gallery</Link>
            </li>
            <li className="pt-1">
              <Link to="/contact" className="hover:text-[#F4A840] transition-colors font-medium text-white">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:hello@growthplatteracademy.com" className="hover:text-[#F4A840] transition-colors">hello@growthplatteracademy.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>+91 [Your Phone Number]</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span>
              <span>[Your City, State, India]</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🕐</span>
              <span>Mon – Sat: 9:00 AM – 6:00 PM IST</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="text-sm font-semibold mb-2 text-white uppercase tracking-wider">Social Media</h4>
          <p className="text-xs text-slate-400 mb-4">Follow us and join the conversation:</p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>🔵 Facebook: /GrowthPlatterAcademy</li>
            <li>📸 Instagram: @growthplatteracademy</li>
            <li>💼 LinkedIn: /company/growth-platter-academy</li>
            <li>▶️ YouTube: Growth Platter Academy</li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4 text-center md:text-left">
        <p>© 2026 Growth Platter Academy. All Rights Reserved.</p>
        <p>Designed with ❤️ for Schools, Teachers & Students across India.</p>
        <div className="flex gap-2">
          <Link to="/privacy" className="hover:text-[#F4A840] transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-[#F4A840] transition-colors">Terms of Use</Link>
          <span>|</span>
          <Link to="/sitemap" className="hover:text-[#F4A840] transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}