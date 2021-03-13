import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import Layout from '../layout';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { useUserGroups } from '../../hooks/groups/useUserGroups';

const GroupSelectPage = (props: { path: string }) => {
  const { firebaseUser, isLoaded } = useContext(UserDataContext);
  const groups = useUserGroups();

  const showNotSignedInMessage = isLoaded && !firebaseUser?.uid;
  const showLoading = groups.isLoading || !isLoaded;

  return (
    <Layout>
      <SEO title="My Groups" />
      <TopNavigationBar />
      <main>
        <div className="max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto py-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-8">My Groups</h1>
          {showNotSignedInMessage && (
            <div>
              <p className="font-medium text-2xl">
                Please sign in to access Groups.
              </p>
            </div>
          )}

          {showLoading && (
            <div>
              <p className="font-medium text-2xl">Loading...</p>
            </div>
          )}
          {groups.isSuccess &&
            groups.data.map(group => (
              <div key={group.id}>
                <Link
                  to={`/groups/${group.id}/`}
                  className="text-blue-600 dark:text-blue-300 underline"
                >
                  {group.name}
                </Link>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default GroupSelectPage;
