import * as React from 'react';
import {
  Language,
  LANGUAGE_LABELS,
  useUserLangSetting,
} from '../../context/UserDataContext/properties/simpleProperties';
import Danger from './Danger';

const useSectionFromLang = (sections: {
  [key in Language]?: React.ReactNode;
}) => {
  const userLang = useUserLangSetting();
  if (userLang === 'showAll') {
    return (
      <>
        {(Object.keys(sections) as Language[]).map(lang => (
          <div key={lang}>
            <p className="text-lg font-bold">{LANGUAGE_LABELS[lang]}</p>
            {sections[lang]}
          </div>
        ))}
      </>
    );
  }

  if (!sections.hasOwnProperty(userLang)) {
    const langs = ['cpp', 'java', 'py'] as const;
    let fallbackLang: Language = 'cpp';
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
          GitHub
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
}): React.ReactNode => {
  const sections: { [key in Language]?: React.ReactNode } = {};
  const typeToLang = {
    CPPSection: 'cpp',
    JavaSection: 'java',
    PySection: 'py',
  } as const;
  React.Children.map(props.children, child => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const type = (child as any).type.name as keyof typeof typeToLang;
    sections[typeToLang[type]] = child;
  });
  return useSectionFromLang(sections);
};

export const CPPOnly = (props: {
  children?: React.ReactNode;
}): React.ReactNode => {
  return useSectionFromLang({
    cpp: props.children,
    java: <></>,
    py: <></>,
  });
};
export const JavaOnly = (props: {
  children?: React.ReactNode;
}): React.ReactNode => {
  return useSectionFromLang({
    cpp: <></>,
    java: props.children,
    py: <></>,
  });
};

export const PyOnly = (props: {
  children?: React.ReactNode;
}): React.ReactNode => {
  return useSectionFromLang({
    cpp: <></>,
    java: <></>,
    py: props.children,
  });
};

export const CPPSection = (props: {
  children?: React.ReactNode;
}): React.ReactNode => {
  return <>{props.children}</>;
};

export const JavaSection = (props: {
  children?: React.ReactNode;
}): React.ReactNode => {
  return <>{props.children}</>;
};

export const PySection = (props: {
  children?: React.ReactNode;
}): React.ReactNode => {
  return <>{props.children}</>;
};
