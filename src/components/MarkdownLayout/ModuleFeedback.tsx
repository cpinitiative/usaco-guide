import * as React from 'react';
import { SolutionInfo } from '../../models/solution';
import { ModuleInfo } from '../../models/module';
import useStickyState from '../../hooks/useStickyState';
import { useState } from 'react';

export default function ModuleFeedback({
  markdownData,
}: {
  markdownData: ModuleInfo | SolutionInfo;
}) {
  const [showErrors, setShowErrors] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const [message, setMessage] = useStickyState(
    '',
    'module_contact_form_message'
  );
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setShowErrors(true);
    if (message === '') return;

    let data = new FormData();
    data.append(
      'location',
      'Feedback on ' + markdownData.title + ' (id: ' + markdownData.id + ')'
    );
    data.append('topic', 'Module Feedback Form');
    data.append('message', message);
    setSubmitEnabled(false);
    try {
      await fetch('https://formsubmit.co/ajax/usacoguide@gmail.com', {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });
      setMessage('');
      setShowSuccess(true);
    } catch (e) {
      setSubmitEnabled(true);
      alert('Form submission failed: ' + e.message);
    } finally {
      setShowErrors(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Give Us Feedback on {markdownData.title}!
      </h2>

      {showSuccess && (
        <div className="rounded-md bg-green-50 dark:bg-green-800 p-4 mt-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm leading-5 font-medium text-green-800 dark:text-dark-high-emphasis">
                Thanks for the feedback!
              </h3>
              <div className="mt-2 text-sm leading-5 text-green-700 dark:text-dark-high-emphasis">
                <p>
                  If you want a response from us, use the "Contact Us" button on
                  the lower right of the screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showSuccess && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <div className="relative rounded-md shadow-sm">
              <textarea
                id="message"
                rows={4}
                className={
                  'form-input block w-full transition ease-in-out duration-150 dark:bg-gray-900 dark:border-gray-700 ' +
                  (showErrors && message === ''
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
                    : '')
                }
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Unclear sections, mislabeled problems, etc"
              />
              {showErrors && message === '' && (
                <div className="absolute top-0 pt-2 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            {showErrors && message === '' && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                This field is required.
              </p>
            )}
          </div>
          <div className="mt-4">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                disabled={!submitEnabled}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white ${
                  submitEnabled
                    ? 'bg-blue-600 dark:bg-blue-900 hover:bg-blue-500 dark-hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700'
                    : 'bg-blue-400 dark:bg-blue-800 focus:outline-none cursor-default'
                } transition ease-in-out duration-150`}
              >
                Share Feedback
              </button>
            </span>
          </div>
        </form>
      )}
    </>
  );
}
