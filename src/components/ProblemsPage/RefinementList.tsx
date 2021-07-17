import * as React from 'react';

export default function RefinementList({ items, refine, createURL }) {  
  return (
    <div className="text-left ml-1">
      {items.map(item => (
        <div>
          <a
            href={createURL(item.value)}
            key={item.label}
            className={`${
              item.isRefined
                ? 'text-gray-700 dark:text-blue-500 font-medium'
                : 'text-gray-500 dark:text-dark-high-emphasis'
            }`}
            onClick={e => {
              e.preventDefault();
              refine(item.value);
            }}
          >
            {item.label} ({item.count})
          </a>
        </div>
      ))}
    </div>
  );
}
