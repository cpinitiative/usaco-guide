import classNames from 'classnames';
import React from 'react';

export const EditorSidebar: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={classNames(
        className,
        'w-[250px] bg-[#1E1E1E] border-r border-gray-800 overflow-y-auto'
      )}
    >
      <div className="text-gray-300 text-sm font-medium border-b border-gray-800 flex items-center justify-between">
        <span className="px-4 py-2">Files</span>
        {/* todo: hide icon? */}
        {/*<div className="flex-shrink-0">*/}
        {/*  <button*/}
        {/*    className={classNames(*/}
        {/*      'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',*/}
        {/*      'px-3 py-2 font-medium text-sm focus:outline-none transition'*/}
        {/*    )}*/}
        {/*    onClick={() => console.log('new file')}*/}
        {/*  >*/}
        {/*    New File*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
      <div className="h-1" />
      <div className="px-4 py-1 group hover:bg-gray-800 transition">
        <div
          className="cursor-pointer"
          onClick={() => console.log('Open file?')}
        >
          <span className="text-gray-500 group-hover:text-gray-300 text-sm transition">
            1_General/Contributing.mdx
          </span>
        </div>
      </div>
      <div className="px-4 py-1 group hover:bg-gray-800 transition">
        <div
          className="cursor-pointer"
          onClick={() => console.log('Open file?')}
        >
          <span className="text-gray-500 group-hover:text-gray-300 text-sm transition">
            1_General/About_MDX.mdx
          </span>
        </div>
      </div>
      <div className="h-1" />
      <button
        className={classNames(
          'text-gray-400 hover:text-gray-300 hover:bg-gray-800 active:bg-gray-800',
          'px-4 py-2 font-medium text-sm focus:outline-none transition w-full'
        )}
        onClick={() => console.log('new file')}
      >
        New File
      </button>
    </div>
  );
};
