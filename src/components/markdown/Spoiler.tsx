import React, { Children } from 'react';

function determineIfSingularCodeBlock(
  firstName: string,
  numChildren: number
): boolean {
  return firstName == 'LanguageSection' && numChildren == 1;
}

const Spoiler = ({ children, title }) => {
  let count = 0;
  let numChildren = 0;
  let firstName = 'None';
  let ogProps;

  React.Children.forEach(children, child => {
    if (count == 0) {
      numChildren = React.Children.count(children);
      firstName = child.props.mdxType;
      ogProps = child.props;
    }
    count++;
  });

  count = 0;
  const onlyContainsCode: boolean = determineIfSingularCodeBlock(
    firstName,
    numChildren
  );
  console.log('ONLY CODE: ' + onlyContainsCode);

  const childrenWithProps = React.Children.map(children, child => {
    if (count == 0 && onlyContainsCode) {
      count++;
      return React.cloneElement(child, {
        children: ogProps.children,
        mdxType: 'LanguageSection',
        originalType: ogProps.originalType,
        expandable: false,
      });
    } else {
      return child;
    }
  });

  const [show, setShow] = React.useState(false);

  return (
    <div
      className={`border border-gray-200 dark:border-gray-800 rounded-md mb-4`}
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

      {show && <div className="px-4 spoiler-body">{childrenWithProps}</div>}
    </div>
  );
};

export default Spoiler;
