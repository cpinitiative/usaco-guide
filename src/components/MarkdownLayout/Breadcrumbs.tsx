import { Link } from 'gatsby';
import * as React from 'react';
import { SECTION_LABELS } from '../../../content/ordering';
import { useMarkdownLayout } from '../../context/MarkdownLayoutContext';
import { SolutionInfo } from '../../models/solution';

const Breadcrumbs = () => {
  const moduleLayoutInfo = useMarkdownLayout();
  const module = moduleLayoutInfo.markdownLayoutInfo;
  if (module instanceof SolutionInfo) return null;
  return (
    <nav className="dark:text-dark-med-emphasis flex flex-wrap items-center text-sm leading-loose font-medium text-gray-500">
      <Link
        to="/dashboard/"
        className="dark:hover:text-dark-high-emphasis transition hover:text-gray-700"
      >
        Home
      </Link>
      <svg
        className="mx-2 h-5 w-5 shrink-0 text-gray-400"
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
        className="dark:hover:text-dark-high-emphasis transition hover:text-gray-700"
      >
        {SECTION_LABELS[module.section]}
      </Link>
      <svg
        className="mx-2 h-5 w-5 shrink-0 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="whitespace-nowrap">{module.title}</span>
    </nav>
  );
};

export default Breadcrumbs;
