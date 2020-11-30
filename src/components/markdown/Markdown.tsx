import * as React from 'react';

import 'katex/dist/katex.min.css';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Problem } from '../../models/problem';

const Markdown = ({ body }) => {
  return (
    <div className="markdown">
      <MDXRenderer scope={{ Problem }}>{body}</MDXRenderer>
    </div>
  );
};

export default Markdown;
