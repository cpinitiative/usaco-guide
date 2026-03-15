import React from 'react';
import { SignInModal } from '../components/SignInModal';

export const SignInContext = React.createContext<{
  signIn: () => void;
} | null>(null);
export function useSignIn() {
  const context = React.useContext(SignInContext);
  if (!context) {
    throw new Error('useSignInContext must be used within a SignInProvider');
  }
  return context;
}
export const SignInProvider = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
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
