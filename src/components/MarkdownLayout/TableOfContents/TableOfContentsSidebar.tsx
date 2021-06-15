import * as React from 'react';
import { useMemo } from 'react';
import { useActiveHash } from '../../../hooks/useActiveHash';
import { TOCHeading } from '../../../models/module';
import genLinksFromTOCHeadings from './genLinksFromTOCHeadings';

const TableOfContentsSidebar = ({
  tableOfContents,
}: {
  tableOfContents: TOCHeading[];
}) => {
  const hashes = useMemo(() => tableOfContents.map(heading => heading.slug), [
    tableOfContents,
  ]);
  const activeHash = useActiveHash(hashes, '10px 0px 0px 0px');

  const getLinkStyles = heading =>
    'block mb-1 text-sm transition ' +
    (activeHash === heading.slug
      ? 'underline text-blue-600 dark:text-dark-high-emphasis'
      : 'text-gray-600 hover:underline hover:text-blue-600 dark:text-dark-med-emphasis');
  const links = genLinksFromTOCHeadings(tableOfContents, getLinkStyles);

  return (
    <div className="sticky" style={{ top: '2.5rem' }}>
      <h2 className="uppercase text-gray-500 dark:text-dark-med-emphasis font-bold mb-4 text-sm tracking-wider">
        Table of Contents
      </h2>
      {links}

      {/* <OutboundLink
        href="https://www.reddit.com/r/usaco/"
        target="_blank"
        className="group block mt-2 transition text-gray-600 hover:underline hover:text-blue-600 dark:text-dark-med-emphasis"
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

export default TableOfContentsSidebar;
