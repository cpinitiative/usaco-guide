import * as React from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useContext } from 'react';
import { LANGUAGE_LABELS } from '../../context/UserDataContext/properties/userLang';

export const LanguageSection = props => {
  const { lang } = useContext(UserDataContext);

  let sections = {};
  React.Children.map(props.children, child => {
    let type = child.props.mdxType;
    if (type === 'CPPSection') sections['cpp'] = child;
    if (type === 'JavaSection') sections['java'] = child;
    if (type === 'PySection') sections['py'] = child;
  });

  if (lang === 'showAll') {
    return (
      <>
        {Object.keys(sections).map(lang => (
          <div key={lang}>
            <p className="text-lg font-bold">{LANGUAGE_LABELS[lang]}</p>
            {sections[lang]}
          </div>
        ))}
      </>
    );
  }

  if (!sections.hasOwnProperty(lang)) {
    return (
      <div className="p-4 bg-red-50 rounded-md dark:bg-red-900">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm leading-5 font-medium text-red-800 dark:text-red-200">
              This section isn't yet available in your chosen language:{' '}
              {LANGUAGE_LABELS[lang]}.
            </h3>
            <div className="mt-2 text-sm leading-5 text-red-700 dark:text-red-300">
              Please choose a different default language for now. Feel free to
              file a request to add support for {LANGUAGE_LABELS[lang]} using
              the "Contact Us" button.
            </div>
          </div>
        </div>
      </div>
    );
  }
  return sections[lang];
};

export const CPPSection = props => {
  return <>{props.children}</>;
};

export const JavaSection = props => {
  return <>{props.children}</>;
};

export const PySection = props => {
  return <>{props.children}</>;
};
