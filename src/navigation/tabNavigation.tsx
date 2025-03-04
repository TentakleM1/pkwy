import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chat } from 'src/screens/chat/Chat';
const Tab = createBottomTabNavigator();

export const TabsNavigation: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};
