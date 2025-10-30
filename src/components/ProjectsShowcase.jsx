import React from 'react';
import { ExternalLink, Star, GitBranch } from 'lucide-react';

const projects = [
  {
    name: 'HackNite Hub',
    blurb: 'A community dashboard that aggregates weekly submissions and feedback.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: 'https://github.com/'
  },
  {
    name: 'PromptCraft',
    blurb: 'Share, remix, and evaluate prompts for LLM workflows in real-time.',
    tags: ['Next.js', 'LLM', 'RAG'],
    link: 'https://github.com/'
  },
  {
    name: 'DevFlow',
    blurb: 'CLI and GitHub Actions to scaffold hack-night projects with best practices.',
    tags: ['Node', 'CLI', 'CI/CD'],
    link: 'https://github.com/'
  }
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Recent projects</h2>
            <p className="mt-2 text-white/70">Shipped by the community during Saturday Hack Night.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/80 hover:bg-white/5"
          >
            <GitBranch className="h-4 w-4" />
            Submit your project
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-5 transition hover:border-white/20">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <Star className="h-4 w-4 text-yellow-300/80" />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200"
                >
                  View repo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
