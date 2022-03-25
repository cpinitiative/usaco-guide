import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ClipboardListIcon } from '@heroicons/react/outline';
import { BookmarkIcon } from '@heroicons/react/solid';
import {
  arrayUnion,
  collection,
  CollectionReference,
  doc,
  getFirestore,
  onSnapshot,
  query,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import { Link } from 'gatsby';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { useUserGroups } from '../../../hooks/groups/useUserGroups';
import { useFirebaseApp } from '../../../hooks/useFirebase';
import { GroupData } from '../../../models/groups/groups';
import {
  getPostTimestampString,
  getTotalPointsOfPost,
  PostData,
} from '../../../models/groups/posts';
import { GroupProblemData } from '../../../models/groups/problem';
import Tooltip from '../../Tooltip/Tooltip';

const AnnouncementIcon = () => {
  return (
    <div className="bg-light-blue-700 rounded-full p-2 inline-flex items-center justify-center">
      <svg
        className="h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    </div>
  );
};

const AssignmentIcon = ({ pointsEarned, totalPoints }) => {
  const fullySolved = pointsEarned === totalPoints && totalPoints > 0;
  const inProgress = !fullySolved && pointsEarned > 0;
  return (
    <Tooltip content={`${pointsEarned} / ${totalPoints} points earned`}>
      <div
        className={
          (fullySolved
            ? 'bg-green-600'
            : inProgress
            ? 'bg-orange-600'
            : 'bg-light-blue-700') +
          ' rounded-full p-2 inline-flex items-center justify-center'
        }
      >
        {fullySolved ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : (
          <ClipboardListIcon className="h-6 w-6 text-white" />
        )}
      </div>
    </Tooltip>
  );
};

export default function FeedItem({
  group,
  post,
  userPoints,
  dragHandle,
  isBeingDragged = false,
}: {
  group: GroupData;
  post: PostData;
  userPoints: number | null;
  dragHandle?: JSX.Element;
  /**
   * If true, the feed item will be grayed out to show that it's being dragged
   */
  isBeingDragged?: boolean;
}): JSX.Element {
  const { showAdminView } = useActiveGroup();
  const firebaseApp = useFirebaseApp();
  const q = query(
    collection(
      getFirestore(firebaseApp),
      'groups',
      group.id,
      'posts',
      post.id,
      'problems'
    ) as CollectionReference<GroupProblemData>
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(q, {
      next: snap => {
        setProblems(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      },
      error: error => {
        toast.error(error.message);
      },
    });
    return () => unsubscribe();
  }, []);

  const { updatePost, deletePost } = usePostActions(group.id);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const { firebaseUser, isLoaded } = useContext(UserDataContext);
  const groups = useUserGroups();
  const [problems, setProblems] = React.useState<GroupProblemData[]>([]);
  const ref = React.useRef<HTMLDivElement>();

  const [groupsUsedMap, setGroupsUsedMap] = useState(new Map());

  function handleGroupExportChange(g: GroupData) {
    console.log(g.name);
    if (groupsUsedMap.has(g.id)) {
      setGroupsUsedMap(
        new Map(
          groupsUsedMap.set(g.id, new MapData(!groupsUsedMap.get(g.id).used, g))
        )
      );
      console.log(groupsUsedMap.get(g.id).used);
    } else {
      setGroupsUsedMap(new Map(groupsUsedMap.set(g.id, new MapData(true, g))));
      console.log(groupsUsedMap.get(g.id).used);
    }
    console.log(groupsUsedMap.size);
  }

  async function exportSelectedPosts() {
    const type = post.type;
    const defaultPost: Omit<PostData, 'timestamp'> = {
      name: post.name,
      isPublished: post.isPublished,
      isPinned: post.isPinned,
      body: post.body,
      isDeleted: post.isDeleted,
      type,
      pointsPerProblem: post.pointsPerProblem,
      problemOrdering: post.problemOrdering,
      ...(type === 'announcement'
        ? {}
        : {
            dueTimestamp: null,
          }),
    };

    console.log(groupsUsedMap.size);
    groupsUsedMap.forEach((value: MapData, key: string) => {
      if (value.used) {
        const firestore = getFirestore(firebaseApp);
        const batch = writeBatch(firestore);
        const docRef = doc(
          collection(getFirestore(firebaseApp), 'groups', key, 'posts')
        );

        batch.set(docRef, { ...defaultPost, timestamp: serverTimestamp() });
        batch.update(doc(firestore, 'groups', key), {
          postOrdering: arrayUnion(docRef.id),
        });
        batch.commit();
        // if(post.type != 'announcement') {

        console.log('Problem load ' + problems.length);
        const batch2 = writeBatch(firestore);
        problems.map(async problem => {
          const docRef2 = doc(
            collection(
              getFirestore(firebaseApp),
              'groups',
              key,
              'posts',
              docRef.id,
              'problems'
            )
          );

          problem.id = docRef2.id;
          problem.isDeleted = false;
          problem.postId = docRef.id;

          batch2.set(docRef2, { ...(problem as any) });
          batch2.update(
            doc(getFirestore(firebaseApp), 'groups', key, 'posts', docRef.id),
            {
              [`pointsPerProblem.${docRef2.id}`]: problem.points,
              [`problemOrdering`]: arrayUnion(docRef2.id),
            }
          );
          console.log(problem);
        });
        batch2.commit();
      }
    });

    setShowExportModal(false);
  }

  React.useEffect(() => {
    const handleClick = e => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      className={`${
        isBeingDragged
          ? 'bg-gray-200 dark:bg-gray-900'
          : 'bg-white dark:bg-gray-800 hover:bg-cyan-50 dark:hover:bg-cyan-900'
      } shadow ${
        dragHandle ? 'pr-4 sm:pr-6' : 'px-4 sm:px-6'
      } sm:rounded-lg transition flex`}
    >
      {dragHandle}
      <div className="flex flex-1">
        <Link
          to={`/groups/${group.id}/post/${post.id}`}
          className="flex flex-1 space-x-4"
        >
          <div className="flex-shrink-0 self-center">
            {post.type === 'announcement' ? (
              <AnnouncementIcon />
            ) : (
              <AssignmentIcon
                pointsEarned={userPoints ?? 0}
                totalPoints={getTotalPointsOfPost(post)}
              />
            )}
          </div>
          <div className="min-w-0 flex-1 py-4 sm:py-5">
            <h2
              id="question-title-81614"
              className="text-base font-medium text-gray-900 dark:text-gray-100 flex items-center"
            >
              {post.name}
              {post.isPublished ? '' : ' (Unpublished)'}
              {post.isPinned && (
                <BookmarkIcon className="ml-1 h-5 w-5 text-gray-300 dark:text-gray-500" />
              )}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {getPostTimestampString(post)}
            </p>
          </div>
        </Link>
        {showAdminView && (
          <div className="flex-shrink-0 self-center flex">
            <div className="relative inline-block text-left" ref={ref}>
              <button
                type="button"
                className="pl-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none"
                id="options-menu-0"
                onClick={e => {
                  setShowDropdown(!showDropdown);
                  e.preventDefault();
                }}
              >
                <span className="sr-only">Open options</span>
                {/* Heroicon name: solid/dots-vertical */}
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>

              <Transition
                show={showDropdown}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu-0"
              >
                <div className="py-1">
                  {/* Pinning is no longer needed now that posts can be reordered easily */}
                  {/* <button
                    type="button"
                    onClick={() =>
                      updatePost(post.id, { isPinned: !post.isPinned })
                    }
                    className="w-full flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <BookmarkIcon className="mr-3 h-5 w-5 text-gray-400" />
                    <span>{post.isPinned ? 'Unpin Post' : 'Pin Post'}</span>
                  </button> */}
                  <button
                    type="button"
                    onClick={() =>
                      updatePost(post.id, { isPublished: !post.isPublished })
                    }
                    className="w-full flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                    <span>
                      {post.isPublished ? 'Unpublish Post' : 'Publish Post'}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        confirm('Are you sure you want to delete this post?')
                      ) {
                        deletePost(post.id).catch(e => toast.error(e.message));
                      }
                    }}
                    className="w-full flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span>Delete Post</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowExportModal(true);
                      console.log('toggled');
                    }}
                    className="w-full flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>Export Post</span>
                  </button>
                </div>
              </Transition>

              <Transition
                show={showExportModal}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu-0"
              >
                <Dialog
                  as="div"
                  className="fixed z-10 inset-0 overflow-y-auto"
                  onClose={() => setShowExportModal(false)}
                >
                  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="hidden sm:inline-block sm:align-middle sm:h-screen"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            {/*<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-400 sm:mx-0 sm:h-10 sm:w-10">*/}
                            {/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">*/}
                            {/*    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />*/}
                            {/*  </svg>*/}
                            {/*</div>*/}
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <Dialog.Title
                                as="h3"
                                className="text-lg leading-6 font-medium text-gray-900"
                              >
                                Export Post
                              </Dialog.Title>
                              <div className="mt-2 text-gray-500">
                                Please select the groups you would like to
                                export this assignment to.
                                <div className="block">
                                  {groups.isSuccess &&
                                    (groups.data?.length > 0 ? (
                                      groups.data.map(group =>
                                        // group.ownerIds.includes(firebaseUser.uid)
                                        group.ownerIds.includes(
                                          firebaseUser.uid
                                        ) ? (
                                          <div key={group.id}>
                                            <label className="inline-flex items-center">
                                              <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                onChange={() =>
                                                  handleGroupExportChange(group)
                                                }
                                              />
                                              <span className="ml-2 text-gray-500">
                                                {group.name}
                                              </span>
                                            </label>
                                          </div>
                                        ) : null
                                      )
                                    ) : (
                                      <div>
                                        <p>
                                          You aren't in an admin in any groups
                                          yet!
                                        </p>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => exportSelectedPosts()}
                          >
                            Export
                          </button>
                          <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setShowExportModal(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export class MapData {
  constructor(b: boolean, g: GroupData) {
    this.used = b;
    this.group = g;
  }
  used: boolean;
  group: GroupData;
}
