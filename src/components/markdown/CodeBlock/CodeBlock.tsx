// todo: switch to https://github.com/react-syntax-highlighter/react-syntax-highlighter

// File taken from https://github.com/FormidableLabs/prism-react-renderer/issues/54

import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';
import * as React from 'react';
import styled from 'styled-components';
import { SpoilerContext } from '../Spoiler';
import Highlight from './SyntaxHighlighting/Highlight';
import Prism from './SyntaxHighlighting/prism';

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
  color: ${(props: { isDarkMode: boolean }) =>
    props.isDarkMode ? '#00bb00' : '#006600'};
  &:hover > span {
    color: ${(props: { isDarkMode: boolean }) =>
      props.isDarkMode ? '#00bb00c0;' : '#006600c0'};
    cursor: pointer;
  }
`;

const CopyButton = styled.button`
  padding: 1.6px 8px 1.6px 8px;
  color: ${(props: { isDarkMode: boolean }) =>
    props.isDarkMode ? 'black' : 'white'};
  background-color: ${(props: { isDarkMode: boolean }) =>
    props.isDarkMode ? 'hsla(240, 20%, 88%, 1)' : 'hsla(60, 20%, 12%, 1)'};
  position: absolute;
  top: 0px;
  right: calc(var(--right-offset) + var(--left-offset));
  z-index: 99;
  border-radius: 0px 0px 4px 4px;
  font-size: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  /* copy from tailwind defaults */
  &:hover {
    background-color: ${(props: { isDarkMode: boolean }) =>
      props.isDarkMode ? 'hsla(240, 20%, 75%, 1)' : 'hsla(60, 20%, 25%, 1)'};
  }
  /* -mx-4 sm:-mx-6 md:mx-0 */
  --left-offset: -4 * 0.25rem;
  @media (min-width: 640px) {
    --left-offset: -6 * 0.25rem;
  }
  @media (min-width: 768px) {
    --left-offset: 0rem;
  }
`;

const RelativeDiv = styled.div`
  position: relative;
  isolation: isolate;
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
  buttonDir: 'Up' | 'Down' | 'Left' | 'Right';
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

class CodeBlock extends React.Component<
  {
    children: string;
    className: string;
    isDarkMode: boolean;
    copyButton?: boolean;
  },
  {
    collapsed: boolean;
    codeSnipShow: boolean[];
  }
> {
  codeSnips = [];
  static contextType = SpoilerContext;
  // can't declare context because otherwise storybook / gatsby build will fail
  // and I can't figure out why
  // declare context: React.ContextType<typeof SpoilerContext>;
  static defaultProps = {
    copyButton: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      codeSnipShow: this.calculateCodeSnipShow(),
    };

    this.setCodeSnipShow = this.setCodeSnipShow.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      this.codeSnips = [];
      const codeSnipShow = this.calculateCodeSnipShow();
      this.setState({ codeSnipShow });
    }
  }

  calculateCodeSnipShow() {
    let i = 0;
    let prev = -1;
    let prevVal = '';
    let prevIndentation = '';
    const codeSnipShowDefault = [];
    const code = this.getCode();
    for (const line of code.split('\n')) {
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
    return codeSnipShowDefault;
  }

  getCode() {
    return this.props.children.replace(/^[\r\n]+|[\r\n]+$/g, '');
  }

  setCollapsed(_collapsed): void {
    this.setState({ collapsed: _collapsed });
  }

  setCodeSnipShow(id, val): void {
    this.setState(state => {
      const codeSnipShow = state.codeSnipShow;
      codeSnipShow[id] = val;
      return { codeSnipShow: codeSnipShow };
    });
  }

  renderTokens(
    tokens,
    maxLines,
    getLineProps,
    getTokenProps,
    isDarkMode
  ): JSX.Element {
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
                  isDarkMode={isDarkMode}
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
      const isFirst =
        curSnip < codeSnips.length && i == codeSnips[curSnip].begin + 1;
      const isLast =
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
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </LineContent>
        </Line>
      );
    });
  }

  render(): JSX.Element {
    const code = this.getCode();
    const className = this.props.className;
    const linesOfCode =
      code.split('\n').length +
      1 -
      this.codeSnips.reduce((acc, cur) => acc + (cur.end - cur.begin), 0);
    const isCodeBlockExpandable =
      !(this.context as React.ContextType<typeof SpoilerContext>)
        .expandCodeBlock && linesOfCode > 15;
    const isDarkMode = this.props.isDarkMode;

    let language = className?.replace(/language-/, '');
    if (language == 'py') language = 'python';
    if (!['cpp', 'java', 'python'].includes(language)) {
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
    // You may want to comment out pages/editor.tsx (see file for instructions) to speed up build times
    // let tooLong = false;
    // for (let line of children.trim().split("\n")) {
    //   if (line.length > 80) {
    //     tooLong = true;
    //     console.error(line + "               ---- too long! (" + line.length + " chars)")
    //   }
    // }

    const collapsed = this.state.collapsed;
    const rightOffset = String(language.length * 8 + 40) + 'px';
    return (
      <RelativeDiv>
        {this.props.copyButton ? (
          <CopyButton
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(code);
            }}
            style={{
              '--right-offset': rightOffset,
            }}
            className="focus:outline-none"
            isDarkMode={isDarkMode}
          >
            Copy
          </CopyButton>
        ) : null}
        <Highlight
          Prism={Prism as any}
          code={code}
          language={language}
          theme={isDarkMode ? vsDark : vsLight}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <div
              className={
                'gatsby-highlight ' + (isDarkMode ? 'dark-mode' : 'light-mode')
              }
              data-language={language}
            >
              <pre
                className={
                  '-mx-4 sm:-mx-6 md:mx-0 md:rounded whitespace-pre-wrap break-all p-4 mb-4 relative ' +
                  className
                }
                style={{
                  ...style,
                  ...(!isDarkMode && { backgroundColor: 'rgb(249, 250, 251)' }),
                  // In light mode, override background color with tailwind's bg-gray-50
                }}
              >
                {isCodeBlockExpandable && collapsed && tokens.length > 15
                  ? this.renderTokens(
                      tokens,
                      10,
                      getLineProps,
                      getTokenProps,
                      isDarkMode
                    )
                  : this.renderTokens(
                      tokens,
                      -1,
                      getLineProps,
                      getTokenProps,
                      isDarkMode
                    )}
                {tokens.length > 15 && !collapsed && <div className="h-8" />}
                {isCodeBlockExpandable && tokens.length > 15 && (
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
                        collapsed && isCodeBlockExpandable
                          ? {
                              background: isDarkMode
                                ? 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
                                : 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                            }
                          : null
                      }
                    >
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={
                          'w-6 h-6 transform group-hover:-translate-y-2 transition mb-2 ' +
                          (collapsed ? '' : 'rotate-180 ') +
                          (isDarkMode ? 'text-white' : 'text-black')
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
      </RelativeDiv>
    );
  }
}

export default CodeBlock;
