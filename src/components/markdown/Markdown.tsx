import * as React from 'react';

import 'katex/dist/katex.min.css';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Problem } from '../../models/problem';

const Markdown = React.memo((props: { body: any }) => {
  return (
    <div className="markdown">
      <MDXRenderer scope={{ Problem }}>{props.body}</MDXRenderer>
    </div>
  );
});

export default Markdown;
