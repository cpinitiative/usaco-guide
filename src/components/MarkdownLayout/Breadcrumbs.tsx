import { useContext } from 'react';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import { SolutionInfo } from '../../models/solution';
import { Link } from 'gatsby';
import { SECTION_LABELS } from '../../../content/ordering';
import * as React from 'react';

const Breadcrumbs = () => {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  const module = moduleLayoutInfo.markdownLayoutInfo;
  if (module instanceof SolutionInfo) return null;
  return (
    <nav className="flex flex-wrap items-center text-sm leading-loose font-medium text-gray-500 dark:text-dark-med-emphasis">
      <Link
        to="/dashboard/"
        className="hover:text-gray-700 dark-hover:text-dark-high-emphasis transition duration-150 ease-in-out"
      >
        Home
      </Link>
      <svg
        className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <Link
        to={`/${module.section}/`}
        className="hover:text-gray-700 dark-hover:text-dark-high-emphasis transition duration-150 ease-in-out"
      >
        {SECTION_LABELS[module.section]}
      </Link>
      <svg
        className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="whitespace-no-wrap">{module.title}</span>
    </nav>
  );
};

export default Breadcrumbs;
