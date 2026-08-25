import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers, Zap } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden border border-gray-800 shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col bg-[#0B0F19]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/80 transition-colors border border-gray-700"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-900 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-500/40 text-teal-400 text-xs font-mono">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured Work</span>
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            {/* Overview */}
            <div className="space-y-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-teal-400 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Project Overview</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Metrics highlight */}
            {project.metrics && (
              <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-teal-500/20 text-teal-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-teal-400">Performance Metric</div>
                  <div className="text-sm font-bold text-white">{project.metrics}</div>
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-teal-400 flex items-center space-x-2">
                  <Layers className="w-4 h-4" />
                  <span>Key Architectural Features</span>
                </h3>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feat, index) => (
                    <li key={index} className="flex items-start space-x-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400">
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-gray-800/80 text-teal-300 text-xs font-mono border border-gray-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all text-sm"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold border border-gray-700 transition-all text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
