// contexts/ProviderContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Provider {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  companyName: string;
  role: string;
  providerType: string;
}

interface ProviderContextProps {
  selectedProvider: Provider | null;
  selectProvider: (provider: Provider) => void;
}

const ProviderContext = createContext<ProviderContextProps | undefined>(undefined);

export const ProviderContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

  const selectProvider = (provider: Provider) => {
    setSelectedProvider(provider);
  };

  return (
    <ProviderContext.Provider value={{ selectedProvider, selectProvider }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useProviderContext = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error("useProviderContext must be used within a ProviderContextProvider");
  }
  return context;
};
