// File taken from https://github.com/FormidableLabs/prism-react-renderer/issues/54

import * as React from 'react';
import Highlight from './SyntaxHighlighting/Highlight';
import vsDark from 'prism-react-renderer/themes/vsDark';
import Prism from './SyntaxHighlighting/prism';
import { useState } from 'react';

export default ({ children, className }) => {
  if (className === undefined) {
    // no styling, just a regular pre tag
    return (
      <pre className="-mx-4 sm:-mx-6 lg:mx-0 lg:rounded bg-gray-100 p-4 mb-4 whitespace-pre-wrap break-all">
        {children}
      </pre>
    );
  }
  const language = className.replace(/language-/, '');
  return (
    // @ts-ignore
    <Highlight
      Prism={Prism as any}
      code={children.trim()}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre
            className={
              '-mx-4 sm:-mx-6 lg:mx-0 lg:rounded whitespace-pre-wrap break-all p-4 mb-4 ' +
              className
            }
            style={{ ...style }}
          >
            {tokens.map((line, i) => {
              if (line.length === 1 && line[0].content === '')
                line[0].content = '\n';
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
