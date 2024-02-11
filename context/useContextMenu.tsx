'use client';

import React, { useContext, useState } from 'react';

type MyContextType = {
  isOpen: boolean;
  toggleOpen: () => void;
  showVideo: boolean;
  toggleShowVideo: () => void;
};

const OpenContext = React.createContext<MyContextType | null>(null);

type ProviderProps = {
  children: React.ReactNode;
};

export const MyContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleShowVideo = () => {
    setShowVideo((prev) => !prev);
  };

  const contextValue: MyContextType = {
    isOpen,
    toggleOpen,
    toggleShowVideo,
    showVideo,
  };

  return <OpenContext.Provider value={contextValue}>{children}</OpenContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(OpenContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};
