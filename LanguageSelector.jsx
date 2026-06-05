import React from 'react';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'gu', label: 'ગુજરાતી', flag: '🇮🇳' },
];

const LanguageSelector = ({ selectedLang, setSelectedLang }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200/80 bg-white/70 px-2 py-1.5 shadow-lg shadow-black/5 backdrop-blur-xl transition-colors duration-300 dark:border-gray-700/80 dark:bg-gray-800/70 dark:shadow-black/20">
      {/* Globe Icon */}
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 text-base dark:from-indigo-500/20 dark:to-purple-500/20">
        🌐
      </span>

      {/* Language Buttons */}
      <div className="flex items-center gap-1">
        {languages.map((lang) => {
          const isActive = selectedLang === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang.code)}
              className={`relative flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
              }`}
              aria-label={`Switch to ${lang.label}`}
            >
              <span className="text-xs">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
