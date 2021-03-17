import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import Layout from '../layout';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';

const getQuery = name => {
  var url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const JoinGroupPage = () => {
  const { firebaseUser, isLoaded, signIn } = useContext(UserDataContext);

  const joinKey = typeof window === 'undefined' ? null : getQuery('key');

  const showNotSignedInMessage = isLoaded && !firebaseUser?.uid;
  const showLoading = !isLoaded;

  return (
    <Layout>
      <SEO title="Join Group" />
      <TopNavigationBar />
      <main>
        <div className="max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto py-16">
          {showNotSignedInMessage && (
            <div>
              <p className="font-medium text-2xl text-center">
                Please{' '}
                <button
                  className="focus:outline-none underline text-blue-600"
                  onClick={() => signIn()}
                >
                  sign in
                </button>{' '}
                to access Groups.
              </p>
            </div>
          )}

          {showLoading && (
            <div>
              <p className="font-medium text-2xl text-center">Loading...</p>
            </div>
          )}

          <p className="text-center text-lg sm:text-2xl">
            Do you want to join the group{' '}
            <span className="font-bold">CPI Beginner Class</span>?
          </p>

          <div className="mt-8 text-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join Group
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default JoinGroupPage;
