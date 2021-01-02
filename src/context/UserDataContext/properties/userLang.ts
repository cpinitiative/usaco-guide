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

// From https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
function getQueryVariable(query, variable): string {
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

const getLangFromUrl = () => {
  return window.location?.search?.length > 0
    ? getQueryVariable(window.location.search.slice(1), 'lang')
    : null;
};

export default class UserLang extends SimpleUserDataPropertyAPI {
  protected storageKey = 'lang';
  protected defaultValue = 'cpp';
  protected setterFunctionName = 'setLang';

  public initializeFromLocalStorage = () => {
    this.value =
      getLangFromUrl() ||
      this.getValueFromLocalStorage(
        this.getLocalStorageKey(this.storageKey),
        this.defaultValue
      );
  };

  public importValueFromObject = data => {
    this.value =
      getLangFromUrl() ||
      (data.hasOwnProperty(this.storageKey) && data[this.storageKey] !== null
        ? data[this.storageKey]
        : this.defaultValue);
  };

  // before page loads, we want to default to showing
  // all languages for SEO purposes
  protected value = 'showAll';
}
