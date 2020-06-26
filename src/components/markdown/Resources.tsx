import * as React from 'react';
import Dots from '../Dots';

export function ResourcesListComponent(props) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="py-3 border-b border-gray-200 bg-gray-50 w-6" />
                <th className="pl-3 pr-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Resource Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="table-alternating-stripes">
              {props.children}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function ResourceComponent(props) {
  const url =
    props.source === 'CPH' && !props.url
      ? 'https://cses.fi/book/book.pdf'
      : props.url;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {props.source}
      </td>
      <td className="py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 w-6">
        {props.starred && (
          <svg
            className="h-6 w-6 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        )}
      </td>
      <td className="pl-3 pr-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        <a href={url}>{props.title}</a>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {props.children}
      </td>
    </tr>
  );
}
