import * as React from 'react';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import Breadcrumbs from '../Breadcrumbs';
import { JoinGroupLink } from '../../../models/groups/groups';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import EditJoinLinkModal from './EditJoinLinkModal';
import useFirebase from '../../../hooks/useFirebase';

const JoinLinksPage = () => {
  const activeGroup = useActiveGroup();
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const { firebaseUser } = React.useContext(UserDataContext);
  const defaultNewLink: JoinGroupLink = {
    id: 'NBU4rtXQg9LvbLwZPsgI', // todo fix
    groupId: activeGroup.activeGroupId,
    revoked: false,
    numUses: 0,
    maxUses: null,
    expirationTime: null,
    usedBy: [],
    author: firebaseUser.uid,
  };
  const [curLink, setCurLink] = React.useState<JoinGroupLink>(null);
  const firebase = useFirebase();
  const handleSaveLink = async (link: JoinGroupLink): Promise<string> => {
    const collection = firebase.firestore().collection('group-join-links');

    if (link.id) {
      await collection.doc(link.id).set(link);
      return link.id;
    } else {
      const doc = await collection.add(link);
      return doc.id;
    }
  };

  if (!activeGroup.showAdminView) {
    return (
      <Layout>
        <SEO title="403 Forbidden" />
        <TopNavigationBar />
        <p className="text-center mt-12">
          You don&apos;t have permissions to access this page.
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={`Join Links: ${activeGroup.groupData.name}`} />
      <div className="bg-gray-100 min-h-screen">
        <TopNavigationBar />
        <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
          <Breadcrumbs
            className={`max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4`}
            group={activeGroup.groupData}
          />
        </nav>
        <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Join Links
                </h2>
              </div>
              <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => {
                    // todo: properly create a new link
                    setCurLink(defaultNewLink);
                    setIsEditOpen(true);
                  }}
                >
                  Create New Link
                </button>
              </div>
            </div>
          </div>
          <div className="h-4" />
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              <li>
                <a href="/" className="block hover:bg-gray-50">
                  <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div className="truncate">
                        <div className="flex text-sm">
                          <p className="font-medium text-blue-600 truncate">
                            NBU4rtXQg9LvbLwZPsgI
                          </p>
                          <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                            &middot; 6 Uses
                          </p>
                        </div>
                        <div className="mt-2 flex">
                          <div className="flex items-center text-sm text-gray-500">
                            {/* Heroicon name: solid/calendar */}
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
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
                              Expires <i>never</i>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                        <div className="flex overflow-hidden">
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixqx=Wq5TfXBKOq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="-ml-1 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="-ml-1 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixqx=Wq5TfXBKOq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="-ml-1 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=Wq5TfXBKOq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-5 flex-shrink-0">
                      {/* Heroicon name: solid/chevron-right */}
                      <svg
                        className="h-5 w-5 text-gray-400"
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
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>

      <EditJoinLinkModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={handleSaveLink}
        link={curLink}
      />
    </Layout>
  );
};

export default JoinLinksPage;
