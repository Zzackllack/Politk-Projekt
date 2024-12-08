import { useState, useCallback, useMemo } from 'react';
import { Quote, Choice, QuizState, QuizResult } from '../types/quiz';
import { quotes } from '../data/quotes';

const ANSWER_DELAY = 2000;

export function useQuiz(availableChoices: Choice[]) {
  const [state, setState] = useState<QuizState>({
    currentIndex: 0,
    score: 0,
    answeredQuestions: [],
    isAnswered: false
  });

  // Randomize quotes order for each quiz session
  const randomizedQuotes = useMemo(() => 
    [...quotes].sort(() => Math.random() - 0.5),
    []
  );

  const currentQuote = randomizedQuotes[state.currentIndex];

  const shuffledChoices = useMemo(() => {
    const unusedChoices = availableChoices.filter(choice => 
      !randomizedQuotes
        .slice(0, state.currentIndex)
        .some(q => q.author === choice.name)
    );
    return [...unusedChoices]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, [state.currentIndex, availableChoices, randomizedQuotes]);

  const handleAnswer = useCallback((choice: Choice) => {
    const isCorrect = choice.name === currentQuote.author;
    const points = isCorrect ? calculatePoints(state.currentIndex) : 0;
    
    setState(prev => ({
      ...prev,
      selectedChoice: choice,
      isAnswered: true,
      score: prev.score + points,
      answeredQuestions: [...prev.answeredQuestions, currentQuote.id]
    }));

    setTimeout(() => {
      if (state.currentIndex < randomizedQuotes.length - 1) {
        setState(prev => ({
          ...prev,
          currentIndex: prev.currentIndex + 1,
          selectedChoice: undefined,
          isAnswered: false
        }));
      }
    }, ANSWER_DELAY);
  }, [currentQuote, state.currentIndex, randomizedQuotes.length]);

  const calculatePoints = (questionIndex: number): number => {
    const basePoints = 100;
    const streakBonus = Math.floor(questionIndex / 3) * 50;
    return basePoints + streakBonus;
  };

  const getResults = useCallback((): QuizResult => ({
    score: state.score,
    total: quotes.length,
    answeredQuestions: state.answeredQuestions.map(id => {
      const quote = quotes.find(q => q.id === id)!;
      const selectedAnswer = state.selectedChoice?.name || '';
      return {
        quote,
        selectedAnswer,
        isCorrect: selectedAnswer === quote.author
      };
    })
  }), [state.score, state.answeredQuestions, state.selectedChoice]);

  const resetQuiz = useCallback(() => {
    setState({
      currentIndex: 0,
      score: 0,
      answeredQuestions: [],
      isAnswered: false
    });
  }, []);

  const isGameOver = state.currentIndex === randomizedQuotes.length - 1 && state.isAnswered;

  return {
    currentQuote,
    shuffledChoices,
    handleAnswer,
    isGameOver,
    state,
    getResults,
    resetQuiz
  };
}