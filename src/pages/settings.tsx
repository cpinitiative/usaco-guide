import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import UnderlinedTabs from '../components/elements/UnderlinedTabs';
import General from '../components/Settings/General';
import Language from '../components/Settings/Language';
import DarkMode from '../components/Settings/DarkMode';
import UserData from '../components/Settings/UserData';
import Profile from '../components/Settings/Profile';
import Authentication from '../components/Settings/Authentication';

/*
1. General

- Language
- Dark Mode / Hide difficulty + tags / Show ignored problems & modules on dashboard

2. Profile

- Name
- Photo
- Email

3. Authentication

- Github / Google
- Login / Logout

4. User Data

- Import / Export
 */

export default function SettingsPage() {
  const tabs = ['general', 'profile', 'auth', 'user-data'];
  const [tab, setTab] = React.useReducer((prev, next) => {
    location.replace('#' + next);
    return next;
  }, 'general');

  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash == '') return;
      const hash = window.location.hash.slice(1);
      if (tabs.includes(hash)) {
        setTab(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashChange', handleHashChange);
  }, []);

  return (
    <Layout>
      <SEO title="Settings" />

      <TopNavigationBar />

      <main>
        <div className="relative max-w-xl mx-auto md:px-8 xl:px-0">
          <div className="pt-10 sm:pt-16 pb-16">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                Settings
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                If you're signed in, settings sync across devices.
              </p>
            </div>
            <div className="px-4 sm:px-6 md:px-0">
              <div className="py-6">
                <UnderlinedTabs
                  options={tabs}
                  labelMap={{
                    general: 'General',
                    profile: 'Profile',
                    auth: 'Authentication',
                    'user-data': 'User Data',
                  }}
                  value={tab}
                  onChange={x => setTab(x)}
                />

                <div className="h-10" />

                <div className="space-y-10">
                  {tab === 'general' && (
                    <>
                      <Language />
                      <DarkMode />
                      <General />
                    </>
                  )}
                  {tab === 'profile' && (
                    <>
                      <Profile />
                    </>
                  )}
                  {tab === 'auth' && (
                    <>
                      <Authentication />
                    </>
                  )}
                  {tab === 'user-data' && (
                    <>
                      <UserData />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
