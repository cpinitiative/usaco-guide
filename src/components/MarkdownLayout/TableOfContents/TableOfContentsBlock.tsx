import * as React from 'react';
import { TOCHeading } from '../../../models/module';
import genLinksFromTOCHeadings from './genLinksFromTOCHeadings';

const TableOfContentsBlock = ({
  tableOfContents,
}: {
  tableOfContents: TOCHeading[];
}) => {
  let links = genLinksFromTOCHeadings(
    tableOfContents,
    _ =>
      'block mb-2 transition duration-150 ease-in-out text-gray-600 dark:text-dark-med-emphasis hover:underline hover:text-blue-600 dark-hover:text-dark-high-emphasis'
  );
  return (
    <div>
      <h2 className="uppercase text-gray-500 dark:text-dark-high-emphasis font-bold mt-8 mb-3 tracking-wider">
        Table of Contents
      </h2>
      {links}
      <hr className="mt-6 mb-2 dark:border-gray-700" />
    </div>
  );
};

export default TableOfContentsBlock;
