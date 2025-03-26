import * as React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import CodeBlock from './CodeBlock/CodeBlock';

// Note: try to avoid adding inline styles here; rather, use css selectors to target them.
// Otherwise it's really hard to override some of these styles

export const OffsetAnchor = ({ id, ...props }): JSX.Element => (
  <span
    id={id}
    {...props}
    className="absolute"
    style={{ bottom: '60px', height: '2px' }}
  />
);

const h1 = ({ id, children, ...props }): JSX.Element => (
  <h1
    {...props}
    className="dark:text-dark-high-emphasis mt-12 mb-5 text-4xl leading-tight font-bold text-gray-700"
  >
    <OffsetAnchor id={id} />
    {children}
  </h1>
);
const h2 = ({ id, children, ...props }): JSX.Element => (
  <h2
    className="dark:text-dark-high-emphasis mt-12 mb-5 text-3xl leading-tight font-bold text-gray-700"
    {...props}
  >
    <OffsetAnchor id={id} />
    {children}
  </h2>
);
const h3 = ({ id, children, ...props }): JSX.Element => (
  <h3 {...props} className="mt-8 mb-4 text-2xl leading-snug font-semibold">
    <OffsetAnchor id={id} />
    {children}
  </h3>
);
const h4 = ({ id, children, ...props }): JSX.Element => (
  <h4 {...props} className="mt-6 mb-2 text-xl leading-none font-semibold">
    <OffsetAnchor id={id} />
    {children}
  </h4>
);
const p = (props): JSX.Element => <p {...props} />;
// Note: for the following li component, this is only really necessary for ol.li. It's not needed for anything else.
// But XDM removed support for ol.li so this sort of works :P
const li = ({ children, ...props }): JSX.Element => (
  <li {...props}>
    <div className="flex-1">{children}</div>
  </li>
);
const inlineCode = (props): JSX.Element => (
  <code {...props} className="inline-code" />
);
const a = ({ children, ...props }) => (
  <a
    target={!props.href || props.href.startsWith('#') ? undefined : '_blank'}
    {...props}
  >
    {children}
  </a>
);
const pre = ({ children, copyButton = true, ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isDarkMode = useDarkMode();

  return (
    <pre {...props}>
      <CodeBlock
        copyButton={copyButton}
        isDarkMode={isDarkMode}
        {...children.props}
      />
    </pre>
  );
};

const HeaderLink: React.FC = props => {
  return (
    <svg
      fill="none"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="inline-block align-middle"
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
};

const HTMLComponents = {
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  code: inlineCode,
  pre,
  a,
  HeaderLink,
};

export default HTMLComponents;
