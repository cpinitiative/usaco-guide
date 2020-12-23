import { createContext, useState } from 'react';
import * as React from 'react';
import ProblemFeedbackModal from '../components/ProblemFeedbackModal';
import { Problem } from '../models/problem';

const ProblemFeedbackModalContext = createContext<{
  openProblemFeedbackModal: (problem: Problem) => void;
}>({
  openProblemFeedbackModal: x => {},
});

export default ProblemFeedbackModalContext;

export const ProblemFeedbackModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [problem, setProblem] = useState<Problem>(null);

  const openProblemFeedbackModal = (problem: Problem) => {
    setIsOpen(true);
    setProblem(problem);
  };

  const handleSubmit = feedback => {
    console.log(feedback);
    setIsOpen(false);
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
        onSubmit={handleSubmit}
      />
    </ProblemFeedbackModalContext.Provider>
  );
};
