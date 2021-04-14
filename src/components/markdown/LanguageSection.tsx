import * as React from 'react';
import { useContext } from 'react';
import { LANGUAGE_LABELS } from '../../context/UserDataContext/properties/userLang';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import Danger from './Danger';

export const LanguageSection = props => {
  const { lang: userLang } = useContext(UserDataContext);
  const expand = props.isCodeBlockExpandable ?? true;

  const sections = {};
  React.Children.map(props.children, child => {
    const oldChild = child;
    const type = child.props.mdxType;
    const typeToLang = {
      CPPSection: 'cpp',
      JavaSection: 'java',
      PySection: 'py',
    };
    const newChild = React.cloneElement(
      child,
      {
        children: oldChild.props.children,
        mdxType: oldChild.props.mdxType,
        originalType: oldChild.props.originalType,
        isCodeBlockExpandable: expand,
      },
      React.Children.map(child.props.children, grandchild => {
        const oldGrandchild = grandchild;
        if (typeof oldGrandchild.props != 'undefined') {
          const { oldProps } = oldGrandchild.props;
          return React.cloneElement(
            grandchild,
            {
              ...oldProps,
              isCodeBlockExpandable: expand,
            },
            React.Children.map(grandchild.props.children, child2 => {
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
            })
          );
        } else {
          return child;
        }
      })
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
      <Danger
        title={
          "This section isn't yet available in your chosen language: " +
          LANGUAGE_LABELS[userLang] +
          '.' +
          (fallbackLang
            ? ' Defaulting to ' + LANGUAGE_LABELS[fallbackLang] + '.'
            : '')
        }
      >
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
      </Danger>
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
