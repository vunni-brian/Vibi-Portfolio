/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Check, Send } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (screen: ScreenId) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) return;
    
    setIsSubmitting(true);
    // Simulate real network submission with warm visual feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', project: '' });
    }, 1200);
  };

  return (
    <motion.div
      id="contact-view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-12 md:py-24 flex-grow flex flex-col justify-center w-full"
    >
      <div className="space-y-[80px]">
        {/* Header Block */}
        <header className="text-center space-y-6">
          <h1 className="font-serif text-[40px] md:text-[64px] leading-tight tracking-tight text-on-background">
            Start a conversation.
          </h1>
          <p className="font-sans text-[15px] md:text-[18px] text-secondary leading-relaxed max-w-lg mx-auto">
            We are always looking for new challenges and interesting partners. Tell us about your project.
          </p>
        </header>

        {/* Form Container */}
        <div id="form-wrapper" className="relative bg-surface p-8 md:p-12 border border-outline-variant/30">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-[40px]"
              >
                <div className="space-y-[32px]">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="form-name"
                      className="font-sans text-[10px] font-semibold uppercase tracking-widest text-secondary mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-0 border-b border-on-background bg-transparent px-0 py-2.5 focus:ring-0 focus:border-primary font-sans text-[16px] text-on-background placeholder-secondary/40 transition-colors duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="form-email"
                      className="font-sans text-[10px] font-semibold uppercase tracking-widest text-secondary mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-0 border-b border-on-background bg-transparent px-0 py-2.5 focus:ring-0 focus:border-primary font-sans text-[16px] text-on-background placeholder-secondary/40 transition-colors duration-300"
                    />
                  </div>

                  {/* Project Details Input */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="form-project"
                      className="font-sans text-[10px] font-semibold uppercase tracking-widest text-secondary mb-1"
                    >
                      Project details
                    </label>
                    <textarea
                      id="form-project"
                      required
                      rows={3}
                      placeholder="Briefly describe what you're looking to achieve..."
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="border-0 border-b border-on-background bg-transparent px-0 py-2.5 focus:ring-0 focus:border-primary font-sans text-[16px] text-on-background placeholder-secondary/40 resize-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Submit button wrapper */}
                <div className="pt-4 flex justify-center">
                  <button
                    id="btn-submit-conversation"
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-widest text-on-background hover:text-primary transition-all duration-300 pb-1"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Start a conversation'}</span>
                    <Send className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 ${
                      isSubmitting ? 'animate-pulse' : ''
                    }`} />
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-block"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 animate-bounce">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-on-background">Inquiry Shared</h3>
                <p className="font-sans text-[14px] text-secondary max-w-sm mx-auto leading-relaxed">
                  Thank you! We received your concept scope and will be in touch within 24 business hours to details next steps.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[10px] uppercase font-semibold text-primary hover:underline tracking-widest"
                >
                  Submit another note
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Direct contact points row */}
        <div id="contact-details-row" className="border-t border-outline-variant/30 pt-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
          <a
            href="mailto:hello@astudio.com"
            className="flex items-center gap-2.5 font-sans text-[14px] text-secondary hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>hello@astudio.com</span>
          </a>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2.5 font-sans text-[14px] text-secondary hover:text-primary transition-colors duration-300"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+1 (555) 123-4567</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
