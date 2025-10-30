import React from 'react';

const partners = [
  { name: 'TinkerHub Foundation', url: 'https://tinkerhub.org' },
  { name: 'Mozilla Kerala', url: 'https://mozillakerala.org' },
  { name: 'FOSS United', url: 'https://fossunited.org' },
  { name: 'Developer Student Clubs', url: 'https://developers.google.com/community/gdsc' }
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Partners</h2>
          <p className="mt-2 text-white/70">Organizations that support and amplify Saturday Hack Night.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-24 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 text-center text-sm font-medium text-white/80 transition hover:border-white/20 hover:text-white"
            >
              <span className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-white/10" />
              <span>{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
