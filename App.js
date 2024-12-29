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
import { navigationRef } from '@eLearning/navigations/Rootnavigation';

// Configure Google Sign-In with web client ID
GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
});
// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const App = () => {
   // Load custom fonts
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

  // Get the current color scheme (light or dark mode)
  const colorScheme = useColorScheme();
  themeConfig.mode = colorScheme;


  useEffect(() => {
    if (loaded || error || navigationRef.isReady()) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Return null if fonts are not loaded and there's no error, and navigation is not ready
  if (!loaded && !error && !navigationRef.isReady()) {
    return null;
  }



  return (
    // Provide the store context to the app
    <StoreProvider>
    <GestureHandlerRootView style={{flex: 1,}}>
      <StatusBar hidden/>
      <SafeAreaProvider >
      <ThemeProvider theme={themeConfig}>
        <Main  ref={navigationRef}/>
      </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
    </StoreProvider>
  );
};


export default App;