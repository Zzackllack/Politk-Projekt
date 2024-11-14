import { useState, useEffect } from 'react';
import { LeaderboardEntry } from '../types/quiz';

const STORAGE_KEY = 'quiz-leaderboard';
const MAX_ENTRIES = 10;

export function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leaderboard));
  }, [leaderboard]);

  const addEntry = (entry: LeaderboardEntry) => {
    setLeaderboard(prev => {
      const newLeaderboard = [...prev, entry]
        .sort((a, b) => b.score - a.score)
        .slice(0, MAX_ENTRIES);
      return newLeaderboard;
    });
  };

  return { leaderboard, addEntry };
}