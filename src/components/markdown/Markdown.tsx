import { MDXRenderer } from 'gatsby-plugin-mdx';
import 'katex/dist/katex.min.css';
import * as React from 'react';

const Markdown = React.memo((props: { body: any }) => {
  return (
    <div className="markdown">
      <MDXRenderer>{props.body}</MDXRenderer>
    </div>
  );
});

export default Markdown;
