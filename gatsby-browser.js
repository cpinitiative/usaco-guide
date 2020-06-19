import "./src/styles/main.css";
import React from "react";
import { MDXProvider } from "@mdx-js/react";

const SpoilerComponent = ({ children, title }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className={`border border-gray-200 rounded-md`}>
      <p className="p-4 flex items-start"
         onClick={e => setShow(!show)} style={{ marginBottom: 0 }}>
        {show && <svg className="h-6 w-6 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>}
        {!show && <svg className="h-6 w-6 text-gray-500 mr-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>}
        {title}
      </p>

      {show && <div className="p-4 pt-0 spoiler-body">{children}</div>}
    </div>
  );
};

const components = {
  wrapper: ({ excerptOnly = false, children }) => {
    if (excerptOnly) {
      for (let child of children) {
        if (child.props.originalType === "module-excerpt") return child;
      }
      return null;
    }

    return children;
  },
  "module-excerpt": (props) => <div {...props} />,
  spoiler: SpoilerComponent,
  "info-block": ({ children }) => (
    <div className="rounded-md bg-blue-50 p-4 info-block mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          {children}
        </div>
      </div>
    </div>
  ),
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider
    components={components}>
    {element}
  </MDXProvider>
);