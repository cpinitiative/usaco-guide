import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { SECTION_LABELS } from '../../../content/ordering';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import useContactFormAction from '../../hooks/useContactFormAction';
import useStickyState from '../../hooks/useStickyState';
import { ModuleInfo } from '../../models/module';
import SlideoverForm from './SlideoverForm';

// Warning: this file is insanely messy. This should be rewritten soon :)

const Field = ({ label, id, value, onChange, errorMsg = null }) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 text-gray-900 dark:text-dark-high-emphasis"
      >
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          id={id}
          className={
            'input' +
            (errorMsg
              ? ' pr-10 border-red-300 dark:border-red-300 text-red-900 dark:text-red-300 placeholder-red-300 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 dark:focus:ring-red-300'
              : '')
          }
          value={value}
          onChange={onChange}
        />
        {errorMsg && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
      {errorMsg && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function ContactUsSlideover({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeModule?: ModuleInfo;
}): JSX.Element {
  const userSettings = useContext(UserDataContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [topic, setTopic] = useStickyState('', 'contact_form_topic');
  const topics = [
    'Typo / Broken Link',
    'Request - Missing Section or Editorial',
    'Unclear Explanation',
    'Website Bug',
    'Suggestion',
    // 'Request - Problem Editorial',
    // 'I want to contribute!',
    'Other',
  ];
  const [message, setMessage] = useStickyState('', 'contact_form_message');
  const [showSuccess, setShowSuccess] = useState(false);
  const [issueLink, setIssueLink] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const [showErrors, setShowErrors] = useState(false);

  const markdownContext = useContext(MarkdownLayoutContext);
  const submitForm = useContactFormAction();

  React.useEffect(() => {
    const activeModule = markdownContext?.markdownLayoutInfo;
    if (activeModule && activeModule instanceof ModuleInfo) {
      setLocation(
        `${SECTION_LABELS[activeModule.section]} - ${activeModule.title}`
      );
    } else setLocation('');
  }, [markdownContext?.markdownLayoutInfo]);

  const { firebaseUser } = useContext(UserDataContext);
  useEffect(() => {
    if (!firebaseUser) return;
    if (email === '') {
      setEmail(firebaseUser.email);
    }
    if (name === '') {
      setName(firebaseUser.displayName);
    }
  }, [firebaseUser]);

  React.useEffect(() => {
    if (isOpen) {
      setShowSuccess(false);
      setShowErrors(false);
      setSubmitEnabled(true);
    }
  }, [isOpen]);

  const handleSubmit = async e => {
    e.preventDefault();

    setShowErrors(true);
    if (
      name === '' ||
      email === '' ||
      !validateEmail(email) ||
      topic === '' ||
      message === ''
    ) {
      return;
    }
    setSubmitEnabled(false);
    try {
      const response = await submitForm({
        name,
        email,
        moduleName: location,
        url: window.location.href,
        lang: userSettings.lang,
        topic,
        message,
      });
      setTopic('');
      setMessage('');
      setShowSuccess(true);
      setIssueLink(response.data as string);
    } catch (e) {
      setSubmitEnabled(true);
      alert('Form submission failed: ' + e.message);
    } finally {
      setShowErrors(false);
    }
  };

  return (
    <SlideoverForm
      isOpen={isOpen}
      onClose={onClose}
      title="Contact Us"
      subtitle={
        <>
          Contact us about anything: suggestions, bugs, assistance, and more!
          This will be submitted as a public{' '}
          <a
            href="https://github.com/cpinitiative/usaco-guide/issues"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Github issue
          </a>
          .
        </>
      }
      footerButtons={
        <>
          <span className="inline-flex rounded-md shadow-sm">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </span>
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              disabled={!submitEnabled}
              className={`btn-primary`}
            >
              Contact Us
            </button>
          </span>
        </>
      }
      onSubmit={handleSubmit}
    >
      <div className="bg-gray-50 dark:bg-gray-900 mb-4">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
            Ask on the USACO Forum!
          </h3>
          <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500 dark:text-gray-400">
            <p>
              Get a faster response by reaching out on the USACO Forum instead.
            </p>
          </div>
          <div className="mt-5">
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="https://forum.usaco.guide/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Join Forum
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6">
        {showSuccess && (
          <div className="rounded-md bg-green-50 dark:bg-green-800 p-4">
            <div className="flex">
              <div className="flex-grow-0">
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
                  Message received!
                </h3>
                <div className="mt-2 text-sm leading-5 text-green-700 dark:text-dark-high-emphasis">
                  <p>
                    Your message has been submitted as an issue in our GitHub
                    repository. You can track the issue here:{' '}
                    <a
                      href={issueLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold hover:underline"
                    >
                      {issueLink}
                    </a>
                  </p>
                  {/* <p className="pt-2">
                    For urgent requests, please feel free to email{' '}
                    <a
                      href="mailto:nathan.r.wang@gmail.com"
                      className="underline text-blue-600"
                    >
                      nathan.r.wang@gmail.com
                    </a>
                    .
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {!showSuccess && (
          <div className="space-y-6 pb-5">
            <Field
              label="Name (will not be shown publicly)"
              id="contact_name"
              value={name}
              onChange={e => setName(e.target.value)}
              errorMsg={
                showErrors && name === '' ? 'This field is required.' : null
              }
            />
            <Field
              label="Email (will not be shown publicly)"
              id="contact_email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              errorMsg={
                showErrors
                  ? email === ''
                    ? 'This field is required.'
                    : !validateEmail(email)
                    ? 'Please enter a valid email address.'
                    : null
                  : null
              }
            />
            <Field
              label="Module (if applicable)"
              id="contact_module"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <fieldset className="space-y-2">
              <legend className="text-sm leading-5 font-medium text-gray-900 dark:text-dark-high-emphasis">
                Topic
              </legend>
              <div className="space-y-3">
                {topics.map((t, idx) => (
                  <div key={idx}>
                    <div className="relative flex items-start">
                      <div className="absolute flex items-center h-5">
                        <input
                          id={`contact_topic_${idx}`}
                          type="radio"
                          name="type"
                          className="form-radio h-4 w-4 text-blue-600 dark:bg-gray-600 dark:focus:ring-offset-dark-surface"
                          checked={topic === t}
                          onChange={() => setTopic(t)}
                        />
                      </div>
                      <div className="pl-7 text-sm leading-5">
                        <label
                          htmlFor={`contact_topic_${idx}`}
                          className="font-medium text-gray-900 dark:text-dark-high-emphasis"
                        >
                          {t}
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
                {showErrors && topic === '' && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    This field is required.
                  </p>
                )}
              </div>
            </fieldset>
            <div className="space-y-1">
              <label
                htmlFor="contact_message"
                className="block text-sm font-medium leading-5 text-gray-900 dark:text-dark-high-emphasis"
              >
                Message (markdown is supported)
              </label>
              <div className="relative rounded-md shadow-sm">
                <textarea
                  id="contact_message"
                  rows={4}
                  className={
                    'textarea ' +
                    (showErrors && message === ''
                      ? 'border-red-300 dark:border-red-300 text-red-900 dark:text-red-300 placeholder-red-300 focus:border-red-300 dark:focus:border-red-300  focus:ring-red-300 dark:focus:ring-red-300'
                      : '')
                  }
                  value={message}
                  onChange={e => setMessage(e.target.value)}
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
          </div>
        )}
      </div>
    </SlideoverForm>
  );
}
