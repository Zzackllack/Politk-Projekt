import React, { useState } from "react";
import { Trophy, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { QuizResult, LeaderboardEntry } from "../types/quiz";
import { useLeaderboard } from "../hooks/useLeaderboard";

interface GameOverProps {
  results: QuizResult;
  onPlayAgain: () => void;
}

export default function GameOver({ results, onPlayAgain }: GameOverProps) {
  const [playerName, setPlayerName] = useState("");
  const { leaderboard, addEntry } = useLeaderboard();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      addEntry({
        name: playerName,
        score: results.score,
        date: new Date().toISOString(),
      });
      setIsSubmitted(true);
    }
  };

  const shareText = `Ich habe ${results.score} Punkte im Politische Zitate Quiz erzielt! Kannst du meinen Score schlagen?`;
  const shareUrl = window.location.href;

  const handleShare = (platform: "twitter" | "facebook" | "linkedin") => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}&quote=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}&summary=${encodeURIComponent(shareText)}`,
    };
    window.open(urls[platform], "_blank", "width=600,height=400");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
      <div className="text-center mb-8">
        <h2 className="font-minecraft text-4xl mb-2 text-red-600">
          Spiel Vorbei!
        </h2>
        <p className="font-minecraft text-6xl text-yellow-500 mb-4">
          {results.score} Punkte
        </p>
      </div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmitScore} className="mb-8">
          <input
            type="text"
            placeholder="Gib deinen Namen ein"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-lg mb-2"
            maxLength={20}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Punktzahl Einreichen
          </button>
        </form>
      ) : (
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => handleShare("twitter")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            <Twitter className="w-5 h-5" />
            Auf Twitter Teilen
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Facebook className="w-5 h-5" />
            Auf Facebook Teilen
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            Auf LinkedIn Teilen
          </button>
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          Bestenliste
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          {leaderboard.length > 0 ? (
            <div className="space-y-2">
              {leaderboard.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-minecraft text-lg text-gray-500">
                      #{index + 1}
                    </span>
                    <span className="font-semibold">{entry.name}</span>
                  </div>
                  <span className="font-minecraft text-yellow-500">
                    {entry.score} Punkte
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Noch keine Punkte</p>
          )}
        </div>
      </div>
      <button
        onClick={onPlayAgain}
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Nochmal Spielen
      </button>
    </div>
  );
}
