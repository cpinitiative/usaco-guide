import * as React from 'react';
import classNames from 'classnames';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import RadioList from '../elements/RadioList';
import { LANGUAGE_LABELS } from '../../context/UserDataContext/properties/userLang';

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
          java: 'Note: Currently very limited support for Java beyond Gold.',
          py: 'Note: Currently very limited support for Python.',
        }}
      />
    </div>
  );
}
