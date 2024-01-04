import { Link } from 'gatsby';
import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Feed from './Feed';
import GroupPageHeader from './GroupPageHeader';
import LeaderboardSidebar from './LeaderboardSidebar';

export default function GroupPage({ path, groupId }: any) {
  const group = useActiveGroup();

  return (
    <Layout>
      <SEO title={group.groupData?.name} />
      <TopNavigationBar />
      <div className="min-h-screen bg-gray-100 dark:bg-dark-surface">
        <GroupPageHeader group={group.groupData} />
        <Link
          to="leaderboard"
          className="md:hidden bg-white dark:bg-gray-800 shadow flex items-center justify-between px-4 sm:px-8 py-3"
        >
          <span>View Leaderboard</span> &rarr;
        </Link>
        {group ? (
          <div className="py-6">
            <div className="sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 md:grid md:gap-4 md:grid-cols-12 lg:gap-8">
              <main className="md:col-span-7 lg:col-span-8">
                <Feed />
              </main>
              <aside className="hidden md:block md:col-span-5 lg:col-span-4">
                <div className="sticky top-4 space-y-4">
                  <section>
                    <LeaderboardSidebar />
                  </section>
                </div>
              </aside>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
