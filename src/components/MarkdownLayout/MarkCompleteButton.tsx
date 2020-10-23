import * as React from 'react';
import Transition from '../Transition';
import { ModuleProgressOptions } from '../../models/module';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DoneIcon from '@material-ui/icons/Done';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import StarIcon from '@material-ui/icons/Star';
import BookmarkIcon from '@material-ui/icons/Book';
import BeenHereIcon from '@material-ui/icons/BeenHere';
import { blue, blueGrey, green, yellow } from '@material-ui/core/colors';
import { func } from 'prop-types';

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
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    })
  );
  React.useEffect(() => {
    const handleClick = e => {
      // @ts-ignore
      if (ref.current.contains(e.target)) return;
      setShow(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  const icon = (status: string) => {
    switch (status) {
      case 'Reading':
        return <MenuBookIcon style={{ color: blue[500] }} fontSize="small" />;
      case 'Complete':
        return <DoneIcon style={{ color: green[500] }} fontSize="small" />;
      case 'Practicing':
        return <FitnessCenterIcon fontSize="small" />;
      case 'Skipped':
        return <StarIcon fontSize="small" style={{ color: yellow[700] }} />;
      case 'Ignored':
        return (
          <BookmarkIcon fontSize="small" style={{ color: blueGrey[700] }} />
        );
    }
  };
  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <span className="rounded-md shadow-sm">
          <Button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-800 px-4 py-2 bg-white dark:bg-gray-900 text-sm leading-5 font-medium text-gray-700 dark:text-dark-high-emphasis hover:text-gray-500 dark-hover:text-dark-high-emphasis focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150"
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
          </Button>
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
                <Button
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-800 px-4 py-2 bg-white dark:bg-gray-900 text-sm leading-5 font-medium text-gray-700 dark:text-dark-high-emphasis hover:text-gray-500 dark-hover:text-dark-high-emphasis focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150"
                  size="small"
                  key={option}
                  onClick={() => handleSelect(option)}
                  role="menuitem"
                >
                  {icon(option)} &nbsp;&nbsp;{option}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MarkCompleteButton;
