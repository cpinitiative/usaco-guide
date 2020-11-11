import { TOCHeading } from '../../../models/module';
import * as React from 'react';
import { Link } from 'gatsby';

export default function genLinksFromTOCHeadings(
  headings: TOCHeading[],
  getClasses: (heading: TOCHeading) => string
) {
  let indentationLevels = ['0', '1.5rem', '3rem', '4.5rem'];
  let links: React.ReactNode[] = [];
  let curDepth = -1;
  let indentIdx = 0;
  headings.forEach((heading, idx) => {
    if (curDepth === -1) curDepth = heading.depth;
    if (heading.depth > curDepth) {
      indentIdx++;
    } else if (heading.depth < curDepth) {
      indentIdx = Math.max(0, indentIdx - (curDepth - heading.depth));
    }
    curDepth = heading.depth;
    links.push(
      <Link
        key={heading.slug}
        to={'#' + heading.slug}
        className={getClasses(heading)}
        style={{
          marginLeft: indentationLevels[indentIdx],
          marginTop:
            indentIdx === 0 &&
            ((idx !== 0 && headings[idx - 1].depth > heading.depth) ||
              (idx !== headings.length - 1 &&
                headings[idx + 1].depth > heading.depth))
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
  return links;
}
