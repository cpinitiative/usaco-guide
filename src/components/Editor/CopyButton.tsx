// source: https://codesandbox.io/p/sandbox/copy-to-clipboard-animation-qt8pf
import React from "react";

export default function CopyButton({ className, onClick }) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <button
      onClick={() => {
        setCopied(true);
        onClick();
      }}
      className={`cursor-pointer appearance-none border-0 p-2 outline-hidden ${className}`}
    >
      <div className="relative h-4 w-4">
        <Clippy
          style={{
            strokeDasharray: "50 50",
            strokeDashoffset: copied ? 50 : 100,
            transition: "all 300ms ease-in-out",
          }}
        />
        <Check
          style={{
            strokeDasharray: "50 50",
            strokeDashoffset: copied ? 100 : 50,
            transition: "all 300ms ease-in-out",
          }}
        />
      </div>
    </button>
  );
}

function Clippy(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute top-0 left-0 stroke-gray-400 stroke-[1.5]"
      {...props}
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

function Check(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className="absolute top-0 left-0 stroke-green-500 stroke-[1.5]"
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}
