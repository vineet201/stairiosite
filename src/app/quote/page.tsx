'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { stairioServiceOptions } from '@/lib/services';

const productOptions = [
  'Hotelify',
  'AI Voice Calling Agent',
  'SmartSite',
  'Kore',
  'SalesPro - AI Powered Sales Management Software',
];

const serviceOptions = stairioServiceOptions;

const timelineOptions = [
  'Less than 1 month',
  '1 - 3 months',
  '3 - 6 months',
  '6 - 12 months',
  'Ongoing partnership',
  'Flexible',
];

const FORM_SUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/growth@stairio.com';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    timeline: '',
    projectDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const submission = new FormData(e.currentTarget);
      submission.set('_subject', 'New Stairio Quote Request');
      submission.set('_template', 'table');
      submission.set('_replyto', formData.email);
      submission.set('_captcha', 'false');
      submission.set('submission_source', 'stairio-quote-page');
      submission.set('page_url', window.location.href);

      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: submission,
      });

      let data: { message?: string } | null = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(data?.message || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to submit. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="relative max-w-lg w-full">
          {/* Success Card */}
          <div className="relative rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_50px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Glass gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5DDF18]/[0.05] via-transparent to-[#FF9132]/[0.05] pointer-events-none" />
            
            {/* Top highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5DDF18]/20 to-[#FF9132]/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-[#5DDF18]" />
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-4">
                Request Received!
              </h1>
              
              <p className="text-neutral-400 mb-8">
                Thank you for contacting Stairio. Your request has been sent to our team at growth@stairio.com and we&apos;ll get back to you within 24-48 hours.
              </p>
              
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D8B4FE]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF9132]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 sm:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-4 sm:mb-6">
            Get a Quote
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
            Share your contact details and what you need. Our team will respond with the next step.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_50px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden">
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'}} />
          
          {/* Glass gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B4FE]/[0.03] via-transparent to-[#FF9132]/[0.03] pointer-events-none" />
          
          {/* Top highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#D8B4FE]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF9132]/10 rounded-full blur-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D8B4FE]/30 to-[#FF9132]/30 flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h2>
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Right Column - Project Details */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D8B4FE]/30 to-[#FF9132]/30 flex items-center justify-center text-sm">2</span>
                  Project Details
                </h2>

                {/* Product / Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-300 mb-2">
                    Product / Service Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 appearance-none cursor-pointer"
                    style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px'}}
                  >
                    <option value="" className="bg-neutral-900">Select a product or service</option>
                    <optgroup label="Products">
                      {productOptions.map((product) => (
                        <option key={product} value={product} className="bg-neutral-900">
                          {product}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Services">
                      {serviceOptions.map((service) => (
                        <option key={service} value={service} className="bg-neutral-900">
                          {service}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-neutral-300 mb-2">
                    Project Timeline <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 appearance-none cursor-pointer"
                    style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px'}}
                  >
                    <option value="" className="bg-neutral-900">Select timeline</option>
                    {timelineOptions.map(time => (
                      <option key={time} value={time} className="bg-neutral-900">{time}</option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-neutral-300 mb-2">
                    Project Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D8B4FE] to-[#FF9132] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(216,180,254,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#D8B4FE]/80 to-[#FF9132]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer note */}
        <p className="text-center text-neutral-500 text-sm mt-8">
          We typically respond within 24-48 business hours.
        </p>
      </div>
    </main>
  );
}
