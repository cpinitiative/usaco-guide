import * as React from 'react';

import 'katex/dist/katex.min.css';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Markdown = ({ body }) => {
  return (
    <div className="markdown">
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default Markdown;
