import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TabsNavigation } from './tabNavigation';
import { AuthNavigation } from './authNavigation';

export const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabsNavigation} />
      <Stack.Screen name="Auth" component={AuthNavigation} />
    </Stack.Navigator>
  );
};
