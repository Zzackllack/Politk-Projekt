import React from "react";
import { Trophy } from "lucide-react";

interface ScoreBoardProps {
  score: number;
}

export default function ScoreBoard({ score }: ScoreBoardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <Trophy className="w-6 h-6 text-yellow-500" />
      <div>
        <div className="text-lg font-semibold">Punktzahl</div>
        <div className="text-2xl font-bold text-blue-600">{score}</div>
      </div>
    </div>
  );
}
