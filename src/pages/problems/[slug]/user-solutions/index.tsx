import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import ProblemSolutions from '../../../../components/ProblemSolutions';
import SubmitProblemSolutionModal from '../../../../components/SubmitProblemSolutionModal';
import { ShortProblemInfo } from '../../../../models/problem';

interface UserSolutionsProps {
  problem: ShortProblemInfo;
  modulesThatHaveProblem: { id: string; title: string }[];
}

export default function UserSolutionsTemplate({
  problem,
  modulesThatHaveProblem,
}: UserSolutionsProps) {
  const router = useRouter();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (!problem) router.push('/');
  }, []);

  if (!problem) return null;

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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { queryAllProblemIds, queryUsacoId } = await import(
      '../../../../lib/queryContent'
    );
    const div_to_probs = await import(
      '../../../../components/markdown/ProblemsList/DivisionList/div_to_probs.json'
    );
    const problemIds = await queryAllProblemIds();
    const paths = problemIds.map((id: string) => ({
      params: {
        slug: id,
      },
    }));
    const divisions = ['Bronze', 'Silver', 'Gold', 'Platinum'];
    for (const division of divisions) {
      for (const problem of div_to_probs[division]) {
        const uniqueId = 'usaco-' + problem[0];
        const exists = await queryUsacoId(uniqueId);
        if (!exists) {
          paths.push({
            params: {
              slug: uniqueId,
            },
          });
        }
      }
    }
    return { paths, fallback: false };
  } catch (error) {
    console.error('Error loading problem slugs:', error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async context => {
  try {
    const div_to_probs = await import(
      '../../../../components/markdown/ProblemsList/DivisionList/div_to_probs.json'
    );
    const { queryProblem, queryModuleIdAndTitleFromProblemBySolutionId } =
      await import('../../../../lib/queryContent');
    const { slug } = context.params as { slug: string };
    let problem: ShortProblemInfo | null = null;
    // Check if this is a USACO problem first
    if (slug.startsWith('usaco-')) {
      const divisions = ['Bronze', 'Silver', 'Gold', 'Platinum'];
      for (const division of divisions) {
        for (const problemEntry of div_to_probs[division]) {
          const uniqueId = 'usaco-' + problemEntry[0];
          if (uniqueId === slug) {
            problem = {
              uniqueId,
              name: problemEntry[2],
              url: '',
            };
            break;
          }
        }
        if (problem) break;
      }
    }
    // For non-USACO problems or if USACO problem wasn't found, query from database
    problem = problem ? problem : await queryProblem(slug);
    if (!problem) {
      console.error('Problem not found:', slug);
      return {
        notFound: true,
      };
    }
    const modulesThatHaveProblem: { id: string; title: string }[] =
      await queryModuleIdAndTitleFromProblemBySolutionId(problem.uniqueId);
    return {
      props: {
        problem,
        modulesThatHaveProblem,
      },
    };
  } catch (error) {
    console.error('Error loading problem slugs:', error);
    return {
      notFound: true,
    };
  }
};
