import * as React from "react";

const TeamImagesContext = React.createContext<
  | {
      name: string;
      src: string;
    }[]
  | null
>(null);

interface TeamImagesProviderProps {
  children: React.ReactNode;
  value: {
    name: string;
    src: string;
  }[];
}

export function TeamImagesProvider({
  children,
  value,
}: TeamImagesProviderProps) {
  return (
    <TeamImagesContext.Provider value={value}>
      {children}
    </TeamImagesContext.Provider>
  );
}

export function useTeamImages() {
  const images = React.useContext(TeamImagesContext);
  if (!images) {
    throw new Error("useTeamImages must be used within a TeamImagesProvider");
  }
  return images;
}
