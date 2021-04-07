import classNames from 'classnames';
import * as React from 'react';
import CodeBlock from './CodeBlock/CodeBlock';

export const OffsetAnchor = ({ id, ...props }): JSX.Element => (
  <span
    id={id}
    {...props}
    className="absolute"
    style={{ bottom: '60px', height: '2px' }}
  />
);

const table = ({ className, ...props }): JSX.Element => (
  <table
    {...props}
    className={classNames(
      'text-base border-gray-600 no-bottom-margin',
      className
    )}
  />
);
const th = ({ className, ...props }): JSX.Element => (
  <th {...props} className={classNames('border py-1 px-3', className)} />
);
const td = ({ className, ...props }): JSX.Element => (
  <td {...props} className={classNames('border py-1 px-3', className)} />
);
const h1 = ({ id, children, ...props }): JSX.Element => (
  <h1
    {...props}
    className="leading-tight text-4xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis "
  >
    <OffsetAnchor id={id} />
    {children}
  </h1>
);
const h2 = ({ id, children, ...props }): JSX.Element => (
  <h2
    className="leading-tight text-3xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis relative"
    {...props}
  >
    <OffsetAnchor id={id} />
    {children}
  </h2>
);
const h3 = ({ id, children, ...props }): JSX.Element => (
  <h3 {...props} className="leading-snug text-2xl font-semibold mb-4 mt-8">
    <OffsetAnchor id={id} />
    {children}
  </h3>
);
const h4 = ({ id, children, ...props }): JSX.Element => (
  <h4 {...props} className="leading-none text-xl font-semibold mb-2 mt-6">
    <OffsetAnchor id={id} />
    {children}
  </h4>
);
const p = (props): JSX.Element => <p {...props} className="mb-4" />;
const liNestedInOl = ({ children, ...props }): JSX.Element => (
  <li {...props}>
    <div className="flex-1">{children}</div>
  </li>
);
const inlineCode = (props): JSX.Element => (
  <code
    {...props}
    className="font-mono inline bg-gray-200 rounded px-1 py-05 dark:bg-gray-800"
  />
);
const a = ({ children, ...props }) => (
  <a
    target={!props.href || props.href.startsWith('#') ? null : '_blank'}
    {...props}
  >
    {children}
  </a>
);

const HTMLComponents = {
  table,
  th,
  td,
  h1,
  h2,
  h3,
  h4,
  p,
  'ol.li': liNestedInOl,
  inlineCode,
  code: CodeBlock,
  a,
};

export default HTMLComponents;
