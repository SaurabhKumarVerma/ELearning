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
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { StoreProvider } from '@eLearning/store/StoreProvider';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
});

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
    <StoreProvider>
    <GestureHandlerRootView style={{flex: 1,}}>
      <StatusBar hidden/>
      <SafeAreaProvider >
      <ThemeProvider theme={themeConfig}>
        <Main />
      </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
    </StoreProvider>
  );
};


export default App;