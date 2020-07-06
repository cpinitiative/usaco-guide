import * as React from 'react';

export const CodeSectionContext = React.createContext('cpp');

const LanguageSwitcherButton = ({ children, active, onSelect }) => (
  <button
    className={`text-gray-200 px-4 py-2 ${active ? 'bg-gray-800' : ''}`}
    onClick={onSelect}
  >
    {children}
  </button>
);

const languages = {
  cpp: 'C++',
  java: 'Java',
  python: 'Python',
  text: 'Text',
};

export default ({ children }) => {
  if (!Array.isArray(children)) {
    children = [children];
  }

  const languageKeys = children
    .map(child => child.props.children.props.className.replace(/language-/, ''))
    .sort();

  const [activeLang, setActiveLang] = React.useState(languageKeys[0]);

  return (
    <div>
      <div
        className="border-gray-800"
        style={{ backgroundColor: 'rgb(30, 30, 30)' }}
      >
        {languageKeys.map(key => (
          <LanguageSwitcherButton
            key={key}
            active={activeLang === key}
            onSelect={() => setActiveLang(key)}
          >
            {languages[key]}
          </LanguageSwitcherButton>
        ))}
      </div>
      {children.filter(
        child =>
          child.props.children.props.className &&
          child.props.children.props.className.includes(activeLang)
      )}
    </div>
  );
};
