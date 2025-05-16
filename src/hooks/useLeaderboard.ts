import { useState, useEffect } from "react";
import axios from "axios";
import { LeaderboardEntry } from "../types/quiz";

const API_URL = process.env.LEADERBOARD_API_URL || "http://localhost:3000/api/leaderboard";

export function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setLeaderboard(response.data))
      .catch((error) => console.error("Error fetching leaderboard:", error));
  }, []);

  const addEntry = (entry: LeaderboardEntry) => {
    axios
      .post(API_URL, entry)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((response) => {
        setLeaderboard((prev) =>
          [...prev, entry].sort((a, b) => b.score - a.score)
        );
      })
      .catch((error) =>
        console.error("Error adding leaderboard entry:", error)
      );
  };

  return { leaderboard, addEntry };
}
