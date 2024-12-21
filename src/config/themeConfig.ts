import { color } from '@eLearning/theme/color';
import {createTheme } from '@rneui/themed';

export const themeConfig = createTheme({
  lightColors: {
    primary: color.whisperWhite,
    background: color.whisperWhite,
  },
  darkColors: {
    primary: color.blackForestGreen,
    background: color.blackForestGreen,
  },
  mode: 'dark',
});