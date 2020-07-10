import * as React from 'react';
import Transition from './Transition';
import { ModuleInfo } from '../module';
import { divisionLabels } from '../../content/ordering';
import Slideover from './Slideover/Slideover';

export default function ReportIssueSlideover({
  isOpen,
  onClose,
  activeModule,
}: {
  isOpen: boolean;
  onClose: any;
  activeModule: ModuleInfo;
}) {
  const [issueLocation, setIssueLocation] = React.useState('');
  React.useEffect(() => {
    if (activeModule)
      setIssueLocation(
        `${activeModule.title} - ${divisionLabels[activeModule.division]}`
      );
    else setIssueLocation('');
  }, [activeModule]);
  return (
    <Slideover
      isOpen={isOpen}
      onClose={onClose}
      title="Report an Issue"
      subtitle="If you encounter an error while using the website, please fill out the form below. Thank you!"
      footerButtons={
        <>
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
              onClick={onClose}
            >
              Cancel
            </button>
          </span>
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
            >
              Submit Report
            </button>
          </span>
        </>
      }
    >
      <div className="px-4 divide-y divide-gray-200 sm:px-6">
        <div className="space-y-6 pt-6 pb-5">
          <div className="space-y-1">
            <label
              htmlFor="issue_name"
              className="block text-sm font-medium leading-5 text-gray-900"
            >
              Name (Optional)
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                id="issue_name"
                className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="issue_email"
              className="block text-sm font-medium leading-5 text-gray-900"
            >
              Email (Optional)
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                id="issue_email"
                className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="issue_location"
              className="block text-sm font-medium leading-5 text-gray-900"
            >
              Issue Location
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                id="issue_location"
                className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                value={issueLocation}
                onChange={e => setIssueLocation(e.target.value)}
              />
            </div>
          </div>
          <fieldset className="space-y-2">
            <legend className="text-sm leading-5 font-medium text-gray-900">
              Issue Type
            </legend>
            <div className="space-y-3">
              <div>
                <div className="relative flex items-start">
                  <div className="absolute flex items-center h-5">
                    <input
                      id="type_typo"
                      type="radio"
                      name="type"
                      className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    />
                  </div>
                  <div className="pl-7 text-sm leading-5">
                    <label
                      htmlFor="type_typo"
                      className="font-medium text-gray-900"
                    >
                      Typo
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex items-start">
                  <div className="absolute flex items-center h-5">
                    <input
                      id="issue_broken-link"
                      type="radio"
                      name="type"
                      className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    />
                  </div>
                  <div className="pl-7 text-sm leading-5">
                    <label
                      htmlFor="issue_broken-link"
                      className="font-medium text-gray-900"
                    >
                      Broken Link
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex items-start">
                  <div className="absolute flex items-center h-5">
                    <input
                      id="issue_unclear-explanation"
                      type="radio"
                      name="type"
                      className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    />
                  </div>
                  <div className="pl-7 text-sm leading-5">
                    <label
                      htmlFor="issue_unclear-explanation"
                      className="font-medium text-gray-900"
                    >
                      Unclear Explanation
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex items-start">
                  <div className="absolute flex items-center h-5">
                    <input
                      id="issue_suggestion"
                      type="radio"
                      name="type"
                      className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    />
                  </div>
                  <div className="pl-7 text-sm leading-5">
                    <label
                      htmlFor="issue_suggestion"
                      className="font-medium text-gray-900"
                    >
                      Suggestion
                    </label>
                  </div>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="absolute flex items-center h-5">
                  <input
                    id="issue_website"
                    type="radio"
                    name="type"
                    className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  />
                </div>
                <div className="pl-7 text-sm leading-5">
                  <label
                    htmlFor="issue_website"
                    className="font-medium text-gray-900"
                  >
                    Website Bug
                  </label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="absolute flex items-center h-5">
                  <input
                    id="issue_other"
                    type="radio"
                    name="type"
                    className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  />
                </div>
                <div className="pl-7 text-sm leading-5">
                  <label
                    htmlFor="issue_other"
                    className="font-medium text-gray-900"
                  >
                    Other
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="space-y-1">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-5 text-gray-900"
            >
              Description
            </label>
            <div className="relative rounded-md shadow-sm">
              <textarea
                id="description"
                rows={4}
                className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"
              />
            </div>
          </div>
        </div>
      </div>
    </Slideover>
  );
}
