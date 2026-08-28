import React from 'react';
import { Code, ArrowUp, Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid (Geeky Footer Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center space-x-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-md">
                <Code className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {personal.name}
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Full-Stack Developer based in Pune, India. Specializing in MERN stack, Python/Django, and clean modern web engineering.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              {personal.socialLinks.whatsapp && (
                <a
                  href={personal.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-emerald-500 transition-colors"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp (Hii Pawan)"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              )}
              {personal.socialLinks.instagram && (
                <a
                  href={personal.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-primary-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-mono uppercase text-white font-bold tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-primary-400 transition-colors">Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-primary-400 transition-colors">Projects & Apps</a></li>
              <li><a href="#experience" className="hover:text-primary-400 transition-colors">Experience & Education</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Top Specialties */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-mono uppercase text-white font-bold tracking-wider">
              Core Skills
            </h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white transition-colors">React.js & Frontend</span></li>
              <li><span className="hover:text-white transition-colors">Node.js & Express.js</span></li>
              <li><span className="hover:text-white transition-colors">Python & Django MVT</span></li>
              <li><span className="hover:text-white transition-colors">MongoDB & MySQL</span></li>
              <li><span className="hover:text-white transition-colors">RESTful API Design</span></li>
            </ul>
          </div>

          {/* Direct Reachout */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-mono uppercase text-white font-bold tracking-wider">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-400">
              {personal.location}
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="text-xs text-primary-400 hover:underline block truncate font-mono"
            >
              {personal.email}
            </a>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary-500 hover:text-white text-slate-300 transition-all flex items-center space-x-1.5 text-xs font-semibold"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3 text-center">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
