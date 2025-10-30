import React from 'react';
import { Code2, Cpu, Globe, GitBranch, Palette, Cloud } from 'lucide-react';

const topics = [
  {
    icon: Code2,
    title: 'Web Apps',
    desc: 'Modern frontends, APIs, auth, and real-time UX.'
  },
  {
    icon: Cpu,
    title: 'AI + ML',
    desc: 'LLMs, RAG, agents, and practical machine learning.'
  },
  {
    icon: Globe,
    title: 'Open Source',
    desc: 'Contribute to community tooling and libraries.'
  },
  {
    icon: GitBranch,
    title: 'DevTools',
    desc: 'CLIs, DX tooling, automation and CI workflows.'
  },
  {
    icon: Palette,
    title: 'Design + Motion',
    desc: 'Interactions, prototyping, and micro-animations.'
  },
  {
    icon: Cloud,
    title: 'Cloud + Infra',
    desc: 'Serverless, containers, and scalable systems.'
  }
];

export default function TopicsShowcase() {
  return (
    <section id="topics" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What we hack on</h2>
          <p className="mt-2 text-white/70">A rotating set of themes keeps every session fresh and collaborative.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 transition hover:border-white/20">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-2 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
