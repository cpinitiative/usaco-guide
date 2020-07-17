import * as React from 'react';
import { TOCHeading } from '../../models/module';
import { Link } from 'gatsby';
import { useActiveHash } from '../../hooks/useActiveHash';
import { useMemo } from 'react';

const TableOfContentsSidebar = ({
  tableOfContents,
}: {
  tableOfContents: TOCHeading[];
}) => {
  const hashes = useMemo(() => tableOfContents.map(heading => heading.slug), [
    tableOfContents,
  ]);
  const activeHash = useActiveHash(hashes, '10px 0px 0px 0px');

  let links = [];
  let curDepth = -1;
  let indentIdx = 0;
  let indent = ['0', '1.5rem', '3rem', '4.5rem'];
  tableOfContents.forEach((heading, idx) => {
    if (curDepth === -1) curDepth = heading.depth;
    if (heading.depth > curDepth) {
      indentIdx++;
    } else if (heading.depth < curDepth) {
      indentIdx = Math.max(0, indentIdx - 1);
    }
    curDepth = heading.depth;
    links.push(
      <Link
        key={heading.slug}
        to={'#' + heading.slug}
        className={
          'block mb-1 text-sm transition duration-150 ease-in-out ' +
          (activeHash === heading.slug
            ? 'underline text-blue-600'
            : 'text-gray-600 hover:underline hover:text-blue-600')
        }
        style={{
          marginLeft: indent[indentIdx],
          marginTop:
            indentIdx === 0 &&
            ((idx !== 0 && tableOfContents[idx - 1].depth > heading.depth) ||
              (idx !== tableOfContents.length - 1 &&
                tableOfContents[idx + 1].depth > heading.depth))
              ? '1rem'
              : indentIdx === 0
              ? '0.5rem'
              : 0,
        }}
      >
        {heading.value}
      </Link>
    );
  });

  return (
    <div className="sticky" style={{ top: '2.5rem' }}>
      <h2 className="uppercase text-gray-500 font-bold mb-4 text-sm tracking-wider">
        Table of Contents
      </h2>
      {links}
    </div>
  );
};

export default TableOfContentsSidebar;
