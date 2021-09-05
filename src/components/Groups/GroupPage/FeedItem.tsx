import { Transition } from '@headlessui/react';
import { CheckIcon, ClipboardListIcon } from '@heroicons/react/outline';
import { BookmarkIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { GroupData } from '../../../models/groups/groups';
import {
  getPostTimestampString,
  getTotalPointsOfPost,
  PostData,
} from '../../../models/groups/posts';
import Tooltip from '../../Tooltip/Tooltip';

const AnnouncementIcon = () => {
  return (
    <div className="bg-light-blue-700 rounded-full p-2 inline-flex items-center justify-center">
      <svg
        className="h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    </div>
  );
};

const AssignmentIcon = ({ pointsEarned, totalPoints }) => {
  const fullySolved = pointsEarned === totalPoints && totalPoints > 0;
  const inProgress = !fullySolved && pointsEarned > 0;
  return (
    <Tooltip content={`${pointsEarned} / ${totalPoints} points earned`}>
      <div
        className={
          (fullySolved
            ? 'bg-green-600'
            : inProgress
            ? 'bg-orange-600'
            : 'bg-light-blue-700') +
          ' rounded-full p-2 inline-flex items-center justify-center'
        }
      >
        {fullySolved ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : (
          <ClipboardListIcon className="h-6 w-6 text-white" />
        )}
      </div>
    </Tooltip>
  );
};

export default function FeedItem({
  group,
  post,
  userPoints,
  dragHandle,
  isBeingDragged = false,
}: {
  group: GroupData;
  post: PostData;
  userPoints: number | null;
  dragHandle?: JSX.Element;
  /**
   * If true, the feed item will be grayed out to show that it's being dragged
   */
  isBeingDragged?: boolean;
}): JSX.Element {
  const { showAdminView } = useActiveGroup();
  const { updatePost, deletePost } = usePostActions(group.id);

  const [showDropdown, setShowDropdown] = useState(false);
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const handleClick = e => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      className={`${
        isBeingDragged
          ? 'bg-gray-200 dark:bg-gray-900'
          : 'bg-white dark:bg-gray-800 hover:bg-cyan-50 dark:hover:bg-cyan-900'
      } shadow ${
        dragHandle ? 'pr-4 sm:pr-6' : 'px-4 sm:px-6'
      } sm:rounded-lg transition flex`}
    >
      {dragHandle}
      <div className="flex flex-1">
        <Link
          to={`/groups/${group.id}/post/${post.id}`}
          className="flex flex-1 space-x-4"
        >
          <div className="flex-shrink-0 self-center">
            {post.type === 'announcement' ? (
              <AnnouncementIcon />
            ) : (
              <AssignmentIcon
                pointsEarned={userPoints ?? 0}
                totalPoints={getTotalPointsOfPost(post)}
              />
            )}
          </div>
          <div className="min-w-0 flex-1 py-4 sm:py-5">
            <h2
              id="question-title-81614"
              className="text-base font-medium text-gray-900 dark:text-gray-100 flex items-center"
            >
              {post.name}
              {post.isPublished ? '' : ' (Unpublished)'}
              {post.isPinned && (
                <BookmarkIcon className="ml-1 h-5 w-5 text-gray-300 dark:text-gray-500" />
              )}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {getPostTimestampString(post)}
            </p>
          </div>
        </Link>
        {showAdminView && (
          <div className="flex-shrink-0 self-center flex">
            <div className="relative inline-block text-left" ref={ref}>
              <button
                type="button"
                className="pl-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none"
                id="options-menu-0"
                onClick={e => {
                  setShowDropdown(!showDropdown);
                  e.preventDefault();
                }}
              >
                <span className="sr-only">Open options</span>
                {/* Heroicon name: solid/dots-vertical */}
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>

              <Transition
                show={showDropdown}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu-0"
              >
                <div className="py-1">
                  {/* Pinning is no longer needed now that posts can be reordered easily */}
                  {/* <button
                    type="button"
                    onClick={() =>
                      updatePost(post.id, { isPinned: !post.isPinned })
                    }
                    className="w-full flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <BookmarkIcon className="mr-3 h-5 w-5 text-gray-400" />
                    <span>{post.isPinned ? 'Unpin Post' : 'Pin Post'}</span>
                  </button> */}
                  <button
                    type="button"
                    onClick={() =>
                      updatePost(post.id, { isPublished: !post.isPublished })
                    }
                    className="w-full flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                    <span>
                      {post.isPublished ? 'Unpublish Post' : 'Publish Post'}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        confirm('Are you sure you want to delete this post?')
                      ) {
                        deletePost(post.id).catch(e => toast.error(e.message));
                      }
                    }}
                    className="w-full flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span>Delete Post</span>
                  </button>
                </div>
              </Transition>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
