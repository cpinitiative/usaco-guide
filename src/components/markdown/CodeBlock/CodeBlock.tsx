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
  padding-right: 0.5em;
`;

const CodeSnipButtonIcon = styled.svg`
  color: rgba(156, 220, 254, 0.3);
  &:hover {
    color: rgba(156, 220, 254, 0.7);
  }
`;

const LineContent = styled.span`
  display: table-cell;
`;

const CodeSnippetLineContent = styled(LineContent)`
  color: #00bb00a0; // any better color?
  &:hover > span {
    color: #00bb00c0;
    cursor: pointer;
  }
`;

const CodeSnipButton = ({
  snipID,
  showSnip,
  onShowSnipChange,
  buttonDir,
}: {
  snipID: number;
  showSnip: boolean;
  onShowSnipChange: (snipID: number, showSnip: boolean) => void;
}) => {
  return (
    <CodeSnipButtonIcon
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={
        'transform transition translate-y-0.5 h-4 cursor-pointer' +
        (buttonDir == 'Up'
          ? ' rotate-180'
          : buttonDir == 'Down'
          ? ''
          : buttonDir == 'Left'
          ? ' rotate-90'
          : buttonDir == 'Right'
          ? ' -rotate-90'
          : '')
      }
      onClick={() => onShowSnipChange(snipID, !showSnip)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M17 10l-5 5-5-5"
      />
    </CodeSnipButtonIcon>
  );
};
let canExpand = true;
class CodeBlock extends React.Component<
  {
    children: string;
    className: string;
  },
  {
    collapsed: boolean;
    codeSnipShow: boolean[];
  }
> {
  codeSnips = [];

  constructor(props) {
    super(props);
    if (typeof props.expandable != 'undefined') {
      canExpand = props.expandable;
    }

    let i = 0;
    let prev = -1;
    let prevVal = '';
    let prevIndentation = '';
    let codeSnipShowDefault = [];
    let code = this.getCode();
    for (let line of code.split('\n')) {
      if (prev == -1) {
        const found = line.match(/^(\s*).*?BeginCodeSnip{(.*?)}/); // BeginCodeSnip{...}
        if (found != null) {
          prev = i;
          prevVal = found[2]; // stuff inside curly brackets
          prevIndentation = found[1]; // stuff before //BeginCodeSnip...
        }
      } else {
        const found = line.match(/EndCodeSnip/);
        if (found != null) {
          //assert(end - prev > 1);
          this.codeSnips.push({
            begin: prev,
            end: i,
            value: prevVal,
            indentation: prevIndentation,
          }); // inclusive bounds
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

  getCode() {
    return this.props.children.replace(/^[\r\n]+|[\r\n]+$/g, '');
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
                    onShowSnipChange={this.setCodeSnipShow}
                    snipID={curSnip}
                    showSnip={false}
                    buttonDir={'Right'}
                  />{' '}
                  {/*this.state.codeSnipShow[curSnip] is false*/}
                </LineSnip>
                <CodeSnippetLineContent
                  onClick={this.setCodeSnipShow.bind(this, curSnip, true)}
                >
                  {codeSnips[curSnip].indentation}
                  <span>
                    Code Snippet
                    {codeSnips[curSnip].value
                      ? `: ${codeSnips[curSnip].value}`
                      : ''}{' '}
                    (Click to expand)
                  </span>
                </CodeSnippetLineContent>
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
      let isFirst =
        curSnip < codeSnips.length && i == codeSnips[curSnip].begin + 1;
      let isLast =
        curSnip < codeSnips.length && i == codeSnips[curSnip].end - 1;
      --maxLines;
      return (
        <Line key={i} {...getLineProps({ line, key: i })}>
          <LineNo data-line-number={i + delta} />
          {isFirst || isLast ? (
            <LineSnip>
              <CodeSnipButton
                onShowSnipChange={this.setCodeSnipShow}
                snipID={curSnip}
                showSnip={true}
                buttonDir={
                  isFirst
                    ? 'Down'
                    : 'Up' /*isFirst: down; isLast: up. This is so poorly implemented .-.*/
                }
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
    let code = this.getCode();
    const className = this.props.className;
    const language = className?.replace(/language-/, '');
    if (!language || language === 'bash') {
      // no styling, just a regular pre tag
      return (
        <pre className="-mx-4 sm:-mx-6 md:mx-0 md:rounded bg-gray-100 p-4 mb-4 whitespace-pre-wrap break-all dark:bg-gray-900">
          {code}
        </pre>
      );
    }
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

    let collapsed = this.state.collapsed;
    if (!canExpand) {
      collapsed = canExpand;
    }

    return (
      // @ts-ignore
      <Highlight
        Prism={Prism as any}
        code={code}
        language={language}
        theme={vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="gatsby-highlight" data-language={language}>
            <pre
              className={
                '-mx-4 sm:-mx-6 md:mx-0 md:rounded whitespace-pre-wrap break-all p-4 mb-4 relative ' +
                className
              }
              style={{ ...style }}
            >
              {collapsed && tokens.length > 15
                ? this.renderTokens(tokens, 10, getLineProps, getTokenProps)
                : this.renderTokens(tokens, -1, getLineProps, getTokenProps)}
              {tokens.length > 15 && !collapsed && <div className="h-8" />}
              {canExpand && tokens.length > 15 && (
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
