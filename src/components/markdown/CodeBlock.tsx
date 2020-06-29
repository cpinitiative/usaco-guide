// File taken from https://github.com/FormidableLabs/prism-react-renderer/issues/54

import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

export default ({ children, className }) => {
  if (className === undefined) {
    // no styling, just a regular pre tag
    return <pre className="rounded bg-gray-100 p-4">{children}</pre>;
  }
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={'rounded whitespace-pre-wrap ' + className}
          style={{ ...style, padding: '20px' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
