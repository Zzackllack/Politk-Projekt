import React from 'react';
import { Quote, Choice } from '../types/quiz';
import { Quote as QuoteIcon, Calendar, BookOpen } from 'lucide-react';

interface QuoteCardProps {
  quote: Quote;
  choices: Choice[];
  onAnswer: (choice: Choice) => void;
  disabled: boolean;
  selectedChoice?: Choice;
  isCorrect?: boolean;
}

export default function QuoteCard({ 
  quote, 
  choices, 
  onAnswer, 
  disabled,
  selectedChoice,
  isCorrect
}: QuoteCardProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-center mb-6">
        <QuoteIcon className="w-8 h-8 text-blue-500" />
      </div>
      
      <blockquote className="text-2xl font-serif text-center mb-6 text-gray-800">
        "{quote.text}"
      </blockquote>
      
      <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-500">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {choices.map((choice) => (
          <button
            key={choice.name}
            onClick={() => onAnswer(choice)}
            disabled={disabled}
            className={`
              p-4 rounded-lg transition-all duration-200
              ${disabled && selectedChoice?.name === choice.name
                ? isCorrect
                  ? 'bg-green-100 border-2 border-green-500'
                  : 'bg-red-100 border-2 border-red-500'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200'}
              ${disabled ? 'cursor-default' : 'hover:scale-102 hover:shadow-md'}
            `}
          >
            <div className="font-medium text-gray-800">{choice.name}</div>
            <div className="text-sm text-gray-500">{choice.party} Party</div>
          </button>
        ))}
      </div>
    </div>
  );
}