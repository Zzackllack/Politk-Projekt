import { useState, useEffect } from "react";
import axios from "axios";
import { LeaderboardEntry } from "../types/quiz";

// Get API URL from environment variable and log it for debugging
const API_URL = import.meta.env.VITE_LEADERBOARD_API_URL || "http://localhost:3000";

// Log the API URL to help with debugging
console.log("Using API URL:", API_URL);

export function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // Ensure API_URL ends with the correct path
    const url = API_URL.endsWith('/api/leaderboard') ? API_URL : `${API_URL}/api/leaderboard`;
    
    console.log("Fetching leaderboard from:", url);
    axios
      .get(url)
      .then((response) => {
        console.log("Leaderboard data received:", response.data);
        setLeaderboard(response.data);
      })
      .catch((error) => console.error("Error fetching leaderboard:", error));
  }, []);

  const addEntry = (entry: LeaderboardEntry) => {
    // Ensure API_URL ends with the correct path
    const url = API_URL.endsWith('/api/leaderboard') ? API_URL : `${API_URL}/api/leaderboard`;
    
    axios
      .post(url, entry)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((response) => {
        console.log("Entry added successfully:", entry);
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
