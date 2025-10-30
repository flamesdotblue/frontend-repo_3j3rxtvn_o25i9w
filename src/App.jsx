import React from 'react';
import Hero from './components/Hero.jsx';
import ProgramFlow from './components/ProgramFlow.jsx';
import UpcomingHackNights from './components/UpcomingHackNights.jsx';
import TopicsShowcase from './components/TopicsShowcase.jsx';
import ProjectsShowcase from './components/ProjectsShowcase.jsx';
import Testimonials from './components/Testimonials.jsx';
import Stats from './components/Stats.jsx';
import Partners from './components/Partners.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/20">
              <span className="text-xs font-bold">TH</span>
            </span>
            <span className="font-semibold tracking-tight">Saturday Hack Night</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#flow" className="hover:text-white transition-colors">Flow</a>
            <a href="#upcoming" className="hover:text-white transition-colors">Upcoming</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Feedback</a>
            <a href="#partners" className="hover:text-white transition-colors">Partners</a>
            <a href="https://tinkerhub.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">About</a>
          </nav>
        </div>
      </header>

      {/* Main sections */}
      <main>
        <Hero />
        <ProgramFlow />
        <UpcomingHackNights />
        <TopicsShowcase />
        <ProjectsShowcase />
        <Testimonials />
        <Stats />
        <Partners />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          <p>
            © {new Date().getFullYear()} TinkerHub Foundation · Saturday Hack Night
          </p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white transition-colors" href="#upcoming">Register</a>
            <a className="hover:text-white transition-colors" href="#projects">Showcase</a>
            <a className="hover:text-white transition-colors" href="#flow">How it works</a>
            <a className="hover:text-white transition-colors" href="#partners">Partners</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
