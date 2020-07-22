import * as React from 'react';
import { Link } from 'gatsby';

type ActiveItemStatus = 'Solving' | 'Skipped' | 'In Progress';

export type ActiveItem = {
  label: string;
  status: ActiveItemStatus;
  url: string;
};

const statusClasses: { [key in ActiveItemStatus]: string } = {
  Solving: 'bg-yellow-100 text-yellow-800',
  Skipped: 'bg-gray-100 text-gray-800',
  'In Progress': 'bg-green-100 text-green-800',
};

export default function ActiveItems({
  type,
  items,
}: {
  type: 'problems' | 'modules';
  items: ActiveItem[];
}) {
  return (
    <div className="bg-white shadow sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Active {type === 'problems' ? 'Problems' : 'Modules'}
        </h3>
        <div className="mt-4 text-gray-500">
          {items.map((item, idx) => (
            <p className={idx === 0 ? '' : 'mt-2'} key={item.url}>
              <Link
                to={item.url}
                className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
              >
                {item.label}
                <span
                  className={
                    'ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 ' +
                    statusClasses[item.status]
                  }
                >
                  {item.status}
                </span>
              </Link>
            </p>
          ))}
          {/*<p>*/}
          {/*  <a*/}
          {/*    href="#"*/}
          {/*    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"*/}
          {/*  >*/}
          {/*    Longest Common Subsequence*/}
          {/*    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">*/}
          {/*      Skipped*/}
          {/*    </span>*/}
          {/*  </a>*/}
          {/*</p>*/}
        </div>
      </div>
    </div>
  );
}
