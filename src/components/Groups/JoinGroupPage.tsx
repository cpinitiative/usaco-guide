import * as React from 'react';
import { useContext, useEffect } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import Layout from '../layout';
import SEO from '../seo';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import useFirebase from '../../hooks/useFirebase';

const getQuery = name => {
  const url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const JoinGroupPage = () => {
  const { firebaseUser, isLoaded, signIn } = useContext(UserDataContext);

  const joinKey = typeof window === 'undefined' ? '' : getQuery('key');
  const firebase = useFirebase();
  const showNotSignedInMessage = isLoaded && !firebaseUser?.uid;
  const showLoading = !isLoaded;
  useEffect(() => {
    firebase
      .functions()
      .httpsCallable('getJoinKeyInfo')({
        key: joinKey,
      })
      .then((data: { name: string }) => {
        // TODO @nathan
      })
      .catch(e => {
        // TODO @nathan
        switch (e.code) {
          case 'INVALID_KEY':
            break;
          case 'KEY_NOT_FOUND':
            break;
          default:
            alert('Error:' + e.message);
        }
      });
  });
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
              onClick={() => {
                if (!firebase) {
                  alert('Please wait 10 seconds and try again.');
                }
                firebase
                  .functions()
                  .httpsCallable('joinGroup')({
                    key: joinKey,
                  })
                  .catch(e => {
                    // TODO @nathan (in case somebody used the last valid key use in between page load and clicking the button)
                    switch (e.code) {
                      case 'INVALID_KEY':
                        break;
                      case 'KEY_NOT_FOUND':
                        break;
                      default:
                        alert('Error:' + e.message);
                    }
                  });
              }}
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
