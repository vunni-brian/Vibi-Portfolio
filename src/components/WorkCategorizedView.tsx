/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ScreenId, Project } from '../types';
import { PROJECTS_DATA } from '../data';
import { motion } from 'motion/react';
import { ArrowRight, LayoutGrid, Layers } from 'lucide-react';

interface WorkCategorizedViewProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectProject: (project: Project) => void;
}

export default function WorkCategorizedView({ onNavigate, onSelectProject }: WorkCategorizedViewProps) {
  // Separate projects by category dynamically
  const brandProjects = PROJECTS_DATA.filter((p) => p.category === 'Brand Identity');
  const printProjects = PROJECTS_DATA.filter((p) => p.category === 'Print & Editorial');

  return (
    <motion.div
      id="categorized-work-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-24 space-y-20"
    >
      {/* Page Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-12 border-b border-outline-variant/20">
        <div className="md:col-span-8">
          <span className="text-[10px] font-sans font-semibold tracking-widest text-primary uppercase">
            Design Archive
          </span>
          <h1 className="font-serif text-[40px] md:text-[64px] leading-none tracking-tight text-on-background mt-2">
            Selected Works
          </h1>
        </div>
        
        <p className="md:col-span-4 font-sans text-[14px] leading-relaxed text-secondary text-pretty">
          A collection of recent branding identities and editorial graphics. Highlighting meticulous typographic detailing and tactile material translations.
        </p>
      </div>

      {/* Sub-layout Filter Bar for switching state to Work */}
      <div id="filter-layout-bar-categorized" className="flex justify-between items-center bg-surface-variant/30 p-2 border border-outline-variant/20">
        <div className="flex items-center gap-1.5 text-xs text-secondary px-2">
          <span>Display:</span>
        </div>
        <div className="flex gap-2">
          {/* Work Categorized is active here */}
          <button
            className="flex items-center gap-2 text-[10px] uppercase font-semibold tracking-wider text-on-background px-4 py-2 bg-background border border-outline-variant/30 shadow-sm"
            disabled
          >
            <Layers className="w-3.5 h-3.5 text-primary" />
            Categorized
          </button>
          
          <button
            onClick={() => onNavigate('work')}
            className="flex items-center gap-2 text-[10px] uppercase font-semibold tracking-wider text-secondary hover:text-on-background px-4 py-2 transition-all duration-300 bg-transparent border border-transparent cursor-pointer"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            All Works ({PROJECTS_DATA.length})
          </button>
        </div>
      </div>

      {/* Brand Identity Section */}
      <section id="category-brand-identity" className="space-y-8">
        <h2 className="font-serif text-[28px] md:text-[32px] text-on-background border-b border-outline-variant/40 pb-3">
          Brand Identity
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandProjects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col justify-end bg-surface border border-outline-variant/30 aspect-square relative cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              {/* Backsplash Cover Cover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-60"
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Title & Metadata pop-up on Hover */}
              <div className="relative z-10 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-background/90 backdrop-blur-xs border-t border-outline-variant/40 flex flex-col justify-between h-full">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-semibold font-sans block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg text-on-background">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex justify-between items-center text-[10px] tracking-wider text-secondary uppercase font-semibold pt-4">
                  <span>View Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Print & Editorial Section */}
      <section id="category-print-editorial" className="space-y-8 pt-12">
        <h2 className="font-serif text-[28px] md:text-[32px] text-on-background border-b border-outline-variant/40 pb-3">
          Print &amp; Editorial
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {printProjects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col justify-end bg-surface border border-outline-variant/30 aspect-square relative cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              {/* Backsplash Cover Cover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-60"
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Title & Metadata pop-up on Hover */}
              <div className="relative z-10 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-background/90 backdrop-blur-xs border-t border-outline-variant/40 flex flex-col justify-between h-full">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-semibold font-sans block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg text-on-background">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex justify-between items-center text-[10px] tracking-wider text-secondary uppercase font-semibold pt-4">
                  <span>View Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
