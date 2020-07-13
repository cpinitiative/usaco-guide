import * as React from 'react';
import UserSettingsContext from '../../context/UserSettingsContext';
import { useContext } from 'react';

export const LanguageSection = props => {
  const userSettings = useContext(UserSettingsContext);
  let lang = userSettings.primaryLang;
  let sections = {};
  props.children.forEach(child => {
    let type = child.props.mdxType;
    if (type === 'CPPSection') sections['cpp'] = child;
    if (type === 'JavaSection') sections['java'] = child;
    if (type === 'PySection') sections['py'] = child;
  });
  if (!sections.hasOwnProperty(lang)) {
    return (
      <div>
        This section isn't yet available in your chosen language: {lang}. Please
        choose a different default language.
      </div>
    );
  }
  return sections[lang];
};

export const CPPSection = props => {
  return <div>{props.children}</div>;
};

export const JavaSection = props => {
  return <div>{props.children}</div>;
};

export const PySection = props => {
  return <div>{props.children}</div>;
};
