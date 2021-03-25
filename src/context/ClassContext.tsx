import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import firebaseType from 'firebase';
import FirebaseContext from './FirebaseContext';
import UserDataContext from './UserDataContext/UserDataContext';
import { ProblemJSON } from '../components/Classes/PostPage';
import { UserLangAPI } from './UserDataContext/properties/userLang';
import { LastViewedModuleAPI } from './UserDataContext/properties/lastViewedModule';
import { LastReadAnnouncementAPI } from './UserDataContext/properties/lastReadAnnouncement';
import { UserProgressOnModulesAPI } from './UserDataContext/properties/userProgressOnModules';
import { UserProgressOnProblemsAPI } from './UserDataContext/properties/userProgressOnProblems';
import { LastVisitAPI } from './UserDataContext/properties/lastVisit';
import { UserClassesAPI } from './UserDataContext/properties/userClasses';
const ClassContext = createContext<{
  setClassId: null | ((newClassId: string) => void);
  loading: boolean;
  isInstructor: null | boolean;
  error:
    | false
    | {
        message?: string;
        code?: string;
      };
  students: {
    id: string;
    data: UserLangAPI &
      LastViewedModuleAPI &
      LastReadAnnouncementAPI &
      UserProgressOnModulesAPI &
      UserProgressOnProblemsAPI &
      LastVisitAPI &
      UserClassesAPI;
  }[];
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
    students: {
      id: string;
      name: string;
      email: string;
      // lastRefresh: firebaseType.firestore.Timestamp;
    }[];
    bannedStudentIds: string[];
  };
}>({
  loading: true,
  error: false,
  data: null,
  students: [],
  isInstructor: false,
  setClassId: null,
});

const ClassProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [data, setData] = useState(null);
  const [loadingClass, setLoadingClass] = useState(true);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [classId, setClassId] = useState('');
  const [isInstructor, setIsInstructor] = useState(false);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState<false | { message: string; code: string }>(
    false
  );
  const firebase = useContext(FirebaseContext);
  const { firebaseUser: user } = React.useContext(UserDataContext);
  useEffect(() => {
    if (!firebase) return;
    if (!classId) return;
    setLoadingClass(true);
    setError(false);
    if (classId === 'permissions') {
      setData(null);
      setLoadingClass(false);
      return;
    }
    const unsubscribeClass = firebase
      .firestore()
      .collection('classes')
      .doc(classId)
      .onSnapshot(
        snapshot => {
          const data = snapshot.data();
          setData(data);
          setLoadingClass(false);
        },
        error => {
          setLoadingClass(false);
          setError(error);
          console.log(error);
        }
      );

    return () => {
      unsubscribeClass();
    };
  }, [firebase, classId]);
  React.useEffect(() => {
    if (!user || !data) return;
    if (data.instructors) {
      setIsInstructor(data?.instructors.indexOf(user.uid) > -1);
    }
  }, [data, user?.uid]);
  React.useEffect(() => {
    if (!isInstructor || !firebase) return;
    const unsubscribeStudents = firebase
      .firestore()
      .collection('users')
      .where('userClassIds', 'array-contains', classId)
      .onSnapshot(
        snapshot => {
          const tempStudents = [];
          snapshot.forEach(function (doc) {
            tempStudents.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          console.log(tempStudents);
          setStudents(tempStudents);
          setLoadingStudents(false);
        },
        error => {
          setLoadingStudents(false);
          setError(error);
          console.log(error);
        }
      );

    return () => unsubscribeStudents();
  }, [isInstructor, firebase, classId]);
  return (
    <ClassContext.Provider
      value={{
        data,
        loading: loadingClass || (isInstructor && loadingStudents),
        error,
        setClassId,
        isInstructor,
        students,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export default ClassContext;
export { ClassProvider };
