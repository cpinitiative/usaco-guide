import { Link } from 'gatsby';
import * as React from 'react';
import getSuffix from './getSuffix';

const LinksToEdit = ({ className = null }) => {
  return (
    <Link
      to={`/editor/?filepath=${getSuffix()}`}
      target="_blank"
      className={className}
    >
      Edit this page
      <svg
        className="w-4 h-5 mb-1 ml-1 inline-block text-gray-400 group-hover:text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </Link>
  );
};

export default LinksToEdit;
