import React from 'react';
import { SignInModal } from '../components/SignInModal';

export const SignInContext = React.createContext<{
  signIn: () => void;
}>(null);

export const SignInProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const providerValue = React.useMemo(() => {
    return {
      signIn: () => setIsOpen(true),
    };
  }, []);
  return (
    <SignInContext.Provider value={providerValue}>
      {children}

      <SignInModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SignInContext.Provider>
  );
};
