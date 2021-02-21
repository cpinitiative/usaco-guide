// File taken from https://github.com/FormidableLabs/prism-react-renderer/issues/54

import * as React from 'react';
import Highlight from './SyntaxHighlighting/Highlight';
import vsDark from 'prism-react-renderer/themes/vsDark';
import Prism from './SyntaxHighlighting/prism';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  white-space: nowrap;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  &::before {
    content: attr(data-line-number);
  }
`;

const LineContent = styled.span`
  display: table-cell;
`;

const renderTokens = (tokens, getLineProps, getTokenProps) => {
  return tokens.map((line, i) => {
    if (line.length === 1 && line[0].content === '') line[0].content = '\n';
    return (
      <Line key={i} {...getLineProps({ line, key: i })}>
        <LineNo data-line-number={i + 1} />
        <LineContent>
          {line.map((token, key) => {
            token.content = token.content.replace(/ {4}/g, '\t');
            return <span key={key} {...getTokenProps({ token, key })} />;
          })}
        </LineContent>
      </Line>
    );
  });
};

export default ({ children, className }) => {
  if (className === undefined) {
    // no styling, just a regular pre tag
    return (
      <pre className="-mx-4 sm:-mx-6 lg:mx-0 lg:rounded bg-gray-100 p-4 mb-4 whitespace-pre-wrap break-all dark:bg-gray-900">
        {children}
      </pre>
    );
  }
  const language = className.replace(/language-/, '');
  const [collapsed, setCollapsed] = useState(true);

  // console.warn() if line length is > 80. uncomment to enable
  // Warning: Performance will be negatively impacted! Make sure to comment out before pushing
  // You may want to comment out pages/liveupdate.tsx (see file for instructions) to speed up build times
  // let tooLong = false;
  // for (let line of children.trim().split("\n")) {
  //   if (line.length > 80) {
  //     tooLong = true;
  //     console.error(line + "               ---- too long! (" + line.length + " chars)")
  //   }
  // }

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
              '-mx-4 sm:-mx-6 lg:mx-0 lg:rounded whitespace-pre-wrap break-all p-4 mb-4 relative ' +
              className
            }
            style={{ ...style }}
          >
            {collapsed && tokens.length > 15
              ? renderTokens(tokens.slice(0, 10), getLineProps, getTokenProps)
              : renderTokens(tokens, getLineProps, getTokenProps)}
            {tokens.length > 15 && !collapsed && <div className="h-8" />}
            {tokens.length > 15 && (
              <div
                className={
                  (collapsed ? 'h-full' : 'h-12') +
                  ' absolute inset-x-0 bottom-0 flex items-end justify-center group cursor-pointer lg:rounded-b'
                }
                onClick={() => setCollapsed(!collapsed)}
              >
                <div
                  className={
                    (collapsed ? 'h-20' : 'h-12') +
                    ' absolute inset-x-0 bottom-0 flex items-end justify-center'
                  }
                  style={
                    collapsed
                      ? {
                          background:
                            'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                        }
                      : null
                  }
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={
                      'text-white w-6 h-6 transform group-hover:-translate-y-2 transition mb-2 ' +
                      (collapsed ? '' : 'rotate-180')
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            )}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
