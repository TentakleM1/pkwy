import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation/rootNaigation';
import {BootSplashLayout} from './src/components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Alert} from 'react-native';

const linking = {
  prefixes: ['pkwy://'],
  getStateFromPath: (path: string) => {
    if (path) {
      Alert.alert('', path);
    }
  },
};

export default function App() {
  return (
    <BootSplashLayout>
      <GestureHandlerRootView>
        <NavigationContainer linking={linking}>
          <RootNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </BootSplashLayout>
  );
}
