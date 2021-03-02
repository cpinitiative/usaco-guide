import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Post } from '../../../mobx/Post';
import { Link } from 'gatsby';
import { action } from 'mobx';

export default observer(function PostHeader({ post }: { post: Post }) {
  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          {post.name}
          {post.isPublished ? '' : ' (Unpublished)'}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Due on {post.dueDateString}
        </p>
      </div>
      {post.group.isUserAdmin && (
        <div className="mt-4 flex space-x-3 md:mt-0">
          <Link
            to="edit"
            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            <span>Edit</span>
          </Link>
          <button
            type="button"
            onClick={action(() => (post.isPublished = !post.isPublished))}
            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <span>{post.isPublished ? 'Unpublish' : 'Publish'}</span>
          </button>
        </div>
      )}
    </div>
  );
});
