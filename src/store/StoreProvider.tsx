import React, { ReactNode } from 'react';
import RootStore from './rootStore';
import { StoreContext } from './StoreContext';



export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>
);
