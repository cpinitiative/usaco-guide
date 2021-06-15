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

const shouldLangParamApply = () => {
  const splitPath = window.location.pathname.split('/').filter(i => i);
  const posi = [
    'general',
    'bronze',
    'silver',
    'gold',
    'plat',
    'adv',
    'solutions',
  ];
  if (splitPath.length > 1 && posi.includes(splitPath[0])) {
    // if markdown layout
    return true;
  }
  return false;
};

const getLangFromUrl = () => {
  if (shouldLangParamApply() && window.location?.search?.length > 0) {
    const lang = getQueryVariable(window.location.search.slice(1), 'lang');
    if (lang === 'cpp' || lang === 'java' || lang === 'py') return lang;
  }
  return null;
};

export function updateLangURL(newLang: string): void {
  if (shouldLangParamApply()) {
    window.history.replaceState(
      {},
      '',
      replaceSearch(replaceQueryVariable('lang', newLang))
    );
  }
} // https://stackoverflow.com/questions/10970078/modifying-a-query-string-without-reloading-the-page

// export function setLangURLIfNone(newLang: string): void {
//   if (getLangFromUrl() == null) updateLangURL(newLang);
// }

export default class UserLang extends SimpleUserDataPropertyAPI {
  protected storageKey = 'lang';
  protected defaultValue = 'cpp';
  protected setterFunctionName = 'setLang';
  protected changedLang = false;

  public initializeFromLocalStorage = () => {
    // console.log('USERLANG: INIT FROM LOCALSTORAGE');
    const langFromUrl = getLangFromUrl();
    if (!this.changedLang && langFromUrl !== null) {
      this.value = langFromUrl;
      this.saveLocalStorageValue(this.storageKey, this.value); // save to localstorage
    } else {
      this.value = this.getValueFromLocalStorage(
        this.getLocalStorageKey(this.storageKey),
        this.defaultValue
      );
    }
    updateLangURL(this.value);
  };

  public importValueFromObject = data => {
    // console.log('USERLANG: IMPORT FROM OBJECT');
    const langFromUrl = getLangFromUrl();
    if (!this.changedLang && langFromUrl !== null) {
      this.value = langFromUrl;
      this.saveFirebaseValue(this.storageKey, this.value); // save to firebase
      this.changedLang = true;
    } else {
      this.value =
        data.hasOwnProperty(this.storageKey) && data[this.storageKey] !== null
          ? data[this.storageKey]
          : this.defaultValue;
    }
    updateLangURL(this.value);
  };

  public getAPI = () => {
    return {
      [this.storageKey]: this.value,
      [this.setterFunctionName]: v => {
        if (v !== 'showAll') {
          this.value = v;
          updateLangURL(this.value);
          this.updateValueAndRerender(this.storageKey, v);
        }
      },
    };
  };

  // before page loads, we want to default to showing
  // all languages for SEO purposes
  protected value = 'showAll';
}
