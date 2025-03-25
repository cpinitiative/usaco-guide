// Common list table component used by resource list and problem list
import React from 'react';

export function ListTable({ header, children, ...props }) {
  return (
    <div className="-mx-4 sm:-mx-6 md:mx-0" {...props}>
      <div className="flex flex-col mb-4">
        <div className="overflow-x-auto md:-mx-4 md:px-4 -my-2 py-2">
          <div className="align-middle inline-block min-w-full shadow-sm overflow-hidden md:rounded-lg border-b border-gray-200 dark:border-transparent">
            <table className="min-w-full no-markdown text-gray-500 dark:text-dark-med-emphasis">
              <thead>{header}</thead>
              <tbody className="table-alternating-stripes">{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
