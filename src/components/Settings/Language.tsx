import * as React from 'react';
import { LANGUAGE_LABELS } from '../../context/UserDataContext/properties/userLang';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import RadioList from '../elements/RadioList';

export default function Language() {
  const { lang, setLang } = React.useContext(UserDataContext);

  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          Language
        </h3>
      </div>
      <div className="h-4" />
      <RadioList
        name="language"
        options={['cpp', 'java', 'py']}
        value={lang}
        onChange={setLang}
        labelMap={LANGUAGE_LABELS}
        descriptionMap={{
          java: 'We currently have very limited support for Java beyond Gold.',
          py: 'We currently have very limited support for Python.',
        }}
      />
    </div>
  );
}
