import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { Link, navigate } from 'gatsby';
import * as Icons from 'heroicons-react';
import DynamicMarkdownRenderer from '../DynamicMarkdownRenderer';
import * as React from 'react';
import { useContext, useState } from 'react';
import SEO from '../seo';
import FirebaseContext from '../../context/FirebaseContext';
import ClassContext from '../../context/ClassContext';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import ModuleConfetti from '../MarkdownLayout/ModuleConfetti';
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

  const { loading, error, data, isInstructor } = useContext(ClassContext);
  const [showJoinCodes, setShowJoinCodes] = useState(false);
  const [joinLinkCopied, setJoinLinkCopied] = useState(false);
  const [creatingAssignment, setCreatingAssignment] = useState(false);
  const [creatingAnnouncement, setCreatingAnnouncement] = useState(false);
  const notFound = !loading && !data;
  React.useEffect(() => {
    if (!joinLinkCopied) return;
    const timeout = setTimeout(() => setJoinLinkCopied(false), 1000);
    return () => clearTimeout(timeout);
  }, [joinLinkCopied]);
  if (loading || notFound || error || showNotFound) {
    return (
      <>
        <SEO title="404 Not Found" />
        <TopNavigationBar />

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
      <div className="fixed top-0 left-0 w-1/2 h-full bg-white"></div>
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"></div>
      <div
        className={
          'relative min-h-screen flex flex-col ' + (noWhiteBg ? '' : 'bg-white')
        }
      >
        <TopNavigationBar hideClassesPromoBar />
        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 bg-white xl:flex">
            {/* Account profile */}
            <div className="xl:flex-shrink-0 xl:w-80 border-b xl:border-b-0 xl:border-r border-gray-200 bg-white">
              <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-8">
                    <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                      {/* Profile */}
                      <div className="flex items-center space-x-3">
                        <div className="space-y-1">
                          <Link to={`/class/${classId}`}>
                            <h1 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 hover:text-gray-600">
                              {data?.name}
                            </h1>
                          </Link>
                          <h2 className="text-small leading-3 font-medium tracking-tight text-gray-900">
                            {data?.date}
                          </h2>
                          <h4 className="text-sm leading-9 text-gray-500 group-hover:text-gray-900 font-medium">
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
                              disabled={creatingAnnouncement}
                              onClick={async () => {
                                if (!firebase) return;
                                setCreatingAnnouncement(true);
                                const ref = firebase
                                  .firestore()
                                  .collection('classes-beta')
                                  .doc(classId)
                                  .collection('announcements')
                                  .doc();
                                const id = ref.id;
                                await firebase
                                  .firestore()
                                  .collection('classes-beta')
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
                                'w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 ' +
                                (creatingAnnouncement
                                  ? 'bg-gray-300'
                                  : 'bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150')
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
                                  .collection('classes-beta')
                                  .doc(classId)
                                  .collection('assignments')
                                  .doc();
                                const id = ref.id;
                                await firebase
                                  .firestore()
                                  .collection('classes-beta')
                                  .doc(classId)
                                  .update({
                                    assignments: firebase.firestore.FieldValue.arrayUnion(
                                      {
                                        id,
                                        published: false,
                                        sort: data.assignments.length,
                                        title: 'Untitled Assignment',
                                        content: '',
                                        problems: [
                                          {
                                            moduleId: 'id',
                                            moduleTitle: 'MDSFIOU',
                                            division: 'gold',
                                            source: 'Gold',
                                            name: 'one',
                                            id: '647',
                                            difficulty: 'Easy',
                                            starred: false,
                                            tags: ['Range DP'],
                                            solID: null,
                                            solQuality: 'ok',
                                            url:
                                              'http://www.usaco.org/index.php?page=viewproblem2&cpid=647',
                                            uniqueID:
                                              'http://www.usaco.org/index.php?page=viewproblem2&cpid=647',
                                          },
                                          {
                                            moduleId: 'id',
                                            moduleTitle: 'MDSFIOU',
                                            division: 'gold',
                                            source: 'Gold',
                                            name: 'two',
                                            id: '6247',
                                            difficulty: 'Easy',
                                            starred: false,
                                            tags: ['Range DP'],
                                            solID: null,
                                            solQuality: 'ok',
                                            url:
                                              'http://www.usaco.org/index.php?page=viewproblem2&cpid=647',
                                            uniqueID:
                                              'http://www.usaco.3org/index.php?page=viewproblem2&cpid=647',
                                          },
                                          {
                                            moduleId: 'id',
                                            moduleTitle: 'MDSFIOU',
                                            division: 'gold',
                                            source: 'Gold',
                                            name: 'three',
                                            id: '6437',
                                            difficulty: 'Easy',
                                            starred: false,
                                            tags: ['Range DP'],
                                            solID: null,
                                            solQuality: 'ok',
                                            url:
                                              'http://www.usaco.org/index.php?page=viewproblem2&cpid=647',
                                            uniqueID:
                                              'http://www.usa3co.org/index.php?page=viewproblem2&cpid=647',
                                          },
                                          {
                                            moduleId: 'id',
                                            moduleTitle: 'MDSFIOU',
                                            division: 'gold',
                                            source: 'Gold',
                                            name: 'four',
                                            id: '64457',
                                            difficulty: 'Easy',
                                            starred: false,
                                            tags: ['Range DP'],
                                            solID: null,
                                            solQuality: 'ok',
                                            url:
                                              'http://www.usaco.org/index.php?page=viewproblem2&cpid=647',
                                            uniqueID:
                                              'http://www.usaco.or2g/index.php?page=viewproblem2&cpid=647',
                                          },
                                        ],
                                      }
                                    ),
                                  });
                                navigate(`/class/${classId}/assignments/${id}`);
                                setCreatingAssignment(false);
                              }}
                              className={
                                'w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 ' +
                                (creatingAssignment
                                  ? 'bg-gray-300'
                                  : 'bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150')
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
                          <Icons.Mail className="h-5 w-5 text-gray-400" />

                          <span className="text-sm text-gray-500 leading-5 font-medium">
                            <span className="font-bold">Class Join Link:</span>{' '}
                            <a
                              className={
                                'cursor-pointer text-blue-600 hover:underline active:text-blue-900'
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
                              {joinLinkCopied ? 'Copied!' : 'Copy To Clipboard'}
                            </a>
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
        </div>
      </div>
    </>
  );
}
