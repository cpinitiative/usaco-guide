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
  const [curLink, setCurLink] = React.useState<JoinGroupLink | null>(null);
  const { createJoinLink, updateJoinLink } = useGroupActions();
  const joinLinks = useGroupJoinLinks(activeGroup.activeGroupId!);

  if (!activeGroup.showAdminView) {
    return (
      <Layout>
        <SEO
          title="403 Forbidden"
          image={null}
          pathname={window.location.pathname}
        />
        <TopNavigationBar />
        <p className="mt-12 text-center">
          You don't have permission to access this page.
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`Join Links: ${activeGroup.groupData!.name}`}
        image={null}
        pathname={window.location.pathname}
      />
      <div className="dark:bg-dark-surface min-h-screen bg-gray-100">
        <TopNavigationBar />
        <nav className="mt-6 mb-4 flex" aria-label="Breadcrumb">
          <Breadcrumbs
            className={`mx-auto w-full max-w-2xl px-4 pt-3 pb-4 sm:px-6 lg:px-8`}
            group={activeGroup.groupData!}
          />
        </nav>
        <main className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl leading-7 font-bold text-gray-900 sm:truncate sm:text-3xl dark:text-gray-100">
                  Join Links
                </h2>
              </div>
              <div className="mt-4 flex shrink-0 md:mt-0 md:ml-4">
                <button
                  type="button"
                  className="btn"
                  onClick={async () => {
                    const link = await createJoinLink(
                      activeGroup.activeGroupId!
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
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-md dark:bg-gray-900">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {joinLinks?.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setCurLink(link);
                      setIsEditOpen(true);
                    }}
                    className="block w-full hover:bg-gray-50 focus:outline-hidden dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="truncate">
                          <div className="flex text-sm">
                            <p className="truncate font-medium text-blue-600 dark:text-blue-300">
                              {link.id}
                            </p>
                            <p className="ml-1 shrink-0 font-normal text-gray-500 dark:text-gray-400">
                              · {link.numUses} Uses
                              {link.revoked && ` · REVOKED`}
                            </p>
                          </div>
                          <div className="mt-2 flex">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              {/* Heroicon name: solid/calendar */}
                              <svg
                                className="mr-1.5 h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
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
                                  <UserIcon className="mr-1.5 h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
                                  <p>
                                    {link.author.replace('REGISTRATION_', '')}
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="ml-5 shrink-0">
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
        onSave={link => link && updateJoinLink(link.id, link)}
        link={curLink!}
      />
    </Layout>
  );
};

export default JoinLinksPage;
