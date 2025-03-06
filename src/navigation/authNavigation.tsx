import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamListType, Route } from 'src/types/navigation';
import Onboarding from 'src/screens/onboarding/Onboarding';
import { getOnboardingStorage } from 'src/utils/storage/onboarding';
import VideoPlayer from 'src/screens/video/VideoPlayer';
import SignIn from 'src/screens/signin/Signin';
import Map from 'src/screens/map/Map';

const Stack = createNativeStackNavigator<AuthStackParamListType>();

export const AuthNavigation: FC = () => {
  const isOnboarding = getOnboardingStorage() ? Route.Map : Route.Onboarding;

  return (
    <Stack.Navigator initialRouteName={isOnboarding} screenOptions={{headerShown: false}}>
      <Stack.Screen name={Route.SignUp} component={SignIn} />
      <Stack.Screen name={Route.Onboarding} component={Onboarding} />
      <Stack.Screen name={Route.Map} component={Map} />
      <Stack.Screen name={Route.Video} component={VideoPlayer} />
    </Stack.Navigator>
  );
};
