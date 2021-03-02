import * as React from 'react';
import { Link } from 'gatsby';
import { useContext, useState } from 'react';
import { Transition } from '@headlessui/react';
import { GroupsContext } from '../../../pages/groups';
import { observer } from 'mobx-react-lite';
import { Post } from '../../../mobx/Post';
import { action } from 'mobx';

export default observer(function FeedItem({ post }: { post: Post }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = e => {
      // @ts-ignore
      if (ref.current.contains(e.target)) return;
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      className={`bg-white hover:bg-cyan-50 px-4 shadow sm:px-6 sm:rounded-lg transition block`}
    >
      <div className="flex">
        <Link
          to={`/groups/${post.group.id}/post/${post.id}`}
          className="flex flex-1 space-x-4"
        >
          <div className="flex-shrink-0 self-center bg-light-blue-700 rounded-full p-2 inline-flex items-center justify-center">
            {post.isAnnouncement ? (
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
            ) : (
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            )}
          </div>
          <div className="min-w-0 flex-1 py-4 sm:py-5">
            <h2
              id="question-title-81614"
              className="text-base font-medium text-gray-900"
            >
              {post.name}
              {post.isPublished ? '' : ' (Unpublished)'}
            </h2>
            <p className="text-sm text-gray-500">{post.dueDateString}</p>
          </div>
        </Link>
        {post.group.isUserAdmin && (
          <div className="flex-shrink-0 self-center flex">
            <div className="relative inline-block text-left" ref={ref}>
              <button
                type="button"
                className="pl-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
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
                  <button
                    type="button"
                    onClick={action(() => (post.isPinned = !post.isPinned))}
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
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    <span>{post.isPinned ? 'Unpin Post' : 'Pin Post'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={action(
                      () => (post.isPublished = !post.isPublished)
                    )}
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
                        post.delete();
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
});
