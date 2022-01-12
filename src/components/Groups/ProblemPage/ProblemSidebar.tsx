import { LinkIcon } from '@heroicons/react/solid';
import * as React from 'react';
import useUserProblemSubmissions from '../../../hooks/groups/useUserProblemSubmissions';
import { PostData } from '../../../models/groups/posts';
import {
  getEarnedPointsForProblem,
  GroupProblemData,
} from '../../../models/groups/problem';
import TextTooltip from '../../Tooltip/TextTooltip';
import SidebarDueDate from '../SidebarDueDate';
import ProblemSubmissionsList from './ProblemSubmissionsList';

export default function ProblemSidebar({
  post,
  problem,
}: {
  post: PostData;
  problem: GroupProblemData;
}) {
  const submissions = useUserProblemSubmissions(post.id, problem.id);

  if (!submissions) return null;

  return (
    <>
      <h2 className="sr-only">Details</h2>
      <div className="space-y-5">
        <div className="flex items-center space-x-2">
          <svg
            className="h-5 w-5 text-green-500 dark:text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-green-700 dark:text-green-400 text-sm font-medium">
            {getEarnedPointsForProblem(problem, submissions)} / {problem.points}{' '}
            points earned
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="h-5 w-5 text-gray-400 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path fill="transparent" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              fill="transparent"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">
            Difficulty: {problem.difficulty}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="h-5 w-5 text-gray-400 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">
            Source: {problem.source}
          </span>
        </div>
        {/* {problem.usacoGuideId && (
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-5 w-5 text-gray-400 dark:text-gray-400" />
            <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">
              <TextTooltip
                content={
                  'Submitting this problem here will also mark it as completed in the USACO Guide.'
                }
              >
                Linked to USACO Guide Problem
              </TextTooltip>
            </span>
          </div>
        )} */}
        <SidebarDueDate post={post} />
      </div>
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 py-6 space-y-8">
        <div>
          <h2 className="font-medium text-gray-600 dark:text-gray-200 mb-2">
            My Submissions
          </h2>
          <ProblemSubmissionsList problem={problem} submissions={submissions} />
        </div>
      </div>
    </>
  );
}
