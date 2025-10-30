import React from 'react';
import { Users, GitBranch, Star, BarChart3 } from 'lucide-react';

const stats = [
  { label: 'Participants', value: '2,500+' , icon: Users },
  { label: 'Projects submitted', value: '600+' , icon: GitBranch },
  { label: 'Average rating', value: '4.8/5' , icon: Star },
  { label: 'Cities & hubs', value: '30+' , icon: BarChart3 }
];

export default function Stats() {
  return (
    <section id="stats" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-purple-300" />
              </div>
              <div className="text-2xl font-extrabold tracking-tight">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
