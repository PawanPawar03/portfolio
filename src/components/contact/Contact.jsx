import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone,
  Clock, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Instagram, 
  AlertCircle,
  Copy,
  Check,
  MessageSquare
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const endpoint = personal.contactFormEndpoint || `https://formsubmit.co/ajax/${personal.email}`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Enquiry from ${formData.name}`,
          message: formData.message,
          _subject: `🚀 Portfolio Enquiry: ${formData.subject || formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger celebratory confetti animation
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6C5CE7', '#a855f7', '#38bdf8', '#10b981', '#f59e0b']
        });
      } else {
        throw new Error(result.message || 'Failed to deliver enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setErrorMessage(
        `Unable to send enquiry automatically. Please send directly to ${personal.email} or try again.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-slate-300/40 dark:border-slate-800/80 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full geeky-badge text-xs font-mono font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT & CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Have an opportunity, question, or want to build something together? Send me an enquiry!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="geeky-card p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Details
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I am currently open to developer roles, GIS operations, and collaborative tech initiatives. All enquiries notify me instantly on my email.
              </p>

              {/* Direct Email Pill */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <a 
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate hover:text-primary-500 block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-slate-700 text-slate-500 hover:text-primary-500 transition-colors shadow-xs ml-2 shrink-0 cursor-pointer"
                  aria-label="Copy email"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Other Info */}
              <div className="space-y-4 pt-1">
                {personal.phone && (
                  <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-300">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">Phone</span>
                      <a href={`tel:${personal.phone}`} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-primary-500">
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                )}

                {personal.socialLinks.whatsapp && (
                  <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-300">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">WhatsApp</span>
                      <a
                        href={personal.socialLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
                      >
                        <span>Chat on WhatsApp</span>
                        <span className="text-xs font-normal text-slate-400 dark:text-slate-500">(Direct message)</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{personal.location}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Availability</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Immediate / Full-time</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                  Find me online:
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personal.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {personal.socialLinks.whatsapp && (
                    <a
                      href={personal.socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors"
                      aria-label="WhatsApp"
                      title="Chat on WhatsApp (Hii Pawan)"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  )}
                  {personal.socialLinks.instagram && (
                    <a
                      href={personal.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Active Working Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="geeky-card p-6 sm:p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send Enquiry
              </h3>

              {isSubmitted && (
                <div className="p-5 mb-6 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-900 dark:text-emerald-200">Enquiry Sent Successfully!</div>
                    <div className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                      Pawan has received your notification at <strong>{personal.email}</strong> and will respond to your email shortly.
                    </div>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="p-5 mb-6 rounded-2xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-800 dark:text-rose-300 flex items-start space-x-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
                  <div>
                    <div className="font-bold text-rose-900 dark:text-rose-200">Delivery Notice</div>
                    <div className="text-xs text-rose-700 dark:text-rose-400 mt-0.5">
                      {errorMessage}
                    </div>
                    <a 
                      href={`mailto:${personal.email}?subject=Portfolio%20Enquiry&body=Hi%20Pawan,%0D%0A%0D%0A`}
                      className="inline-block mt-2 text-xs font-bold text-rose-700 dark:text-rose-300 underline"
                    >
                      Click here to email directly via Mail App ↗
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                      Your Name <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Recruiter"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                      Your Email <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity / GIS & Web Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 transition-colors placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                    Message <span className="text-primary-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your enquiry details here..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-primary-500 transition-colors placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl geeky-button font-bold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-geeky disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Enquiry to Pawan...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
