import React, { createContext, useContext, useState, useEffect } from 'react';

interface BlindModeContextType {
  isBlindMode: boolean;
  toggleBlindMode: () => void;
}

const BlindModeContext = createContext<BlindModeContextType | undefined>(undefined);

export function BlindModeProvider({ children }: { children: React.ReactNode }) {
  const [isBlindMode, setIsBlindMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('blindMode');
      return storedValue === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('blindMode', String(isBlindMode));
    }
  }, [isBlindMode]);

  const toggleBlindMode = () => {
    setIsBlindMode((prev) => !prev);
  };

  return (
    <BlindModeContext.Provider value={{ isBlindMode, toggleBlindMode }}>
      {children}
    </BlindModeContext.Provider>
  );
}

export function useBlindMode() {
  const context = useContext(BlindModeContext);
  if (context === undefined) {
    throw new Error('useBlindMode must be used within a BlindModeProvider');
  }
  return context;
}
