import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import profileImg from '../../assets/profile.jpg';

export const ProjectCard = ({ project, onSelect }) => {
  const { personal } = portfolioData;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="geeky-card rounded-3xl overflow-hidden flex flex-col h-full group hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Card Image Container */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 text-primary-600 dark:text-primary-400 text-xs font-bold shadow-md">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[11px] font-bold shadow-md flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Hover details overlay */}
        <button
          onClick={() => onSelect(project)}
          className="absolute inset-0 bg-primary-600/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label="View Project Details"
        >
          <span className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center space-x-1.5">
            <Eye className="w-4 h-4 text-primary-500" />
            <span>View Case Study</span>
          </span>
        </button>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Performance metric tag */}
          {project.metrics && (
            <div className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-2 flex items-center space-x-1">
              <span>⚡</span>
              <span>{project.metrics}</span>
            </div>
          )}

          <h3 
            onClick={() => onSelect(project)}
            className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors cursor-pointer line-clamp-1"
          >
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mt-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-mono">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Geeky Card Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          {/* Author info snippet */}
          <div className="flex items-center space-x-2.5">
            <img
              src={profileImg}
              alt={personal.name}
              className="w-7 h-7 rounded-full object-cover ring-1 ring-primary-500"
            />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {personal.name.split(' ')[0]}
            </span>
          </div>

          {/* Action Links */}
          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repo"
                className="p-1.5 rounded-lg text-slate-500 hover:text-primary-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="p-1.5 rounded-lg text-slate-500 hover:text-primary-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => onSelect(project)}
              className="p-1.5 rounded-lg text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors"
              aria-label="Open project modal"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
