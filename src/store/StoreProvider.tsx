/**
 * StoreProvider Component
 * 
 * This component serves as a context provider for the application's global 
 * state management. It wraps the application (or a part of it) in a 
 * `StoreContext.Provider`, allowing child components to access the 
 * application's root store through the context.
 * 
 * Props:
 * - `children` (ReactNode): The child components that will have access to 
 *   the store context. This allows any component nested within the 
 *   `StoreProvider` to utilize the global state and actions defined in 
 *   the `RootStore`.
 * 
 * Key Features:
 * - Utilizes React's Context API to provide a centralized store to the 
 *   component tree, enabling state management across different parts of 
 *   the application without the need to pass props down manually.
 * - The `RootStore` is passed as the value of the `StoreContext.Provider`, 
 *   making it accessible to any component that calls the `useStore` hook.
 * 
 * Usage:
 * - This component should be used at a high level in the component tree, 
 *   typically in the main application file or a dedicated provider file, 
 *   to ensure that all child components can access the global state.
 */
import React, { ReactNode } from 'react';
import RootStore from './rootStore';
import { StoreContext } from './StoreContext';



export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>
);
