import * as React from 'react';
import { ModuleInfo } from '../models/module';
import { SECTION_LABELS } from '../../content/ordering';
import SlideoverForm from './Slideover/SlideoverForm';
import { useState } from 'react';
import useStickyState from '../hooks/useStickyState';

// Warning: this file is insanely messy. This should be rewritten soon :)

const Field = ({ label, id, value, onChange, errorMsg = null }) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 text-gray-900"
      >
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          id={id}
          className={
            'form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150 ' +
            (errorMsg
              ? 'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
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
      {errorMsg && <p className="mt-2 text-sm text-red-600">{errorMsg}</p>}
    </div>
  );
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function ContactUsSlideover({
  isOpen,
  onClose,
  activeModule,
}: {
  isOpen: boolean;
  onClose: any;
  activeModule: ModuleInfo;
}) {
  const [name, setName] = useStickyState('', 'contact_form_name');
  const [email, setEmail] = useStickyState('', 'contact_form_email');
  const [location, setLocation] = useState('');
  const [topic, setTopic] = useStickyState('', 'contact_form_topic');
  const topics = [
    'Unclear Explanation',
    'Problem Editorial Request',
    'Typo / Broken Link',
    'Suggestion',
    'Website Bug',
    'Other',
  ];
  const [message, setMessage] = useStickyState('', 'contact_form_message');
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const [showErrors, setShowErrors] = useState(false);

  React.useEffect(() => {
    if (activeModule)
      setLocation(
        `${activeModule.title} - ${SECTION_LABELS[activeModule.section]}`
      );
    else setLocation('');
  }, [activeModule]);

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
      message === ''
    ) {
      return;
    }

    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('location', location);
    data.append('topic', topic);
    data.append('message', message);
    setSubmitEnabled(false);
    try {
      await fetch(
        'https://formsubmit.co/ajax/da14a047686367521c3c8c5a79b03c97',
        {
          method: 'POST',
          mode: 'no-cors',
          body: data,
        }
      );
      setTopic('');
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
    <SlideoverForm
      isOpen={isOpen}
      onClose={onClose}
      title="Contact Us"
      subtitle="Contact us about anything: suggestions, bugs, assistance, and more! Don't submit any personal information through this form."
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
              disabled={!submitEnabled}
              className={`inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white transition duration-150 ease-in-out ${
                submitEnabled
                  ? 'bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700'
                  : 'bg-blue-400 focus:outline-none cursor-default'
              }`}
            >
              Contact Us
            </button>
          </span>
        </>
      }
      onSubmit={handleSubmit}
    >
      <div className="px-4 sm:px-6">
        {showSuccess && (
          <div className="rounded-md bg-green-50 p-4 mt-6">
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
                <h3 className="text-sm leading-5 font-medium text-green-800">
                  Message received!
                </h3>
                <div className="mt-2 text-sm leading-5 text-green-700">
                  <p>
                    We will try our best to respond (if one is needed) within a
                    week.
                  </p>
                  <p className="pt-2">
                    For urgent requests, please feel free to email{' '}
                    <a
                      href="mailto:nathan.r.wang@gmail.com"
                      className="underline text-blue-600"
                    >
                      nathan.r.wang@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {!showSuccess && (
          <div className="space-y-6 pt-6 pb-5">
            <Field
              label="Name"
              id="contact_name"
              value={name}
              onChange={e => setName(e.target.value)}
              errorMsg={
                showErrors && name === '' ? 'This field is required.' : null
              }
            />
            <Field
              label="Email"
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
              label="Module (If Applicable)"
              id="contact_module"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <fieldset className="space-y-2">
              <legend className="text-sm leading-5 font-medium text-gray-900">
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
                          className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                          checked={topic === t}
                          onChange={() => setTopic(t)}
                        />
                      </div>
                      <div className="pl-7 text-sm leading-5">
                        <label
                          htmlFor={`contact_topic_${idx}`}
                          className="font-medium text-gray-900"
                        >
                          {t}
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
            <div className="space-y-1">
              <label
                htmlFor="contact_message"
                className="block text-sm font-medium leading-5 text-gray-900"
              >
                Message
              </label>
              <div className="relative rounded-md shadow-sm">
                <textarea
                  id="contact_message"
                  rows={4}
                  className={
                    'form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150 ' +
                    (showErrors && message === ''
                      ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
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
                <p className="mt-2 text-sm text-red-600">
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
