import * as React from 'react';
import { useContext, useEffect } from 'react';
import { GroupsContext } from '../../../pages/groups';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Feed from './Feed';
import LeaderboardSidebar from './LeaderboardSidebar';
import { Link } from 'gatsby';
import { observer } from 'mobx-react-lite';
import { Transition } from '@headlessui/react';
import GroupPageHeader from './GroupPageHeader';
import SEO from '../../seo';
import Layout from '../../layout';

export default observer(function GroupPage(props: {
  path: string;
}): React.ReactElement {
  const groupsStore = useContext(GroupsContext).groupsStore;
  const group = groupsStore.activeGroup;

  return (
    <Layout>
      <SEO title={group?.name} />
      <TopNavigationBar />
      <div className="min-h-screen bg-gray-100">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <GroupPageHeader group={group} />
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
                <Feed />
              </main>
              <aside className="hidden md:block md:col-span-5 lg:col-span-4">
                <div className="sticky top-4 space-y-4">
                  <section aria-labelledby="who-to-follow-heading">
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
});
