import React from "react";
import { Trophy } from "lucide-react";

interface ScoreBoardProps {
  score: number;
}

export default function ScoreBoard({ score }: ScoreBoardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center space-y-4">
      <Trophy className="w-6 h-6 text-yellow-500" />
      <div className="text-center">
        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Punktzahl
        </div>
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {score}
        </div>
      </div>
    </div>
  );
}
