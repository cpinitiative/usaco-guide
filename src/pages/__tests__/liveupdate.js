import React from 'react';
import { render } from '@testing-library/react';
import LiveUpdate from '../LiveUpdate';

jest.mock('../../components/layout', () => {
  return jest.fn(({ children }) => (
    <div data-testid="mocked-layout">{children}</div>
  ));
});
jest.mock('../../components/seo', () => {
  return jest.fn(() => null);
});
jest.mock('../../components/TopNavigationBar/TopNavigationBar', () => {
  return jest.fn(() => null);
});

describe('Live Update', () => {
  /*
   * To speed up build times, someone can comment out the LiveUpdate page
   * and replace it with a placeholder. This test ensures that they
   * remember to uncomment the page before deploying.
   */
  it('does not render the placeholder content', () => {
    const { getByTestId } = render(<LiveUpdate />);
    expect(getByTestId('mocked-layout')).toBeTruthy();
  });
});
