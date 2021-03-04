import * as React from 'react';
import { useContext, useEffect } from 'react';
import { GroupsContext } from '../../../pages/groups';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Feed from './Feed';
import LeaderboardSidebar from './LeaderboardSidebar';
import { Link } from 'gatsby';
import { observer } from 'mobx-react-lite';
import SEO from '../../seo';
import Layout from '../../layout';
import { useGroup } from '../../../hooks/groups/useGroup';
import GroupPageHeader from './GroupPageHeader';

export default function GroupPage({ path, groupId }: any) {
  const group = useGroup(groupId);

  return (
    <Layout>
      <SEO title={group.data?.name} />
      <TopNavigationBar />
      <div className="min-h-screen bg-gray-100">
        <GroupPageHeader group={group.data} />
        <Link
          to="/leaderboard"
          className="md:hidden bg-white shadow flex items-center justify-between px-4 sm:px-8 py-3"
        >
          <span>View Leaderboard</span> &rarr;
        </Link>
        {group ? (
          <div className="py-6">
            <div className="sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 md:grid md:gap-4 md:grid-cols-12 lg:gap-8">
              <main className="md:col-span-7 lg:col-span-8">
                <Feed group={group.data} />
              </main>
              <aside className="hidden md:block md:col-span-5 lg:col-span-4">
                <div className="sticky top-4 space-y-4">
                  <section>{/*<LeaderboardSidebar />*/}</section>
                </div>
              </aside>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
