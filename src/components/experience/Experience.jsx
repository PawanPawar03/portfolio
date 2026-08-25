import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Experience = () => {
  const { experience, education } = portfolioData;
  const [activeTab, setActiveTab] = useState('work');

  return (
    <section id="experience" className="py-24 border-b border-slate-300/40 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full geeky-badge text-xs font-mono font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A chronological timeline of my hands-on software development experience and academic background.
          </p>

          {/* Toggle Tabs */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'work'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience & Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto space-y-6">
          {activeTab === 'work' && (
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="geeky-card p-6 sm:p-8 rounded-3xl space-y-4 relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-mono font-bold">
                      {item.type}
                    </span>
                    <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-primary-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 pt-2">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="geeky-card p-6 sm:p-8 rounded-3xl space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-mono font-bold">
                      Degree
                    </span>
                    <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-primary-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="text-primary-500 font-semibold text-sm">
                    {item.institution}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.honors && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-amber-500">
                      🏆 {item.honors}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
