import { Link } from 'gatsby';
import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Feed from './Feed';
import GroupPageHeader from './GroupPageHeader';
import LeaderboardSidebar from './LeaderboardSidebar';

export default function GroupPage(props) {
  const group = useActiveGroup();

  return (
    <Layout>
      <SEO title={group.groupData?.name} image={null} pathname={props.path} />
      <TopNavigationBar />
      <div className="dark:bg-dark-surface min-h-screen bg-gray-100">
        <GroupPageHeader group={group.groupData!} />
        <Link
          to="leaderboard"
          className="flex items-center justify-between bg-white px-4 py-3 shadow-sm sm:px-8 md:hidden dark:bg-gray-800"
        >
          <span>View Leaderboard</span> &rarr;
        </Link>
        {group ? (
          <div className="py-6">
            <div className="sm:px-6 md:grid md:grid-cols-12 md:gap-4 lg:mx-auto lg:max-w-7xl lg:gap-8 lg:px-8">
              <main className="md:col-span-7 lg:col-span-8">
                <Feed />
              </main>
              <aside className="hidden md:col-span-5 md:block lg:col-span-4">
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
