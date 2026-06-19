/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Listen for Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          id="project-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-on-background/80 backdrop-blur-sm overflow-y-auto no-scrollbar flex items-center justify-center p-4 md:p-16"
        >
          {/* Main card */}
          <motion.div
            id="modal-card-box"
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-5xl bg-background border border-surface-variant flex flex-col md:flex-row min-h-[60vh] max-h-[90vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="btn-close-modal"
              aria-label="Close modal"
              onClick={onClose}
              className="absolute top-4 right-4 z-40 bg-background/80 backdrop-blur-md p-2 hover:text-primary hover:scale-105 transition-all duration-200 border border-outline-variant/30"
            >
              <X className="w-5 h-5 text-on-background" />
            </button>

            {/* Left Column: Big Image Frame */}
            <div className="w-full md:w-3/5 bg-surface-variant min-h-[300px] md:min-h-full relative overflow-hidden">
              <img
                id="modal-image-img"
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Column: Title and Details Block */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between overflow-y-auto bg-background">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">
                  {project.category}
                </span>

                <h2 id="modal-project-title" className="font-serif text-3xl md:text-4xl text-on-background leading-tight">
                  {project.title}
                </h2>

                <div className="h-[1px] w-12 bg-primary"></div>

                <p className="font-sans text-[14px] leading-relaxed text-secondary md:text-on-surface-variant">
                  {project.description}
                </p>
              </div>

              <div className="mt-12 space-y-6 pt-6 border-t border-outline-variant/30 text-xs">
                {/* Client detail row */}
                <div>
                  <span className="block font-semibold tracking-wider text-[10px] uppercase text-secondary mb-1">
                    Client Partner
                  </span>
                  <span className="block font-serif text-[16px] text-on-background">
                    {project.client}
                  </span>
                </div>

                {/* Tags row */}
                <div>
                  <span className="block font-semibold tracking-wider text-[10px] uppercase text-secondary mb-2">
                    Scope &amp; Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase tracking-wider bg-surface-container-high px-2.5 py-1 text-on-background font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer details */}
                <div className="flex justify-between items-center text-[10px] font-sans tracking-widest uppercase text-secondary pt-4">
                  <span>A.Studio / {project.year}</span>
                  <button
                    onClick={onClose}
                    className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
                  >
                    Back to Index
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
