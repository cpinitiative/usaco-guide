import { RouteComponentProps } from '@reach/router';
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

export default function PostPage(
  props: RouteComponentProps<{
    groupId: string;
    postId: string;
  }>
) {
  if (!props.groupId || !props.postId) {
    throw 'Misplaced PostPage component! This should be under the param URL with :groupId and :postId';
  }
  const { postId } = props;
  const activeGroup = useActiveGroup();
  const post = usePost(postId);
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

  if (!post) {
    return (
      <>
        <TopNavigationBar />
        <main className="py-10 text-center">
          <p className="text-2xl font-medium">Post Not Found</p>
        </main>
      </>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${post.name} · ${activeGroup.groupData?.name}`}
        image={null}
        pathname={props.path}
      />
      <TopNavigationBar />
      <nav className="mt-6 mb-4 flex" aria-label="Breadcrumb">
        <Breadcrumbs
          className={`${
            post.type === 'announcement' ? 'max-w-4xl' : 'max-w-7xl'
          } mx-auto w-full px-4 pt-3 pb-4 sm:px-6 lg:px-8`}
          group={activeGroup.groupData!}
        />
      </nav>
      <main
        className="relative flex-1 overflow-y-auto focus:outline-hidden"
        tabIndex={-1}
      >
        <div className="pb-8 xl:pb-10">
          {post.type === 'assignment' ? (
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-(--breakpoint-xl) xl:grid-cols-3">
              <div className="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8 dark:border-gray-700">
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
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
