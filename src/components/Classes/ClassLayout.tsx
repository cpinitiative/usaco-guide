import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { Link, navigate } from 'gatsby';
import * as Icons from 'heroicons-react';
import DynamicMarkdownRenderer from '../DynamicMarkdownRenderer';
import * as React from 'react';
import { useContext, useMemo, useState } from 'react';
import SEO from '../seo';
import FirebaseContext from '../../context/FirebaseContext';
import ClassContext from '../../context/ClassContext';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import ModuleConfetti from '../MarkdownLayout/ModuleConfetti';
import Transition from './TailwindTransition';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
export default function ClassLayout({
  children,
  classId,
  showNotFound,
  noWhiteBg,
}: {
  children: React.ReactNode;
  classId: string;
  showNotFound?: boolean;
  noWhiteBg?: boolean;
}) {
  const firebase = useContext(FirebaseContext);
  const {
    userClasses,
    setUserClasses,
    userClassIds,
    firebaseUser,
    isLoaded: userDataLoaded,
  } = useContext(UserDataContext);
  const {
    loading: classLoading,
    error,
    data,
    students,
    isInstructor,
  } = useContext(ClassContext);
  const loading = classLoading || !userDataLoaded;
  const [changingJoinLinkStatus, setChangingJoinLinkStatus] = useState(false);
  const [joinLinkCopied, setJoinLinkCopied] = useState(false);

  const [creatingAssignment, setCreatingAssignment] = useState(false);
  const [creatingAnnouncement, setCreatingAnnouncement] = useState(false);

  const [showEditClass, setShowEditClass] = useState(false);
  const [editClassSubmitting, setEditClassSubmitting] = useState(false);
  const [editClassError, setEditClassError] = useState('');
  const [editClassTitle, setEditClassTitle] = useState('');
  const [editClassDate, setEditClassDate] = useState('');

  const [showMembersModal, setShowMembersModal] = useState(false);
  const [membersModalShowEmail, setMembersModalShowEmail] = useState(false);

  const [studentNames, setStudentNames] = useState([]);
  React.useEffect(() => {
    if (!joinLinkCopied) return;
    const timeout = setTimeout(() => setJoinLinkCopied(false), 1000);
    return () => clearTimeout(timeout);
  }, [joinLinkCopied]);

  React.useEffect(() => {
    if (!data || !data.name || !userClasses) return;
    if (
      userClasses.find(c => c.id === classId)?.name &&
      userClasses.find(c => c.id === classId).name !== data.name
    ) {
      setUserClasses(
        userClasses.map(c => (c.id === classId ? { ...c, name: data.name } : c))
      );
    }
  }, [data?.name, userClasses]);

  const refreshStudentNames = React.useCallback(() => {
    if (!firebase) {
      setStudentNames([
        <ul className={'text-red-700'} key={'error-no-firebase'}>
          Error: Too Fast! Please try again in a few seconds.
        </ul>,
      ]);
      return;
    }

    if (students.length === 0) {
      setStudentNames([
        <ul className={'text-red-700'} key={'error-no-students'}>
          Error: Unable to Load Students
        </ul>,
      ]);
      return;
    }
    setStudentNames([]);
    const getUsers = firebase.functions().httpsCallable('getUsers');
    getUsers({
      users: students.map(student => ({
        uid: student.id,
      })),
    }).then(d => {
      if (d?.data?.users?.length > 0) {
        console.log(d.data.users);
        setStudentNames(
          d.data.users
            .sort((a, b) => a.displayName.localeCompare(b.displayName))
            .map(student => ({
              uid: student.uid,
              email: student.email,
              name: student.displayName,
              isCurrentUser: student.uid === firebaseUser.uid,
              isInstructor: data.instructors.includes(student.uid),
            }))
        );
      } else {
        setStudentNames([
          <ul className={'text-red-700'} key={'error-no-student-names'}>
            Error: Unable to Load Student Names
          </ul>,
        ]);
      }
    });
  }, [firebase, students, data]);

  const notFound = !loading && !data;
  if (
    loading ||
    notFound ||
    error ||
    showNotFound ||
    (!isInstructor &&
      !userClasses?.some((c: { id: string }) => c.id === classId) &&
      !userClassIds?.includes(classId))
  ) {
    return (
      <>
        <SEO title={loading ? 'Loading...' : '404 Not Found'} />

        <TopNavigationBar hideClassesPromoBar />

        <h1 className="text-center mt-16 text-4xl sm:text-5xl font-black">
          {loading
            ? 'Loading...'
            : error
            ? 'An Error Occurred'
            : '404 Not Found'}
        </h1>
        {!loading && (
          <p className="text-center mt-4">
            {error ? (
              `${error.message} (If this was unexpected, please let us know via the contact us link in the top navbar.`
            ) : (
              <Link to="/" className="text-xl text-blue-600">
                Return Home
              </Link>
            )}
          </p>
        )}
      </>
    );
  }

  return (
    <>
      {/* Background color split screen for large screens */}
      <div className="fixed top-0 left-0 w-1/2 h-full bg-white dark:bg-dark-surface"></div>
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50 dark:bg-gray-800"></div>
      <div
        className={
          'relative min-h-screen flex flex-col ' +
          (noWhiteBg ? '' : 'bg-white dark:bg-dark-surface')
        }
      >
        <TopNavigationBar hideClassesPromoBar />
        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 bg-white dark:bg-dark-surface xl:flex">
            {/* Account profile */}
            <div className="xl:flex-shrink-0 xl:w-80 border-b xl:border-b-0 xl:border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-surface">
              <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-8">
                    <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                      {/* Profile */}
                      <div className="flex items-center space-x-3">
                        <div className="space-y-1">
                          <Link to={`/class/${classId}`}>
                            <h1 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">
                              {data?.name}
                            </h1>
                          </Link>
                          <h2 className="text-small leading-3 font-medium tracking-tight text-gray-900 dark:text-gray-100">
                            {data?.date}
                          </h2>
                          <h4 className="text-sm leading-9 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-100 font-medium">
                            {data?.instructorNames.join(', ')}
                          </h4>
                        </div>
                      </div>
                      {/* Action buttons */}
                      {isInstructor && (
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row xl:flex-col xl:space-x-0 xl:space-y-3">
                          <span className="inline-flex rounded-md shadow-sm">
                            <button
                              type="button"
                              onClick={() => {
                                setEditClassTitle(data.name);
                                setEditClassDate(data.date);
                                setShowEditClass(true);
                              }}
                              className={
                                'w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150'
                              }
                            >
                              Edit Class Details
                            </button>
                          </span>
                          <span className="inline-flex rounded-md shadow-sm">
                            <button
                              type="button"
                              disabled={creatingAnnouncement}
                              onClick={async () => {
                                if (!firebase) return;
                                setCreatingAnnouncement(true);
                                const ref = firebase
                                  .firestore()
                                  .collection('classes')
                                  .doc(classId)
                                  .collection('announcements')
                                  .doc();
                                const id = ref.id;
                                await firebase
                                  .firestore()
                                  .collection('classes')
                                  .doc(classId)
                                  .update({
                                    announcements: firebase.firestore.FieldValue.arrayUnion(
                                      {
                                        id,
                                        published: false,
                                        sort: data.announcements.length,
                                        title: 'Untitled Announcement',
                                        content: '',
                                      }
                                    ),
                                  });
                                navigate(
                                  `/class/${classId}/announcements/${id}`
                                );
                                setCreatingAnnouncement(false);
                              }}
                              className={
                                'w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-300 ' +
                                (creatingAnnouncement
                                  ? 'bg-gray-300 dark:bg-gray-600'
                                  : 'bg-white dark:bg-gray-900 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150')
                              }
                            >
                              {creatingAnnouncement
                                ? 'Creating Announcement...'
                                : 'New Announcement'}
                            </button>
                          </span>
                          <span className="inline-flex rounded-md shadow-sm">
                            <button
                              type="button"
                              disabled={creatingAssignment}
                              onClick={async () => {
                                if (!firebase) return;
                                setCreatingAssignment(true);
                                const ref = firebase
                                  .firestore()
                                  .collection('classes')
                                  .doc(classId)
                                  .collection('assignments')
                                  .doc();
                                const id = ref.id;
                                await firebase
                                  .firestore()
                                  .collection('classes')
                                  .doc(classId)
                                  .update({
                                    assignments: firebase.firestore.FieldValue.arrayUnion(
                                      {
                                        id,
                                        published: false,
                                        sort: data.assignments.length,
                                        title: 'Untitled Assignment',
                                        content: '',
                                        problems: [],
                                      }
                                    ),
                                  });
                                navigate(`/class/${classId}/assignments/${id}`);
                                setCreatingAssignment(false);
                              }}
                              className={
                                'w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm leading-5 font-medium rounded-md text-gray-700 dark:text-gray-300 ' +
                                (creatingAssignment
                                  ? 'bg-gray-300 dark:bg-gray-600'
                                  : 'bg-white dark:bg-gray-900 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150')
                              }
                            >
                              {creatingAssignment
                                ? 'Creating Assignment...'
                                : 'New Assignment'}
                            </button>
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Meta info */}
                    {/*<div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">*/}
                    {/*  <div className="flex items-center space-x-2">*/}
                    {/*    /!* Heroicon name: badge-check *!/*/}
                    {/*    <Icons.Calendar className="h-5 w-5 text-gray-400" />*/}

                    {/*    <span className="text-sm text-gray-500 leading-5 font-medium">*/}
                    {/*      Wednesdays*/}
                    {/*    </span>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    {isInstructor && (
                      <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                        <div className="flex items-center space-x-2">
                          <Icons.UserGroup className="h-5 w-5 text-gray-400" />

                          <button
                            onClick={() => {
                              setShowMembersModal(true);

                              refreshStudentNames();
                            }}
                            className="text-sm text-gray-500 hover:text-gray-700 leading-5 font-medium"
                          >
                            <span className="font-bold">
                              {students.length} Member
                              {students.length !== 1 && 's'}
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                    {isInstructor && (
                      <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                        <div className="flex items-center space-x-2">
                          <Icons.Mail className="h-5 w-5 text-gray-400" />

                          <span className="text-sm text-gray-500 leading-5 font-medium">
                            <span className="font-bold">Class Join Link:</span>{' '}
                            {!data?.studentsCanJoin ? (
                              <a
                                className={
                                  'cursor-pointer text-blue-600 dark:text-blue-400 hover:underline active:text-blue-900 dark:active:text-blue-700'
                                }
                                onClick={async e => {
                                  e.preventDefault();
                                  if (!firebase) return;
                                  setChangingJoinLinkStatus(true);
                                  await firebase
                                    .firestore()
                                    .collection('classes')
                                    .doc(classId)
                                    .update({
                                      studentsCanJoin: true,
                                    });
                                  setChangingJoinLinkStatus(false);
                                }}
                              >
                                {changingJoinLinkStatus
                                  ? 'Enabling Join Link...'
                                  : 'Enable Join Link'}
                              </a>
                            ) : (
                              <>
                                <a
                                  className={
                                    'cursor-pointer text-blue-600 dark:text-blue-400 hover:underline active:text-blue-900 dark:active:text-blue-700'
                                  }
                                  onClick={e => {
                                    e.preventDefault();
                                    navigator.clipboard
                                      .writeText(
                                        `https://usaco.guide/class/${classId}/join`
                                      )
                                      .then(() => {
                                        setJoinLinkCopied(true);
                                      });
                                  }}
                                >
                                  {joinLinkCopied ? 'Copied!' : 'Copy'}
                                </a>{' '}
                                (
                                <a
                                  className={
                                    'cursor-pointer text-blue-600 dark:text-blue-400 hover:underline active:text-blue-900 dark:active:text-blue-700'
                                  }
                                  onClick={async e => {
                                    e.preventDefault();
                                    if (!firebase) return;
                                    setChangingJoinLinkStatus(true);
                                    await firebase
                                      .firestore()
                                      .collection('classes')
                                      .doc(classId)
                                      .update({
                                        studentsCanJoin: false,
                                      });
                                    setChangingJoinLinkStatus(false);
                                  }}
                                >
                                  {changingJoinLinkStatus
                                    ? 'Disabling...'
                                    : 'Disable'}
                                </a>
                                )
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
          <Transition show={showMembersModal}>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                </Transition>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                &#8203;
                <Transition
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="text-center sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                            id="modal-headline"
                          >
                            {students.length} Class Member
                            {students.length !== 1 && 's'}{' '}
                          </h3>
                          <div className="mt-2">
                            {studentNames.length > 0 ? (
                              <>
                                <span className="inline-flex rounded-md shadow-sm">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-800 text-base leading-6 font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                    onClick={() => refreshStudentNames()}
                                  >
                                    Refresh Names
                                  </button>
                                </span>
                                <div className="flex items-start my-3">
                                  <div className="flex items-center h-5">
                                    <input
                                      id="add-instructor-also-make-admin"
                                      checked={membersModalShowEmail}
                                      onChange={e =>
                                        setMembersModalShowEmail(
                                          e.target.checked
                                        )
                                      }
                                      type="checkbox"
                                      className="form-checkbox h-4 w-4 text-indigo-600 transition"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm leading-5">
                                    <label
                                      htmlFor="add-instructor-also-make-admin"
                                      className="font-medium text-gray-700 dark:text-gray-300"
                                    >
                                      Show Emails
                                    </label>
                                  </div>
                                </div>
                                <ul className={'list-disc ml-5'}>
                                  {studentNames.map(
                                    ({
                                      uid,
                                      name,
                                      email,
                                      isCurrentUser,
                                      isInstructor,
                                    }) => (
                                      <li key={uid}>
                                        {name}{' '}
                                        {membersModalShowEmail && (
                                          <span
                                            className={
                                              'text-gray-700 dark:text-gray-300'
                                            }
                                          >
                                            ({email})
                                          </span>
                                        )}{' '}
                                        {isCurrentUser && <b>(You)</b>}{' '}
                                        {isInstructor && <b>(Instructor)</b>}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </>
                            ) : (
                              <p>Loading...</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-600">
                      <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                        <button
                          type="button"
                          onClick={() => setShowMembersModal(false)}
                          className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 bg-white dark:bg-gray-800 text-base leading-6 font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        >
                          Close
                        </button>
                      </span>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </Transition>
          <Transition show={showEditClass}>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                </Transition>
                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                &#8203;
                <Transition
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div
                    className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
                    <div className="text-left sm:mt-0 dark:text-gray-100">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                        id="modal-headline"
                      >
                        Edit Class Details
                      </h3>
                    </div>
                    <div className={'w-full mt-3'}>
                      <label className="bold">Class Name</label>
                      <input
                        type="text"
                        placeholder={'Enter a name...'}
                        value={editClassTitle}
                        onChange={e => setEditClassTitle(e.target.value)}
                        disabled={editClassSubmitting}
                        className="form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                      />
                      <div className="mt-3">
                        <label className="bold">Class Date (optional)</label>
                        <input
                          type="text"
                          placeholder={'e.g. Saturdays 9AM'}
                          value={editClassDate}
                          onChange={e => setEditClassDate(e.target.value)}
                          disabled={editClassSubmitting}
                          className="form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                        />
                      </div>
                      {editClassError && (
                        <p className="text-red-700 mt-4">{editClassError}</p>
                      )}
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button
                          type="button"
                          onClick={() => {
                            if (!firebase) return;
                            setEditClassError('');
                            if (!editClassTitle.replace(/\s/g, '')) {
                              setEditClassError('You must enter a title.');
                              return;
                            }
                            setEditClassSubmitting(true);

                            firebase
                              .firestore()
                              .collection('classes')
                              .doc(classId)
                              .update({
                                name: editClassTitle,
                                date: editClassDate,
                              })
                              .then(() => {
                                setEditClassSubmitting(false);
                                setShowEditClass(false);
                              })
                              .catch(e => {
                                setEditClassSubmitting(false);
                                setEditClassError(
                                  'An error occurred: ' + e.message
                                );
                              });
                          }}
                          className={
                            'inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm sm:text-sm sm:leading-5 ' +
                            (editClassSubmitting
                              ? 'bg-purple-300'
                              : 'bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150')
                          }
                        >
                          {editClassSubmitting ? 'Saving...' : 'Save'}
                        </button>
                      </span>
                      <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                        <button
                          onClick={() => setShowEditClass(false)}
                          type="button"
                          className="bg-white inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        >
                          Cancel
                        </button>
                      </span>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
