import UserDataContext, { UserLang } from '../../context/UserDataContext';
import { useContext } from 'react';
import * as React from 'react';

const SidebarBottomButtons = ({ onContactUs }) => {
  const languages = {
    showAll: 'All',
    cpp: 'C++',
    java: 'Java',
    py: 'Python',
  };
  const nextLang: { [key: string]: UserLang } = {
    showAll: 'cpp',
    cpp: 'java',
    java: 'py',
    py: 'cpp',
  };
  const userSettings = useContext(UserDataContext);
  return (
    <>
      <div className="flex-shrink-0 border-t border-gray-200 flex">
        <button
          className="group flex-1 flex items-center p-4 text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={() => userSettings.setLang(nextLang[userSettings.lang])}
        >
          <svg
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Language: {languages[userSettings.lang]}
        </button>
      </div>
      <div className="flex-shrink-0 border-t border-gray-200 flex">
        <button
          className="group flex-1 flex items-center p-4 text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={onContactUs}
        >
          <svg
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Contact Us
        </button>
      </div>
    </>
  );
};

export default SidebarBottomButtons;
