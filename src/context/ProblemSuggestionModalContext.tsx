import { createContext, useContext, useState } from 'react';
import * as React from 'react';
import { Problem, ProblemFeedback } from '../models/problem';
import useFirebase from '../hooks/useFirebase';
import UserDataContext from './UserDataContext/UserDataContext';
import ProblemSolutionsModal from '../components/ProblemSolutionsModal';
import SubmitProblemSolutionModal from '../components/SubmitProbemSolutionModal';
import ProblemSuggestionModal from '../components/ProblemSuggestionModal';

const ProblemSuggestionModalContext = createContext<{
  openProblemSuggestionModal: (tableProblems: Problem[]) => void;
}>({
  openProblemSuggestionModal: x => {},
});

export default ProblemSuggestionModalContext;

export const ProblemSuggestionModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tableProblems, setTableProblems] = useState<Problem[]>(null);
  const { firebaseUser } = useContext(UserDataContext);

  const openProblemSuggestionModal = (problems: Problem[]) => {
    if (!firebaseUser) {
      alert('You need to be signed in to suggest problems!');
      return;
    }
    setTableProblems(problems);
    setIsOpen(true);
  };

  React.useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <ProblemSuggestionModalContext.Provider
      value={{
        openProblemSuggestionModal,
      }}
    >
      {children}

      <ProblemSuggestionModal
        tableProblems={tableProblems}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </ProblemSuggestionModalContext.Provider>
  );
};
