export interface Quote {
  id: number;
  text: string;
  author: string;
  party: string;
  year: number;
  context?: string;
  source?: string;
}

export interface Choice {
  name: string;
  party: string;
}

export interface QuizState {
  currentIndex: number;
  score: number;
  answeredQuestions: number[];
  isAnswered: boolean;
  selectedChoice?: Choice;
}

export interface QuizResult {
  score: number;
  total: number;
  answeredQuestions: {
    quote: Quote;
    selectedAnswer: string;
    isCorrect: boolean;
  }[];
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
}
