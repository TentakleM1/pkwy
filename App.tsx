import React from 'react';
import {RootNavigation} from './src/navigation/rootNaigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StoryBook from './.storybook';
import {STORYBOOK} from './config';
import BootSplashLayout from 'src/components/bootSplashLayout/bootSplashLayout';

const App = () => {
  return (
    <BootSplashLayout>
      <GestureHandlerRootView>
        <RootNavigation />
      </GestureHandlerRootView>
    </BootSplashLayout>
  );
};

export default STORYBOOK ? StoryBook : App;
