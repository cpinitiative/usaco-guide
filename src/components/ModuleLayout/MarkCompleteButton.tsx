import * as React from 'react';
import Transition from '../Transition';
import { ModuleProgressOptions } from '../../context/UserDataContext';

const MarkCompleteButton = ({
  state,
  onChange,
  dropdownAbove,
}: {
  state: string;
  onChange: Function;
  dropdownAbove?: boolean;
}) => {
  const [show, setShow] = React.useState(false);
  const handleSelect = option => {
    setShow(false);
    onChange(option);
  };
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = e => {
      // @ts-ignore
      if (ref.current.contains(e.target)) return;
      setShow(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setShow(!show)}
          >
            {state}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      <Transition
        show={show}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={`${
            dropdownAbove
              ? 'origin-bottom-right bottom-0 mb-12'
              : 'origin-top-right'
          } right-0 absolute z-10 mt-2 w-32 rounded-md shadow-lg`}
        >
          <div className="rounded-md bg-white shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {ModuleProgressOptions.map(option => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MarkCompleteButton;
