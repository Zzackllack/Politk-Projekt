import { useState, useCallback, useMemo, useEffect } from "react";
import { Quote, Choice, QuizState, QuizResult } from "../types/quiz";
import { quotes } from "../data/quotes";

const ANSWER_DELAY = 500;
const LOCAL_STORAGE_KEY = "quizState";

const correctSound = new Audio("/correct.mp3");
const incorrectSound = new Audio("/incorrect.mp3");

export function useQuiz(availableChoices: Choice[], hardMode: boolean) {
  const [state, setState] = useState<QuizState>(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedState
      ? JSON.parse(savedState)
      : {
          currentIndex: 0,
          score: 0,
          answeredQuestions: [],
          isAnswered: false,
          selectedChoice: undefined,
        };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Randomize quotes order for each quiz session
  const randomizedQuotes = useMemo(
    () => [...quotes].sort(() => Math.random() - 0.5),
    []
  );

  const currentQuote = randomizedQuotes[state.currentIndex];

  const shuffledChoices = useMemo(() => {
    const unusedChoices = availableChoices.filter(
      (choice) =>
        !randomizedQuotes
          .slice(0, state.currentIndex)
          .some((q) => q.author === choice.name)
    );

    // Ensure the correct answer is included in the choices
    const choices = [
      ...unusedChoices.sort(() => Math.random() - 0.5).slice(0, 3),
      { name: currentQuote.author, party: currentQuote.party },
    ];

    // If there are not enough choices, fill with random choices
    while (choices.length < 4) {
      const randomChoice =
        availableChoices[Math.floor(Math.random() * availableChoices.length)];
      if (!choices.some((choice) => choice.name === randomChoice.name)) {
        choices.push(randomChoice);
      }
    }

    // Remove duplicates
    const uniqueChoices = Array.from(new Set(choices.map((c) => c.name))).map(
      (name) => choices.find((c) => c.name === name)!
    );

    return uniqueChoices.sort(() => Math.random() - 0.5);
  }, [state.currentIndex, availableChoices, randomizedQuotes, currentQuote]);

  const handleAnswer = useCallback(
    (choice: Choice) => {
      const isCorrect = choice.name === currentQuote.author;
      const points = isCorrect ? calculatePoints(state.currentIndex, hardMode) : 0;
      setState((prev) => ({
        ...prev,
        selectedChoice: choice,
        isAnswered: true,
        score: prev.score + points,
        answeredQuestions: [...prev.answeredQuestions, currentQuote.id],
      }));

      // Play sound effect
      if (isCorrect) {
        correctSound.play();
      } else {
        incorrectSound.play();
      }

      setTimeout(() => {
        if (state.currentIndex < randomizedQuotes.length - 1) {
          setState((prev) => ({
            ...prev,
            currentIndex: prev.currentIndex + 1,
            selectedChoice: undefined,
            isAnswered: false,
          }));
        }
      }, ANSWER_DELAY);
    },
    [currentQuote, state.currentIndex, randomizedQuotes.length, hardMode]
  );

  const calculatePoints = (questionIndex: number, hardMode: boolean): number => {
    const basePoints = 100;
    const streakBonus = Math.floor(questionIndex / 3) * 50;
    const totalPoints = basePoints + streakBonus;
    return hardMode ? totalPoints * 2 : totalPoints;
  };

  const getResults = useCallback(
    (): QuizResult => ({
      score: state.score,
      total: quotes.length,
      answeredQuestions: state.answeredQuestions.map((id) => {
        const quote = quotes.find((q) => q.id === id)!;
        const selectedAnswer = state.selectedChoice?.name || "";
        return {
          quote,
          selectedAnswer,
          isCorrect: selectedAnswer === quote.author,
        };
      }),
    }),
    [state.score, state.answeredQuestions, state.selectedChoice]
  );

  const resetQuiz = useCallback(() => {
    setState({
      currentIndex: 0,
      score: 0,
      answeredQuestions: [],
      isAnswered: false,
      selectedChoice: undefined,
    });
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  const skipToGameOver = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: randomizedQuotes.length - 1,
      isAnswered: true,
    }));
  }, [randomizedQuotes.length]);

  const isGameOver =
    state.currentIndex === randomizedQuotes.length - 1 && state.isAnswered;

  return {
    currentQuote,
    shuffledChoices,
    handleAnswer,
    isGameOver,
    state,
    getResults,
    resetQuiz,
    skipToGameOver,
  };
}