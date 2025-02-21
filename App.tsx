import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation/rootNaigation';
import {BootSplashLayout} from './src/components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <BootSplashLayout>
      <GestureHandlerRootView>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </BootSplashLayout>
  );
}
