/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export default function Header({ currentScreen, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', target: 'home' as ScreenId },
    { label: 'Work', target: 'work-categorized' as ScreenId },
    { label: 'Process', target: 'info' as ScreenId },
    { label: 'About', target: 'info' as ScreenId },
    { label: 'Contact', target: 'contact' as ScreenId },
  ];

  return (
    <header id="app-header" className="w-full bg-background/95 backdrop-blur-md z-45 sticky top-0 border-b border-outline-variant/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-10">
        
        {/* Brand identity logo - xpath: `//*[contains(@class, 'headline-sm') and contains(text(), 'A.Studio')]` */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="headline-sm font-serif text-2xl font-bold tracking-tighter leading-none text-on-background hover:text-primary transition-colors duration-300"
        >
          A.Studio
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-10 font-sans">
          <ul className="flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase text-secondary">
            {navItems.map((item, idx) => {
              // Highlight active based on current screen
              // Note: both Process and About point to 'info'
              const isActive = 
                (item.label === 'Home' && currentScreen === 'home') ||
                (item.label === 'Work' && (currentScreen === 'work-categorized' || currentScreen === 'work')) ||
                ((item.label === 'Process' || item.label === 'About') && currentScreen === 'info') ||
                (item.label === 'Contact' && currentScreen === 'contact');

              return (
                <li key={idx}>
                  <a
                    href={`#${item.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.target);
                    }}
                    className={`pb-1 transition-all duration-300 uppercase tracking-[0.2em] ${
                      isActive 
                        ? 'text-on-background underline underline-offset-8 decoration-primary decoration-2' 
                        : 'text-secondary hover:text-on-background'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Inquire Button - xpath: `//*[normalize-space(text())='Inquire']` */}
          <button
            id="btn-inquire-desktop"
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-background bg-primary px-6 py-3 hover:bg-secondary transition-colors duration-300"
          >
            Inquire
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          id="btn-mobile-menu"
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary hover:opacity-75 transition-opacity"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer with transition */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="md:hidden bg-background border-t border-outline-variant px-6 py-8 flex flex-col gap-6 animate-fade-in">
          <ul className="flex flex-col gap-5 text-[14px] font-semibold tracking-wider uppercase">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.target}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.target);
                    setMobileMenuOpen(false);
                  }}
                  className={`block py-1 ${
                    currentScreen === item.target ? 'text-primary' : 'text-secondary hover:text-on-background'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <button
            id="btn-inquire-mobile"
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full text-center text-[12px] font-semibold tracking-widest uppercase text-on-primary bg-on-background py-3.5 hover:bg-primary transition-colors duration-300"
          >
            Inquire
          </button>
        </div>
      )}
    </header>
  );
}
