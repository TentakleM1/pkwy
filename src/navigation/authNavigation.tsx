import React, { FC } from 'react';
import { OnBoardingScreen } from '../screen/onboardingScreen';
import { SignInScreen } from '../screen/signinScreen';
import { getOnboardingStorage } from '../utils/storage/onboarding';
import { Route } from '../types/navigation';
import { Stack } from './rootNaigation';

export const AuthNavigation: FC = () => {
  const isOnboarding = getOnboardingStorage() ? Route.SignUp : Route.Onboarding;

  return (
    <Stack.Navigator initialRouteName={isOnboarding} screenOptions={{headerShown: false}}>
      <Stack.Screen name={Route.SignUp} component={SignInScreen} />
      <Stack.Screen name={Route.Onboarding} component={OnBoardingScreen} />
    </Stack.Navigator>
  );
};
