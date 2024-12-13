import React, { useState, useEffect } from "react";
import { Quote, Choice } from "../types/quiz";
import { Quote as QuoteIcon, Calendar, BookOpen } from "lucide-react";

interface QuoteCardProps {
  quote: Quote;
  choices: Choice[];
  onAnswer: (choice: Choice) => void;
  disabled: boolean;
  selectedChoice?: Choice;
  isCorrect?: boolean;
  hardMode: boolean;
}

export default function QuoteCard({
  quote,
  choices,
  onAnswer,
  disabled,
  selectedChoice,
  isCorrect,
  hardMode,
}: QuoteCardProps) {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (disabled) {
      setAnimationClass("swipe-out");
      setTimeout(() => {
        setAnimationClass("swipe-in");
      }, 500); // Match the duration of the swipe-out animation
    }
  }, [disabled]);

  return (
    <div
      className={`w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 ${animationClass}`}
    >
      <div className="flex items-center justify-center mb-6">
        <QuoteIcon className="w-8 h-8 text-blue-500" />
      </div>

      <blockquote className="text-2xl font-serif text-center mb-6 text-gray-800 dark:text-gray-100">
        {quote.text}
      </blockquote>

      {!hardMode && (
        <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {quote.year}
          </div>
          {quote.context && (
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {quote.context}
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {choices.map((choice) => (
          <button
            key={choice.name}
            onClick={() => onAnswer(choice)}
            disabled={disabled}
            className={`
              p-4 rounded-lg transition-all duration-200
              ${
                disabled && selectedChoice?.name === choice.name
                  ? isCorrect
                    ? "bg-green-100 dark:bg-green-900 border-2 border-green-500"
                    : "bg-red-100 dark:bg-red-900 border-2 border-red-500"
                  : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-gray-200 dark:border-gray-600"
              }
              ${disabled ? "cursor-default" : "hover:scale-102 hover:shadow-md"}
            `}
          >
            <div className="font-medium text-gray-800 dark:text-gray-100">
              {choice.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {choice.party}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
