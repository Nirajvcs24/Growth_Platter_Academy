import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';

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
    {
      title: 'Workshops & Growth Programs',
      description: 'High-energy, interactive workshops for students, teachers, and school communities — covering leadership, life skills, internship readiness, and mindset development. Real learning that sticks.',
      cta: 'Explore Workshops →',
      link: '/growth/workshops',
    },
  ];

  const features = [
    'AI & Digital Literacy Training',
    'Career & Psychometric Counseling',
    'Study Abroad & Scholarship Guidance',
    'Online Tuition & Learning Support',
    'Hands-on Workshops & Internships',
  ];

  const benefits = [
    'Schools Ready for Tomorrow',
    'Teachers Who Inspire & Innovate',
    'Students Clear on Their Future Path',
    'Measurable Growth in Learning Outcomes',
    'A School Community That Thrives Together',
  ];

  return (
    <PageTransition>
      {/* 1. HERO SECTION */}
      <section className="bg-slate-50 py-20 text-center border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-teal-100 text-[#0A7E8C] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6"
          >
            On-Demand Programs for Schools, Teachers & Students
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          >
            Transforming Schools. Empowering Teachers. Launching Student Futures.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            At Growth Platter Academy, we partner with schools across India to build AI-ready classrooms, career-confident students, and future-focused educators — one skill, one story, one success at a time.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link
              to="/empower/future-ready-school"
              className="w-full sm:w-auto bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold text-base hover:bg-[#086773] transition-colors shadow-md"
            >
              Explore Our Programs →
            </Link>
            <Link
              to="/growth/stories"
              className="w-full sm:w-auto border border-slate-300 text-slate-700 px-8 py-3.5 rounded-md font-semibold text-base hover:bg-slate-100 transition-colors"
            >
              Watch How We Transform Schools
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR WITH ANIMATED COUNTER */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by Schools, Parents & Students — Across India and Beyond.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#0A7E8C] mb-2">
                  <AnimatedCounter targetString={stat.value} duration={2000} />
                </div>
                <div className="text-sm font-medium text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. START YOUR JOURNEY SECTION */}
      <section className="py-16 bg-slate-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0A7E8C] block mb-2">
            Change the Story
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Start Your Journey Towards a Future-Ready School Today!
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Every child deserves a teacher who is ready for tomorrow. Every teacher deserves a school that invests in their growth. And every school deserves a partner who understands what it truly takes to transform — not just train.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#0A7E8C] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#086773] transition-colors shadow-md"
          >
            Begin the Transformation →
          </Link>
        </div>
      </section>

      {/* 4. PROGRAM CARDS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">What We Offer</h2>
          <p className="text-slate-600 mt-2">Two flagship programs. One powerful mission. Complete school transformation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="border border-slate-200 rounded-lg p-8 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{prog.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{prog.description}</p>
              </div>
              <Link to={prog.link} className="text-[#0A7E8C] font-semibold text-sm hover:underline">
                {prog.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FEATURES & BENEFITS SECTION */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Schools Choose Growth Platter Academy</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>✦</span> FEATURES
              </h3>
              <ul className="space-y-4">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <span className="text-teal-600">✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>✦</span> BENEFITS
              </h3>
              <ul className="space-y-4">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <span>🌟</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRAINER / COACH SECTION */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0A7E8C] block mb-2">
            We Help Schools Grow
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Meet Your Coach</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            Behind Growth Platter Academy is a passionate educator, counselor, and school transformation specialist who has spent years turning 'what could be' into 'what is' — for schools, teachers, and thousands of students.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Jaganathan Rajagopal</h3>
            <p className="text-[#0A7E8C] font-semibold text-sm mb-6">
              Student Success Consultant / Career Trainer
            </p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
              Jaganathan Rajagopal is an education transformation coach with a deep passion for making every school future-ready and every student career-confident. With experience spanning career counseling, psychometric assessments, study abroad guidance, AI integration, and school leadership development, Jaganathan has personally counselled over 4,300 students and delivered more than 200 Student Success programs.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-slate-200 text-xs font-medium text-slate-700">
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full">🎓 Education Coach</span>
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full">🌐 AI for Schools</span>
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full">✈️ Study Abroad Advisor</span>
              <span className="bg-white border border-slate-200 px-3 py-1 rounded-full">💡 Career Counsellor</span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}