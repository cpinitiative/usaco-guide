import * as React from 'react';
import { useContext, useEffect } from 'react';
import { GroupsContext } from '../../pages/groups';
import { observer } from 'mobx-react-lite';
import { Link } from 'gatsby';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import Layout from '../layout';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { useUserGroups } from '../../hooks/groups/useUserGroups';

const GroupSelectPage = observer((props: { path: string }) => {
  const { firebaseUser } = useContext(UserDataContext);
  const groups = useUserGroups(firebaseUser?.uid);

  return (
    <Layout>
      <SEO title="My Groups" />
      <TopNavigationBar />
      <main>
        <div className="max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto py-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-8">My Groups</h1>
          {!firebaseUser?.uid && (
            <div>
              <p className="font-medium text-2xl">
                Please sign in to access Groups.
              </p>
            </div>
          )}

          {groups.isLoading && (
            <div>
              <p className="font-medium text-2xl">Loading...</p>
            </div>
          )}
          {groups.isSuccess &&
            groups.data.map(group => (
              <div key={group.id}>
                <Link
                  to={`/groups/${group.id}/`}
                  className="text-blue-600 underline"
                >
                  {group.name}
                </Link>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
});

export default GroupSelectPage;
