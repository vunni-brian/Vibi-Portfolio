/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ScreenId } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Behance', href: 'https://behance.net' },
  ];

  return (
    <footer id="app-footer" className="w-full bg-background border-t border-outline-variant/30 mt-auto z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col gap-10">
        
        {/* Top: Editorial Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-outline-variant/20 pb-8 text-left">
          
          {/* Location column */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.2em] text-secondary font-sans font-semibold mb-1.5">
              Studio Location
            </span>
            <span className="text-xs font-medium font-sans text-on-background">
              51.5074° N, 0.1278° W
            </span>
          </div>

          {/* Studio Status column */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.2em] text-secondary font-sans font-semibold mb-1.5">
              Studio Status
            </span>
            <span className="text-xs font-medium font-sans flex items-center gap-2 text-on-background">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Accepting Selected Projects
            </span>
          </div>

          {/* View Portfolio Trigger CTA column */}
          <div className="md:col-span-4 flex justify-start md:justify-end items-center">
            <button
              onClick={() => onNavigate('work-categorized')}
              className="group flex items-center gap-3 cursor-pointer text-left text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-on-background"
            >
              <span>View Portfolio</span>
              <div className="w-8 h-8 rounded-full border border-on-background/40 group-hover:border-primary flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition-transform duration-350">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

        </div>

        {/* Bottom: Copyright & Social Anchors */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div id="footer-logo-copy" className="text-secondary tracking-wide text-xs text-center md:text-left">
            © {new Date().getFullYear()} Aris Design Studio. Built with intentional craft &amp; layout.
          </div>

          {/* Right: Social Links */}
          <nav className="flex items-center gap-6 text-[10px] font-semibold tracking-widest uppercase text-secondary">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}
