import * as React from "react";

const CowImagesContext = React.createContext<
  | {
      name: string;
      src: string;
    }[]
  | null
>(null);

interface CowImagesProviderProps {
  children: React.ReactNode;
  value: {
    name: string;
    src: string;
  }[];
}

export function CowImagesProvider({ children, value }: CowImagesProviderProps) {
  return (
    <CowImagesContext.Provider value={value}>
      {children}
    </CowImagesContext.Provider>
  );
}

export function useCowImages() {
  const images = React.useContext(CowImagesContext);
  if (!images) {
    throw new Error("useCowImages must be used within a CowImagesProvider");
  }
  return images;
}
