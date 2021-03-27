import * as React from 'react';

import 'katex/dist/katex.min.css';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Markdown = React.memo((props: { body: any }) => {
  return (
    <div className="markdown">
      <MDXRenderer>{props.body}</MDXRenderer>
    </div>
  );
});

export default Markdown;
