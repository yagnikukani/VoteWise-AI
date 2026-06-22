import React, { useState, useEffect } from 'react';

const Hero = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'AI Assistant', href: '#ai-assistant' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Quiz', href: '#quiz' },
    { label: 'Myths', href: '#myths' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 transition-colors duration-500">
      {/* ── Animated Background Shapes ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl"
          style={{ animation: 'floatA 8s ease-in-out infinite' }}
        />
        <div
          className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-400/20 to-pink-400/20 dark:from-indigo-500/10 dark:to-pink-500/10 blur-3xl"
          style={{ animation: 'floatB 10s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-purple-400/15 to-blue-400/15 dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
          style={{ animation: 'floatC 12s ease-in-out infinite' }}
        />
        <div
          className="absolute top-20 left-1/2 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 dark:from-cyan-500/5 dark:to-emerald-500/5 blur-2xl"
          style={{ animation: 'floatA 14s ease-in-out infinite reverse' }}
        />
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-40px) translateX(20px) scale(1.05); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(30px) translateX(-25px) scale(1.08); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-35px) rotate(5deg) scale(1.04); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(99,102,241,0); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 dark:bg-gray-900/70 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-xl'
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center gap-2">
            <span className="text-2xl">🗳️</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
              VoteWise AI
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-lg shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800/80"
              aria-label="Toggle dark mode"
            >
              <span className={`absolute transition-all duration-300 ${darkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>☀️</span>
              <span className={`absolute transition-all duration-300 ${darkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>🌙</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white/80 shadow-sm md:hidden dark:border-gray-700 dark:bg-gray-800/80"
              aria-label="Toggle menu"
            >
              <div className="flex w-4 flex-col gap-1">
                <span className={`h-0.5 w-full rounded bg-gray-600 transition-all dark:bg-gray-300 ${mobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
                <span className={`h-0.5 w-full rounded bg-gray-600 transition-all dark:bg-gray-300 ${mobileMenuOpen ? 'scale-0 opacity-0' : ''}`} />
                <span className={`h-0.5 w-full rounded bg-gray-600 transition-all dark:bg-gray-300 ${mobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-xl transition-all duration-300 md:hidden dark:border-gray-700/50 dark:bg-gray-900/90 ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700 dark:text-gray-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO CONTENT
      ══════════════════════════════════════════ */}
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left Column: Text ── */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Animated Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-sm font-semibold text-indigo-700 backdrop-blur-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
              style={{ animation: 'badgePulse 3s ease-in-out infinite' }}
            >
              <span className="text-base">🤖</span>
              AI-Powered Election Education
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                VoteWise AI
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-xl font-semibold text-gray-800 sm:text-2xl lg:text-3xl dark:text-gray-100">
              Understand Elections the Smart Way
            </p>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-400">
              Empowering citizens with unbiased, AI-driven civic education. Learn about democratic processes, election systems, and your voting rights — all in an engaging, interactive experience. 📊
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#ai-assistant"
                onClick={(e) => scrollTo(e, '#ai-assistant')}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Learning
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <a
                href="#quiz"
                onClick={(e) => scrollTo(e, '#quiz')}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/70 px-7 py-3.5 text-base font-semibold text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-gray-600 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:border-indigo-500"
              >
                Take a Quiz 🎯
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:gap-8">
              {[
                { value: '100%', label: 'Unbiased' },
                { value: 'AI', label: 'Powered' },
                { value: '3', label: 'Languages' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                  <p className="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Decorative Illustration ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Main Glassmorphism Card */}
            <div className="relative h-80 w-80 sm:h-96 sm:w-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10" />

              {/* Glass Card */}
              <div className="absolute inset-4 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/40 bg-white/60 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl dark:border-gray-700/40 dark:bg-gray-800/60 dark:shadow-indigo-500/5">
                {/* Icon Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { emoji: '🗳️', label: 'Voting', delay: '0s' },
                    { emoji: '🏛️', label: 'Democracy', delay: '1s' },
                    { emoji: '🤖', label: 'AI Guide', delay: '2s' },
                    { emoji: '📊', label: 'Analytics', delay: '3s' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-1.5 rounded-xl border border-white/50 bg-white/70 p-4 shadow-sm transition-transform hover:scale-105 dark:border-gray-600/50 dark:bg-gray-700/50"
                      style={{ animation: `iconFloat 4s ease-in-out infinite`, animationDelay: item.delay }}
                    >
                      <span className="text-3xl sm:text-4xl">{item.emoji}</span>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">Interactive AI Civic Education</p>
              </div>

              {/* Floating Mini Cards */}
              <div
                className="absolute -left-6 top-8 rounded-xl border border-white/50 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-800/80"
                style={{ animation: 'floatA 6s ease-in-out infinite' }}
              >
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">🔒 Neutral</span>
              </div>
              <div
                className="absolute -right-4 bottom-12 rounded-xl border border-white/50 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-800/80"
                style={{ animation: 'floatB 7s ease-in-out infinite' }}
              >
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">✨ Gemini AI</span>
              </div>
              <div
                className="absolute -bottom-2 left-10 rounded-xl border border-white/50 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-800/80"
                style={{ animation: 'floatC 8s ease-in-out infinite' }}
              >
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">🌐 Multilingual</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-[0]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z"
            className="fill-white dark:fill-gray-900"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
