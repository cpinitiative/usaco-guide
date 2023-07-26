import { navigate, PageProps } from 'gatsby';
import * as React from 'react';
import ProblemSolutions from '../components/ProblemSolutions';
import SubmitProblemSolutionModal from '../components/SubmitProblemSolutionModal';
import { ShortProblemInfo } from '../models/problem';

// Condensed version of ProblemInfo since

export default function Template(props) {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = React.useState(false);

  // problem isn't passed as type of ProblemInfo from gatsby-node,
  // but all this page's dependencies needs is the problem's name and uniqueId
  const problem: ShortProblemInfo = props.pageContext.problem;

  React.useEffect(() => {
    if (!problem) navigate('/', { replace: true });
  }, []);

  if (!problem) {
    return null;
  }

  const handleShowSubmitSolutionModal = () => {
    setIsSubmitModalOpen(true);
  };

  return (
    <>
      <ProblemSolutions
        showSubmitSolutionModal={handleShowSubmitSolutionModal}
        problem={problem}
      />
      <SubmitProblemSolutionModal
        problem={problem}
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </>
  );
}
