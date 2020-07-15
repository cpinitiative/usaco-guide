import * as React from 'react';
import { ModuleInfo } from '../module';
import { divisionLabels } from '../../content/ordering';
import SlideoverForm from './Slideover/SlideoverForm';
import { useState } from 'react';
import useStickyState from '../hooks/useStickyState';

const Field = ({ label, id, value, onChange }) => {
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
          className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

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

  React.useEffect(() => {
    if (activeModule)
      setLocation(
        `${activeModule.title} - ${divisionLabels[activeModule.division]}`
      );
    else setLocation('');
  }, [activeModule]);

  React.useEffect(() => {
    if (isOpen) {
      setShowSuccess(false);
      setSubmitEnabled(true);
    }
  }, [isOpen]);

  const handleSubmit = async e => {
    e.preventDefault();
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
          <>
            <p className="pt-6">
              We've received your message! We will try our best to respond (if
              one is needed) within a week.
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
          </>
        )}
        {!showSuccess && (
          <div className="space-y-6 pt-6 pb-5">
            <Field
              label="Name"
              id="contact_name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Field
              label="Email"
              id="contact_email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
                  className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </SlideoverForm>
  );
}
