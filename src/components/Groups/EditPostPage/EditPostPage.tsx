import { Timestamp } from 'firebase/firestore';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import { useReducer } from 'react';
import Flatpickr from 'react-flatpickr';
import toast from 'react-hot-toast';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePost } from '../../../hooks/groups/usePost';
import { usePostActions } from '../../../hooks/groups/usePostActions';
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
    (oldPost: PostData | null, updates: Partial<PostData>): PostData | null => {
      // If oldPost is null, this is the initial set - just return the updates
      if (!oldPost) return updates as PostData;

      // If updates has a type, check if it matches the old post type
      if (updates.type && oldPost.type !== updates.type) {
        return oldPost; // Don't allow type changes
      }

      // Merge the updates with the old post
      return {
        ...oldPost,
        ...updates,
      } as PostData;
    },
    null
  );
  const { updatePost, deletePost } = usePostActions(groupId);

  React.useEffect(() => {
    // we need to check for timestamp -- ServerValue is null initially
    if (!post && originalPost) {
      editPost(originalPost);
    }
  }, [originalPost, post]);

  if (!post) {
    if (activeGroup.isLoading) {
      return (
        <>
          <TopNavigationBar />
          <main className="py-10 text-center">
            <p className="text-2xl font-medium">Loading...</p>
          </main>
        </>
      );
    }

    if (!originalPost) {
      return (
        <>
          <TopNavigationBar />
          <main className="py-10 text-center">
            <p className="text-2xl font-medium">Post not found</p>
          </main>
        </>
      );
    }

    // If we have originalPost but no post state, we're still loading
    return (
      <>
        <TopNavigationBar />
        <main className="py-10 text-center">
          <p className="text-2xl font-medium">Loading...</p>
        </main>
      </>
    );
  }

  return (
    <Layout>
      <SEO
        title={`Edit ${post.name} · ${activeGroup.groupData!.name}`}
        image={undefined}
        pathname={undefined}
      />
      <TopNavigationBar />
      <nav className="mt-6 mb-4 flex" aria-label="Breadcrumb">
        <Breadcrumbs
          className="mx-auto w-full max-w-4xl px-4 pt-3 pb-4 sm:px-6 lg:px-8"
          group={activeGroup.groupData!}
          post={post}
        />
      </nav>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 dark:border-gray-700">
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
          </div>
        </div>
        <div className="h-6" />
        <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
          <div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
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
                    placeholder={'Choose a post date'}
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
                        timestamp: date[0]
                          ? Timestamp.fromDate(date[0])
                          : undefined,
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
                        minDate: post.timestamp?.toDate(),
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
                    deletePost(post.id!)
                      .then(() =>
                        navigate(`/groups/${groupId}`, { replace: true })
                      )
                      .catch(e => toast.error(e.message));
                  }
                }}
                className="dark:focus:ring-offset-dark-surface inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Delete Post
              </button>
              <button
                type="button"
                onClick={() =>
                  updatePost(post.id!, post).then(() => navigate(-1))
                }
                className="dark:focus:ring-offset-dark-surface inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden"
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
