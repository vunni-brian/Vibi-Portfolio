/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ScreenId, Project } from '../types';
import { PROJECTS_DATA } from '../data';
import { motion } from 'motion/react';
import { ArrowRight, LayoutGrid, Layers } from 'lucide-react';

interface WorkViewProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectProject: (project: Project) => void;
}

export default function WorkView({ onNavigate, onSelectProject }: WorkViewProps) {
  return (
    <motion.div
      id="unified-work-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-24 space-y-16"
    >
      {/* Page Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-12 border-b border-outline-variant/20">
        <div className="md:col-span-8">
          <span className="text-[10px] font-sans font-semibold tracking-widest text-primary uppercase">
            Creative Index
          </span>
          <h1 className="font-serif text-[40px] md:text-[64px] leading-none tracking-tight text-on-background mt-2">
            Selected Works
          </h1>
        </div>
        
        <p className="md:col-span-4 font-sans text-[14px] leading-relaxed text-secondary text-pretty">
          A collection of recent branding identities and editorial graphics. Highlighting meticulous typographic detailing and tactile material translations.
        </p>
      </div>

      {/* Sub-layout Filter Bar for switching state to Work Categorized */}
      <div id="filter-layout-bar" className="flex justify-between items-center bg-surface-variant/30 p-2 border border-outline-variant/20">
        <div className="flex items-center gap-1.5 text-xs text-secondary px-2">
          <span>Display:</span>
        </div>
        <div className="flex gap-2">
          {/* Work (Unified list) is active here */}
          <button
            onClick={() => onNavigate('work-categorized')}
            className="flex items-center gap-2 text-[10px] uppercase font-semibold tracking-wider text-secondary hover:text-on-background px-4 py-2 transition-all duration-300 bg-transparent border border-transparent cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            Categorized
          </button>
          
          <button
            className="flex items-center gap-2 text-[10px] uppercase font-semibold tracking-wider text-on-background px-4 py-2 bg-background border border-outline-variant/30 shadow-sm"
            disabled
          >
            <LayoutGrid className="w-3.5 h-3.5 text-primary" />
            All Works ({PROJECTS_DATA.length})
          </button>
        </div>
      </div>

      {/* Uncategorized Bento Flow Card Layout */}
      <section id="uncategorized-bento-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            onClick={() => onSelectProject(project)}
            whileHover={{ scale: 1.01 }}
            className="group flex flex-col justify-end bg-surface border border-outline-variant/30 aspect-square relative cursor-pointer overflow-hidden"
          >
            {/* Background Cover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-40"
              style={{ backgroundImage: `url('${project.imageUrl}')` }}
            />
            
            {/* Shadow gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Project labels block */}
            <div className="relative z-10 p-6 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between h-full bg-background/90 backdrop-blur-xs border-t border-outline-variant/40">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-primary font-semibold font-sans block">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl text-on-background tracking-tight">
                  {project.title}
                </h3>
              </div>

              <div className="flex justify-between items-center text-[10px] tracking-wider text-secondary uppercase font-semibold pt-4">
                <span>Scope Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}
