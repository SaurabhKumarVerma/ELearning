import { createContext, useContext } from 'react';
import { RootStore } from './rootStore';

// Create a strictly typed context
export const StoreContext = createContext<RootStore | null>(null);

// Custom hook to access the store with type safety
export const useStore = (): RootStore => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return context;
};
