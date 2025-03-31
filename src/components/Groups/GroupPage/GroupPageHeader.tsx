import { Transition } from '@headlessui/react';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import { useRef, useState } from 'react';
import { useFirebaseUser } from '../../../context/UserDataContext/UserDataContext';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useGroupActions } from '../../../hooks/groups/useGroupActions';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { GroupData, isUserAdminOfGroup } from '../../../models/groups/groups';

export default function GroupPageHeader(props: { group: GroupData }) {
  const { leaveGroup } = useGroupActions();
  const { createNewPost } = usePostActions(props.group?.id);
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const { showAdminView, setInStudentView } = useActiveGroup();
  const firebaseUser = useFirebaseUser();
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = e => {
      if (ref.current?.contains(e.target)) return;
      setIsActionsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="bg-linear-to-r from-sky-800 to-cyan-600 py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-bold text-white sm:text-3xl">
            {props.group?.name ?? 'Loading...'}
          </h1>
          <p className="mt-2 text-base text-cyan-100 sm:text-lg">
            {props.group?.description}
          </p>
        </div>
        <div className="mt-4 text-right md:mt-0 md:ml-4">
          <div className="relative inline-block text-left" ref={ref}>
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-sky-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-900 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-sky-600 focus:outline-hidden"
                id="options-menu"
                onClick={() => setIsActionsOpen(!isActionsOpen)}
              >
                Actions
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <Transition
              as="div"
              show={isActionsOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {showAdminView && (
                  <>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                      onClick={() => {
                        const groupId = props.group?.id;
                        if (groupId) {
                          createNewPost('assignment').then(postId =>
                            navigate(`post/${postId}/edit`)
                          );
                        }
                      }}
                    >
                      Create New Assignment
                    </button>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                      onClick={() => {
                        const groupId = props.group?.id;
                        if (groupId) {
                          createNewPost('announcement').then(postId =>
                            navigate(`post/${postId}/edit`)
                          );
                        }
                      }}
                    >
                      Create New Announcement
                    </button>
                    <Link
                      to="edit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                    >
                      Edit Group
                    </Link>
                    <Link
                      to="join-links"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                    >
                      View Join Links
                    </Link>
                    <Link
                      to="members"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                    >
                      View Members
                    </Link>
                  </>
                )}
                {firebaseUser &&
                  isUserAdminOfGroup(props.group, firebaseUser.uid) && (
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                      onClick={() => {
                        setInStudentView(showAdminView);
                      }}
                    >
                      {showAdminView
                        ? 'Enter Student View'
                        : 'Exit Student View'}
                    </button>
                  )}
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                  onClick={() => {
                    const groupId = props.group?.id;
                    if (
                      groupId &&
                      confirm(
                        'Are you sure you want to leave this group? You will not be able to rejoin unless you are provided with another link.'
                      ) &&
                      prompt(
                        'Are you REALLY sure? Please type "Yes I am sure I want to leave"'
                      )!
                        .toLowerCase()
                        .indexOf('yes i am sure i want to leave') > -1
                    ) {
                      leaveGroup(groupId, firebaseUser!.uid)
                        .then(() => navigate(`/groups/`))
                        .catch(e => {
                          console.log(e);
                          alert('Error: ' + e.message);
                        });
                    }
                  }}
                >
                  Leave Group
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  );
}
