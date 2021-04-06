import * as React from 'react';
import { useContext } from 'react';
import { LANGUAGE_LABELS } from '../../context/UserDataContext/properties/userLang';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

export const LanguageSection = props => {
  const { lang: userLang } = useContext(UserDataContext);
  const expand = props.isCodeBlockExpandable ?? true;

  const sections = {};
  React.Children.map(props.children, child => {
    const oldChild = child;
    const newChild = React.cloneElement(child, {
      children: oldChild.props.children,
      mdxType: oldChild.props.mdxType,
      originalType: oldChild.props.originalType,
      isCodeBlockExpandable: expand,
    });
    const type = child.props.mdxType;
    const typeToLang = {
      CPPSection: 'cpp',
      JavaSection: 'java',
      PySection: 'py',
    };

    newChild.props.children = React.Children.map(
      newChild.props.children,
      grandchild => {
        const oldGrandchild = grandchild;
        if (typeof oldGrandchild.props != 'undefined') {
          const { oldProps } = oldGrandchild.props;
          const newGrandchild = React.cloneElement(grandchild, {
            ...oldProps,
            isCodeBlockExpandable: expand,
          });

          newGrandchild.props.children = React.Children.map(
            newGrandchild.props.children,
            child2 => {
              const ogChild2 = child2;
              if (typeof ogChild2.props != 'undefined') {
                const { oldProps2 } = ogChild2.props;
                return React.cloneElement(child2, {
                  ...oldProps2,
                  isCodeBlockExpandable: expand,
                });
              } else {
                return child2;
              }
            }
          );

          return newGrandchild;
        } else {
          return child;
        }
      }
    );

    sections[typeToLang[type]] = newChild;
  });

  if (userLang === 'showAll') {
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

  if (!sections.hasOwnProperty(userLang)) {
    const langs = ['cpp', 'java', 'py'];
    let fallbackLang = '';
    for (const lang of langs)
      if (sections.hasOwnProperty(lang)) {
        fallbackLang = lang;
        break;
      }
    const notAvailable = (
      <div className="p-4 bg-red-50 rounded-md dark:bg-red-900 mb-4">
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
              {LANGUAGE_LABELS[userLang]}.
              {fallbackLang && (
                <> Defaulting to {LANGUAGE_LABELS[fallbackLang]}.</>
              )}
            </h3>
            <div className="mt-2 text-sm leading-5 text-red-700 dark:text-red-300">
              {/* Please choose a different default language for now.  */}
              Submitting a Pull Request on{' '}
              <a
                href="https://github.com/cpinitiative/usaco-guide"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>{' '}
              to help add support for {LANGUAGE_LABELS[userLang]} would be
              appreciated!
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <>
        {notAvailable}
        {fallbackLang && sections[fallbackLang]}
      </>
    );
  }
  return sections[userLang];
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
