import React from 'react';

const partners = [
  { name: 'TinkerHub Foundation', logo: 'TH', url: 'https://tinkerhub.org' },
  { name: 'TinkerSpace Kochi', logo: 'TS', url: 'https://tinkerhub.org/tinkerspace' },
  { name: 'Community Partners', logo: 'CP', url: '#' },
  { name: 'Education Partners', logo: 'EP', url: '#' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Partners</h2>
            <p className="text-gray-300 mt-2 max-w-2xl">
              Powered by a passionate community. Want to support Saturday Hack Night?
              Reach out and let’s build together.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-white/15 hover:border-white/30 text-white px-4 py-2"
          >
            Become a partner →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-6 text-center transition-colors"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-300 font-bold text-xl">
                {p.logo}
              </div>
              <p className="text-white/90 font-medium">{p.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
