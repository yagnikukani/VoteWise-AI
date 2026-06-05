import { useState } from 'react';

const mythsData = [
  {
    id: 1,
    myth: 'Votes can easily be tampered with in EVMs.',
    fact: 'EVMs are standalone devices not connected to any network. They undergo rigorous testing, and VVPAT machines provide a paper trail for verification. Multiple security protocols protect the integrity of each vote.',
  },
  {
    id: 2,
    myth: 'My single vote does not make a difference.',
    fact: 'Many elections have been decided by very small margins. Every vote contributes to the democratic process. In some Indian elections, winners have won by just 1-2 votes!',
  },
  {
    id: 3,
    myth: 'NOTA votes are wasted votes.',
    fact: 'NOTA allows voters to express dissatisfaction with all candidates. While it does not directly affect results, high NOTA counts send a powerful message to political parties about voter sentiment.',
  },
  {
    id: 4,
    myth: 'You need to carry multiple documents to vote.',
    fact: 'You primarily need your Voter ID card (EPIC). The Election Commission also accepts 11 other alternative photo identity documents including Aadhaar, passport, driving license, and PAN card.',
  },
  {
    id: 5,
    myth: 'Only educated people should vote.',
    fact: 'Voting is a fundamental right of every eligible citizen regardless of education, income, or social status. Democracy thrives when all voices are heard and represented equally.',
  },
  {
    id: 6,
    myth: 'The government can track who you voted for.',
    fact: 'Voting in India is completely secret by law. The EVM does not record any link between the voter identity and the vote cast. The ballot secrecy is a constitutional guarantee.',
  },
];

function FlipCard({ item, isFlipped, onFlip }) {
  return (
    <div
      className="group"
      style={{ perspective: '1200px' }}
    >
      <div
        onClick={onFlip}
        className="relative w-full cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: '280px',
        }}
      >
        {/* Front — Myth */}
        <div
          className="absolute inset-0 rounded-2xl border border-red-400/30 bg-red-950/30 p-6 shadow-lg backdrop-blur-xl transition-shadow duration-300 dark:border-red-500/20 dark:bg-red-950/40 group-hover:shadow-red-500/10"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: isFlipped ? 'none' : 'translateY(0)',
          }}
        >
          {/* Number badge */}
          <span className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-sm font-bold text-white shadow-md shadow-red-500/30">
            {item.id}
          </span>

          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="mb-4 text-4xl drop-shadow-lg">❌</span>
            <span className="mb-2 inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold tracking-widest text-red-300 uppercase">
              Myth
            </span>
            <p className="mt-2 text-lg leading-relaxed font-medium text-red-100 dark:text-red-200">
              &ldquo;{item.myth}&rdquo;
            </p>
            <span className="mt-auto pt-4 text-xs font-medium text-red-300/70 italic">
              👆 Click to reveal fact
            </span>
          </div>
        </div>

        {/* Back — Fact */}
        <div
          className="absolute inset-0 rounded-2xl border border-emerald-400/30 bg-emerald-950/30 p-6 shadow-lg backdrop-blur-xl dark:border-emerald-500/20 dark:bg-emerald-950/40"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Number badge */}
          <span className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-sm font-bold text-white shadow-md shadow-emerald-500/30">
            {item.id}
          </span>

          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="mb-4 text-4xl drop-shadow-lg">✅</span>
            <span className="mb-2 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold tracking-widest text-emerald-300 uppercase">
              Fact
            </span>
            <p className="mt-2 text-base leading-relaxed font-medium text-emerald-100 dark:text-emerald-200">
              {item.fact}
            </p>
            <span className="mt-auto pt-4 text-xs font-medium text-emerald-300/70 italic">
              👆 Click to see myth
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MythVsFact() {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const allRevealed = flippedCards.size === mythsData.length;

  const toggleCard = (id) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const revealAll = () => {
    if (allRevealed) {
      setFlippedCards(new Set());
    } else {
      setFlippedCards(new Set(mythsData.map((m) => m.id)));
    }
  };

  return (
    <section
      id="myths"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-3 bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Myths vs Facts
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slate-400 dark:text-slate-500">
            Separating election misconceptions from reality
          </p>

          {/* Reveal All button */}
          <button
            onClick={revealAll}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-xl active:scale-95"
          >
            {allRevealed ? (
              <>
                <span className="text-base">🔄</span>
                Reset All
              </>
            ) : (
              <>
                <span className="text-base">👁️</span>
                Reveal All Facts
              </>
            )}
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {mythsData.map((item) => (
            <FlipCard
              key={item.id}
              item={item}
              isFlipped={flippedCards.has(item.id)}
              onFlip={() => toggleCard(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
