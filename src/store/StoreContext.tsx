/**
 * Store Context and Hook
 * 
 * This module provides a context and a custom hook for managing global 
 * state in the application using React's Context API. It allows components 
 * to access the application's root store, which contains the state and 
 * actions for managing application data.
 * 
 * Context:
 * - `StoreContext`: A React context created using `createContext`, which 
 *   holds the root store. It is initialized with a type of `RootStore` 
 *   to ensure type safety.
 * 
 * Custom Hook:
 * 
 * - `useStore`: A custom hook that allows components to access the 
 *   `StoreContext`. It retrieves the context value using `useContext` 
 *   and checks if the context is available.
 *   - If the context is not available (i.e., the component is not wrapped 
 *     in a `StoreProvider`), it throws an error to indicate that the 
 *     hook must be used within a valid provider.
 *   - If the context is available, it returns the root store, allowing 
 *     components to access the application's state and actions.
 * 
 * Usage:
 * - This context and hook are intended to be used throughout the 
 *   application to provide a centralized state management solution. 
 *   Components can use the `useStore` hook to access and interact with 
 *   the global state.
 */
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
