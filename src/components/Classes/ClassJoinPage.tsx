import * as React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from '../markdown/CodeBlock/CodeBlock';
import ReactDOMServer from 'react-dom/server';

import DynamicMarkdownRenderer from '../DynamicMarkdownRenderer';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { Link, navigate } from 'gatsby';
import * as Icons from 'heroicons-react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import ClassLayout from './ClassLayout';
import ClassContext from '../../context/ClassContext';
import ConfirmationModal from './ConfirmModal';
import FirebaseContext from '../../context/FirebaseContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
export default function AnnouncementPage(props: {
  path: string;
}): ReactElement {
  const { classId, announcementId } = props as {
    path: string;
    classId: string;
    announcementId: string;
  };
  const firebase = useContext(FirebaseContext);
  const { loading, error, data, isInstructor } = useContext(ClassContext);
  const { userClasses, setUserClasses, firebaseUser } = useContext(
    UserDataContext
  );
  const [joining, setJoining] = useState(false);

  const notFound = !loading && !data;

  if (loading || notFound || error) {
    return (
      <>
        <SEO title={loading ? 'Loading...' : '404 Not Found'} />
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
      <TopNavigationBar />
      <div className="bg-white lg:min-w-0 lg:flex-1">
        <div className="px-8 xl:px-16 pt-4 sm:pt-8 pb-4 xl:pt-10 text-center">
          {userClasses.findIndex(c => c.id === classId) !== -1 ? (
            <>
              <h1 className={'text-3xl font-bold leading-9'}>
                You're now enrolled in the class <b>{data.name}</b>
              </h1>
              <div className="mt-6">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    onClick={() => {
                      navigate(`/class/${classId}`);
                    }}
                    type="button"
                    className={
                      'inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150'
                    }
                  >
                    View Class
                  </button>
                </span>
              </div>
            </>
          ) : (
            <>
              <h1 className={'text-3xl font-bold leading-9'}>
                {firebaseUser ? 'Would you like' : 'Please login'} to join the
                class <b>Sunday Intermediate</b>
                {firebaseUser ? '?' : ''}
              </h1>
              {firebaseUser && (
                <div className={'mt-6'}>
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      onClick={() => {
                        setJoining(true);
                        setUserClasses([
                          ...userClasses,
                          {
                            id: classId,
                            name: data.name,
                          },
                        ]);
                      }}
                      type="button"
                      disabled={joining}
                      className={
                        'inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white ' +
                        (joining
                          ? 'bg-indigo-300'
                          : 'bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150')
                      }
                    >
                      {joining ? 'Joining...' : 'Join'}
                    </button>
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
