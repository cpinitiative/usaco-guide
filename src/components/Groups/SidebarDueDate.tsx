import * as React from 'react';
import { getPostDueDateString, PostData } from '../../models/groups/posts';

export default function SidebarDueDate({ post }: { post: PostData }) {
  return getPostDueDateString(post) ? (
    <div className="flex items-center space-x-2">
      {/* Heroicon name: solid/calendar */}
      <svg
        className="h-5 w-5 text-gray-400 dark:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">
        Due on {getPostDueDateString(post)}
      </span>
    </div>
  ) : null;
}
