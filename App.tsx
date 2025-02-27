import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation/rootNaigation';
import {BootSplashLayout} from './src/components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Alert} from 'react-native';
import StoryBook from './.storybook';
import { STORYBOOK } from './config';

const linking = {
  prefixes: ['pkwy://'],
  getStateFromPath: (path: string) => {
    if (path) {
      Alert.alert('', path);
    }
  },
};
console.log(process.env.STORYBOOK)
const App = () => {
  return (
    <BootSplashLayout>
      <GestureHandlerRootView>
        <NavigationContainer linking={linking}>
          <RootNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </BootSplashLayout>
  );
};

export default STORYBOOK ? StoryBook : App;
