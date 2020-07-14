import * as React from 'react';
import UserSettingsContext from '../../context/UserSettingsContext';
import { useContext } from 'react';

export const LanguageSection = props => {
  const userSettings = useContext(UserSettingsContext);
  let lang = userSettings.primaryLang;

  let sections = {};
  React.Children.map(props.children, child => {
    let type = child.props.mdxType;
    if (type === 'CPPSection') sections['cpp'] = child;
    if (type === 'JavaSection') sections['java'] = child;
    if (type === 'PySection') sections['py'] = child;
  });
  // props.children.forEach(child => {
  //   let type = child.props.mdxType;
  //   if (type === 'CPPSection') sections['cpp'] = child;
  //   if (type === 'JavaSection') sections['java'] = child;
  //   if (type === 'PySection') sections['py'] = child;
  // });
  const languages = {
    cpp: 'C++',
    java: 'Java',
    py: 'Python',
  };

  if (lang === 'showAll') {
    return (
      <>
        {Object.keys(sections).map(lang => (
          <>
            <p className="text-lg font-bold">{languages[lang]}</p>
            {sections[lang]}
          </>
        ))}
      </>
    );
  }

  if (!sections.hasOwnProperty(lang)) {
    return (
      <div className="p-4 bg-red-100 text-red-800 rounded">
        <b>
          This section isn't yet available in your chosen language:{' '}
          {languages[lang]}.
        </b>{' '}
        Please choose a different default language for now. Feel free to file a
        request to add support for {languages[lang]} using the "Contact Us"
        button.
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
