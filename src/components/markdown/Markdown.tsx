import * as React from 'react';

import 'katex/dist/katex.min.css';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Markdown = ({ body, className }) => {
  return (
    <div className={`markdown ${className}`}>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default Markdown;
