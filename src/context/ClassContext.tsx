import React, { ReactElement, ReactNode, useContext, useState } from 'react';
import firebaseType from 'firebase';
import FirebaseContext from './FirebaseContext';
import UserDataContext from './UserDataContext/UserDataContext';
import { ProblemJSON } from '../components/Classes/PostPage';
const ClassContext = React.createContext<{
  setClassId: null | ((newClassId: string) => void);
  loading: boolean;
  isInstructor: null | boolean;
  error:
    | false
    | {
        message?: string;
        code?: string;
      };
  data: null | {
    announcements: {
      date: firebaseType.firestore.Timestamp;
      id: string;
      published: boolean;
      sort: number;
      title: string;
      content: string;
    }[];
    assignments: {
      dueDate?: firebaseType.firestore.Timestamp;
      id: string;
      published: boolean;
      title: string;
      content: string;
      problems: ProblemJSON[];
    }[];
    date: string;
    instructorNames: string[];
    instructors: string[];
    joinCodes: string[];
    name: string;
  };
}>({
  loading: true,
  error: false,
  data: null,

  isInstructor: false,
  setClassId: null,
});

const ClassProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [classId, setClassId] = React.useState('');
  const [isInstructor, setIsInstructor] = useState(false);
  const [error, setError] = React.useState<
    false | { message: string; code: string }
  >(false);
  const firebase = useContext(FirebaseContext);
  const { firebaseUser: user } = React.useContext(UserDataContext);
  React.useEffect(() => {
    if (!firebase) return;
    if (!classId) return;
    setLoading(true);
    setError(false);
    if (classId === 'instructors') {
      setData(null);
      setLoading(false);
      return;
    }
    const unsubscribe = firebase
      .firestore()
      .collection('classes')
      .doc(classId)
      .onSnapshot(
        snapshot => {
          const data = snapshot.data();
          setData(data);
          setLoading(false);
        },
        error => {
          setLoading(false);
          setError(error);
          console.log(error);
        }
      );

    return () => unsubscribe();
  }, [firebase, classId]);
  React.useEffect(() => {
    if (!user || !data) return;
    if (data.instructors) {
      setIsInstructor(data?.instructors.indexOf(user.uid) > -1);
    }
  }, [data, user?.uid]);
  return (
    <ClassContext.Provider
      value={{
        data,
        loading,
        error,
        setClassId,
        isInstructor,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export default ClassContext;
export { ClassProvider };
