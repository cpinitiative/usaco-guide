import * as React from 'react';
import { useContext, useEffect } from 'react';
import { GroupsContext } from '../../../pages/groups';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Tabs from '../../Tabs';
import Feed from './Feed';
import LeaderboardSidebar from './LeaderboardSidebar';

export default function GroupPage(props: { path: string }): React.ReactElement {
  const { groupId } = props as { path: string; groupId: string };
  const groupsStore = useContext(GroupsContext);

  useEffect(() => {
    groupsStore.loadCurrentGroup(groupId);
  }, []);

  return (
    <>
      <TopNavigationBar />
      <div className="min-h-screen bg-gray-100">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <header className="py-12 bg-gradient-to-r from-light-blue-800 to-cyan-600">
          <div className="max-w-7xl px-8 mx-auto">
            <h1 className="text-white text-3xl font-bold">
              Monta Vista Competitive Programming Club
            </h1>
            <p className="text-cyan-100 text-lg mt-2">
              Meetings every Monday at 11:20am.
            </p>
          </div>
        </header>
        <div className="py-6">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <main className="lg:col-span-9 xl:col-span-8">
              <Feed />
            </main>
            <aside className="hidden xl:block xl:col-span-4">
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
}
