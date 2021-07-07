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
  const getParameterByName = (name: string, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  if (language === 'video') {
    return (
      <>
        <Youtube id={getParameterByName('v', value.trim())} />

        <div className="mt-3 sm:flex">
          <span className="relative z-0 inline-flex shadow-sm rounded-md mr-2">
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              😍
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              😀
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              🤨
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              😨
            </button>
          </span>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="text-sm w-full mt-3 sm:mt-0 px-2 py-2 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md mr-2"
            placeholder="Feedback..."
          />
          <button
            type="submit"
            className="items-center mt-3 sm:mt-0 px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Submit
          </button>
        </div>
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
