import * as React from 'react';
import {
  LANGUAGE_LABELS,
  useSetUserLangSetting,
  useUserLangSetting,
} from '../../context/UserDataContext/properties/simpleProperties';
import RadioList from '../elements/RadioList';

export default function Language() {
  const lang = useUserLangSetting();
  const setLang = useSetUserLangSetting();

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
