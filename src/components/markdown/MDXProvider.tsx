import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import SpoilerComponent from './SpoilerComponent';
import { ProblemsListComponent } from './Problems';
import { ResourceComponent, ResourcesListComponent } from './Resources';
import CodeBlock from './CodeBlock';
import { InlineMath } from 'react-katex';
import classNames from 'classnames';
import Asterisk from '../tooltip/Asterisk';
import TextTooltip from '../tooltip/TextTooltip';
import {
  CPPSection,
  JavaSection,
  LanguageSection,
  PySection,
} from './LanguageSection';

const components = {
  'module-excerpt': props => <div {...props} />,
  spoiler: SpoilerComponent,
  'info-block': ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title: string;
  }) => (
    <div className="rounded-md bg-blue-50 p-4 mb-8 info-block">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="info-block__heading">{title}</h3>
          <div className="info-block__body">{children}</div>
        </div>
      </div>
    </div>
  ),
  'warning-block': ({ children }) => (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm leading-5 font-medium text-yellow-800">
            Warning!
          </h3>
          <div className="mt-2 text-sm leading-5 text-yellow-700">
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  ),
  'optional-content': ({
    children,
    title,
    className,
  }: {
    children: React.ReactNode;
    title?: string;
    className?: string;
  }) => (
    <div
      className={`bg-white overflow-hidden shadow rounded-lg border border-purple-400 mb-8`}
    >
      <div className="p-4 flex items-center font-medium text-purple-800 bg-purple-50">
        <svg className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
        Optional{title ? `: ${title}` : ''}
      </div>
      <div className="p-4 pb-0">{children}</div>
    </div>
  ),
  'problems-list': ProblemsListComponent,
  resources: ResourcesListComponent,
  resource: ResourceComponent,
  code: CodeBlock,
  TextTooltip: TextTooltip,
  inlineCode: props => (
    <code
      {...props}
      className="font-mono text-sm inline bg-gray-200 rounded px-1 py-05"
    />
  ),
  IM: ({ children }) => <InlineMath>{children}</InlineMath>,
  LanguageSection: LanguageSection,
  CPPSection: CPPSection,
  JavaSection: JavaSection,
  PySection: PySection,
  Asterisk: Asterisk,
  table: ({ className, ...props }) => (
    <table
      {...props}
      className={classNames('text-base border-gray-600', className)}
    />
  ),
  th: props => <th {...props} className="border py-1 px-3" />,
  td: ({ className, ...props }) => (
    <td {...props} className={classNames('border py-1 px-3', className)} />
  ),
  h1: props => (
    <h1
      {...props}
      className="leading-tight text-4xl font-bold mb-4 mt-12 text-gray-700"
    />
  ),
  h2: props => (
    <h2
      {...props}
      className="leading-tight text-3xl font-bold mb-4 mt-12 text-gray-700"
    />
  ),
  h3: props => (
    <h3 {...props} className="leading-snug text-2xl font-semibold mb-4 mt-8" />
  ),
  h4: props => (
    <h4 {...props} className="leading-none text-xl font-semibold mb-2 mt-6" />
  ),

  p: props => <p {...props} className="mb-4" />,
  'ol.li': ({ children, ...props }) => (
    <li {...props}>
      <div>{children}</div>
    </li>
  ),
};

export default function ({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
