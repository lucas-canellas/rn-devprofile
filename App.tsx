import React, { useCallback } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

SplashScreen.preventAutoHideAsync();
const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes onLayoutRootView={onLayoutRootView} />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
