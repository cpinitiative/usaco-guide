import React from 'react';
import { render } from '@testing-library/react';
import LiveUpdate from '../liveupdate';
import { DarkModeProvider } from '../../context/DarkModeContext';

jest.mock('../../components/layout', () => {
  return jest.fn(({ children }) => children);
});
jest.mock('../../components/seo', () => {
  return jest.fn(() => null);
});
jest.mock('../../components/TopNavigationBar/TopNavigationBar', () => {
  return jest.fn(() => null);
});

describe('Editor', () => {
  /*
   * To speed up build times, someone can comment out the Editor page
   * and replace it with a placeholder. This test ensures that they
   * remember to uncomment the page before deploying.
   */
  it('does not render the placeholder content', () => {
    const { queryByTestId } = render(
      <DarkModeProvider>
        <LiveUpdate />
      </DarkModeProvider>
    );
    expect(queryByTestId('build-placeholder')).toBeNull();
  });
});
