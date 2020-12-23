import { createContext, useState } from 'react';
import * as React from 'react';
import ProblemFeedbackModal from '../components/ProblemFeedbackModal';
import { Problem } from '../models/problem';
import useFirebase from '../hooks/useFirebase';

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

  const openProblemFeedbackModal = (problem: Problem) => {
    setLoading(false);
    setShowSuccess(false);
    setProblem(problem);
    setIsOpen(true);
  };

  const handleSubmit = feedback => {
    setLoading(true);
    firebase
      .firestore()
      .collection('problemFeedback')
      .add(feedback)
      .then(() => {
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
