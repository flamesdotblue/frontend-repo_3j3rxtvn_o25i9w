import React from 'react';
import { Star, MessageSquare, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali',
    role: 'First-time hacker',
    quote: 'I shipped my first React app in one night. The vibe and peer help made it easy and fun.'
  },
  {
    name: 'Rahul',
    role: 'Open source contributor',
    quote: 'Short, focused sprints with feedback loops — perfect to keep momentum every week.'
  },
  {
    name: 'Maya',
    role: 'Design student',
    quote: 'Loved the safe space to try ideas and the friendly demos. I’m coming back next Saturday!'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What people say</h2>
          <p className="mt-2 text-white/70">A few words from folks who hacked with us recently.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <User className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-1 text-yellow-300/90">
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
