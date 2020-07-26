import * as React from 'react';
import { TOCHeading } from '../../../models/module';
import { Link } from 'gatsby';
import { useActiveHash } from '../../../hooks/useActiveHash';
import { useMemo } from 'react';
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

  let links = genLinksFromTOCHeadings(
    tableOfContents,
    heading =>
      'block mb-1 text-sm transition duration-150 ease-in-out ' +
      (activeHash === heading.slug
        ? 'underline text-blue-600'
        : 'text-gray-600 hover:underline hover:text-blue-600')
  );

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
