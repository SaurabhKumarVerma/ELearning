/**
 * Navigation Utilities
 * 
 * This module provides utility functions for navigating within the 
 * application using React Navigation. It utilizes a navigation reference 
 * to manage navigation actions such as navigating to a new screen, 
 * pushing a new screen onto the stack, going back, replacing the current 
 * screen, and popping screens from the stack.
 * 
 * Navigation Reference:
 * - `navigationRef`: A reference to the navigation container, allowing 
 *   for programmatic navigation outside of React components.
 * 
 * Utility Functions:
 * 
 * 1. navigate(name: keyof ParamListBase, params?: object): void
 *    - Navigates to a specified screen by name, passing optional parameters.
 *    - Checks if the navigation reference is ready before attempting to navigate.
 * 
 * 2. push(name: string, params?: object): void
 *    - Pushes a new screen onto the navigation stack, allowing users to 
 *      navigate to a new screen while keeping the current screen in the 
 *      stack.
 *    - Checks if the navigation reference is ready before dispatching the 
 *      push action.
 * 
 * 3. goBack(): void
 *    - Navigates back to the previous screen in the stack.
 *    - Checks if the navigation reference is ready and if there is a 
 *      previous screen to go back to.
 * 
 * 4. replace(name: string, params?: object): void
 *    - Replaces the current screen in the stack with a new screen, 
 *      effectively removing the current screen from the navigation history.
 *    - Checks if the navigation reference is ready before dispatching the 
 *      replace action.
 * 
 * 5. pop(count: number = 1): void
 *    - Pops one or more screens off the navigation stack, returning to the 
 *      previous screen(s).
 *    - Checks if the navigation reference is ready and if there are screens 
 *      to pop before dispatching the pop action.
 * 
 * Usage:
 * These utility functions can be imported and used throughout the 
 * application to manage navigation programmatically, providing a clean 
 * and consistent way to handle navigation actions.
 */
import { StackActions, createNavigationContainerRef, ParamListBase } from "@react-navigation/native"

export const navigationRef = createNavigationContainerRef<ParamListBase>()

export function navigate(name: keyof ParamListBase, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function push(name: string, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params))
  }
}

export function goBack(): void {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

export function replace(name: string, params?: object): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params))
  }
}

export function pop(count: number = 1): void {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.dispatch(StackActions.pop(count))
  }
}

export function reset(routes, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index,
      routes: routes.map((route) => ({ name: route.name, params: route.params })),
    });
  }
}
