import { navigate } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { useUserPermissions } from '../../../context/UserDataContext/UserPermissionsContext';
import { useGroupActions } from '../../../hooks/groups/useGroupActions';
import { useUserGroups } from '../../../hooks/groups/useUserGroups';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import AdminViewAllGroups from './AdminViewAllGroups';
import { GroupCard } from './GroupCard';

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
        <div className="max-w-3xl px-4 lg:px-8 mx-auto py-16">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-3xl font-bold">My Groups</h1>
            {permissions.canCreateGroups ? (
              <button className="btn" onClick={handleCreateNewGroup}>
                Create New Group
              </button>
            ) : (
              <a
                className="btn"
                href="https://docs.google.com/forms/d/e/1FAIpQLSemoYwALeum82x_emoZcliKgTiAjHJdJJVKJTkHIWgxp5NPag/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Request Access to Create Groups
              </a>
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
                <GroupCard key={group.id} group={group} />
              ))
            ) : (
              <div>
                <p>
                  You aren't in any groups yet. To join a group, ask for a join
                  link from your club officer or class instructor.
                </p>
              </div>
            ))}

          {permissions.isAdmin && (
            <>
              <div className="h-12"></div>
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl font-bold">
                  All Groups (Admin Only)
                </h1>
              </div>
              <hr className="mt-6 mb-8 dark:border-gray-700" />
              <AdminViewAllGroups />
            </>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default GroupSelectPage;
