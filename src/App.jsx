import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import VisionMissionPage from './pages/VisionMissionPage.jsx';
import FutureReadySchoolPage from './pages/FutureReadySchoolPage.jsx';
import StudentSuccessPage from './pages/StudentSuccessPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vision-mission" element={<VisionMissionPage />} />
          <Route path="/empower/future-ready-school" element={<FutureReadySchoolPage />} />
          <Route path="/empower/student-success" element={<StudentSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}