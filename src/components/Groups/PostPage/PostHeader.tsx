import { Link } from 'gatsby';
import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { getPostTimestampString, PostData } from '../../../models/groups/posts';

export default function PostHeader({ post }: { post: PostData }) {
  const activeGroup = useActiveGroup();
  const { updatePost } = usePostActions(activeGroup.groupData.id);

  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-4 dark:border-gray-700">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          {post.name}
          {post.isPublished ? '' : ' (Unpublished)'}
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {getPostTimestampString(post)}
        </p>
      </div>
      {activeGroup.showAdminView && (
        <div className="mt-4 flex space-x-3 md:mt-0">
          <Link to="edit" className="btn">
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
            onClick={() =>
              updatePost(post.id, { isPublished: !post.isPublished })
            }
            className="btn"
          >
            <span>{post.isPublished ? 'Unpublish' : 'Publish'}</span>
          </button>
        </div>
      )}
    </div>
  );
}
