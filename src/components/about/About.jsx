import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Sparkles, 
  Code2, 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  CornerDownLeft, 
  Layers,
  CheckCircle2,
  User,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About = () => {
  const { personal, terminalBio } = portfolioData;
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([
    { command: 'welcome', output: terminalBio.welcome },
  ]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = commandInput.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setCommandHistory([]);
      setCommandInput('');
      return;
    }

    const response = terminalBio.commands[cleanCmd] || `Command not found: '${cleanCmd}'. Type 'help' to see valid commands.`;

    setCommandHistory((prev) => [
      ...prev,
      { command: commandInput, output: response },
    ]);
    setCommandInput('');
  };

  const handleQuickCommand = (cmd) => {
    if (cmd === 'clear') {
      setCommandHistory([]);
      return;
    }
    const response = terminalBio.commands[cmd];
    setCommandHistory((prev) => [
      ...prev,
      { command: cmd, output: response },
    ]);
  };

  const highlights = [
    {
      icon: Rocket,
      title: 'Full-Stack Development',
      description: 'End-to-end web apps using MERN (MongoDB, Express, React, Node.js) and Python Django.'
    },
    {
      icon: Layers,
      title: 'REST APIs & Backend',
      description: 'Structured CRUD architecture, secure JWT authentications, and reliable database schema.'
    },
    {
      icon: Cpu,
      title: 'Interactive Frontend',
      description: 'Responsive user interfaces built with React.js, Tailwind CSS, Bootstrap, and modern CSS.'
    },
    {
      icon: ShieldCheck,
      title: 'Clean Code & Testing',
      description: 'Object-oriented programming principles, Python API automated tests, and git workflows.'
    }
  ];

  return (
    <section id="about" className="py-24 border-b border-slate-300/40 dark:border-slate-800/80 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full geeky-badge text-xs font-mono font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>DISCOVER MY BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About Me & Engineering Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A developer passionate about writing clean code, building responsive interfaces, and solving real-world challenges.
          </p>
        </div>

        {/* Bio & Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Story Card */}
          <div className="lg:col-span-6 flex flex-col justify-between geeky-card p-6 sm:p-8 rounded-3xl space-y-5">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center font-bold">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Hey, I'm {personal.name}!
                </h3>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personal.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div>
                <span className="text-primary-500 font-bold block">📍 Based In:</span>
                <span>{personal.location}</span>
              </div>
              <div>
                <span className="text-primary-500 font-bold block">🎓 Background:</span>
                <span>MCA & Computer Science</span>
              </div>
            </div>
          </div>

          {/* Right Column: Geeky Interactive Terminal */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="rounded-3xl overflow-hidden border border-slate-700 dark:border-slate-800 shadow-2xl bg-[#0d1424] flex-1 flex flex-col">
              
              {/* Terminal Title Bar */}
              <div className="bg-[#131d31] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">pawan@terminal:~$</span>
                </div>
                <button
                  onClick={() => handleQuickCommand('help')}
                  className="text-[11px] font-mono text-primary-400 hover:underline flex items-center space-x-1"
                >
                  <Terminal className="w-3 h-3" />
                  <span>Type 'help'</span>
                </button>
              </div>

              {/* Terminal Screen */}
              <div className="p-5 font-mono text-xs sm:text-sm h-80 sm:h-96 overflow-y-auto space-y-3 bg-[#090f1d] text-slate-200 flex-1">
                {commandHistory.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center space-x-2 text-primary-400 font-semibold">
                      <span>pawan@dev:~$</span>
                      <span className="text-white">{item.command}</span>
                    </div>
                    <div className="text-slate-300 pl-3 border-l-2 border-primary-500/40 whitespace-pre-wrap leading-relaxed">
                      {item.output}
                    </div>
                  </div>
                ))}

                {/* Input Prompt */}
                <form onSubmit={handleCommandSubmit} className="flex items-center space-x-2 pt-2">
                  <span className="text-primary-400 font-semibold">pawan@dev:~$</span>
                  <input
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder="try 'bio', 'skills', 'projects', 'education'..."
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600 text-xs sm:text-sm"
                  />
                  <button type="submit" className="text-slate-500 hover:text-primary-400">
                    <CornerDownLeft className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Quick Action Commands Bar */}
              <div className="bg-[#131d31] p-3.5 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400">Quick run:</span>
                {['help', 'summary', 'experience', 'education', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleQuickCommand(cmd)}
                    className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-primary-500/30 text-slate-300 hover:text-primary-300 font-mono text-[11px] border border-slate-700 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center font-mono">
              💡 Interactive CLI: click quick run buttons or type directly in prompt.
            </p>
          </div>

        </div>

        {/* 4 Highlight Cards in a Single Full-Width Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="geeky-card p-6 rounded-2xl group hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
