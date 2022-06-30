import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';

const NavigationContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <RNNavigationContainer>{children}</RNNavigationContainer>
    </SafeAreaProvider>
  );
};
export default NavigationContainer;
