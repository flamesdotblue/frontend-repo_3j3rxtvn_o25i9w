import React from 'react';
import { Rocket, Calendar, Clock, Users, GitBranch, Star, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Discover & Register',
    desc: 'Browse the upcoming Saturday Hack Night and register via TinkerHub Hub app.'
  },
  {
    icon: Rocket,
    title: 'Kickoff & Team Up',
    desc: 'Join the opening huddle, form a squad or go solo, and pick a topic to hack on.'
  },
  {
    icon: Clock,
    title: 'Build in Sessions',
    desc: 'Spend focused 2–3 hours building. Mentors and peers are around to help.'
  },
  {
    icon: GitBranch,
    title: 'Ship & Submit',
    desc: 'Push your work, write a short readme, and submit your project for feedback.'
  },
  {
    icon: Users,
    title: 'Show & Tell',
    desc: 'Demo what you built. Celebrate learnings, wins, and sparks for next week.'
  },
  {
    icon: Star,
    title: 'Reflect & Level Up',
    desc: 'Gather feedback, track progress, and plan your next iteration.'
  }
];

export default function ProgramFlow() {
  return (
    <section id="flow" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How a Hack Night unfolds</h2>
          <p className="mt-2 text-white/70">A simple, supportive flow from sign-up to showcase — designed for first‑timers and seasoned builders alike.</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-white/10 text-xs font-semibold">{idx + 1}</span>
                    <h3 className="font-semibold tracking-tight">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/80">
          <CheckCircle className="h-4 w-4 text-emerald-400" />
          No fees, beginner‑friendly, community‑led.
        </div>
      </div>
    </section>
  );
}
