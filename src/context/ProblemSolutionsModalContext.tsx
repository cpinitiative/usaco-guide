import { createContext, useContext, useState } from 'react';
import * as React from 'react';
import { Problem, ProblemFeedback } from '../models/problem';
import useFirebase from '../hooks/useFirebase';
import UserDataContext from './UserDataContext/UserDataContext';
import ProblemSolutionsModal from '../components/ProblemSolutionsModal';

const ProblemSolutionsModalContext = createContext<{
  openProblemSolutionsModal: (problem: Problem) => void;
}>({
  openProblemSolutionsModal: x => {},
});

export default ProblemSolutionsModalContext;

export const ProblemSolutionsModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [problem, setProblem] = useState<Problem>(null);

  const openProblemFeedbackModal = (problem: Problem) => {
    setProblem(problem);
    setIsOpen(true);
  };

  return (
    <ProblemSolutionsModalContext.Provider
      value={{
        openProblemSolutionsModal: openProblemFeedbackModal,
      }}
    >
      {children}

      <ProblemSolutionsModal
        problem={problem}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </ProblemSolutionsModalContext.Provider>
  );
};
