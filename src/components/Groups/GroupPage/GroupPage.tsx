import * as React from 'react';
import { useContext, useEffect } from 'react';
import { GroupsContext } from '../../../pages/groups';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Feed from './Feed';
import LeaderboardSidebar from './LeaderboardSidebar';
import { Link } from 'gatsby';
import { observer } from 'mobx-react-lite';

export default observer(function GroupPage(props: {
  path: string;
}): React.ReactElement {
  const { groupId } = props as { path: string; groupId: string };
  const groupsStore = useContext(GroupsContext);
  const group = groupsStore.activeGroup;

  useEffect(() => {
    groupsStore.loadCurrentGroup(groupId);
  }, []);

  return (
    <>
      <TopNavigationBar />
      <div className="min-h-screen bg-gray-100">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <header className="py-6 sm:py-12 bg-gradient-to-r from-light-blue-800 to-cyan-600">
          <div className="max-w-7xl px-4 sm:px-8 mx-auto">
            <h1 className="text-white text-xl sm:text-3xl font-bold">
              {group?.name ?? 'Loading...'}
            </h1>
            <p className="text-cyan-100 text-base sm:text-lg mt-2">
              {group?.detail}
            </p>
          </div>
        </header>
        <Link
          to="/leaderboard"
          className="md:hidden bg-white shadow flex items-center justify-between px-4 sm:px-8 py-3"
        >
          <span>View Leaderboard</span> &rarr;
        </Link>
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
      </div>
    </>
  );
});
