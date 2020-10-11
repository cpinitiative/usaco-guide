import { Link, PageProps } from 'gatsby';
import * as React from 'react';
import SEO from '../seo';

export default function ClassSelectPage(props: { path: string }) {
  return (
    <>
      <SEO title={'Classes'} />
      <ul>
        <li>
          <Link to={'/classes/test'}>USACO Intermediate Saturday</Link>
        </li>
      </ul>
    </>
  );
}
