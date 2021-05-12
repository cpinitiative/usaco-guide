import React from 'react';

export interface SpoilerProps {
  title: string;
  /**
   * Whether or not the spoiler should start expanded.
   * Defaults to false.
   */
  startExpanded?: boolean;
}

export const SpoilerContext = React.createContext<{
  /**
   * If true, code blocks should be expanded by default. This is the case if
   * the spoiler's only child is a code block, which means that the code block
   * should just always be expanded.
   */
  expandCodeBlock: boolean;
}>({
  expandCodeBlock: false,
});

const Spoiler: React.FC<SpoilerProps> = ({
  children,
  title,
  startExpanded = false,
}) => {
  const [show, setShow] = React.useState(startExpanded);

  let expandCodeBlock = false;
  const arrChildren = React.Children.toArray(children);
  if (
    arrChildren.length === 1 &&
    (arrChildren[0] as any).type?.name === 'pre'
  ) {
    expandCodeBlock = true;
  } else if (
    arrChildren.length === 1 &&
    (arrChildren[0] as any).type?.name === 'LanguageSection'
  ) {
    // note: this should ideally check each language section to make sure it only has one child
    expandCodeBlock = true;
  }

  return (
    <div
      className={`bg-gray-50 border border-gray-100 dark:border-transparent dark:bg-gray-800 dark:bg-opacity-50 rounded-md mb-4`}
    >
      <p
        className="p-4 flex items-start"
        onClick={e => {
          setShow(!show);
        }}
        style={{ marginBottom: 0 }}
      >
        {show && (
          <svg
            className="h-6 w-6 text-gray-500 mr-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {!show && (
          <svg
            className="h-6 w-6 text-gray-500 mr-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span className="flex-1">{title}</span>
      </p>

      {show && (
        <div className="p-4 spoiler-body bg-white dark:bg-dark-surface dark:bg-opacity-40 no-y-margin">
          <SpoilerContext.Provider value={{ expandCodeBlock }}>
            {children}
          </SpoilerContext.Provider>
        </div>
      )}
    </div>
  );
};

export default Spoiler;
