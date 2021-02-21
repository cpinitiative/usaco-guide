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
  user-select: none;
  opacity: 0.5;
  &::before {
    content: attr(data-line-number);
  }
`;

const LineSnip = styled.span`
  display: table-cell;
  white-space: nowrap;
  user-select: none;
  width: 1em;
  padding-right: 1em;
`;

const LineContent = styled.span`
  display: table-cell;
`;

class CodeSnipButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    this.props.setCodeSnipShow(this.props.codeSnipID, !this.props.showSnip);
  }

  render() {
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        opacity="0.3"
        style={{ height: '1em' } /* todo: make class */}
        className={
          'transform transition translate-y-0.5' +
          (!this.props.showSnip ? ' -rotate-90' : '')
        }
        onClick={this.clickEvent}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M17 10l-5 5-5-5"
        />
      </svg>
    );
  }
}

class CodeBlock extends React.Component {
  codeSnips = [];

  constructor(props) {
    super(props);
    let i = 0;
    let prev = -1;
    let prevVal = '';
    let codeSnipShowDefault = [];
    for (let line of this.props.children.trim().split('\n')) {
      if (prev == -1) {
        const found = line.match(/BeginCodeSnip{(}|.*?[^\\]})/); // BeginCodeSnip{...}
        if (found != null)
          (prev = i), (prevVal = found[0].slice(14, found[0].length - 1)); // stuff inside curly brackets
      } else {
        const found = line.match(/EndCodeSnip/);
        if (found != null) {
          //assert(end - prev > 1);
          this.codeSnips.push({ begin: prev, end: i, value: prevVal }); // inclusive bounds
          codeSnipShowDefault.push(false);
          prev = -1;
        }
      }
      ++i;
    }
    //console.log(this.codeSnips);
    //console.log(codeSnipShowDefault);
    this.state = { collapsed: true, codeSnipShow: codeSnipShowDefault };

    //bind
    this.setCodeSnipShow = this.setCodeSnipShow.bind(this);
  }

  setCollapsed(_collapsed) {
    this.setState({ collapsed: _collapsed });
  }

  setCodeSnipShow(id, val) {
    this.setState(state => {
      let codeSnipShow = state.codeSnipShow;
      codeSnipShow[id] = val;
      return { codeSnipShow: codeSnipShow };
    });
  }

  renderTokens(tokens, maxLines, getLineProps, getTokenProps) {
    const codeSnips = this.codeSnips;
    let curSnip = 0;
    let delta = 1;
    return tokens.map((line, i) => {
      if (maxLines == 0) return null;
      if (line.length === 1 && line[0].content === '') line[0].content = '\n';
      if (curSnip < codeSnips.length && i >= codeSnips[curSnip].begin) {
        // inside code snip
        if (i == codeSnips[curSnip].begin) {
          delta -= 1;
          if (!this.state.codeSnipShow[curSnip]) {
            --maxLines;
            return (
              // press to show code snip
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo data-line-number={'..'} />
                <LineSnip>
                  <CodeSnipButton
                    setCodeSnipShow={this.setCodeSnipShow}
                    codeSnipID={curSnip}
                    showSnip={false}
                  />{' '}
                  {/*this.state.codeSnipShow[curSnip] is false*/}
                </LineSnip>
                <LineContent>
                  {codeSnips[curSnip].value}{' '}
                  {/*kinda scuffed but if it's an empty string nothing happens anyways; todo: make it lighter or have some custom color*/}
                </LineContent>
              </Line>
            );
          } else return null; // or nothing
        } else if (i == codeSnips[curSnip].end) {
          delta -= 1;
          ++curSnip;
          return null;
        } else if (!this.state.codeSnipShow[curSnip]) return null;
      }

      //proceed as normal: (show must == true)
      --maxLines;
      return (
        <Line key={i} {...getLineProps({ line, key: i })}>
          <LineNo data-line-number={i + delta} />
          {curSnip < codeSnips.length &&
          codeSnips[curSnip].begin < i &&
          i < codeSnips[curSnip].end ? (
            <LineSnip>
              <CodeSnipButton
                setCodeSnipShow={this.setCodeSnipShow}
                codeSnipID={curSnip}
                showSnip={true}
              />{' '}
              {/*this.state.codeSnipShow[curSnip] is true*/}
            </LineSnip>
          ) : (
            <LineSnip />
          )}
          <LineContent>
            {line.map((token, key) => {
              token.content = token.content.replace(/ {4}/g, '\t');
              return <span key={key} {...getTokenProps({ token, key })} />;
            })}
          </LineContent>
        </Line>
      );
    });
  }

  render() {
    const children = this.props.children;
    const className = this.props.className;
    if (className === undefined) {
      // no styling, just a regular pre tag
      return (
        <pre className="-mx-4 sm:-mx-6 lg:mx-0 lg:rounded bg-gray-100 p-4 mb-4 whitespace-pre-wrap break-all dark:bg-gray-900">
          {children}
        </pre>
      );
    }
    const language = className.replace(/language-/, '');
    /*const [codeSnips, setCodeSnips] = useState(
      for(let line of children.trim().split("\n"))
      {
      }
    );*/

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

    const collapsed = this.state.collapsed;

    return (
      // @ts-ignore
      <Highlight
        Prism={Prism as any}
        code={children}
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
                ? this.renderTokens(tokens, 10, getLineProps, getTokenProps)
                : this.renderTokens(tokens, -1, getLineProps, getTokenProps)}
              {tokens.length > 15 && !collapsed && <div className="h-8" />}
              {tokens.length > 15 && (
                <div
                  className={
                    (collapsed ? 'h-full' : 'h-12') +
                    ' absolute inset-x-0 bottom-0 flex items-end justify-center group cursor-pointer lg:rounded-b'
                  }
                  onClick={() => this.setCollapsed(!collapsed)}
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
  }
}

export default CodeBlock;
