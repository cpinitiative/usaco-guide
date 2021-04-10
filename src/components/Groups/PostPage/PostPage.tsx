import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePost } from '../../../hooks/groups/usePost';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import PostProblems from './PostProblems';
import PostSidebar from './PostSidebar';

export default function PostPage(props) {
  const { postId } = props as {
    path: string;
    groupId: string;
    postId: string;
  };
  const activeGroup = useActiveGroup();
  const post = usePost(postId);

  if (activeGroup.isLoading) {
    return (
      <>
        <TopNavigationBar />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">Loading...</p>
        </main>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <TopNavigationBar />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">Post Not Found</p>
        </main>
      </>
    );
  }

  return (
    <Layout>
      <SEO title={`${post.name} · ${activeGroup.groupData.name}`} />
      <TopNavigationBar />
      <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs
          className={`${
            post.type === 'announcement' ? 'max-w-4xl' : 'max-w-7xl'
          } w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4`}
          group={activeGroup.groupData}
        />
      </nav>
      <main
        className="flex-1 relative overflow-y-auto focus:outline-none"
        tabIndex={-1}
      >
        <div className="pb-8 xl:pb-10">
          {post.type === 'assignment' ? (
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl xl:grid xl:grid-cols-3">
              <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200 dark:border-gray-700">
                <div>
                  <PostHeader post={post} />
                  <aside className="mt-8 xl:hidden">
                    <PostSidebar post={post} isMobile />
                  </aside>
                  <PostBody post={post} />
                </div>
                <PostProblems post={post} />
              </div>
              <aside className="hidden xl:block xl:pl-8">
                <PostSidebar post={post} />
              </aside>
            </div>
          ) : (
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <PostHeader post={post} />
              <div className="h-4" />
              <PostBody post={post} />
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
