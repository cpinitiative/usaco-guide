import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import ProblemSolutions from '../components/ProblemSolutions';
import SubmitProblemSolutionModal from '../components/SubmitProblemSolutionModal';
import { ShortProblemInfo } from '../models/problem';
import { removeDuplicates } from '../utils/utils';

// Condensed version of ProblemInfo since

export default function Template(props) {
  const { allProblemInfo } = props.data;
  const [isSubmitModalOpen, setIsSubmitModalOpen] = React.useState(false);

  // problem isn't passed as type of ProblemInfo from gatsby-node,
  // but all this page's dependencies needs is the problem's name and uniqueId
  const problem: ShortProblemInfo = props.pageContext.problem;
  const modulesThatHaveProblem: { id: string; title: string }[] =
    removeDuplicates(
      allProblemInfo.edges
        .filter(x => !!x.node.module)
        .map(x => x.node.module.frontmatter)
    );

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
        modulesThatHaveProblem={modulesThatHaveProblem}
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

export const pageQuery = graphql`
  query ($id: String!) {
    allProblemInfo: allProblemInfo(filter: { uniqueId: { eq: $id } }) {
      edges {
        node {
          module {
            frontmatter {
              id
              title
            }
          }
        }
      }
    }
  }
`;
