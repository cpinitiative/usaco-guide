// Common list table component used by resource list and problem list
import React from 'react';

export function ListTable({ header, children, ...props }) {
  return (
    <div className="-mx-4 sm:-mx-6 md:mx-0" {...props}>
      <div className="mb-4 flex flex-col">
        <div className="-my-2 overflow-x-auto py-2 md:-mx-4 md:px-4">
          <div className="inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow-sm md:rounded-lg dark:border-transparent">
            <table className="no-markdown dark:text-dark-med-emphasis min-w-full text-gray-500">
              <thead>{header}</thead>
              <tbody className="table-alternating-stripes">{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
