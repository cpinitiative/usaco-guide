import * as React from 'react';
import { createContext, useRef } from 'react';
import ModuleConfetti from '../components/MarkdownLayout/ModuleConfetti';

const ConfettiContext = createContext<() => void>(null);

export default ConfettiContext;

export const ConfettiProvider = ({ children }) => {
  const confettiRef = useRef<{ showConfetti: () => void }>();
  return (
    <ConfettiContext.Provider value={() => confettiRef.current.showConfetti()}>
      <ModuleConfetti ref={confettiRef} />
      {children}
    </ConfettiContext.Provider>
  );
};
