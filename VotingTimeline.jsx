import React, { useState, useEffect, useRef } from 'react';

const steps = [
  {
    icon: '✅',
    title: 'Check Eligibility',
    description:
      'You must be an Indian citizen, at least 18 years old on the qualifying date. Verify your eligibility before proceeding.',
  },
  {
    icon: '📝',
    title: 'Register as Voter',
    description:
      'Apply for voter registration through Form 6 online at NVSP portal or at your nearest election office. Get your Voter ID card (EPIC).',
  },
  {
    icon: '🔍',
    title: 'Verify Voter List',
    description:
      'Check your name in the electoral roll on the National Voters Service Portal or CEO website of your state before election day.',
  },
  {
    icon: '📅',
    title: 'Understand Voting Day',
    description:
      'Know your polling station, carry your voter ID, check the voting schedule, and understand the process before you go.',
  },
  {
    icon: '🗳️',
    title: 'Cast Your Vote',
    description:
      'Visit your assigned polling booth, verify your identity, receive a ballot/use EVM, cast your vote secretly, and collect the VVPAT slip confirmation.',
  },
  {
    icon: '📊',
    title: 'Counting & Results',
    description:
      'After all phases of voting are completed, EVMs are securely stored. On counting day, votes are tallied and results are announced by the Election Commission.',
  },
];

export default function VotingTimeline() {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [hoveredStep, setHoveredStep] = useState(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleSteps((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const progressPercent = (visibleSteps.size / steps.length) * 100;

  return (
    <section
      id="timeline"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-orange-200/30 to-green-200/30 blur-3xl dark:from-orange-900/10 dark:to-green-900/10" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-3xl dark:from-blue-900/10 dark:to-purple-900/10" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            How Voting Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            Your step-by-step guide to the election process
          </p>

          {/* Progress indicator */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="flex items-center justify-between text-xs font-medium text-slate-400 dark:text-slate-500">
              <span>Progress</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 via-white to-green-500 transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line — desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange-300 via-slate-300 to-green-300 md:block dark:from-orange-700 dark:via-slate-600 dark:to-green-700" />

          {/* Left line — mobile */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-orange-300 via-slate-300 to-green-300 md:hidden dark:from-orange-700 dark:via-slate-600 dark:to-green-700" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, index) => {
              const isVisible = visibleSteps.has(index);
              const isHovered = hoveredStep === index;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-index={index}
                  className="relative"
                >
                  {/* ----- DESKTOP LAYOUT ----- */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
                    {/* Left column */}
                    <div className={isEven ? '' : 'flex justify-end'}>
                      {!isEven && (
                        <TimelineCard
                          step={step}
                          index={index}
                          isVisible={isVisible}
                          isHovered={isHovered}
                          onHover={setHoveredStep}
                          side="left"
                        />
                      )}
                    </div>

                    {/* Center dot */}
                    <TimelineDot index={index} isVisible={isVisible} isHovered={isHovered} />

                    {/* Right column */}
                    <div className={isEven ? '' : ''}>
                      {isEven && (
                        <TimelineCard
                          step={step}
                          index={index}
                          isVisible={isVisible}
                          isHovered={isHovered}
                          onHover={setHoveredStep}
                          side="right"
                        />
                      )}
                    </div>
                  </div>

                  {/* ----- MOBILE LAYOUT ----- */}
                  <div className="flex items-start gap-5 md:hidden">
                    <TimelineDot index={index} isVisible={isVisible} isHovered={isHovered} mobile />
                    <TimelineCard
                      step={step}
                      index={index}
                      isVisible={isVisible}
                      isHovered={isHovered}
                      onHover={setHoveredStep}
                      side="right"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ──────────────────────────────────────────────────── */

function TimelineDot({ index, isVisible, isHovered, mobile }) {
  return (
    <div
      className={`
        relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full
        border-4 text-sm font-bold transition-all duration-500
        ${
          isHovered
            ? 'scale-110 border-orange-400 bg-gradient-to-br from-orange-500 to-green-500 text-white shadow-lg shadow-orange-500/30 dark:shadow-orange-500/20'
            : isVisible
              ? 'border-white bg-gradient-to-br from-orange-400 to-green-500 text-white shadow-md dark:border-slate-800'
              : 'border-slate-200 bg-white text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500'
        }
        ${mobile ? '' : ''}
      `}
    >
      {index + 1}
    </div>
  );
}

function TimelineCard({ step, index, isVisible, isHovered, onHover, side }) {
  const translateClass =
    side === 'left'
      ? isVisible
        ? 'translate-x-0 opacity-100'
        : 'translate-x-12 opacity-0'
      : isVisible
        ? 'translate-x-0 opacity-100'
        : '-translate-x-12 opacity-0';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`
        group w-full max-w-md rounded-2xl border p-6
        backdrop-blur-xl transition-all duration-700 ease-out
        ${translateClass}
        ${
          isHovered
            ? 'scale-[1.03] border-orange-300/60 bg-white/80 shadow-xl shadow-orange-500/10 dark:border-orange-600/40 dark:bg-slate-800/90 dark:shadow-orange-500/5'
            : 'border-white/40 bg-white/60 shadow-lg dark:border-slate-700/40 dark:bg-slate-800/60'
        }
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon circle */}
      <div
        className={`
          mb-4 flex h-14 w-14 items-center justify-center rounded-xl
          bg-gradient-to-br from-orange-100 to-green-100 text-2xl
          transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
          dark:from-orange-900/40 dark:to-green-900/40
        `}
      >
        {step.icon}
      </div>

      <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">{step.title}</h3>
      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {step.description}
      </p>
    </div>
  );
}
