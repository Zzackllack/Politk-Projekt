import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { choices } from "./data/quotes";
import { useQuiz } from "./hooks/useQuiz";
import QuoteCard from "./components/QuoteCard";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";
import AGB from "./pages/agb";
import Datenschutzerklaerung from "./pages/datenschutzerklaerung";
import { Sparkles, Sun, Moon } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const {
    currentQuote,
    shuffledChoices,
    handleAnswer,
    isGameOver,
    state,
    getResults,
    resetQuiz,
  } = useQuiz(choices);
  const results = isGameOver ? getResults() : null;

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-12 px-4 flex flex-col justify-between">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-3 mb-4">
                      <Sparkles className="w-8 h-8 text-blue-500" />
                      Politische Zitate Quiz
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Teste dein Wissen über berühmte politische Zitate
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-8">
                    <ScoreBoard score={state.score} />
                    {isGameOver && results ? (
                      <GameOver results={results} onPlayAgain={resetQuiz} />
                    ) : (
                      <QuoteCard
                        quote={currentQuote}
                        choices={shuffledChoices}
                        onAnswer={handleAnswer}
                        disabled={state.isAnswered}
                        selectedChoice={state.selectedChoice}
                        isCorrect={
                          state.selectedChoice?.name === currentQuote.author
                        }
                      />
                    )}

                    {!isGameOver && (
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        Frage {state.currentIndex + 1} von 17
                      </div>
                    )}
                  </div>
                </>
              }
            />
            <Route path="/agb" element={<AGB />} />
            <Route
              path="/datenschutzerklaerung"
              element={<Datenschutzerklaerung />}
            />
          </Routes>
        </div>
        <footer className="text-center text-gray-500 dark:text-gray-400 mt-8">
          <a
            href="https://github.com/Zzackllack/Politk-Projekt/issues"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Vorschläge, Bugs?
          </a>{" "}
          <br />
          <a
            href="/agb"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            AGB
          </a>{" "}
          |{" "}
          <a
            href="/datenschutzerklaerung"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Datenschutzerklärung
          </a>{" "}
          <br />
          Diese Website ist open source. Schaue es dir{" "}
          <a
            href="https://github.com/Zzackllack/Politk-Projekt"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            hier
          </a>{" "}
          an. <br />
        </footer>
      </div>
    </Router>
  );
}
