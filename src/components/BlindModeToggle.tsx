import React from "react";
import { useBlindMode } from "../context/BlindModeContext";

export default function BlindModeToggle() {
  const { isBlindMode, toggleBlindMode } = useBlindMode();

  return (
    <button
      onClick={toggleBlindMode}
      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      title={isBlindMode ? "Show 'Appears in' tags" : "Hide 'Appears in' tags"}
    >
      <svg
        className={`mr-2 h-5 w-5 ${
          isBlindMode ? "text-blue-500" : "text-gray-400"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      {isBlindMode ? "Show tags" : "Hide tags"}
    </button>
  );
}
