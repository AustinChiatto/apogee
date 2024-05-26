'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SelectedMissionContextType = {
  selectedMissionId: string | null;
  setSelectedMissionId: (id: string | null) => void;
};

const SelectedMissionContext = createContext<SelectedMissionContextType | undefined>(undefined);

export const SelectedMissionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(null);

  return (
    <SelectedMissionContext.Provider value={{ selectedMissionId, setSelectedMissionId }}>
      {children}
    </SelectedMissionContext.Provider>
  );
};

export const useSelectedMission = () => {
  const context = useContext(SelectedMissionContext);
  if (!context) {
    throw new Error('useSelectedMission must be used within a SelectedMissionProvider');
  }
  return context;
};
