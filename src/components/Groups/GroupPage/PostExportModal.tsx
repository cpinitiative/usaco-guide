import { Dialog, Transition } from '@headlessui/react';
import {
  arrayUnion,
  collection,
  CollectionReference,
  doc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import React, { Fragment, useContext, useState } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { useUserGroups } from '../../../hooks/groups/useUserGroups';
import { useFirebaseApp } from '../../../hooks/useFirebase';
import { GroupData } from '../../../models/groups/groups';
import { PostData } from '../../../models/groups/posts';
import { GroupProblemData } from '../../../models/groups/problem';

export default function PostExportModal(props: {
  showExportModal: boolean;
  onClose;
  post: PostData;
  group: GroupData;
}) {
  const firebaseApp = useFirebaseApp();
  const { firebaseUser, isLoaded } = useContext(UserDataContext);
  const groups = useUserGroups();
  const [problems, setProblems] = React.useState<GroupProblemData[]>([]);
  const [groupsUsedMap, setGroupsUsedMap] = useState(new Map());

  async function handleGroupExportChange(g: GroupData) {
    const q = query(
      collection(
        getFirestore(firebaseApp),
        'groups',
        props.group.id,
        'posts',
        props.post.id,
        'problems'
      ) as CollectionReference<GroupProblemData>
    );

    const snap = await getDocs(q);
    setProblems(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

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
    console.log('cont');
    console.log(problems);
    const type = props.post.type;
    const defaultPost: Omit<PostData, 'timestamp'> = {
      name: props.post.name,
      isPublished: props.post.isPublished,
      isPinned: props.post.isPinned,
      body: props.post.body,
      isDeleted: props.post.isDeleted,
      type,
      pointsPerProblem: props.post.pointsPerProblem,
      problemOrdering: props.post.problemOrdering,
      ...(type === 'announcement'
        ? {}
        : {
            dueTimestamp: null,
          }),
    };

    console.log('gm ' + groupsUsedMap.size);
    console.log('Problem load ' + problems.length);
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

          batch.set(docRef2, { ...(problem as any) });
          batch.update(
            doc(getFirestore(firebaseApp), 'groups', key, 'posts', docRef.id),
            {
              [`pointsPerProblem.${docRef2.id}`]: problem.points,
              [`problemOrdering`]: arrayUnion(docRef2.id),
            }
          );
          console.log(problem);
        });
        batch.commit();
      }
    });
    props.onClose();
  }

  return (
    <Transition
      show={props.showExportModal}
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
        onClose={() => props.onClose()}
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
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Export Post
                    </Dialog.Title>
                    <div className="mt-2 text-gray-500">
                      Please select the groups you would like to export this
                      assignment to.
                      <div className="block">
                        {groups.isSuccess &&
                          (groups.data?.length > 0 ? (
                            groups.data.map(group =>
                              // group.ownerIds.includes(firebaseUser.uid)
                              group.ownerIds.includes(firebaseUser.uid) ? (
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
                              <p>You aren't in an admin in any groups yet!</p>
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
                  onClick={() => props.onClose()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
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
