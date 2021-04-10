import { Link, navigate } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useUserPermissions } from '../../context/UserDataContext/UserPermissionsContext';
import { useGroupActions } from '../../hooks/groups/useGroupActions';
import { useUserGroups } from '../../hooks/groups/useUserGroups';
import Layout from '../layout';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';

const GroupSelectPage = (props: { path: string }) => {
  const { firebaseUser, isLoaded } = useContext(UserDataContext);
  const groups = useUserGroups();
  const { createNewGroup } = useGroupActions();
  const permissions = useUserPermissions();

  const showNotSignedInMessage = isLoaded && !firebaseUser?.uid;
  const showLoading = !showNotSignedInMessage && !groups.isSuccess;

  const handleCreateNewGroup = () => {
    createNewGroup().then(groupId => {
      navigate(`/groups/${groupId}/edit`);
    });
  };

  return (
    <Layout>
      <SEO title="My Groups" />
      <TopNavigationBar />
      <main>
        <div className="max-w-3xl px-2 sm:px-4 lg:px-8 mx-auto py-16">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-3xl font-bold">My Groups</h1>
            {permissions.canCreateGroups && (
              <button className="btn" onClick={handleCreateNewGroup}>
                Create New Group
              </button>
            )}
          </div>
          <hr className="mt-6 mb-8 dark:border-gray-700" />
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
            (groups.data?.length > 0 ? (
              groups.data.map(group => (
                <div key={group.id}>
                  <Link
                    to={`/groups/${group.id}/`}
                    className="text-blue-600 dark:text-blue-300 underline"
                  >
                    {group.name}
                  </Link>
                </div>
              ))
            ) : (
              <div>
                <p>
                  You aren't in any groups yet. To join a group, ask for a join
                  link from your club officer or class instructor.
                </p>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default GroupSelectPage;
