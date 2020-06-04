import React from "react";
import rehypeReact from "rehype-react"

import "katex/dist/katex.min.css";
import "../components/prism-theme.css";
import "./spoiler.css"

const SpoilerComponent = ({ children }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className={`px-4 border border-gray-200 rounded-md spoiler ${show?"spoiler--show":"spoiler--hide"}`}
         onClick={e => {if (e.target.classList.contains("spoiler-label")) setShow(!show) }}>
      {children}
    </div>
  );
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    details: SpoilerComponent,
    summary: ({ children }) => (
      <p className="spoiler-label py-4 flex items-start">
        <svg className="h-6 w-6 text-gray-500 mr-4 spoiler-label__open" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <svg className="h-6 w-6 text-gray-500 mr-4 spoiler-label__closed" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        {children}
      </p>
    )
  },
}).Compiler;

const Markdown = ({ htmlAst, className }) => {
  return (
    <div className={`markdown ${className}`}>
      {renderAst(htmlAst)}
    </div>
  );
};

export default Markdown;