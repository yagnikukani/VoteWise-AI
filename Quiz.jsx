import React, { useState, useCallback } from 'react';

const questions = [
  {
    question: 'What is the minimum voting age in India?',
    options: ['16 years', '18 years', '21 years', '25 years'],
    correct: 1,
    explanation:
      'The minimum voting age in India is 18 years. This was reduced from 21 years by the 61st Amendment Act of 1988.',
  },
  {
    question: 'What does NOTA stand for?',
    options: [
      'Not On The Agenda',
      'None Of The Above',
      'National Organization for Transparent Administration',
      'New Option To Abstain',
    ],
    correct: 1,
    explanation:
      'NOTA stands for None Of The Above. It was introduced in 2013 by the Supreme Court of India, allowing voters to reject all candidates.',
  },
  {
    question: 'Which body conducts elections in India?',
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President of India'],
    correct: 2,
    explanation:
      'The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India.',
  },
  {
    question: 'What is an EVM?',
    options: [
      'Electronic Value Machine',
      'Electronic Voting Machine',
      'Election Verification Method',
      'Electoral Vote Manager',
    ],
    correct: 1,
    explanation:
      'EVM stands for Electronic Voting Machine. It is a portable device used for casting and counting votes in Indian elections since 1999.',
  },
  {
    question: 'Is voter registration mandatory to vote in India?',
    options: [
      'No, anyone can walk in',
      'Yes, you must be registered',
      'Only for first-time voters',
      'Only in some states',
    ],
    correct: 1,
    explanation:
      'Yes, you must be registered in the electoral roll to vote. You can register through Form 6 at the NVSP portal or your local election office.',
  },
  {
    question: 'What is VVPAT?',
    options: [
      'Voter Verified Paper Audit Trail',
      'Virtual Voting Process And Technology',
      'Vote Validation Protocol And Tracking',
      'Verified Voting Procedure And Tabulation',
    ],
    correct: 0,
    explanation:
      'VVPAT stands for Voter Verified Paper Audit Trail. It produces a paper slip showing the symbol and name of the candidate voted for, providing verifiability.',
  },
];

const LETTER_PREFIX = ['A', 'B', 'C', 'D'];

