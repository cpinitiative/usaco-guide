import * as React from 'react';
import { TOCHeading } from '../../models/module';
import { Link } from 'gatsby';
import { useActiveHash } from '../../hooks/useActiveHash';
import { useMemo } from 'react';

// lol this file is basically idential to the sidebar file... should consolidate

const TableOfContentsBlock = ({
  tableOfContents,
}: {
  tableOfContents: TOCHeading[];
}) => {
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
        className="block mb-2 transition duration-150 ease-in-out text-gray-600 hover:underline hover:text-blue-600"
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
    <div>
      <h2 className="uppercase text-gray-500 font-bold mt-8 mb-3 tracking-wider">
        Table of Contents
      </h2>
      {links}
      <hr className="mt-6 mb-2" />
    </div>
  );
};

export default TableOfContentsBlock;
