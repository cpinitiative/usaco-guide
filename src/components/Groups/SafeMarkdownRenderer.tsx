import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import CodeBlock from '../markdown/CodeBlock/CodeBlock';
import Youtube from '../markdown/Youtube';
import Feedback from './Feedback';

const VideoComponent = ({ link }: { link: string }) => {
  const getParameterByName = (name: string, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  let id = '';
  if (link.indexOf('youtube.com') !== -1) {
    id = getParameterByName('v', link.trim());
  } else if (link.indexOf('youtu.be') !== -1) {
    id = link.split('/').pop();
  }

  if (!id) {
    return (
      <div
        className={'mt-6'}
        style={{
          position: 'relative',
          width: '100%',
          // 16:9 aspect ratio
          paddingBottom: '56.25%',
        }}
      >
        <div
          className={
            'absolute top-0 left-0 w-full h-full border-2 border-solid bg-gray-200'
          }
        >
          <p className={'text-center'}>
            <i>Video Error: invalid youtube video link.</i>
            <p>Try using one of the following link formats:</p>
            <p>https://www.youtube.com/watch?v=VIDEOID</p>
            <p>https://youtu.be/VIDEOID</p>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={'mt-6'}>
      <Youtube id={id} />
      <div className="h-4" />
      <Feedback videoId={id} />
    </div>
  );
};
const GroupsCodeBlock = ({
  className,
  children,
  inline,
}: {
  className?: string;
  children: React.ReactNode;
  inline?: boolean;
}) => {
  const value = children[0];
  if (className === 'language-video') {
    return <VideoComponent link={value} />;
  }
  if (inline) {
    return <code>{value}</code>;
  }
  return <CodeBlock className={className}>{value}</CodeBlock>;
};

const renderers = {
  code: GroupsCodeBlock,
};

export default function SafeMarkdownRenderer({ children }) {
  return (
    <div className="prose dark:prose-light max-w-none">
      <ReactMarkdown
        components={renderers}
        /* @ts-expect-error https://github.com/rehypejs/rehype/discussions/63 */
        plugins={[gfm]}
        linkTarget="_blank"
        className="react-markdown"
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
