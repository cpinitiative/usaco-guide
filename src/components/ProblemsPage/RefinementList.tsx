import * as React from 'react';

export default function RefinementList({ items, refine, createURL }) {
  return (
    <div className="text-center">
      {items.map(item => (
        <a
          href={createURL(item.value)}
          key={item.label}
          className={`${
            item.isRefined
              ? 'bg-blue-100 dark:bg-blue-300 text-black dark:text-black font-medium'
              : 'bg-blue-500 dark:bg-blue-800 text-white dark:text-dark-high-emphasis'
          } rounded-full px-2 py-0.5 text-sm inline-block mr-2 my-1`}
          onClick={e => {
            e.preventDefault();
            refine(item.value);
          }}
        >
          {item.label} ({item.count})
        </a>
      ))}
    </div>
  );
}
