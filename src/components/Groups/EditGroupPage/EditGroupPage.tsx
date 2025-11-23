import { Link, navigate } from 'gatsby';
import React, { useReducer } from 'react';
import toast from 'react-hot-toast';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useGroupActions } from '../../../hooks/groups/useGroupActions';
import { GroupData } from '../../../models/groups/groups';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';

export default function EditGroupPage(props) {
  const { groupId } = props as {
    path: string;
    groupId: string;
  };
  const activeGroup = useActiveGroup();
  const originalGroup = activeGroup?.groupData;
  const [group, editGroup] = useReducer(
    (
      old: GroupData | undefined,
      updates: Partial<GroupData>
    ): GroupData | undefined => (old ? { ...old, ...updates } : undefined),
    originalGroup
  );
  const { deleteGroup, updateGroup } = useGroupActions();

  React.useEffect(() => {
    if (!group && originalGroup) editGroup(originalGroup);
  }, [originalGroup, group]);

  if (activeGroup.isLoading || !group) {
    return (
      <>
        <TopNavigationBar />
        <main className="py-10 text-center">
          <p className="text-2xl font-medium">Loading...</p>
        </main>
      </>
    );
  }

  const handleSave = () =>
    updateGroup(groupId, group).then(() => navigate('../', { replace: true }));

  return (
    <Layout>
      <SEO
        title={`Edit ${group?.name}`}
        image={undefined}
        pathname={undefined}
      />
      <TopNavigationBar />
      <nav className="mt-6 mb-4 flex" aria-label="Breadcrumb">
        <Breadcrumbs
          className="mx-auto w-full max-w-4xl px-4 pt-3 pb-4 sm:px-6 lg:px-8"
          group={activeGroup.groupData!}
        />
      </nav>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 dark:border-gray-700">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Edit Group: {group.name}
            </h1>
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0">
            <Link to="../" className="btn">
              <span>Back</span>
            </Link>
          </div>
        </div>
        <div className="h-6" />
        <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
          <div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="group_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Group Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="group_name"
                    id="group_name"
                    value={group.name}
                    onChange={e => editGroup({ name: e.target.value })}
                    className="input"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="group_description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Group Description
                </label>
                <div className="mt-1">
                  <textarea
                    name="group_description"
                    id="group_description"
                    rows={4}
                    value={group.description}
                    onChange={e => editGroup({ description: e.target.value })}
                    className="input"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => {
                  if (
                    confirm('Are you sure you want to delete this group?') &&
                    confirm(
                      'Are you REALLY sure? Posts and submissions will be permanently deleted.'
                    )
                  ) {
                    deleteGroup(groupId)
                      .then(() => navigate(`/groups/`, { replace: true }))
                      .catch(e => toast.error(e.message));
                  }
                }}
                className="dark:focus:ring-offset-dark-surface inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Delete Group
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="dark:focus:ring-offset-dark-surface inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="h-12" />
      </main>
    </Layout>
  );
}
