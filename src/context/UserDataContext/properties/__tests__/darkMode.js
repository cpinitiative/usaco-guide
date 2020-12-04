import DarkMode from '../darkMode';

describe('Dark Mode Property', () => {
  it('should assign a default value properly', () => {
    let prefersDark = false;
    const matchMediaMock = jest.fn().mockImplementation(query => ({
      matches: prefersDark,
    }));
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMediaMock,
    });

    let darkMode;

    // tests initializeFromLocalStorage
    prefersDark = false;
    darkMode = new DarkMode();
    darkMode.initializeFromLocalStorage();
    expect(darkMode.value).toBe(false);
    expect(matchMediaMock).toBeCalledWith('(prefers-color-scheme: dark)');

    prefersDark = true;
    darkMode = new DarkMode();
    darkMode.initializeFromLocalStorage();
    expect(darkMode.value).toBe(true);
    expect(matchMediaMock).toBeCalledWith('(prefers-color-scheme: dark)');

    prefersDark = undefined;
    darkMode = new DarkMode();
    darkMode.initializeFromLocalStorage();
    expect(darkMode.value).toBe(false); // for browsers that don't support dark theme, default to false
    expect(matchMediaMock).toBeCalledWith('(prefers-color-scheme: dark)');

    // todo: test to see if classes are applied to document properly
    // todo: test importValueFromObject
  });
});
