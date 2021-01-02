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
  const vars = query.split('&').filter(i => i);
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

function replaceQueryVariable(variable, value): string {
  const query = window.location.search.slice(1);
  // https://stackoverflow.com/questions/9141951/splitting-string-by-whitespace-without-empty-elements/39184134
  const vars = query.split('&').filter(i => i);
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      pair[1] = value;
      vars[i] = pair.join('=');
      return '?' + vars.join('&');
    }
  }
  vars.push(`${variable}=${value}`);
  return '?' + vars.join('&');
}

function replaceSearch(newSearch): string {
  const loc = window.location;
  return `${loc.origin}${loc.pathname}${newSearch}${loc.hash}`;
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
    this.updateUrl();
  };

  public importValueFromObject = data => {
    this.value =
      getLangFromUrl() ||
      (data.hasOwnProperty(this.storageKey) && data[this.storageKey] !== null
        ? data[this.storageKey]
        : this.defaultValue);
    this.updateUrl();
  };

  protected updateUrl = () => {
    window.history.pushState(
      {},
      '',
      replaceSearch(replaceQueryVariable('lang', this.value))
    );
  }; // https://stackoverflow.com/questions/10970078/modifying-a-query-string-without-reloading-the-page

  public getAPI = () => {
    return {
      [this.storageKey]: this.value,
      [this.setterFunctionName]: v => {
        this.value = v;
        this.updateValueAndRerender(this.storageKey, v);
        this.updateUrl();
      },
    };
  };

  // before page loads, we want to default to showing
  // all languages for SEO purposes
  protected value = 'showAll';
}
