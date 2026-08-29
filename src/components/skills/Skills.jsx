import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  FileCode, 
  Palette, 
  Cpu, 
  Server, 
  Terminal, 
  Boxes, 
  Network, 
  Radio, 
  Activity, 
  Cloud, 
  Database, 
  HardDrive, 
  GitMerge, 
  Wrench, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Code2,
  Layers,
  FileCode,
  Palette,
  Cpu,
  Server,
  Terminal,
  Boxes,
  Network,
  Radio,
  Activity,
  Cloud,
  Database,
  HardDrive,
  GitMerge,
  Wrench,
  ShieldCheck,
  Sparkles
};

export const Skills = () => {
  const { categories } = portfolioData.skills;
  const [activeTab, setActiveTab] = useState('all');

  const allSkills = categories.flatMap((cat) => cat.skills);

  const displayedSkills =
    activeTab === 'all'
      ? allSkills
      : categories.find((cat) => cat.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-24 border-b border-slate-300/40 dark:border-slate-800/80 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full geeky-badge text-xs font-mono font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNOLOGIES & TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Skills & Technical Proficiency
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive breakdown of the frameworks, languages, and developer tools I work with.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 border border-slate-200 dark:border-slate-700'
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  key={skill.name}
                  className="geeky-card p-5 rounded-2xl group hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-500 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {skill.level}% Proficiency
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
