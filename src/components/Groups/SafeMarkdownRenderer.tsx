import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import CodeBlock from '../markdown/CodeBlock/CodeBlock';
import Youtube from '../markdown/Youtube';
import Feedback from './Feedback';

const GroupsCodeBlock = ({
  language,
  value,
}: {
  language: string;
  value: string;
}) => {
  if (language === 'video') {
    const getParameterByName = (name: string, url = window.location.href) => {
      name = name.replace(/[\[\]]/g, '\\$&');
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };
    return (
      <>
        <Youtube id={getParameterByName('v', value.trim())} />
        <div className="h-4" />
        <Feedback />
      </>
    );
  }
  return <CodeBlock className={`language-${language}`}>{value}</CodeBlock>;
};

const renderers = {
  code: GroupsCodeBlock,
};

export default function SafeMarkdownRenderer({ children }) {
  return (
    <div className="prose dark:prose-light max-w-none">
      <ReactMarkdown renderers={renderers} plugins={[gfm]} linkTarget="_blank">
        {children}
      </ReactMarkdown>
    </div>
  );
}
