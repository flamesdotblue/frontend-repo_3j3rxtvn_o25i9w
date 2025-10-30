import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-60 pointer-events-none z-0">
        <Spline
          scene="https://prod.spline.design/rsU8t7H8p1S3qv8L/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/70 to-gray-950 pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 border border-white/20">
          <Calendar className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-gray-200">Every Saturday • Online Sprints</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Saturday Hack Night
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          A recurring hackathon series by TinkerHub Foundation. Build fast, learn
          together, and ship projects across six consecutive online hack nights.
          Top teams are invited for a physical showdown at TinkerSpace, Kochi.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-semibold px-5 py-3 transition-colors"
          >
            <Rocket className="w-5 h-5" />
            Start Hacking
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 hover:border-white/40 text-white px-5 py-3 transition-colors"
          >
            <MapPin className="w-5 h-5 text-emerald-300" />
            See Flow
          </a>
        </div>

        <div id="schedule" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: '6-Week Sprint',
              desc: 'Hack every Saturday with themed prompts and lightning talks.',
            },
            {
              title: 'Demo & Feedback',
              desc: 'Submit your build weekly, get peer + mentor feedback.',
            },
            {
              title: 'Kochi Finale',
              desc: 'Top teams meet at TinkerSpace, Kochi for a physical hackathon.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/15 bg-white/5 backdrop-blur p-4"
            >
              <p className="font-semibold text-white">{item.title}</p>
              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
