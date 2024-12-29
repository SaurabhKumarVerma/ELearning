/**
 * Theme Configuration
 * 
 * This configuration sets up the theme for the application using the RNEUI 
 * (React Native Elements UI) theming system. It defines the colors used 
 * throughout the application for both light and dark modes, allowing for 
 * a consistent and visually appealing user interface.
 * 
 * Key Features:
 * - Defines color schemes for both light and dark modes, enabling the 
 *   application to adapt to user preferences or system settings.
 * - Specifies primary and background colors for each mode, ensuring that 
 *   the UI elements are visually distinct and accessible.
 * 
 * Color Definitions:
 * - Light Mode:
 *   - primary: `color.whisperWhite` - Used for primary UI elements in light mode.
 *   - background: `color.whisperWhite` - Background color for light mode.
 * 
 * - Dark Mode:
 *   - primary: `color.blackForestGreen` - Used for primary UI elements in dark mode.
 *   - background: `color.onyx` - Background color for dark mode.
 */
import { color } from '@eLearning/theme/color';
import {createTheme } from '@rneui/themed';

export const themeConfig = createTheme({
  lightColors: {
    primary: color.whisperWhite,
    background: color.whisperWhite,
  },
  darkColors: {
    primary: color.blackForestGreen,
    background: color.onyx,
  },
  mode: 'dark',
});