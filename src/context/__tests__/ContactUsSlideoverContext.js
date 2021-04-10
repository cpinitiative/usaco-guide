import React, { useContext } from 'react';
import { render, act } from '@testing-library/react';
import ContactUsSlideoverContext, {
  ContactUsSlideoverProvider,
} from '../ContactUsSlideoverContext';

jest.mock('@headlessui/react', () => {
  const RealModule = jest.requireActual('@headlessui/react');
  const MyModule = {
    ...RealModule,
    Transition: props => (props.show ? props.children : null),
  };
  // eslint-disable-next-line react/display-name
  MyModule.Transition.Child = props => <div>{props.children}</div>;
  return MyModule;
});

describe('Contact Us Slideover Context', () => {
  const slideoverText =
    'Contact us about anything: suggestions, bugs, assistance, and more!';

  it('should render correctly', () => {
    const { getByText, queryByText } = render(
      <ContactUsSlideoverProvider>Hello World!</ContactUsSlideoverProvider>
    );

    // its children should be rendered correctly
    expect(getByText('Hello World!')).toBeTruthy();

    // it should not render the slideover initially
    expect(queryByText(slideoverText)).not.toBeTruthy();
  });
  it('should show/hide the contact slideover appropriately', () => {
    let isOpen = undefined,
      setIsOpen = undefined;

    const CustomComponent = () => {
      const {
        isContactUsSlideoverOpen,
        setIsContactUsSlideoverOpen,
      } = useContext(ContactUsSlideoverContext);
      isOpen = isContactUsSlideoverOpen;
      setIsOpen = setIsContactUsSlideoverOpen;
      return 'Hello World!';
    };

    const { queryByText } = render(
      <ContactUsSlideoverProvider>
        <CustomComponent />
      </ContactUsSlideoverProvider>
    );

    expect(isOpen).toBeFalsy();
    expect(setIsOpen).toBeTruthy();

    // shouldn't be open initially
    expect(queryByText(slideoverText)).not.toBeTruthy();

    act(() => {
      setIsOpen(true);
    });
    // should now be open
    expect(queryByText(slideoverText)).toBeTruthy();
    expect(isOpen).toBeTruthy();

    act(() => {
      setIsOpen(false);
    });
    // should be closed again
    expect(queryByText(slideoverText)).not.toBeTruthy();
    expect(isOpen).toBeFalsy();
  });
});
