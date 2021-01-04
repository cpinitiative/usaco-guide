import { createContext, useContext, useState } from 'react';
import * as React from 'react';
import ProblemFeedbackModal from '../components/ProblemFeedbackModal';
import { Problem, ProblemFeedback } from '../models/problem';
import useFirebase from '../hooks/useFirebase';
import UserDataContext from './UserDataContext/UserDataContext';

const ProblemFeedbackModalContext = createContext<{
  openProblemFeedbackModal: (problem: Problem) => void;
}>({
  openProblemFeedbackModal: x => {},
});

export default ProblemFeedbackModalContext;

export const ProblemFeedbackModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [problem, setProblem] = useState<Problem>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const firebase = useFirebase();
  const { firebaseUser } = useContext(UserDataContext);

  const openProblemFeedbackModal = (problem: Problem) => {
    setLoading(false);
    setShowSuccess(false);
    setProblem(problem);
    setIsOpen(true);
  };

  const handleSubmit = (feedback: ProblemFeedback) => {
    setLoading(true);

    let updates = [];
    updates.push(
      firebase
        .firestore()
        .collection('problemFeedback')
        .add({
          ...feedback,
          problemID: problem.uniqueID,
          userID: firebaseUser?.uid ?? null,
        })
    );

    if (feedback.solutionCode?.length > 0) {
      updates.push(
        firebase
          .firestore()
          .collection('problemSolutions')
          .doc(problem.firebaseUniqueID)
          .collection('solutions')
          .add({
            userID: firebaseUser?.uid ?? null,
            solutionCode: feedback.solutionCode,
            isPublic: feedback.isCodePublic,
          })
      );
    }

    Promise.all(updates).then(() => {
      setLoading(false);
      setShowSuccess(true);
    });
  };

  return (
    <ProblemFeedbackModalContext.Provider
      value={{
        openProblemFeedbackModal,
      }}
    >
      {children}

      <ProblemFeedbackModal
        problem={problem}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        loading={loading}
        showSuccess={showSuccess}
        onSubmit={handleSubmit}
      />
    </ProblemFeedbackModalContext.Provider>
  );
};
