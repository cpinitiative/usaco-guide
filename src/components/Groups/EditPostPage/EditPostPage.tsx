import { Timestamp } from 'firebase/firestore';
import 'flatpickr/dist/themes/material_blue.css';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import { useReducer } from 'react';
import Flatpickr from 'react-flatpickr';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePost } from '../../../hooks/groups/usePost';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import toast from 'react-hot-toast';
import { PostData } from '../../../models/groups/posts';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import MarkdownEditor from '../MarkdownEditor';

export default function EditPostPage(props) {
  const { groupId, postId } = props as {
    path: string;
    groupId: string;
    postId: string;
  };
  const activeGroup = useActiveGroup();
  const originalPost = usePost(postId);
  const [post, editPost] = useReducer(
    (oldPost, updates: Partial<PostData>): PostData => ({
      ...oldPost,
      ...updates,
    }),
    null
  );
  const { updatePost, deletePost } = usePostActions(groupId);

  React.useEffect(() => {
    // we need to check for timestamp -- ServerValue is null initially
    if (!post && originalPost && originalPost.timestamp) {
      editPost(originalPost);
    }
  }, [originalPost, post]);

  if (!post) {
    const postNotFound = !activeGroup.isLoading && !originalPost;
    return (
      <>
        <TopNavigationBar />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">
            {postNotFound ? 'Post not found' : 'Loading...'}
          </p>
        </main>
      </>
    );
  }

  return (
    <Layout>
      <SEO title={`Edit ${post.name} · ${activeGroup.groupData.name}`} />
      <TopNavigationBar />
      <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs
          className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4"
          group={activeGroup.groupData}
          post={post}
        />
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b dark:border-gray-700 xl:pb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Edit {post.type === 'assignment' ? 'Assignment' : 'Announcement'}:{' '}
              {post.name}
            </h1>
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0">
            <Link to="../" className="btn">
              <span>Back</span>
            </Link>
            <button
              type="submit"
              onClick={() => updatePost(post.id, post).then(() => navigate(-1))}
              className="btn"
            >
              Save
            </button>
          </div>
        </div>
        <div className="h-6" />
        <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
          <div>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="post_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Post Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="post_name"
                    id="post_name"
                    value={post.name}
                    onChange={e => editPost({ name: e.target.value })}
                    className="input"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Post Date
                </label>

                <div className="mt-1">
                  <Flatpickr
                    placeholder={'Choose a due date'}
                    options={{
                      dateFormat:
                        'Posted On'.split('').join('\\\\') +
                        ' l, F J, Y, h:i K ' +
                        [
                          '',
                          ...(
                            'UTC' +
                            // sign is reversed for some reason
                            (new Date().getTimezoneOffset() > 0 ? '-' : '+') +
                            Math.abs(new Date().getTimezoneOffset()) / 60
                          ).split(''),
                        ].join('\\\\'),
                      enableTime: true,
                    }}
                    value={post.timestamp?.toDate()}
                    onChange={date =>
                      editPost({
                        timestamp: Timestamp.fromDate(date[0]),
                      })
                    }
                    className="input"
                  />
                </div>
              </div>

              {post.type === 'assignment' && (
                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Due Date (Optional)
                  </label>

                  <div className="mt-1">
                    <Flatpickr
                      placeholder={'Choose a due date (optional)'}
                      options={{
                        dateFormat:
                          '\\D\\u\\e l, F J, Y, h:i K ' +
                          [
                            '',
                            ...(
                              'UTC' +
                              // sign is reversed for some reason
                              (new Date().getTimezoneOffset() > 0 ? '-' : '+') +
                              Math.abs(new Date().getTimezoneOffset()) / 60
                            ).split(''),
                          ].join('\\\\'),
                        enableTime: true,
                      }}
                      value={post.dueTimestamp?.toDate()}
                      onChange={date =>
                        editPost({
                          dueTimestamp: Timestamp.fromDate(date[0]),
                        })
                      }
                      className="input"
                    />
                  </div>
                </div>
              )}

              <div className="sm:col-span-6">
                <label
                  htmlFor="post_content"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Post Content
                </label>
                <div className="mt-1">
                  <MarkdownEditor
                    value={post.body}
                    onChange={value => editPost({ body: value })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Are you sure you want to delete this post?')) {
                    deletePost(post.id)
                      .then(() =>
                        navigate(`/groups/${groupId}`, { replace: true })
                      )
                      .catch(e => toast.error(e.message));
                  }
                }}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-surface focus:ring-red-500"
              >
                Delete Post
              </button>
              <button
                type="button"
                onClick={() =>
                  updatePost(post.id, post).then(() => navigate(-1))
                }
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-surface focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="h-12" />
      </main>
    </Layout>
  );
}
