import * as React from 'react';
import { ProblemDifficulty } from '../models/problem';
import TextTooltip from './Tooltip/TextTooltip';

export const difficultyClasses = {
  'N/A': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
  'Very Easy': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
  Easy: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  Normal: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
  Hard: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
  'Very Hard':
    'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100',
  Insane: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
};
export default function DifficultyBox({
  difficulty,
}: {
  difficulty: ProblemDifficulty;
}) {
  return (
    <span
      className={
        'mr-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs leading-4 font-medium ' +
        difficultyClasses[difficulty]
      }
    >
      {difficulty === 'N/A' ? (
        <TextTooltip
          content={
            'This problem was added automatically; if you want to suggest a difficulty, feel free to make a pull request!'
          }
        >
          {difficulty}
        </TextTooltip>
      ) : (
        difficulty
      )}
    </span>
  );
}
