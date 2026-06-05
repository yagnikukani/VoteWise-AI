import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import AiAssistant from './components/AiAssistant'
import VotingTimeline from './components/VotingTimeline'
import Quiz from './components/Quiz'
import MythVsFact from './components/MythVsFact'
import LanguageSelector from './components/LanguageSelector'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('votewise-dark-mode')
      if (saved !== null) return JSON.parse(saved)
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  const [selectedLang, setSelectedLang] = useState('en')

  useEffect(() => {
    localStorage.setItem('votewise-dark-mode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      {/* Language Selector */}
      <LanguageSelector selectedLang={selectedLang} setSelectedLang={setSelectedLang} />

      {/* Hero Section with Navbar */}
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* AI Assistant Chat */}
      <AiAssistant darkMode={darkMode} />

      {/* Voting Process Timeline */}
      <VotingTimeline darkMode={darkMode} />

      {/* Quiz Section */}
      <Quiz darkMode={darkMode} />

      {/* Myth vs Fact Section */}
      <MythVsFact darkMode={darkMode} />

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
