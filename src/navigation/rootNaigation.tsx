import React, { useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabsNavigation } from './tabNavigation';
import { AuthNavigation } from './authNavigation';
import { RootStackParamListType, Route } from 'src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamListType>();

const linking = {
  prefixes: ['pkwy://'],
};

export const RootNavigation = () => {
  useEffect(() => {
    const handleDeepLink = ({ url }: { url: string }) => {
      Alert.alert('Deeplink detected', url);
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);

    Linking.getInitialURL().then((url) => {
      if (url) {
        Alert.alert('Initial Deeplink', url);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName={Route.Auth} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Route.Home} component={TabsNavigation} />
        <Stack.Screen name={Route.Auth} component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
