import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsNavigation} from './tabNavigation';
import {AuthNavigation} from './authNavigation';
import { RootStackParamListType, Route } from '../types/navigation';

export const Stack = createNativeStackNavigator<RootStackParamListType>();

export const RootNavigation = () => {
  const isAuth = true ? Route.Auth : Route.Home;

  return (
    <Stack.Navigator
      initialRouteName={isAuth}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Route.Home} component={TabsNavigation} />
      <Stack.Screen name={Route.Auth} component={AuthNavigation} />
    </Stack.Navigator>
  );
};
