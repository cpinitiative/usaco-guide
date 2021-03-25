import * as React from 'react';
import classNames from 'classnames';
import CodeBlock from './CodeBlock/CodeBlock';

export const OffsetAnchor = ({ id, ...props }) => (
  <span
    id={id}
    {...props}
    className="absolute"
    style={{ bottom: '60px', height: '2px' }}
  />
);

const HTMLComponents = {
  table: ({ className, ...props }) => (
    <table
      {...props}
      className={classNames(
        'text-base border-gray-600 no-bottom-margin',
        className
      )}
    />
  ),
  th: ({ className, ...props }) => (
    <th {...props} className={classNames('border py-1 px-3', className)} />
  ),
  td: ({ className, ...props }) => (
    <td {...props} className={classNames('border py-1 px-3', className)} />
  ),
  h1: ({ id, children, ...props }) => (
    <h1
      {...props}
      className="leading-tight text-4xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis "
    >
      <OffsetAnchor id={id} />
      {children}
    </h1>
  ),
  h2: ({ id, children, ...props }) => (
    <h2
      className="leading-tight text-3xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis relative"
      {...props}
    >
      <OffsetAnchor id={id} />
      {children}
    </h2>
  ),
  h3: ({ id, children, ...props }) => (
    <h3 {...props} className="leading-snug text-2xl font-semibold mb-4 mt-8">
      <OffsetAnchor id={id} />
      {children}
    </h3>
  ),
  h4: ({ id, children, ...props }) => (
    <h4 {...props} className="leading-none text-xl font-semibold mb-2 mt-6">
      <OffsetAnchor id={id} />
      {children}
    </h4>
  ),
  p: props => <p {...props} className="mb-4" />,
  'ol.li': ({ children, ...props }) => (
    <li {...props}>
      <div className="flex-1">{children}</div>
    </li>
  ),
  inlineCode: props => (
    <code
      {...props}
      className="font-mono inline bg-gray-200 rounded px-1 py-05 dark:bg-gray-800"
    />
  ),
  code: CodeBlock,
  a: ({ children, ...props }) => (
    <a
      target={!props.href || props.href.startsWith('#') ? null : '_blank'}
      {...props}
    >
      {children}
    </a>
  ),
};

export default HTMLComponents;
