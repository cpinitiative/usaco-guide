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
  const [isAdmin, setIsAdmin] = useState(false);
  const [creatingClass, setCreatingClass] = useState(false);
  const [otherClasses, setOtherClasses] = useState([]);
  const [addInstructorEmail, setAddInstructorEmail] = useState('');
  const [addInstructorLoading, setAddInstructorLoading] = useState(false);
  const [addInstructorError, setAddInstructorError] = useState('');
  const [addInstructorSuccessEmail, setAddInstructorSuccessEmail] = useState(
    ''
  );
  const [
    addInstructorSuccessMadeAdmin,
    setAddInstructorSuccessMadeAdmin,
  ] = useState(false);
  const [addInstructorAlsoMakeAdmin, setAddInstructorAlsoMakeAdmin] = useState(
    false
  );
  const firebase = useContext(FirebaseContext);
  React.useEffect(() => {
    if (!firebase || !firebaseUser) return;
    firebase
      .firestore()
      .collection('classes')
      .doc('permissions')
      .get()
      .then(snapshot => snapshot.data())
      .then(data => {
        setInstructors(data.instructors);

        setIsAdmin(data.admins?.includes(firebaseUser.uid));
      });
  }, [firebase, firebaseUser]);
  React.useEffect(() => {
    if (isAdmin) {
      firebase
        .firestore()
        .collection('classes')
        .get()
        .then(snapshot => {
          const tempClasses = [];
          snapshot.forEach(doc => {
            const data = doc.data();
            tempClasses.push({
              id: doc.id,
              name: doc.data().name || '',
            });
          });
          setOtherClasses(tempClasses);
        });
    }
  }, [isAdmin]);

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
        <div className="px-10 pt-6 max-w-4xl mx-auto">
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
          {isAdmin && (
            <div className={'mb-6'}>
              {/*<h1 className="text-3xl font-bold leading-9 mb-2 mt-8">*/}
              {/*  Other Classes (visible to administrators only)*/}
              {/*</h1>*/}

              {/*<ul className={'pt-4'}>*/}
              {/*  {otherClasses &&*/}
              {/*    otherClasses*/}
              {/*      .sort((a, b) => a.name.localeCompare(b.name))*/}
              {/*      .filter(*/}
              {/*        c => userClasses.findIndex(uc => uc.id === c.id) === -1*/}
              {/*      )*/}
              {/*      .map(otherClass => (*/}
              {/*        <li key={otherClass.id}>*/}
              {/*          <Link*/}
              {/*            to={`/class/${otherClass.id}`}*/}
              {/*            className={'text-blue-600 hover:underline'}*/}
              {/*          >*/}
              {/*            {otherClass.name}*/}
              {/*          </Link>*/}
              {/*        </li>*/}
              {/*      ))}*/}
              {/*</ul>*/}
              <h1 className="text-3xl font-bold leading-9 mb-2 mt-8">
                Add an Instructor
              </h1>
              <form
                onSubmit={e => {
                  if (addInstructorLoading) return;
                  e.preventDefault();
                  if (!firebase) {
                    setAddInstructorError(
                      'Too Fast! Please try again in 5 seconds.'
                    );
                    return;
                  }
                  const email = addInstructorEmail.trim();
                  const alsoMakeAdmin = addInstructorAlsoMakeAdmin;
                  setAddInstructorLoading(true);
                  setAddInstructorSuccessEmail('');
                  setAddInstructorError('');
                  const getUsers = firebase
                    .functions()
                    .httpsCallable('getUsers');
                  getUsers({
                    users: [
                      {
                        email,
                      },
                    ],
                  })
                    .then(d => {
                      console.log(d);
                      if (d?.data?.users?.length > 0) {
                        return firebase
                          .firestore()
                          .collection('classes')
                          .doc('permissions')
                          .update({
                            instructors: firebase.firestore.FieldValue.arrayUnion(
                              d.data.users[0].uid
                            ),
                            ...(alsoMakeAdmin
                              ? {
                                  admins: firebase.firestore.FieldValue.arrayUnion(
                                    d.data.users[0].uid
                                  ),
                                }
                              : {}),
                          })
                          .then(() => {
                            setAddInstructorSuccessEmail(email);
                            setAddInstructorSuccessMadeAdmin(alsoMakeAdmin);
                            setAddInstructorEmail('');
                            setAddInstructorAlsoMakeAdmin(false);
                          });
                      } else {
                        setAddInstructorError(
                          'No user was found with that email address.'
                        );
                        setAddInstructorAlsoMakeAdmin(false);
                      }
                    })
                    .then(() => setAddInstructorLoading(false));
                }}
              >
                {' '}
                {addInstructorError && (
                  <p className="text-red-700 mt-4">{addInstructorError}</p>
                )}
                {addInstructorSuccessEmail && (
                  <p className="text-green-700 mt-4">
                    <b>{addInstructorSuccessEmail}</b> is now an{' '}
                    {addInstructorSuccessMadeAdmin
                      ? 'instructor and administrator'
                      : 'instructor'}
                    .
                  </p>
                )}
                <div className="mt-3">
                  <label className="bold">Instructor's Email Address</label>
                  <input
                    type="email"
                    value={addInstructorEmail}
                    onChange={e => setAddInstructorEmail(e.target.value)}
                    disabled={addInstructorLoading}
                    className="font-bold form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                  />
                </div>
                <div className={'mt-2'}>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="add-instructor-also-make-admin"
                        disabled={addInstructorLoading}
                        checked={addInstructorAlsoMakeAdmin}
                        onChange={e =>
                          setAddInstructorAlsoMakeAdmin(e.target.checked)
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
                        Also make this user an administrator
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      type="submit"
                      disabled={addInstructorLoading}
                      className={
                        (addInstructorLoading ? 'bg-gray-300' : 'bg-white') +
                        ' inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                      }
                    >
                      {addInstructorLoading
                        ? 'Adding Instructor...'
                        : 'Add Instructor'}
                    </button>
                  </span>
                </div>
              </form>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
