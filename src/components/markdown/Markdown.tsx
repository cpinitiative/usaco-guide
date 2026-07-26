import * as React from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { components } from './MDXComponents';

interface MarkdownProps {
  body: string;
  modulePath?: string;
}

const Markdown = (props: MarkdownProps): JSX.Element => {
  const [mdxComponent, setMdxComponent] = React.useState<React.ReactNode | null>(null);
  const [error, setError] = React.useState<boolean>(false);
  // Sequence counter guards against stale state from a previous body
  const seqRef = React.useRef(0);

  React.useEffect(() => {
    const seq = ++seqRef.current;
    setError(false);

    try {
      // props.body is the pre-compiled MDX function-body string produced at
      // build time by @mdx-js/mdx with outputFormat:'function-body'.
      // new Function wraps it so we can supply the jsx runtime as an argument.
      const mdxModule = new Function(props.body)({ Fragment, jsx, jsxs });
      const MDXContent = mdxModule.default;
      const rendered = MDXContent({ components });

      if (seqRef.current === seq) {
        setMdxComponent(rendered);
      }
    } catch (err) {
      if (seqRef.current === seq) {
        console.error('Failed to render MDX:', err);
        setError(true);
        setMdxComponent(null);
      }
    }
  }, [props.body]);

  if (error) {
    return (
      <div className="markdown p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded">
        <p className="text-red-800 dark:text-red-200 font-semibold">
          Failed to render content. Please try reloading the page.
        </p>
      </div>
    );
  }

  if (!mdxComponent) {
    return (
      <div className="markdown">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return <div className="markdown">{mdxComponent}</div>;
};

export default React.memo(Markdown);
