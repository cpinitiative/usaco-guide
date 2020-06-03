import React from "react";
import { Link } from "gatsby";

const SyllabusModule = ({ title, children, url }) => {
  // in the future, fetch this data either from localStorage or from server.
  const isComplete = title === "Prerequisites" || title === "What is Competitive Programming?";

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
      <div className="border-b border-gray-200 px-4 py-4 sm:px-6  flex items-center">
        <h2 className="font-bold text-xl mr-2">
          {title}
        </h2>
        {isComplete &&
        <svg className="h-8 w-8 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round"
             strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>}
      </div>
      <div className="px-4 py-4 sm:p-6">
        {children}
      </div>
      <Link to={url || "/"}
            className="block border-t border-gray-200 px-4 py-4 sm:px-6 text-blue-600 font-bold uppercase text-sm hover:bg-gray-50 transition duration-150">
        {url ? "View Module" : "Incomplete Module, Please Help!"}
      </Link>
    </div>
  );
};

export default SyllabusModule;