import * as React from 'react';
import { useContext, useEffect } from 'react';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import { GroupsContext } from '../../../pages/groups';
import { observer } from 'mobx-react-lite';
import Breadcrumbs from '../Breadcrumbs';
import { Link, navigate } from 'gatsby';
import { action } from 'mobx';

export default observer(function EditPostPage(props) {
  const { postId } = props as {
    path: string;
    groupId: string;
    postId: string;
  };
  const store = useContext(GroupsContext).groupsStore;

  const post = store.activeGroup?.posts.find(post => post.id === postId);

  useEffect(() => {
    if (!post) return;
    post.startEditing();
    return () => post.stopEditing();
  }, [post]);

  if (!post) {
    return (
      <>
        <TopNavigationBar />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">Loading...</p>
        </main>
      </>
    );
  }

  return (
    <Layout>
      <SEO title={`Edit ${post.name} · ${post.group.name}`} />
      <TopNavigationBar />
      <nav className="bg-white flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs
          className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4"
          group={post.group}
          post={post}
        />
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Edit Post: {post.name}
            </h1>
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0">
            <Link
              to="../"
              className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <span>Back</span>
            </Link>
            <button
              type="submit"
              onClick={() => post.saveEdits().then(() => navigate(-1))}
              disabled={post.isWritingToServer}
              className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              {post.isWritingToServer ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
        <div className="h-6" />
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="post_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Post Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="post_name"
                      id="post_name"
                      value={post.name}
                      onChange={action(e => (post.name = e.target.value))}
                      className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md shadow-sm sm:text-sm border-gray-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="post_content"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Post Content
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="post_content"
                      name="post_content"
                      rows={5}
                      value={post.body}
                      onChange={action(e => (post.body = e.target.value))}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={action(() => {
                  if (confirm('Are you sure you want to delete this post?')) {
                    const groupId = post.group.id;
                    post.delete().then(() => navigate(-1));
                  }
                })}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Post
              </button>
              <button
                type="button"
                onClick={() => post.saveEdits().then(() => navigate(-1))}
                disabled={post.isWritingToServer}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {post.isWritingToServer ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
        <div className="h-12" />
      </main>
    </Layout>
  );
});
