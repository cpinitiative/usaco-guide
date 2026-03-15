import * as React from 'react';
// eslint-disable-next-line
// @ts-ignore
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { components } from './MDXComponents';

const Markdown = (props: { body: any }) => {
  const mdxComponent = new Function(props.body)({
    Fragment,
    jsx,
    jsxs,
  }).default({ components });

  return <div className="markdown">{mdxComponent}</div>;
};

export default React.memo(Markdown);
