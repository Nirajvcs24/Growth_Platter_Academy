import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Get Started</h1>
          <p className="text-slate-600 text-sm">Transform your school or begin your student success journey today.[cite: 1]</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <ul className="space-y-4 text-sm text-slate-600 mb-8">
              <li>📧 hello@growthplatteracademy.com[cite: 1]</li>
              <li>📞 +91 [Your Phone Number][cite: 1]</li>
              <li>📍 [Your City, State, India][cite: 1]</li>
              <li>🕐 Mon – Sat: 9:00 AM – 6:00 PM IST[cite: 1]</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:outline-none focus:border-[#0A7E8C]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:outline-none focus:border-[#0A7E8C]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full border border-slate-300 rounded-md p-2.5 text-sm focus:outline-none focus:border-[#0A7E8C]"></textarea>
              </div>
              <button className="w-full bg-[#0A7E8C] text-white py-3 rounded-md font-semibold hover:bg-[#086773] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}