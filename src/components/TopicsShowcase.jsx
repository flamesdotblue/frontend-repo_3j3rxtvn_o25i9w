import React from 'react';
import { Code2, Cpu, Globe, GitBranch, Palette, Cloud } from 'lucide-react';

const topics = [
  {
    icon: <Globe className="w-5 h-5 text-emerald-400" />,
    title: 'Web & Apps',
    desc: 'Full-stack, PWAs, real-time dashboards and slick UI engineering.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    title: 'AI/ML',
    desc: 'Model-powered features, AI agents, ML ops and evaluation.',
  },
  {
    icon: <GitBranch className="w-5 h-5 text-emerald-400" />,
    title: 'Open Source',
    desc: 'Ship libraries, tools and contribute back to the community.',
  },
  {
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    title: 'Cloud & DevOps',
    desc: 'Automations, CI/CD, infra-as-code and developer productivity.',
  },
  {
    icon: <Palette className="w-5 h-5 text-emerald-400" />,
    title: 'Design & UX',
    desc: 'Design systems, motion, accessibility and delightful interactions.',
  },
  {
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    title: 'IoT & Hardware',
    desc: 'Sensors, microcontrollers, robotics and real-world integrations.',
  },
];

export default function TopicsShowcase() {
  return (
    <section id="topics" className="relative bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Topics we hack on</h2>
            <p className="text-gray-300 mt-2 max-w-2xl">
              Each week features a prompt to explore different domains. Pick a track,
              form a squad and ship something meaningful.
            </p>
          </div>
          <a
            href="#projects"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-white/15 hover:border-white/30 text-white px-4 py-2"
          >
            Explore Projects →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((t) => (
            <div
              key={t.title}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10">
                  {t.icon}
                </div>
                <h3 className="font-semibold text-white">{t.title}</h3>
              </div>
              <p className="text-sm text-gray-300 mt-3">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
