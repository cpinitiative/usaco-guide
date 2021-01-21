import React, { useContext } from 'react';
import { render, act, fireEvent, screen } from '@testing-library/react';
import ProblemFeedbackModalContext, {
  ProblemFeedbackModalProvider,
} from '../ProblemFeedbackModalContext';
import FirebaseContext from '../FirebaseContext';
import { Problem } from '../../models/problem';

jest.mock('@headlessui/react', () => {
  const RealModule = jest.requireActual('@headlessui/react');
  const MyModule = {
    ...RealModule,
    Transition: props => (props.show ? props.children : null),
  };
  MyModule.Transition.Child = props => <div>{props.children}</div>;
  return MyModule;
});

const mockProblem = new Problem(
  'CSES',
  'Sum of Two Values',
  '1640',
  'Easy',
  true,
  [],
  '@CPH 8.1'
);

describe('Problem Feedback Modal Context', () => {
  it('should render correctly', () => {
    const { getByText, queryByText } = render(
      <ProblemFeedbackModalProvider>Hello World!</ProblemFeedbackModalProvider>
    );

    // its children should be rendered correctly
    expect(getByText('Hello World!')).toBeTruthy();

    // it should not render the settings modal initially
    expect(queryByText('Settings')).not.toBeTruthy();
  });
  it('should open and close the problem feedback modal appropriately', () => {
    // temporarily disabled feedback modal
    // let openModal = undefined;
    //
    // const CustomComponent = () => {
    //   const { openProblemFeedbackModal } = useContext(
    //     ProblemFeedbackModalContext
    //   );
    //   openModal = openProblemFeedbackModal;
    //   return 'Hello World!';
    // };
    //
    // const { queryByText } = render(
    //   <ProblemFeedbackModalProvider>
    //     <CustomComponent />
    //   </ProblemFeedbackModalProvider>
    // );
    //
    // expect(openModal).toBeTruthy();
    //
    // // shouldn't be open initially
    // expect(queryByText('Problem Feedback for')).not.toBeTruthy();
    //
    // act(() => openModal(mockProblem));
    // // should now be open
    // expect(queryByText('Problem Feedback for Sum of Two Values')).toBeTruthy();
    //
    // // clicking the cancel button
    // fireEvent.click(screen.getByText('Cancel'));
    // // should be closed again
    // expect(queryByText('Problem Feedback for')).not.toBeTruthy();
    //
    // act(() => openModal(mockProblem));
    // // should now be open
    // expect(queryByText('Problem Feedback for Sum of Two Values')).toBeTruthy();
    //
    // // clicking the X button
    // fireEvent.click(screen.getByText('Close'));
    // // should be closed again
    // expect(queryByText('Problem Feedback for')).not.toBeTruthy();
  });
  // todo: write tests for submitting form and stuff
});
