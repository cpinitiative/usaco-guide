import React, { useContext } from 'react';
import SettingsModalContext, {
  SettingsModalProvider,
} from '../SettingsModalContext';
import { render, act } from '@testing-library/react';

jest.mock('@headlessui/react', () => {
  const RealModule = jest.requireActual('@headlessui/react');
  const MyModule = {
    ...RealModule,
    Transition: props => (props.show ? props.children : null),
  };
  MyModule.Transition.Child = props => <div>{props.children}</div>;
  return MyModule;
});

describe('Settings Modal Context', () => {
  it('should render correctly', () => {
    const { getByText, queryByText } = render(
      <SettingsModalProvider>Hello World!</SettingsModalProvider>
    );

    // its children should be rendered correctly
    expect(getByText('Hello World!')).toBeTruthy();

    // it should not render the settings modal initially
    expect(queryByText('Settings')).not.toBeTruthy();
  });
  it('should show/hide the settings modal appropriately', () => {
    let isOpen = undefined,
      setIsOpen = undefined;

    const CustomComponent = () => {
      const { isSettingsModalOpen, setIsSettingsModalOpen } = useContext(
        SettingsModalContext
      );
      isOpen = isSettingsModalOpen;
      setIsOpen = setIsSettingsModalOpen;
      return 'Hello World!';
    };

    const { queryByText } = render(
      <SettingsModalProvider>
        <CustomComponent />
      </SettingsModalProvider>
    );

    expect(isOpen).toBeFalsy();
    expect(setIsOpen).toBeTruthy();

    // shouldn't be open initially
    expect(queryByText('Settings')).not.toBeTruthy();

    act(() => {
      setIsOpen(true);
    });
    // should now be open
    expect(queryByText('Settings')).toBeTruthy();
    expect(isOpen).toBeTruthy();

    act(() => {
      setIsOpen(false);
    });
    // should be closed again
    expect(queryByText('Settings')).not.toBeTruthy();
    expect(isOpen).toBeFalsy();
  });
});
