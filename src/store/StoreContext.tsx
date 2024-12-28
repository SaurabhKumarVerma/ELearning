import { createContext, useContext } from 'react';
import RootStore from './rootStore'


export const StoreContext = createContext<typeof RootStore>(null as unknown as typeof RootStore);

export const useStore = ()=> {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return context;
};
