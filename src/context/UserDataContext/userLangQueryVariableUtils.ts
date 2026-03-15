// From https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
function getQueryVariable(query, variable): string | null {
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

export const getLangFromUrl = () => {
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
} // https://stackoverflow.com/questions/10970078/modifying-a-query-string-without-reloading-the-pagei
