import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', service: 'General Inquiry', message: '' }); // Clear form
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: result.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Unable to connect to the server. Is the backend running?',
      });
    }
  };

  return (
    <PageTransition>
    <div className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Get Started</h1>
          <p className="text-slate-600 text-sm">Transform your school or begin your student success journey today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
          {/* Left Column: Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <ul className="space-y-4 text-sm text-slate-600 mb-8">
              <li className="flex items-center gap-2">
                <span>📧</span> hello@growthplatteracademy.com
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> +91 [Your Phone Number]
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> [Your City, State, India]
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span> Mon – Sat: 9:00 AM – 6:00 PM IST
              </li>
            </ul>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
              <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-1">
                Quick Response Promise
              </h4>
              <p className="text-xs text-slate-500">
                We typically respond to school inquiries and student counseling requests within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

            {status.success && (
              <div className="mb-4 p-3 bg-teal-50 border border-teal-200 text-[#0A7E8C] text-sm rounded-md font-medium">
                ✅ Thank you! Your message has been sent successfully. We will get back to you shortly.
              </div>
            )}

            {status.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md font-medium">
                ❌ {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:outline-none focus:border-[#0A7E8C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:outline-none focus:border-[#0A7E8C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  I'm interested in
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:outline-none focus:border-[#0A7E8C] bg-white"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Future Ready School">Future Ready School</option>
                  <option value="Student Career Counseling">Student Career Counseling</option>
                  <option value="Psychometric Assessment">Psychometric Assessment</option>
                  <option value="Study Abroad & Scholarships">Study Abroad & Scholarships</option>
                  <option value="Online Tuition">Online Tuition</option>
                  <option value="Workshops">Workshops / Growth Programs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:outline-none focus:border-[#0A7E8C]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-[#0A7E8C] text-white py-3 rounded-md font-semibold hover:bg-[#086773] transition-colors disabled:opacity-50"
              >
                {status.submitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}