function getScoreFeedback(pct) {
  if (pct === 100) return { emoji: '🏆', label: 'Perfect Score!', message: 'You are an election expert!' };
  if (pct >= 80) return { emoji: '🎉', label: 'Excellent!', message: 'You know your rights well!' };
  if (pct >= 60) return { emoji: '👍', label: 'Good Job!', message: 'You have solid knowledge about elections.' };
  if (pct >= 40) return { emoji: '📖', label: 'Keep Learning!', message: 'Brush up on election basics.' };
  return { emoji: '💪', label: "Don't Give Up!", message: 'Review the voting process and try again.' };
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeState, setFadeState] = useState('in'); // 'in' | 'out'

  const q = questions[currentQuestion];
  const total = questions.length;
  const progressPct = ((currentQuestion + (showExplanation ? 1 : 0)) / total) * 100;

  const handleSelectAnswer = useCallback(
    (idx) => {
      if (selectedAnswer !== null) return; // already answered
      setSelectedAnswer(idx);
      setShowExplanation(true);
      if (idx === q.correct) {
        setScore((s) => s + 1);
      }
    },
    [selectedAnswer, q]
  );

  const handleNext = useCallback(() => {
    if (currentQuestion + 1 >= total) {
      setIsComplete(true);
      return;
    }
    // fade-out → swap → fade-in
    setFadeState('out');
    setTimeout(() => {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setFadeState('in');
    }, 300);
  }, [currentQuestion, total]);

  const handleRestart = useCallback(() => {
    setFadeState('out');
    setTimeout(() => {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore(0);
      setIsComplete(false);
      setFadeState('in');
    }, 300);
  }, []);

  const pct = Math.round((score / total) * 100);
  const feedback = getScoreFeedback(pct);

  return (
    <section
      id="quiz"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-orange-200/30 to-pink-200/30 blur-3xl dark:from-orange-900/10 dark:to-pink-900/10" />
        <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-green-200/30 to-blue-200/30 blur-3xl dark:from-green-900/10 dark:to-blue-900/10" />
      </div>

      <div className="relative mx-auto max-w-2xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Test Your Knowledge
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            How well do you know the election process?
          </p>
        </div>

        {/* Quiz Card */}
        <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-2xl backdrop-blur-xl sm:p-10 dark:border-slate-700/40 dark:bg-slate-800/60">
          {!isComplete ? (
            <div
              className={`transition-all duration-300 ease-in-out ${
                fadeState === 'in' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-sm font-medium">
                  <span className="text-slate-500 dark:text-slate-400">
                    Question {currentQuestion + 1} of {total}
                  </span>
                  <span className="text-orange-600 dark:text-orange-400">
                    Score: {score}/{total}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="mb-6 text-xl font-bold text-slate-800 sm:text-2xl dark:text-white">
                {q.question}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-3">
                {q.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === q.correct;
                  const answered = selectedAnswer !== null;

                  let optClass =
                    'border-slate-200 bg-white/70 hover:border-orange-300 hover:bg-orange-50/50 dark:border-slate-600 dark:bg-slate-700/50 dark:hover:border-orange-500 dark:hover:bg-slate-700';

                  if (answered) {
                    if (isCorrect) {
                      optClass =
                        'border-green-400 bg-green-50/80 ring-2 ring-green-400/30 dark:border-green-500 dark:bg-green-900/30 dark:ring-green-500/20';
                    } else if (isSelected && !isCorrect) {
                      optClass =
                        'border-red-400 bg-red-50/80 ring-2 ring-red-400/30 dark:border-red-500 dark:bg-red-900/30 dark:ring-red-500/20';
                    } else {
                      optClass =
                        'border-slate-200 bg-slate-50/50 opacity-60 dark:border-slate-600 dark:bg-slate-700/30';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={answered}
                      onClick={() => handleSelectAnswer(idx)}
                      className={`flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200 ${optClass} ${
                        !answered ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'
                      }`}
                    >
                      {/* Letter badge */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors duration-200 ${
                          answered && isCorrect
                            ? 'bg-green-500 text-white'
                            : answered && isSelected && !isCorrect
                              ? 'bg-red-500 text-white'
                              : 'bg-slate-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {LETTER_PREFIX[idx]}
                      </span>

                      <span className="text-sm font-medium text-slate-700 sm:text-base dark:text-slate-200">
                        {opt}
                      </span>

                      {/* Feedback icon */}
                      {answered && isCorrect && (
                        <span className="ml-auto text-lg">✅</span>
                      )}
                      {answered && isSelected && !isCorrect && (
                        <span className="ml-auto text-lg">❌</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  showExplanation ? 'mt-6 max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="rounded-xl border border-blue-200/60 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 p-5 dark:border-blue-700/40 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-500 dark:text-blue-400">
                    Explanation
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {q.explanation}
                  </p>
                </div>
              </div>

              {/* Next button */}
              {showExplanation && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
                  >
                    {currentQuestion + 1 >= total ? 'See Results' : 'Next Question'}
                    <span className="text-base">→</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* ─── Score Summary ─────────────────────────────────── */
            <div className="flex flex-col items-center text-center">
              {/* Confetti / celebration */}
              {pct >= 80 && (
                <div className="mb-2 animate-bounce text-5xl">🎊</div>
              )}

              <span className="text-6xl">{feedback.emoji}</span>

              <h3 className="mt-4 text-2xl font-extrabold text-slate-800 dark:text-white">
                {feedback.label}
              </h3>
              <p className="mt-1 text-slate-500 dark:text-slate-400">{feedback.message}</p>

              {/* Score ring */}
              <div className="relative mt-8 flex h-36 w-36 items-center justify-center">
                <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-slate-200 dark:text-slate-700"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="url(#scoreGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(pct / 100) * 327} 327`}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-slate-800 dark:text-white">
                    {score}/{total}
                  </span>
                  <span className="text-sm text-slate-400">{pct}%</span>
                </div>
              </div>

              <button
                onClick={handleRestart}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-green-500 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
              >
                🔄 Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
