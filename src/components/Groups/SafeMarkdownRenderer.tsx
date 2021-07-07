import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import CodeBlock from '../markdown/CodeBlock/CodeBlock';
import Youtube from '../markdown/Youtube';

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
        <div className="mt-3">
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              title={'Rate video as Terrible'}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              😨
            </button>
            <button
              type="button"
              title={'Rate video as Bad'}
              className="-ml-px relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              🤨
            </button>
            <button
              type="button"
              title={'Rate video as Good'}
              className="-ml-px relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              😀
            </button>
            <button
              title={'Rate video as Great'}
              type="button"
              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              😍
            </button>
          </span>
        </div>
        <textarea
          required
          className="text-sm w-full mt-4 px-2 py-2 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md mr-2"
          placeholder="Give Additional Video Feedback... (Optional)"
        />

        <button
          type="submit"
          className="items-center mt-2 sm:mt-0 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          Submit Additional Feedback
        </button>
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
