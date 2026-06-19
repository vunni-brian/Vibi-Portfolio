/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ScreenId } from '../types';
import { CLIENTS_DATA, SERVICES_DATA } from '../data';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

interface InfoViewProps {
  onNavigate: (screen: ScreenId) => void;
}

export default function InfoView({ onNavigate }: InfoViewProps) {
  return (
    <motion.div
      id="info-view-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-24 space-y-24 md:space-y-40"
    >
      {/* Bio, portrait and big statement */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Profile Card & Bio - columns 1 to 5 */}
        <div id="author-bio-card" className="lg:col-span-5 flex flex-col gap-8 md:pr-8">
          <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden grayscale contrast-125 mix-blend-multiply border border-outline-variant/40">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxOIwwfndMeiEmyP56RxkgUDal4lS9ztBsmzwrPk0bAh0_7Q-2xQbO56CLsaJiwJjJl_nVJ0IVHhJNuRUUk3-MlgTgMMcn0GsqytSv5CcAMBYzoNzff1-dGrrGVEqL7mQxgDlD0m64k8JfVL-GJxQsHC-qI7kG7IyrNyOW5Udn8Dz3p0ClEK5x1Q7QnM93ytaE3I83HBHw49zTIti4WZwdynSVGrLsOBB7So1Wod2eG00zLcgO4FFCNt9ZqSFZVqerH5vsV4rEN5M"
              alt="Creative Director portrait in minimalist studio environment"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p id="author-bio-text" className="font-sans text-[15px] leading-relaxed text-on-surface-variant max-w-sm">
            Aris Design Studio is a multi-disciplinary practice focusing on visual identity, editorial design, and digital experiences. Rooted in tactile minimalism, we partner with discerning clients to craft intentional, enduring narratives that prioritize craft, typography, and purposeful whitespace over ephemeral trends.
          </p>
        </div>

        {/* Big Editorial Headline - columns 6 to 12 */}
        <div id="firm-editorial-headline" className="lg:col-span-7 flex flex-col justify-center h-full pt-4 md:pt-12">
          <h1 className="font-serif text-[40px] md:text-[64px] leading-[1.1] tracking-tight text-on-background text-balance">
            Designing at the intersection of physical craft and digital precision.
          </h1>
        </div>
      </section>

      {/* Selected Clients Area */}
      <section id="selected-partners-section" className="border-t border-b border-outline-variant/30 py-16">
        <h3 className="text-[10px] font-sans font-semibold tracking-widest text-secondary uppercase mb-12">
          Selected Clients
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center justify-items-center opacity-70 grayscale mix-blend-multiply">
          {CLIENTS_DATA.map((client, idx) => (
            <img
              key={idx}
              src={client.logoUrl}
              alt={client.altText}
              className="h-9 md:h-11 object-contain hover:opacity-100 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </section>

      {/* Services Box Cards */}
      <section id="services-grid-block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            // Dynamically resolve icon from string
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

            return (
              <div
                key={service.id}
                onClick={() => onNavigate('work-categorized')}
                className="group border border-outline-variant bg-surface p-8 transition-all duration-500 hover:bg-surface-variant flex flex-col justify-between h-full cursor-pointer rounded-none"
              >
                <div className="mb-12">
                  <div className="text-primary w-fit p-3 bg-background group-hover:bg-background/50 transition-colors duration-500 mb-6">
                    <IconComponent className="w-6 h-6 stroke-[1.25]" />
                  </div>
                  
                  <h3 className="font-serif text-2xl text-on-background mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-[14px] leading-relaxed text-on-surface-variant">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-outline-variant/30 pt-6 mt-8">
                  <ul className="text-[11px] font-semibold font-sans tracking-widest text-secondary uppercase space-y-1.5">
                    {service.steps.map((step, idx) => (
                      <li key={idx} className="hover:text-primary transition-colors">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
