import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import CodeBlock from '../markdown/CodeBlock/CodeBlock';
import Youtube from '../markdown/Youtube';
import Feedback from './Feedback';

const VideoComponent = ({ link }: { link: string }) => {
  const getParameterByName = (name: string, url = window.location.href) => {
    console.log(name);
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    console.log(results);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  let id = '';
  console.log(id);
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
  className, // language
  props,
}: {
  className: string;
  props;
}) => {
  console.log(className);
  console.log(props);
  if (className === 'video') {
    return <VideoComponent link={props} />;
  }
  return <CodeBlock className={`language-${className}`}>{props}</CodeBlock>;
};

const renderers = {
  code: GroupsCodeBlock,
};

export default function SafeMarkdownRenderer({ children }) {
  return (
    <div className="prose dark:prose-light max-w-none">
      {/* @ts-expect-error https://github.com/rehypejs/rehype/discussions/63 */}
      <ReactMarkdown components={renderers} plugins={[gfm]} linkTarget="_blank">
        {children}
      </ReactMarkdown>
    </div>
  );
}
