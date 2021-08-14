import { UserIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useGroupActions } from '../../../hooks/groups/useGroupActions';
import useGroupJoinLinks from '../../../hooks/groups/useGroupJoinLinks';
import { JoinGroupLink } from '../../../models/groups/groups';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import EditJoinLinkModal from './EditJoinLinkModal';

const JoinLinksPage = () => {
  const activeGroup = useActiveGroup();

  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [curLink, setCurLink] = React.useState<JoinGroupLink>(null);
  const { createJoinLink, updateJoinLink } = useGroupActions();
  const joinLinks = useGroupJoinLinks(activeGroup.activeGroupId);

  if (!activeGroup.showAdminView) {
    return (
      <Layout>
        <SEO title="403 Forbidden" />
        <TopNavigationBar />
        <p className="text-center mt-12">
          You don't have permissions to access this page.
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={`Join Links: ${activeGroup.groupData.name}`} />
      <div className="bg-gray-100 dark:bg-dark-surface min-h-screen">
        <TopNavigationBar />
        <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
          <Breadcrumbs
            className={`max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4`}
            group={activeGroup.groupData}
          />
        </nav>
        <main className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:truncate">
                  Join Links
                </h2>
              </div>
              <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                <button
                  type="button"
                  className="btn"
                  onClick={async () => {
                    const link = await createJoinLink(
                      activeGroup.activeGroupId
                    );
                    setCurLink(link);
                    setIsEditOpen(true);
                  }}
                >
                  Create New Link
                </button>
              </div>
            </div>
          </div>
          <div className="h-4" />
          <div className="bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {joinLinks?.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setCurLink(link);
                      setIsEditOpen(true);
                    }}
                    className="focus:outline-none block hover:bg-gray-50 dark:hover:bg-gray-800 w-full"
                  >
                    <div className="px-4 py-4 flex items-center sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="truncate">
                          <div className="flex text-sm">
                            <p className="font-medium text-blue-600 dark:text-blue-300 truncate">
                              {link.id}
                            </p>
                            <p className="ml-1 flex-shrink-0 font-normal text-gray-500 dark:text-gray-400">
                              · {link.numUses} Uses
                              {link.revoked && ` · REVOKED`}
                            </p>
                          </div>
                          <div className="mt-2 flex">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              {/* Heroicon name: solid/calendar */}
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <p>
                                Expires{' '}
                                <i>
                                  {link.expirationTime
                                    ? link.expirationTime
                                        .toDate()
                                        .toString()
                                        .substr(0, 33)
                                    : 'never'}
                                </i>
                              </p>
                            </div>
                            {link.author.startsWith('REGISTRATION_') && (
                              <>
                                <span className="mx-2">&middot;</span>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                  <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                  <p>
                                    {link.author.replace('REGISTRATION_', '')}
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="ml-5 flex-shrink-0">
                        {/* Heroicon name: solid/chevron-right */}
                        <svg
                          className="h-5 w-5 text-gray-400 dark:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>

      <EditJoinLinkModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={link => updateJoinLink(link.id, link)}
        link={curLink}
      />
    </Layout>
  );
};

export default JoinLinksPage;
