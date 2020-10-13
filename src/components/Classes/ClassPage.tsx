import * as React from 'react';
import { Link, navigate } from 'gatsby';
import Layout from '../layout';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import * as Icons from 'heroicons-react';
import FirebaseContext from '../../context/FirebaseContext';
import { ReactElement, useContext, useState } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import moment from 'moment';
import firebaseType from 'firebase';
import ClassLayout from './ClassLayout';
import ClassContext from '../../context/ClassContext';
export default function ClassPage(props: { path: string }): ReactElement {
  const { classId } = props as { path: string; classId: string };
  const [teacherMode, setTeacherMode] = useState(true);
  const firebase = useContext(FirebaseContext);
  const { firebaseUser: user } = React.useContext(UserDataContext);
  const [showJoinCodes, setShowJoinCodes] = useState(false);
  const [creatingAssignment, setCreatingAssignment] = useState(false);

  const { loading, error, data } = useContext(ClassContext);

  const format = (timestamp: firebaseType.firestore.Timestamp) => {
    if (!timestamp) return;
    const date = moment(timestamp.toDate());
    const diff = date.diff(moment(), 'days');
    if (diff === 0) {
      return date.format('[Today,] h:mm A');
    } else if (diff === 1) {
      return date.format('[Tomorrow,] h:mm A');
    } else if (diff < 6) {
      return date.format('dddd, h:mm A');
    } else {
      return date.format('MMMM Do, h:mm A');
    }
  };
  if (loading || !data || error) {
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
              `${error.message} (If this was unexpected, please let us know via the contact us link in the top navbar).`
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
      <SEO title="Class" />
      <ClassLayout classId={classId} noWhiteBg>
        {/* Projects List */}
        <div className="bg-white lg:min-w-0 lg:flex-1">
          <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
            <div className="flex items-center">
              <h1 className="flex-1 text-lg leading-7 font-medium">
                Announcements and Class Notes
              </h1>
              {/*<div className="relative">*/}
              {/*<span className="rounded-md shadow-sm">*/}
              {/*  <button id="sort-menu" type="button"*/}
              {/*          className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"*/}
              {/*          aria-haspopup="true" aria-expanded="false">*/}
              {/*    /!* Heroicon name: sort-ascending *!/*/}
              {/*    <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">*/}
              {/*      <path*/}
              {/*        d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"/>*/}
              {/*    </svg>*/}
              {/*    Sort*/}
              {/*    /!* Heroicon name: chevron-down *!/*/}
              {/*    <svg className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">*/}
              {/*      <path fillRule="evenodd"*/}
              {/*            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
              {/*            clipRule="evenodd"/>*/}
              {/*    </svg>*/}
              {/*  </button>*/}
              {/*</span>*/}
              {/*  <div className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg">*/}
              {/*    <div className="rounded-md bg-white shadow-xs">*/}
              {/*      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">*/}
              {/*        <a href="/"*/}
              {/*           className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"*/}
              {/*           role="menuitem">Name</a>*/}
              {/*        <a href="/"*/}
              {/*           className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"*/}
              {/*           role="menuitem">Date modified</a>*/}
              {/*        <a href="/"*/}
              {/*           className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"*/}
              {/*           role="menuitem">Date created</a>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
          <ul className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
            {data?.announcements
              .filter(a => teacherMode || a.published)
              .sort((a, b) => /* DESC */ b.sort - a.sort)
              .map(announcement => (
                <li
                  key={announcement.id}
                  className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                >
                  <div className="flex items-center justify-between space-x-4">
                    {/* Repo name and link */}
                    <div className="min-w-0 space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="block">
                          <h2 className="text-sm font-medium leading-5">
                            <Link
                              to={`/class/${classId}/announcements/${announcement.id}`}
                            >
                              <span className="absolute inset-0"></span>
                              {announcement.title}
                            </Link>{' '}
                            {!announcement.published && (
                              <span className={'text-red-600'}>(Draft)</span>
                            )}
                          </h2>
                        </span>
                      </div>
                      <Link
                        to={`/class/${classId}/announcements/${announcement.id}`}
                        className="relative group flex items-center space-x-2.5"
                      >
                        <Icons.Calendar className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
                        <div className="text-sm leading-5 text-gray-500 group-hover:text-gray-900 font-medium truncate">
                          {announcement.published
                            ? format(announcement.date)
                            : 'Not Yet Published'}
                        </div>
                      </Link>
                    </div>
                    <div className="sm:hidden">
                      <Icons.ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                      <p className="flex items-center space-x-4">
                        <Link
                          to={`/class/${classId}/announcements/${announcement.id}`}
                          className="relative text-sm leading-5 text-gray-500 hover:text-gray-900 font-medium"
                        >
                          View
                        </Link>
                        {/*<button className="relative" type="button">*/}
                        {/*  /!* Heroicon name: star *!/*/}
                        {/*  <Icons.Star className="h-5 w-5 text-yellow-300 hover:text-yellow-400"/>*/}
                        {/*</button>*/}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {/* Activity feed */}
        <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
          <div className="pl-6 lg:w-80">
            <div className="pt-6 pb-2">
              <h2 className="text-sm leading-5 font-semibold">Homework</h2>
            </div>
            <div>
              <ul className="divide-y divide-gray-200">
                {data?.assignments
                  .filter(a => teacherMode || a.published)
                  .sort((a, b) => /* DESC */ b.sort - a.sort)
                  .map(assignment => (
                    <li key={assignment.id} className="py-4">
                      <Link
                        to={`/class/${classId}/assignments/${assignment.id}`}
                        className={'cursor-pointer'}
                      >
                        <div className="flex space-x-3">
                          <div className="flex-1 space-y-1">
                            <div className="">
                              <h3 className="text-sm font-medium leading-5">
                                {assignment.title}
                              </h3>
                            </div>
                            <p className="text-sm leading-5 text-gray-500">
                              Due {format(assignment.dueDate)}
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              3/5 Solved{/*TODO*/}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
              <div className="py-4 text-sm leading-5 border-t border-gray-200">
                <Link
                  to={`/class/${classId}/assignments`}
                  className="text-indigo-600 font-semibold hover:text-indigo-900"
                >
                  View Completed Homework &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ClassLayout>
    </>
  );
}
