/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ScreenId } from '../types';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (screen: ScreenId) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <motion.div
      id="home-view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-grow flex flex-col justify-center relative py-12 md:py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Large Background Number for Editorial Feel */}
      <div 
        id="bg-editorial-digit"
        className="absolute top-4 md:top-12 right-6 md:right-24 text-[200px] md:text-[340px] font-bold text-surface-container select-none pointer-events-none z-0 font-serif leading-none opacity-80"
      >
        24
      </div>

      {/* Main asymmetric editorial grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 my-auto">
        
        {/* Left Column content */}
        <div id="home-left-hero" className="lg:col-span-7 flex flex-col justify-center text-left py-6">
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold font-serif text-on-background leading-[0.9] tracking-tight mb-8">
            Elevating <br />
            <span className="italic font-light text-secondary">Human</span> Design
          </h1>
          
          <p className="font-sans text-base md:text-lg max-w-lg leading-relaxed text-on-surface-variant mb-12">
            A premium visual identity &amp; archive design studio. We partner with discerning cultural and commercial leaders to craft intentional digital environments and tactile tactile monographs.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              id="cta-home-inquire"
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-primary text-background hover:bg-secondary font-semibold font-sans text-[11px] uppercase tracking-widest transition-colors duration-300 shadow-sm"
            >
              Inquire
            </button>
            
            <span className="hidden sm:inline-block h-[1px] w-20 bg-outline-variant/60"></span>
            
            <span className="text-[10px] uppercase tracking-widest font-sans text-secondary font-semibold">
              Est. 2018
            </span>
          </div>
        </div>

        {/* Right Column content (Curated Interactive Widget) */}
        <div id="home-right-hero" className="lg:col-span-5 flex items-center justify-end">
          <motion.div
            id="home-curated-card"
            onClick={() => onNavigate('work-categorized')}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.4 }}
            className="w-full aspect-[4/5] bg-surface-variant border border-outline-variant relative group overflow-hidden cursor-pointer shadow-md"
          >
            {/* Underlying tactile photograph */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-multiply transition-transform duration-[2000ms] group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrpPs6y6gsGvehw1JTClz7QxJYluwGY5WaLwBzONrdXbuyxlYAnri8bKYW6WhdaVnDNvK3r63MjMaFb89RraHNycZs3MhU13Cys5AEJh9eq2WvOjxgBVj0FdO295E6D1kL3yfs5XtbbRm05cniIB2FD-6nVlJjAaDhhupSOVlZFGILvwY6zvOLy2ifU3QfFvf6n4AJBZh8V_8XGXtM6hEpFtLy9mmyXpKJnHrpGjJQMQBQyi3hI954rnx57X0YdZ0qlNXfsNam8Dw')`
              }}
            />

            {/* Inner aesthetic frame line */}
            <div className="absolute inset-4 border border-outline-variant/40 flex flex-col justify-between p-6 z-10 bg-background/5 backdrop-blur-[1px] hover:backdrop-blur-none transition-all duration-500">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest font-sans text-on-background opacity-65 italic font-medium">
                  Current Project
                </span>
                <span className="text-xs font-sans font-bold text-on-background bg-background px-2 py-0.5">
                  01
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-light font-serif leading-tight mb-2 text-on-background italic">
                  The Alpine Collection
                </h3>
                <div className="w-12 h-[1px] bg-on-background mb-4 transition-all duration-300 group-hover:w-20"></div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-secondary font-semibold flex items-center gap-1.5">
                  Brand Identity / 2024
                  <ArrowUpRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
