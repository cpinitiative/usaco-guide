import { Link } from 'gatsby';
import * as React from 'react';
import { GroupData } from '../../models/groups/groups';
import { PostData } from '../../models/groups/posts';

export default function Breadcrumbs({
  className,
  group,
  post,
}: {
  className?: string;
  group: GroupData;
  post?: PostData;
}) {
  return (
    <ol className={'flex items-center space-x-4 ' + className}>
      <li>
        <div>
          <Link
            to="/groups"
            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
          >
            {/* Heroicon name: solid/home */}
            <svg
              className="flex-shrink-0 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
        </div>
      </li>
      <li>
        <div className="flex items-center">
          {/* Heroicon name: solid/chevron-right */}
          <svg
            className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <Link
            to={`/groups/${group.id}`}
            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {group.name}
          </Link>
        </div>
      </li>
      {post && (
        <li>
          <div className="flex items-center">
            {/* Heroicon name: solid/chevron-right */}
            <svg
              className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link
              to={`/groups/${group.id}/post/${post.id}`}
              aria-current="page"
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {post.name}
            </Link>
          </div>
        </li>
      )}
    </ol>
  );
}
