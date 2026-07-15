'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-120 rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-50">
      <div className="absolute inset-0 bg-linear-to-r from-neutral-100 via-neutral-200/70 to-neutral-100 animate-shimmer" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-red-400/30 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="relative w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg className="w-7 h-7 text-red-500 animate-bounce" style={{ animationDuration: '1.5s' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold text-neutral-600 tracking-wide">Loading Google Maps</p>
        <div className="flex gap-1.5 mt-2">
          <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1s' }} />
          <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '150ms', animationDuration: '1s' }} />
          <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '300ms', animationDuration: '1s' }} />
        </div>
      </div>
    </div>
  ),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response)

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
    
  };

  return (
    <section id= "contact" className="flex flex-col px-8 mt-8 lg:mt-32 mb-24 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-4 items-center mb-12">
        <h1 className="text-4xl lg:text-[42px] text-white font-bold lg:text-neutral-900 tracking-tight">Contact</h1>
         <div className="border border-black w-25 lg:w-50 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="w-full order-2 lg:order-1 h-full min-h-[350px] lg:min-h-120">
          <Map />
        </div>
        <div className="w-full order-1 lg:order-2 flex flex-col justify-center bg-white rounded-3xl p-2 lg:p-6">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col relative group">
                <label 
                  htmlFor="firstName" 
                  className="text-xs font-semibold text-neutral-400 group-focus-within:text-neutral-900 transition-colors duration-200"
                >
                  First Name
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="w-full border-b border-neutral-300 py-3 bg-transparent text-neutral-800 placeholder-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col relative group">
                <label 
                  htmlFor="lastName" 
                  className="text-xs font-semibold text-neutral-400 group-focus-within:text-neutral-900 transition-colors duration-200"
                >
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                  className="w-full border-b border-neutral-300 py-3 bg-transparent text-neutral-800 placeholder-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>
            <div className="flex flex-col relative group">
              <label 
                htmlFor="email" 
                className="text-xs font-semibold text-neutral-400 group-focus-within:text-neutral-900 transition-colors duration-200"
              >
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john.doe@example.com"
                className="w-full border-b border-neutral-300 py-3 bg-transparent text-neutral-800 placeholder-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col relative group">
              <label 
                htmlFor="message" 
                className="text-xs font-semibold text-neutral-400 group-focus-within:text-neutral-900 transition-colors duration-200"
              >
                Write your message..
              </label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Write your message here..."
                className="w-full border-b border-neutral-300 py-3 bg-transparent text-neutral-800 placeholder-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors duration-200 resize-none"
              />
            </div>
            {status === 'success' && (
              <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-sm font-medium transition-all duration-300 animate-fadeIn">
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-[#181a24] text-white py-4 px-8 rounded-xl font-bold tracking-wide shadow-md hover:bg-black active:scale-[0.98] transition-all duration-200 disabled:bg-neutral-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;