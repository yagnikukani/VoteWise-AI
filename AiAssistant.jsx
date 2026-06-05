import { useState, useRef, useEffect } from 'react';

/* ───────────────────────────────────────────────
   Mock AI Response Engine
   ─────────────────────────────────────────────── */
function getMockResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  if (msg.includes('vote') || msg.includes('voting')) {
    return `Great question! Here's how the voting process works in a general election:

• **Step 1 – Registration:** Ensure your name appears on the Electoral Roll. You can check online or at your local election office.
• **Step 2 – Voter ID:** Carry your Voter ID card (EPIC) or any approved photo‑ID to the polling station.
• **Step 3 – At the Booth:** An officer verifies your identity, marks your finger with indelible ink, and directs you to the EVM.
• **Step 4 – Cast Your Vote:** Press the button next to your chosen candidate on the EVM. A VVPAT slip confirms your selection.
• **Step 5 – Done!** Your vote is secret and secure. Walk out proud! 🗳️

Every single vote matters — it's the foundation of democracy!`;
  }

  if (msg.includes('evm') || msg.includes('machine')) {
    return `**Electronic Voting Machines (EVMs)** are used in India to make voting faster and tamper‑proof.

🔹 **Components:**
  • **Ballot Unit** – Displays candidate names & symbols; the voter presses a button here.
  • **Control Unit** – Operated by the polling officer; records votes securely.
  • **VVPAT** – Voter Verifiable Paper Audit Trail; prints a slip so you can verify your vote.

🔹 **Key Facts:**
  • EVMs run on battery, so power outages don't affect them.
  • They are standalone — never connected to the internet.
  • Each EVM can record up to 2,000 votes.
  • After voting, the machines are sealed and stored securely until counting day.

EVMs have been used in India since 1982 and are designed by ECIL & BEL under the Election Commission's supervision.`;
  }

  if (msg.includes('nota')) {
    return `**NOTA — None Of The Above** 🚫

NOTA is a special option on the EVM that lets you formally reject all candidates without boycotting the election.

🔹 **Why it exists:**
  • Introduced by the Supreme Court of India in 2013.
  • Protects your right to express dissatisfaction with all candidates.
  • Ensures voter secrecy — no one knows if you chose NOTA.

🔹 **Does NOTA win?**
  • Currently, even if NOTA gets the most votes, the candidate with the next‑highest votes wins.
  • However, a high NOTA count sends a powerful message to political parties about voter sentiment.

🔹 **Why use it?**
  • It's better than not voting at all — it still counts as democratic participation!`;
  }

  if (msg.includes('document') || msg.includes('required')) {
    return `**Documents Required for Voting** 📋

You need **one** of the following photo IDs at the polling booth:

✅ **Voter ID Card (EPIC)** — the most common
✅ Aadhaar Card
✅ Passport
✅ Driving Licence
✅ PAN Card
✅ Service ID Card (Government employees)
✅ Student ID (issued by university / college)
✅ Bank / Post Office Passbook with photograph

💡 **Pro Tips:**
  • Register on the National Voters' Service Portal (NVSP) to get your Voter ID.
  • Check your name on the Electoral Roll before election day.
  • Carry the original document — photocopies are not accepted.

If you're 18 or turning 18 before January 1 of the qualifying year, you're eligible to register!`;
  }

  if (msg.includes('count') || msg.includes('result')) {
    return `**How Are Votes Counted?** 📊

Counting day is one of the most exciting parts of an election!

🔹 **Process:**
  1. **Sealed EVMs** are brought from strong rooms under heavy security.
  2. **Counting agents** from each candidate observe the process.
  3. The **Control Unit** of each EVM is opened and votes are tallied round by round.
  4. **VVPAT verification** — a random sample of VVPAT slips is matched against the EVM count for accuracy.
  5. Results are announced **constituency by constituency**.

🔹 **Timeline:**
  • Counting usually starts at 8 AM on the designated day.
  • Early trends emerge within a few hours.
  • Final results are typically declared by evening.

🔹 **Fun Fact:** India counts over 600 million votes, often within a single day!`;
  }

  if (msg.includes('age') || msg.includes('eligible') || msg.includes('eligibility')) {
    return `**Voting Eligibility in India** 🎂

To vote in Indian elections you must meet these criteria:

✅ **Age:** You must be **18 years or older** on the qualifying date (January 1 of the year the Electoral Roll is prepared).
✅ **Citizenship:** You must be an Indian citizen.
✅ **Registration:** Your name must be on the Electoral Roll of your constituency.
✅ **Sound Mind:** You should not be declared of unsound mind by a court.
✅ **Not Disqualified:** You must not be disqualified under any law (e.g., certain criminal convictions).

📝 **How to Register:**
  • Visit the NVSP website or your nearest voter registration centre.
  • Fill out **Form 6** for new registration.
  • You'll receive your Voter ID (EPIC) once approved.

Register early — don't wait until election season!`;
  }

  if (msg.includes('15') || msg.includes('simple') || msg.includes('explain') || msg.includes('kid')) {
    return `**Elections Made Simple! 🎓**

Imagine your school is choosing a new head prefect:

1️⃣ **Candidates declare** — People who want to lead put their names forward.
2️⃣ **Campaigns** — They tell everyone their ideas and plans.
3️⃣ **Voting Day** — Every student casts ONE secret vote for their favourite candidate.
4️⃣ **Counting** — All votes are counted fairly.
5️⃣ **Winner!** — The person with the most votes wins.

That's exactly how a real election works — just on a much bigger scale with millions of people!

🏛️ In India, we elect leaders at **three levels:**
  • **Local** — Panchayat / Municipal elections
  • **State** — State Assembly (Vidhan Sabha)
  • **National** — Lok Sabha (Parliament)

Your vote is your voice — and every voice matters! 🗣️`;
  }

  return `That's a wonderful question about elections! 🌟

Here are some important things to know:

• **Democracy** means "rule by the people" — elections are how we choose our representatives.
• India is the **world's largest democracy** with over 900 million eligible voters.
• Elections are conducted by the **Election Commission of India (ECI)**, an independent constitutional body.
• India follows a **first‑past‑the‑post** system — the candidate with the most votes in a constituency wins.

Feel free to ask me about specific topics like:
  🗳️ Voting process
  📋 Required documents
  🖥️ EVMs & VVPAT
  🚫 NOTA
  📊 Vote counting
  🎂 Eligibility

I'm here to help you become a more informed citizen!`;
}

