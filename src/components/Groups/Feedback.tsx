import classNames from 'classnames';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function Feedback(): JSX.Element {
  const baseClasses =
    'rounded-full border h-8 w-8 text-xl transform transition focus:outline-none';
  const unselectedClasses = 'hover:scale-110 border-gray-200';
  const selectedClasses = 'scale-110 border-teal-600';

  const [selected, setSelected] = useState<
    'terrible' | 'bad' | 'good' | 'great' | null
  >(null);

  const submitFeedback = feedback => {
    if (selected === feedback) {
      setSelected(null);
      // todo reset feedback
    } else {
      toast.promise(
        (() =>
          new Promise(resolve => {
            // todo save feedback
            setTimeout(resolve, 100);
          }))(),
        {
          loading: 'Submitting...',
          success: 'Thanks for the feedback!',
          error: 'Error submitting feedback.',
        }
      );
      setSelected(feedback);
    }
  };

  return (
    <>
      <div className="text-center">
        <div className="font-medium">How was the video?</div>
        <span className="flex items-center space-x-2 justify-center">
          <button
            type="button"
            title={'Rate video as Terrible'}
            className={classNames(
              baseClasses,
              selected === 'terrible' ? selectedClasses : unselectedClasses
            )}
            onClick={() => submitFeedback('terrible')}
          >
            😨
          </button>
          <button
            type="button"
            title={'Rate video as Bad'}
            className={classNames(
              baseClasses,
              selected === 'bad' ? selectedClasses : unselectedClasses
            )}
            onClick={() => submitFeedback('bad')}
          >
            🤨
          </button>
          <button
            type="button"
            title={'Rate video as Good'}
            className={classNames(
              baseClasses,
              selected === 'good' ? selectedClasses : unselectedClasses
            )}
            onClick={() => submitFeedback('good')}
          >
            😀
          </button>
          <button
            title={'Rate video as Great'}
            type="button"
            className={classNames(
              baseClasses,
              selected === 'great' ? selectedClasses : unselectedClasses
            )}
            onClick={() => submitFeedback('great')}
          >
            😍
          </button>
        </span>
      </div>
      <div className="h-4" />
      {selected !== null && (
        <>
          <textarea
            required
            className="text-sm w-full mt-4 px-2 py-2 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md mr-2"
            placeholder="Give Additional Video Feedback"
          />

          <button
            type="submit"
            className="items-center mt-2 sm:mt-0 px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
          >
            Submit Additional Feedback
          </button>
        </>
      )}
    </>
  );
}
