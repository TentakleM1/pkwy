import { NavigationProp } from "@react-navigation/native";

export enum Route {
  Auth = 'Auth',
  Home = 'Home',
  SignUp = 'SignUp',
  Onboarding = 'Onboarding',
  Map = 'Map',
}

export type RootStackParamListType = {
  Auth: undefined;
  Home: undefined;
};

export type AuthStackParamListType = {
  SignUp: undefined;
  Onboarding: undefined;
  Map: undefined;
};

export type AuthStackNavigation = NavigationProp<AuthStackParamListType>;
