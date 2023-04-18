import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamsList = {
  Splash: undefined;
  Home: undefined;
  Search: undefined;
};

export type SplashScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Splash'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>;
export type SearchScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Search'>;
