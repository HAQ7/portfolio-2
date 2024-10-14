'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context
interface HoverContextType {
  isHovering: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const HoverContext = createContext<HoverContextType | undefined>(undefined);

// Create a provider component
interface HoverProviderProps {
  children: ReactNode;
}

export const HoverProvider: React.FC<HoverProviderProps> = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </HoverContext.Provider>
  );
};

// Create a custom hook to use the hover context
export const useHover = (): HoverContextType => {
  const context = useContext(HoverContext);
  if (context === undefined) {
    throw new Error('useHover must be used within a HoverProvider');
  }
  return context;
};