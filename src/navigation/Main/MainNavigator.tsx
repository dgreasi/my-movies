import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MAIN_ROUTES } from '~navigation/Main/mainTypes';
import { EntityScreen, HomeScreen } from '~screens';
import { HomeHeader } from '~components';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen
          name={MAIN_ROUTES.HOME}
          component={HomeScreen}
          options={{ headerShown: true, header: (props) => <HomeHeader {...props} /> }}
        />
        <Stack.Screen name={MAIN_ROUTES.ENTITY} component={EntityScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
