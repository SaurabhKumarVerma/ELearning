import React, { useEffect } from 'react';
import { ThemeProvider } from '@rneui/themed';
import { useColorScheme } from 'react-native';
import Main from '@eLearning/Main';
import { themeConfig } from '@eLearning/config/themeConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import vectorFonts from '@eLearning/utils/vector-fonts';
import { StatusBar } from 'expo-status-bar';
import { MODE } from '@eLearning/types/types';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    ...vectorFonts,
    'poppinsBlack': require('./assets/fonts/Poppins-Black.ttf'),
    'poppinsBold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppinsLight': require('./assets/fonts/Poppins-Light.ttf'),
    'poppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppinsThin': require('./assets/fonts/Poppins-Thin.ttf')
  });
  const colorScheme = useColorScheme();
  themeConfig.mode = colorScheme;


  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }



  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar />
      <SafeAreaProvider style={{ backgroundColor: (colorScheme === MODE.DARK ? themeConfig.darkColors.background :themeConfig.lightColors.background) }}>
      <ThemeProvider theme={themeConfig}>
        <Main />
      </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};


export default App;