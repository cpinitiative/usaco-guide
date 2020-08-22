import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type Language = 'showAll' | 'cpp' | 'java' | 'py';
export const LANGUAGE_LABELS: { [key in Language]: string } = {
  showAll: 'All',
  cpp: 'C++',
  java: 'Java',
  py: 'Python',
};

export type UserLangAPI = {
  lang: Language;
  setLang: (lang: Language) => void;
};

export default class UserLang extends SimpleUserDataPropertyAPI {
  protected storageKey = 'lang';
  protected defaultValue = 'cpp';
  protected setterFunctionName = 'setLang';
}
