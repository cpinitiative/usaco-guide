import 'katex/dist/katex.min.css';
import * as React from 'react';
import {
  Fragment as _Fragment,
  jsx as _jsx,
  jsxs as _jsxs,
} from 'react/jsx-runtime';
import { components } from './MDXProvider';

const Markdown = (props: { body: any }) => {
  const fn = new Function(props.body)();

  return (
    <div className="markdown">{fn(_Fragment, _jsx, _jsxs, { components })}</div>
  );
};

export default React.memo(Markdown);
