import * as React from 'react';
import { useContext } from 'react';
import { LANGUAGE_LABELS } from '../../context/UserDataContext/properties/userLang';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import Danger from './Danger';

const sectionFromLang = sections => {
  const { lang: userLang } = useContext(UserDataContext);
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
    for (const lang of langs) {
      if (sections.hasOwnProperty(lang)) {
        fallbackLang = lang;
        break;
      }
    }
    const notAvailable = (
      <Danger
        title={`This section isn't yet available in your chosen language: ${
          LANGUAGE_LABELS[userLang]
        }.${
          fallbackLang
            ? ' Defaulting to ' + LANGUAGE_LABELS[fallbackLang] + '.'
            : ''
        }`}
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

export const LanguageSection = (props: {
  children?: React.ReactNode;
}): JSX.Element => {
  const sections = {};
  React.Children.map(props.children, child => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const type = (child as any).type.name;
    const typeToLang = {
      CPPSection: 'cpp',
      JavaSection: 'java',
      PySection: 'py',
    };
    sections[typeToLang[type]] = child;
  });
  return sectionFromLang(sections);
};

export const CPPOnly = (props: { children?: React.ReactNode }): JSX.Element => {
  return sectionFromLang({
    cpp: props.children,
    java: <></>,
    py: <></>,
  });
};
export const JavaOnly = (props: {
  children?: React.ReactNode;
}): JSX.Element => {
  return sectionFromLang({
    cpp: <></>,
    java: props.children,
    py: <></>,
  });
};

export const PyOnly = (props: { children?: React.ReactNode }): JSX.Element => {
  return sectionFromLang({
    cpp: <></>,
    java: <></>,
    py: props.children,
  });
};

export const CPPSection = (props: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <>{props.children}</>;
};

export const JavaSection = (props: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <>{props.children}</>;
};

export const PySection = (props: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <>{props.children}</>;
};