/* ───────────────────────────────────────────────
   Suggested Questions
   ─────────────────────────────────────────────── */
const SUGGESTED_QUESTIONS = [
  'How do elections work?',
  'How can I vote?',
  'What documents are required?',
  'Explain EVM simply',
  'What is NOTA?',
  'How are votes counted?',
  'Explain elections like I am 15',
];

/* ───────────────────────────────────────────────
   Typing Indicator Component
   ─────────────────────────────────────────────── */
function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 mb-4">
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm shadow-lg">
        🤖
      </div>
      {/* Dots */}
      <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl rounded-bl-sm px-5 py-3 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:200ms]" />
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Chat Bubble Component
   ─────────────────────────────────────────────── */
function ChatBubble({ role, content }) {
  const isUser = role === 'user';

  return (
    <div className={`flex items-end gap-3 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm shadow-lg">
          🤖
        </div>
      )}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm font-bold text-white shadow-lg">
          U
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap shadow-sm
          ${
            isUser
              ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl rounded-br-sm'
              : 'bg-white/70 dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-gray-100 rounded-2xl rounded-bl-sm border border-white/30 dark:border-white/10'
          }`}
      >
        {content}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Main AiAssistant Component
   ─────────────────────────────────────────────── */
export default function AiAssistant() {
  const WELCOME_MESSAGE = {
    role: 'assistant',
    content:
      'Hello! I am VoteWise AI, your election education assistant. Ask me anything about elections, voting processes, or civic participation. I am here to help you understand democracy better! 🗳️',
  };

  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  /* Auto‑scroll on new message */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  /* Send message handler */
  const handleSend = async (text) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed || loading) return;

    const userMsg = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Simulate AI delay
    await new Promise((r) => setTimeout(r, 1500));

    const aiReply = getMockResponse(trimmed);
    setMessages((prev) => [...prev, { role: 'assistant', content: aiReply }]);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section
      id="ai-assistant"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-3xl" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            AI‑Powered
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            AI Election Assistant
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-base">
            Ask anything about elections — get instant, unbiased answers
          </p>
        </div>

        {/* Chat Container */}
        <div className="rounded-3xl border border-white/40 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-2xl shadow-indigo-500/5 dark:shadow-black/30 overflow-hidden flex flex-col"
          style={{ height: '560px' }}
        >
          {/* Messages Area */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-1 scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <ChatBubble key={idx} role={msg.role} content={msg.content} />
            ))}
            {loading && <TypingIndicator />}
            <div ref={chatEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-4 sm:px-6 pb-2">
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  disabled={loading}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="border-t border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                placeholder="Ask about elections, voting, EVMs…"
                className="flex-1 bg-gray-100/80 dark:bg-white/10 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-4 py-2.5 text-sm outline-none ring-1 ring-transparent focus:ring-indigo-400 dark:focus:ring-indigo-500 transition disabled:opacity-50"
              />
              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
