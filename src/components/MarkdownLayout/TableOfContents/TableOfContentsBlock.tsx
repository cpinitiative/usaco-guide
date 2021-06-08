import * as React from 'react';
import { TOCHeading } from '../../../models/module';
import genLinksFromTOCHeadings from './genLinksFromTOCHeadings';

const TableOfContentsBlock = ({
  tableOfContents,
}: {
  tableOfContents: TOCHeading[];
}) => {
  const links = genLinksFromTOCHeadings(
    tableOfContents,
    _ =>
      'block mb-2 transition text-gray-600 dark:text-dark-med-emphasis hover:underline hover:text-blue-600 dark:hover:text-dark-high-emphasis'
  );
  return (
    <div>
      {tableOfContents.length > 1 && (
        <>
          <h2 className="uppercase text-gray-500 dark:text-dark-high-emphasis font-bold mt-8 mb-3 tracking-wider">
            Table of Contents
          </h2>
          {links}
        </>
      )}
      <hr className="my-6 dark:border-gray-700" />

      {/* <OutboundLink
        href="https://www.reddit.com/r/usaco/"
        target="_blank"
        className="mt-1 group block transition text-gray-600 hover:underline hover:text-blue-600 dark:text-dark-med-emphasis"
      >
        Need help? Ask on Reddit!
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
      </OutboundLink> */}
    </div>
  );
};

export default TableOfContentsBlock;
