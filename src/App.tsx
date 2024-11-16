import React from "react";
import { choices } from "./data/quotes";
import { useQuiz } from "./hooks/useQuiz";
import QuoteCard from "./components/QuoteCard";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";
import { Sparkles } from "lucide-react";

export default function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-500" />
            Politische Zitate Quiz
          </h1>
          <p className="text-gray-600">
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
              isCorrect={state.selectedChoice?.name === currentQuote.author}
            />
          )}

          {!isGameOver && (
            <div className="text-center text-gray-500">
              Frage {state.currentIndex + 1} von {choices.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
