import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Calendar, MapPin, ExternalLink } from 'lucide-react';

// Local error boundary to prevent crashes if the Spline asset fails to load
class SplineBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black to-black" />
      );
    }
    return this.props.children;
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <SplineBoundary>
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </SplineBoundary>
        {/* Soft gradient and vignette overlay that does not block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_10%,black,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Calendar className="h-3.5 w-3.5" />
            Every Saturday · 7:00 PM IST
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Build the future, one Saturday at a time
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
            A weekly, community-powered hack night by TinkerHub Foundation. Learn, ship, and showcase projects with peers in an inspiring, no-pressure environment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://tinkerhub.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-500/30 hover:from-purple-400 hover:to-indigo-500 transition-colors"
            >
              <Rocket className="h-4 w-4" />
              Join the next hack night
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-black/40 px-5 py-3 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Explore projects
            </a>
          </div>
        </div>

        {/* Quick schedule tiles */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
            <div className="text-sm text-white/70">When</div>
            <div className="mt-1 flex items-center gap-2 font-semibold">
              <Calendar className="h-4 w-4 text-purple-400" />
              Every Saturday, 7–10 PM IST
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
            <div className="text-sm text-white/70">Where</div>
            <div className="mt-1 flex items-center gap-2 font-semibold">
              <MapPin className="h-4 w-4 text-indigo-400" />
              Online + local hubs
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
            <div className="text-sm text-white/70">What</div>
            <div className="mt-1 flex items-center gap-2 font-semibold">
              <Rocket className="h-4 w-4 text-fuchsia-400" />
              Learn · Build · Showcase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
