import * as React from 'react';
import UserDataContext, {
  LANGUAGE_LABELS,
} from '../../context/UserDataContext';
import { useContext } from 'react';

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
      <div className="p-4 bg-red-100 text-red-800 rounded">
        <b>
          This section isn't yet available in your chosen language:{' '}
          {LANGUAGE_LABELS[lang]}.
        </b>{' '}
        Please choose a different default language for now. Feel free to file a
        request to add support for {LANGUAGE_LABELS[lang]} using the "Contact
        Us" button.
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
