import { useProgressionMode } from '../../../context/UserDataContext/properties/simpleProperties';
import { OffsetAnchor } from '../HTMLComponents';
import { ProblemsList } from './ProblemsList';

export function ReviewProblems(): JSX.Element {
  const progressionMode = useProgressionMode();
  if (!progressionMode) return <></>;
  return (
    <>
      <h2 className="dark:text-dark-high-emphasis mt-12 mb-5 text-3xl leading-tight font-bold text-gray-700">
        <OffsetAnchor id="review" />
        <a
          aria-hidden="true"
          tabIndex={-1}
          className="anchor before"
          href="#review"
        >
          <svg
            fill="none"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            className="inline-block align-middle"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </a>
        Review
      </h2>
      <ProblemsList problems="review" review />
    </>
  );
}
