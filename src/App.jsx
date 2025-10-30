import React from 'react';
import Hero from './components/Hero';
import TopicsShowcase from './components/TopicsShowcase';
import ProjectsShowcase from './components/ProjectsShowcase';
import Partners from './components/Partners';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-gray-950/60">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white">
            Saturday Hack Night
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a className="hover:text-white" href="#topics">Topics</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#partners">Partners</a>
          </nav>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-semibold text-sm px-4 py-2 transition-colors"
          >
            Join the next sprint
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <TopicsShowcase />
        <ProjectsShowcase />
        <Partners />
      </main>

      <footer className="border-t border-white/10 bg-gray-950/80">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} TinkerHub Foundation • Saturday Hack Night
          </p>
          <div className="flex items-center gap-4">
            <a href="#topics" className="hover:text-white">Topics</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#partners" className="hover:text-white">Partners</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
