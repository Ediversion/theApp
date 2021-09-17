import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'crypto-js/lib-typedarrays';
import Amplify from "aws-amplify";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import config from "./src/aws-exports";

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

// Amplify.configure(config);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});


function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);