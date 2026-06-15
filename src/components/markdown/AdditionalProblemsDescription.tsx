import { useProgressionMode } from '../../context/UserDataContext/properties/simpleProperties';
import Asterisk from '../Tooltip/Asterisk';
import { OffsetAnchor } from './HTMLComponents';

export function AdditionalProblemsDescription(): JSX.Element {
  const progressionMode = useProgressionMode();
  return (
    <>
      <h2 className="dark:text-dark-high-emphasis mt-12 mb-5 text-3xl leading-tight font-bold text-gray-700">
        <OffsetAnchor id="problems" />
        <a
          aria-hidden="true"
          tabIndex={-1}
          className="anchor before"
          href="#problems"
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
        {progressionMode ? 'Mixed Practice' : 'Uncategorized Problems'}
      </h2>
      {progressionMode ? (
        <p>
          Below is a mix of problems that require one more or techniques from
          the previous modules in this section. Try to avoid looking at the
          tags, as determining how to approach a problem is one of the most
          important skills for success in contests.
        </p>
      ) : (
        <p>
          Below we list some problems that we think are roughly Bronze level but
          don't really fit in previous modules.
          <Asterisk>
            <>
              either because there were too many problems already, or because
              the problem requires more than one concept
            </>
          </Asterisk>{' '}
          The difficulties listed here are relative to the Bronze division
          (difficulty is subjective and isn't always accurate though). We'll be
          expanding this list as we get more problem suggestions.
        </p>
      )}
    </>
  );
}
