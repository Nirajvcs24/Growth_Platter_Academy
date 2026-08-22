import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import VisionMissionPage from './pages/VisionMissionPage.jsx';

import FutureReadySchoolPage from './pages/FutureReadySchoolPage.jsx';
import StudentSuccessPage from './pages/StudentSuccessPage.jsx';
import PsychometricPage from './pages/PsychometricPage.jsx';
import ScholarshipsPage from './pages/ScholarshipsPage.jsx';
import OnlineTuitionPage from './pages/OnlineTuitionPage.jsx';

import WorkshopsPage from './pages/WorkshopsPage.jsx';
import StoriesPage from './pages/StoriesPage.jsx';
import InternshipPage from './pages/InternshipPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';

import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* We */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vision-mission" element={<VisionMissionPage />} />

            {/* Empower */}
            <Route path="/empower/future-ready-school" element={<FutureReadySchoolPage />} />
            <Route path="/empower/student-success" element={<StudentSuccessPage />} />
            <Route path="/empower/psychometric" element={<PsychometricPage />} />
            <Route path="/empower/scholarships" element={<ScholarshipsPage />} />
            <Route path="/empower/online-tuition" element={<OnlineTuitionPage />} />

            {/* Growth */}
            <Route path="/growth/workshops" element={<WorkshopsPage />} />
            <Route path="/growth/stories" element={<StoriesPage />} />
            <Route path="/growth/internship" element={<InternshipPage />} />
            <Route path="/growth/gallery" element={<GalleryPage />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}