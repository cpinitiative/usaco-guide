import * as React from 'react';
import { ModuleInfo } from '../../../models/module';
import { SECTION_LABELS } from '../../../../content/ordering';

export default function ModuleHeadersLinkList(props: {
  title: string;
  links: { label: string; url: string }[];
}) {
  return (
    <div className="rounded-md bg-blue-50 dark:bg-blue-900 p-4 mb-4">
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
        <div className="ml-3">
          <h3 className="text-sm leading-5 font-medium text-blue-800 dark:text-dark-high-emphasis">
            {props.title}
          </h3>
          <div className="mt-2 text-sm leading-5 text-blue-800 dark:text-blue-200">
            <ul className="list-disc list-inside pl-3 space-y-1">
              {props.links.map(link => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-black dark:text-blue-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
