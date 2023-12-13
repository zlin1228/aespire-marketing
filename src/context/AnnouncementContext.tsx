import React, { createContext, useContext, useState } from 'react';

import type { ReactNode } from 'react';

interface AnnouncementContextType {
  isAnnouncementOpen: boolean;
  setIsAnnouncementOpen: (isOpen: boolean) => void;
}

const AnnouncementContext = createContext<AnnouncementContextType | undefined>(undefined);

export const useAnnouncement = (): AnnouncementContextType => {
  const context = useContext(AnnouncementContext);
  if (!context) {
    throw new Error('useAnnouncement must be used within an AnnouncementProvider');
  }

  return context;
};

interface AnnouncementProviderProps {
  children: ReactNode;
}

export const AnnouncementProvider: React.FC<AnnouncementProviderProps> = ({ children }) => {
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);

  return (
    <AnnouncementContext.Provider value={{ isAnnouncementOpen, setIsAnnouncementOpen }}>
      {children}
    </AnnouncementContext.Provider>
  );
};
