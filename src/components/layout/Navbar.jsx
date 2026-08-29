import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, Linkedin, Instagram, Mail, Code, Terminal } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { personal } = portfolioData;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    const wasOpen = mobileMenuOpen;
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    
    const performScroll = () => {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        try { window.history.pushState(null, '', '#home'); } catch (err) {}
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        try { window.history.pushState(null, '', href); } catch (err) {}
      } else {
        window.location.hash = href;
      }
    };

    if (wasOpen) {
      setTimeout(performScroll, 120);
    } else {
      performScroll();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Geeky Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center space-x-2.5 group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Code className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight leading-none">
                {personal.name.split(' ')[0]}
                <span className="text-primary-500">.</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-tight">
                portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Social Icons & Theme Toggle (Geeky Style) */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 pr-2 border-r border-slate-200 dark:border-slate-800">
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              {personal.socialLinks.whatsapp && (
                <a
                  href={personal.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp (Hii Pawan)"
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              )}
              {personal.socialLinks.instagram && (
                <a
                  href={personal.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Interactive Dual-Pill Dark / Light Toggle Switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={theme === 'dark' ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙"}
              className="relative flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-primary-400 transition-colors cursor-pointer"
            >
              {/* Light Option */}
              <div className={`relative flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold z-10 transition-colors ${
                theme === 'light' ? 'text-amber-600 font-bold' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline text-[11px] font-mono">Light</span>
              </div>

              {/* Dark Option */}
              <div className={`relative flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold z-10 transition-colors ${
                theme === 'dark' ? 'text-primary-300 font-bold' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
              }`}>
                <Moon className="w-3.5 h-3.5 text-primary-400" />
                <span className="hidden sm:inline text-[11px] font-mono">Dark</span>
              </div>

              {/* Sliding Active Pill */}
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                className={`absolute top-1 bottom-1 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-200/50 dark:border-slate-600/50 ${
                  theme === 'light' ? 'left-1 w-[calc(50%-4px)]' : 'left-[50%] w-[calc(50%-4px)]'
                }`}
              />
            </button>

            {/* Contact CTA button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-4 py-2 text-sm font-semibold rounded-xl geeky-button shadow-sm cursor-pointer"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center space-x-1 text-xs font-mono cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px]">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-primary-500" />
                  <span className="text-[10px]">Dark</span>
                </>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-primary-500" />}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-2 w-full py-2.5 text-center text-sm font-semibold rounded-xl geeky-button shadow-sm block cursor-pointer"
              >
                Hire Me / Contact
              </a>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around">
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-500"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-500"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                {personal.socialLinks.whatsapp && (
                  <a
                    href={personal.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 dark:text-slate-300 hover:text-emerald-500"
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
                    className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-500"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-500"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
