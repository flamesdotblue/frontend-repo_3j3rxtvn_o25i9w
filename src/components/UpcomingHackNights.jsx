import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Rocket } from 'lucide-react';

// Static sample data; in a full app this can be fetched from an API
const upcoming = [
  {
    title: 'Saturday Hack Night · Web & AI',
    date: 'Sat, Nov 9',
    time: '7:00 – 10:00 PM IST',
    mode: 'Online + local hubs',
    registerUrl: 'https://hub.tinkerhub.org/'
  },
  {
    title: 'Saturday Hack Night · Open Source',
    date: 'Sat, Nov 16',
    time: '7:00 – 10:00 PM IST',
    mode: 'Online',
    registerUrl: 'https://hub.tinkerhub.org/'
  },
  {
    title: 'Saturday Hack Night · DevTools',
    date: 'Sat, Nov 23',
    time: '7:00 – 10:00 PM IST',
    mode: 'Community hub meetups',
    registerUrl: 'https://hub.tinkerhub.org/'
  }
];

export default function UpcomingHackNights() {
  return (
    <section id="upcoming" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Upcoming hack nights</h2>
            <p className="mt-2 text-white/70">Pick a date, lock your slot in the Hub app, and come build with us.</p>
          </div>
          <a
            href="https://hub.tinkerhub.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/80 hover:bg-white/5"
          >
            <Rocket className="h-4 w-4" />
            Open the Hub app
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <div className="mt-3 space-y-2 text-sm text-white/80">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-purple-300" />{item.date}</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-indigo-300" />{item.time}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-fuchsia-300" />{item.mode}</div>
              </div>
              <div className="mt-4">
                <a
                  href={item.registerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/15"
                >
                  Register in Hub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
