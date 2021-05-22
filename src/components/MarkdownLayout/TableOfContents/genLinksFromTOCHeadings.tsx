import { Link } from 'gatsby';
import * as React from 'react';
import { TOCHeading } from '../../../models/module';

export default function genLinksFromTOCHeadings(
  headings: TOCHeading[],
  getClasses: (heading: TOCHeading) => string
) {
  const indentationLevels = ['0', '1.5rem', '3rem', '4.5rem'];
  const links: React.ReactNode[] = [];
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
        dangerouslySetInnerHTML={{ __html: heading.value }}
      />
    );
  });
  return links;
}
