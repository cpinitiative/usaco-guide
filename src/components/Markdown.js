import React from "react";
import rehypeReact from "rehype-react"

import "katex/dist/katex.min.css";
import "../components/prism-theme.css";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
  },
}).Compiler;

const Markdown = ({ htmlAst }) => {
  return (
    <div className="markdown">
      {renderAst(htmlAst)}
    </div>
  );
};

export default Markdown;