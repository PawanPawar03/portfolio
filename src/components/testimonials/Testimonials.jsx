import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote, Star } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS & FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            What Leaders & Teammates Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Real feedback from engineering directors, product managers, and startup founders I have collaborated with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-gray-800/80 hover:border-teal-500/40 transition-all flex flex-col justify-between shadow-xl relative group"
            >
              {/* Decorative top quote icon */}
              <div className="absolute top-6 right-6 text-teal-500/20 group-hover:text-teal-500/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* 5-star rating */}
                <div className="flex items-center space-x-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed italic">
                  "{test.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-gray-800/80">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/30"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                    {test.name}
                  </h4>
                  <p className="text-xs text-teal-400 font-medium">
                    {test.role}
                  </p>
                  <p className="text-[11px] text-gray-500 font-mono">
                    {test.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
