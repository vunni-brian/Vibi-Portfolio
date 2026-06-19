/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, Project } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import WorkView from './components/WorkView';
import WorkCategorizedView from './components/WorkCategorizedView';
import InfoView from './components/InfoView';
import ContactView from './components/ContactView';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Core instant routing method
  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0 });
  };

  // Select project to view modal
  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
  };

  // Close project monograph modal
  const handleCloseProject = () => {
    setActiveProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background select-none antialiased">
      {/* Top Navigation Component */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Main Router Box */}
      <main className="flex-grow flex flex-col">
        {currentScreen === 'home' && (
          <HomeView onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'work' && (
          <WorkView onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
        )}

        {currentScreen === 'work-categorized' && (
          <WorkCategorizedView onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
        )}

        {currentScreen === 'info' && (
          <InfoView onNavigate={handleNavigate} />
        )}

        {currentScreen === 'contact' && (
          <ContactView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Interactive Project monograph Details Overlay */}
      <ProjectModal project={activeProject} onClose={handleCloseProject} />

      {/* Persistent Elegant Footer Element */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
