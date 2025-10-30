import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Campus Compass',
    desc: 'Map-based app to discover clubs, events and resources in a university.',
    tags: ['Web', 'Maps', 'React'],
    link: '#',
  },
  {
    title: 'AidDesk AI',
    desc: 'Open-source support agent that answers FAQs with RAG and adapters.',
    tags: ['AI', 'Open Source', 'Python'],
    link: '#',
  },
  {
    title: 'DevDash',
    desc: 'CI/CD dashboard with deploy previews and incident notes in one place.',
    tags: ['DevOps', 'Realtime', 'SaaS'],
    link: '#',
  },
  {
    title: 'GreenHome',
    desc: 'IoT energy tracker that nudges better household power usage.',
    tags: ['IoT', 'Edge', 'Analytics'],
    link: '#',
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Project showcase</h2>
            <p className="text-gray-300 mt-2 max-w-2xl">
              Highlights from recent hack nights. Submit weekly and get featured —
              the best ships advance to the Kochi finale.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-yellow-300">
            <Star className="w-5 h-5" />
            <span className="text-sm">Community picks</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-gray-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                >
                  View project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
