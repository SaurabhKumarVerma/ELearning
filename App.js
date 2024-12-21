import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@rneui/themed';
import { useColorScheme, View } from 'react-native';
import Main from '@eLearning/Main';
import { themeConfig } from '@eLearning/config/themeConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default App = () => {
  const [isReady, setIsReady] = useState(false);
 const theme = useTheme()
  const colorScheme = useColorScheme();
  themeConfig.mode = colorScheme;

  

  React.useEffect(() => {
    // loadAssetsAsync();
  }, []);



  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
      <ThemeProvider theme={themeConfig}>
        <Main />
      </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};