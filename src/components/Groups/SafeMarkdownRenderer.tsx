import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useDarkMode } from '../../context/DarkModeContext';
import CodeBlock from '../markdown/CodeBlock/CodeBlock';
import YouTube from '../markdown/YouTube';
import Feedback from './Feedback';

const VideoComponent = ({ link }: { link: string }) => {
  const extractYouTubeId = (raw: string): string | null => {
    const trimmed = raw.trim();

    // Try using URL parser first for full links
    try {
      const url = new URL(trimmed);
      const host = url.hostname.toLowerCase();

      if (host.includes('youtube.com')) {
        // Standard watch URL: https://www.youtube.com/watch?v=VIDEOID
        const vParam = url.searchParams.get('v');
        if (vParam) return vParam;

        // Embed/shorts formats: /embed/VIDEOID, /shorts/VIDEOID
        const parts = url.pathname.split('/').filter(Boolean);
        if (
          parts.length >= 2 &&
          (parts[0] === 'embed' || parts[0] === 'shorts')
        ) {
          return parts[1];
        }
      }

      if (host === 'youtu.be') {
        // Short link: https://youtu.be/VIDEOID or with extra segments/query
        const parts = url.pathname.split('/').filter(Boolean);
        if (parts.length > 0) {
          return parts[0];
        }
      }
    } catch {
      // Not a full URL, fall through to plain ID / legacy handling
    }

    // Fallback: if it looks like a bare YouTube ID, accept it
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
      return trimmed;
    }

    return null;
  };

  const id = extractYouTubeId(link);

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
            'absolute top-0 left-0 h-full w-full border-2 border-solid bg-gray-200'
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
      <YouTube id={id} />
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
  const value = Array.isArray(children) ? children[0] : children;
  const isDarkMode = useDarkMode();
  if (className && className.split(' ').includes('language-video')) {
    return <VideoComponent link={String(value)} />;
  }
  if (inline) {
    return <code>{value}</code>;
  }

  return (
    <CodeBlock className={className} isDarkMode={isDarkMode}>
      {value}
    </CodeBlock>
  );
};

const renderers = {
  code: GroupsCodeBlock,
};

export default function SafeMarkdownRenderer({ children }) {
  const content = String(children).replace(/\\n/g, '\n');
  return (
    <div className="prose dark:prose-light markdown max-w-none">
      <div className="react-markdown">
        <ReactMarkdown
          components={renderers as any}
          remarkPlugins={[gfm as any]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
