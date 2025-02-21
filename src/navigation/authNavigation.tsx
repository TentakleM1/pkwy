import React, { FC } from 'react';
import { Stack } from './rootNaigation';
import { OnBoardingScreen } from '../screen/onboardingScreen';
import { SignInScreen } from '../screen/signinScreen';

export const AuthNavigation: FC = () => {

  return (
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="SignUp" component={SignInScreen} />
    </Stack.Navigator>
  );
};
