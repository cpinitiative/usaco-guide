import { Link, PageProps } from 'gatsby';
import * as React from 'react';
import SEO from '../seo';
import Layout from '../layout';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useContext, useState } from 'react';
import { navigate } from 'gatsby';
import FirebaseContext from '../../context/FirebaseContext';
export default function ClassSelectPage(props: { path: string }) {
  const { userClasses, setUserClasses, firebaseUser, isLoaded } = useContext(
    UserDataContext
  );

  const [instructors, setInstructors] = useState([]);
  const [creatingClass, setCreatingClass] = useState(false);
  const firebase = useContext(FirebaseContext);
  React.useEffect(() => {
    if (!firebase) return;
    firebase
      .firestore()
      .collection('classes')
      .doc('instructors')
      .get()
      .then(snapshot => snapshot.data())
      .then(data => setInstructors(data.instructors));
  }, [firebase]);

  if (!isLoaded) {
    return (
      <>
        <SEO title="Classes" />
        <TopNavigationBar hideClassesPromoBar />

        <h1 className="text-center mt-16 text-4xl sm:text-5xl font-black">
          Loading...
        </h1>
      </>
    );
  }
  return (
    <>
      <Layout>
        <TopNavigationBar hideClassesPromoBar />
        <SEO title={'Classes'} />
        <div className="px-10 pt-6">
          <h1 className="text-3xl font-bold leading-9 mb-2">My Classes</h1>
          {userClasses && userClasses.length === 0 && (
            <p>You aren't in any classes.</p>
          )}
          <ul className={'pt-4'}>
            {userClasses &&
              userClasses.map(registeredClass => (
                <li key={registeredClass.id}>
                  <Link
                    to={`/class/${registeredClass.id}`}
                    className={'text-blue-600 hover:underline'}
                  >
                    {registeredClass.name}
                  </Link>
                </li>
              ))}
            {firebaseUser && instructors?.indexOf(firebaseUser?.uid) > -1 && (
              <li>
                <button
                  onClick={() => {
                    setCreatingClass(true);
                    firebase
                      .firestore()
                      .collection('classes')
                      .add({
                        announcements: [],
                        assignments: [],
                        date: 'Placeholder Date',
                        name: 'Untitled Class',
                        instructors: [firebaseUser.uid],
                        instructorNames: [firebaseUser.displayName],
                      })
                      .then(ref => {
                        setUserClasses([
                          ...userClasses,
                          {
                            id: ref.id,
                            name: 'Untitled Class',
                          },
                        ]);
                        return navigate(`/class/${ref.id}`);
                      })
                      .catch(e => {
                        alert('Error: ' + e.message);
                        setCreatingClass(false);
                      });
                  }}
                  disabled={creatingClass}
                  className={
                    creatingClass
                      ? 'text-gray-800 dark:text-gray-200'
                      : 'text-blue-600 hover:underline focus:outline-none active:outline-none'
                  }
                >
                  {creatingClass ? 'Creating New Class...' : 'Create New Class'}
                </button>
              </li>
            )}
          </ul>
        </div>
      </Layout>
    </>
  );
}
