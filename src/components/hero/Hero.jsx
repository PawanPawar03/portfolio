import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Sparkles, 
  MapPin, 
  Code2, 
  Layers, 
  Terminal,
  CheckCircle2,
  FileCode2
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personal.typingRoles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;
    const pauseDelay = 2000;

    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % personal.typingRoles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, personal.typingRoles]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-300/40 dark:border-slate-800/80">
      
      {/* Subtle Geeky Background Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Status & Category Badge */}
            <div className="inline-flex items-center self-center lg:self-start space-x-2 px-3.5 py-1.5 rounded-full geeky-badge text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.status}</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-primary-500">{personal.name}</span> <span className="inline-block animate-bounce">👋</span>
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200">
                  I specialize in{' '}
                  <span className="text-primary-500 dark:text-primary-400 font-mono">
                    {displayText}
                  </span>
                  <span className="w-0.5 h-6 sm:h-7 ml-1 bg-primary-500 inline-block animate-pulse" />
                </span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.tagline}
            </p>

            {/* Location Pill */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              <MapPin className="w-4 h-4 text-primary-500" />
              <span>{personal.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl geeky-button font-bold text-sm sm:text-base flex items-center space-x-2 shadow-geeky"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                About Me
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 pt-3">
              <span className="text-xs font-mono uppercase text-slate-400">Connect:</span>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              {personal.socialLinks.instagram && (
                <a
                  href={personal.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual / Geeky Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative max-w-sm w-full">
              
              {/* Geeky geometric frame background */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-3xl opacity-20 blur-xl transform -rotate-3" />
              
              {/* Profile Card Container */}
              <div className="relative geeky-card rounded-3xl p-6 overflow-hidden">
                
                {/* Author Avatar clean without any overlapping text */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-inner">
                  <img
                    src={personal.avatarUrl || personal.githubAvatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/profile.jpg";
                    }}
                  />
                </div>

                {/* Name & Role Badge Below Photo */}
                <div className="text-center mt-5 mb-4 space-y-1.5">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {personal.name}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full geeky-badge text-xs font-mono font-semibold">
                    {personal.role}
                  </div>
                </div>

                {/* Quick Stats Bar */}
                <div className="grid grid-cols-2 gap-3">
                  {personal.stats.slice(0, 2).map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 text-center"
                    >
                      <div className="text-xl font-black text-primary-500">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5 justify-center">
                  {['React.js', 'Node.js', 'Python', 'Django', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
