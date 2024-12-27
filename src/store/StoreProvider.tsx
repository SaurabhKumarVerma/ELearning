import React, { ReactNode } from 'react';
import { RootStore } from './rootStore';
import { StoreContext } from './StoreContext';

export const rootStore = new RootStore();

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
