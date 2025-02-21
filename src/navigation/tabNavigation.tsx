import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatScreen } from '../screen';

const Tab = createBottomTabNavigator();

export const TabsNavigation: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};
