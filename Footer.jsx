import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Learn',
      links: ['AI Assistant', 'Election Timeline', 'Quiz Challenge', 'Myth Buster'],
    },
    {
      title: 'About',
      links: ['Our Mission', 'Neutrality Policy', 'Data Privacy', 'Open Source'],
    },
  ];

  const socialIcons = [
    {
      name: 'GitHub',
      path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
    },
    {
      name: 'Twitter',
      path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
    },
    {
      name: 'LinkedIn',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
      {/* Subtle Background Decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-40 blur-3xl dark:from-indigo-900/20 dark:to-purple-900/20" />
        <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-30 blur-3xl dark:from-blue-900/20 dark:to-cyan-900/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🗳️</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                VoteWise AI
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Empowering citizens through AI-driven civic education. We provide unbiased, accurate, and accessible information about democratic processes and election systems.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold tracking-wide text-gray-900 uppercase dark:text-gray-100">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />

        {/* Disclaimers Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Educational Disclaimer */}
          <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 p-4 dark:border-amber-500/20 dark:bg-amber-500/5">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-lg">📚</span>
              <div>
                <h5 className="text-xs font-bold tracking-wide text-amber-800 uppercase dark:text-amber-400">
                  Educational Tool Only
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-amber-700 dark:text-amber-300/80">
                  This is an educational tool only. VoteWise AI does not promote any political party, candidate, or ideology.
                </p>
              </div>
            </div>
          </div>

          {/* Neutrality Statement */}
          <div className="rounded-xl border border-blue-200/60 bg-blue-50/50 p-4 dark:border-blue-500/20 dark:bg-blue-500/5">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-lg">⚖️</span>
              <div>
                <h5 className="text-xs font-bold tracking-wide text-blue-800 uppercase dark:text-blue-400">
                  Neutrality Commitment
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-blue-700 dark:text-blue-300/80">
                  VoteWise AI is committed to political neutrality and factual election education.
                </p>
              </div>
            </div>
          </div>

          {/* Hackathon Attribution */}
          <div className="rounded-xl border border-purple-200/60 bg-purple-50/50 p-4 dark:border-purple-500/20 dark:bg-purple-500/5">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-lg">🏆</span>
              <div>
                <h5 className="text-xs font-bold tracking-wide text-purple-800 uppercase dark:text-purple-400">
                  Hackathon Project
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-purple-700 dark:text-purple-300/80">
                  Built for Google AI Hackathon 2025 | Powered by Gemini AI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} VoteWise AI. All rights reserved. Made with ❤️ for democracy.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-600">
            <span>Powered by</span>
            <span className="font-semibold text-indigo-500">Gemini AI</span>
            <span>✦</span>
            <span>Built with</span>
            <span className="font-semibold text-indigo-500">React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
