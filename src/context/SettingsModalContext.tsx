import { createContext, useState } from 'react';
import * as React from 'react';
import SettingsModal from '../components/SettingsModal';

const SettingsModalContext = createContext<{
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (boolean) => void;
}>({
  isSettingsModalOpen: false,
  setIsSettingsModalOpen: x => {},
});

export default SettingsModalContext;

export const SettingsModalProvider = ({ children }) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  return (
    <SettingsModalContext.Provider
      value={{
        isSettingsModalOpen,
        setIsSettingsModalOpen,
      }}
    >
      {children}

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />
    </SettingsModalContext.Provider>
  );
};
