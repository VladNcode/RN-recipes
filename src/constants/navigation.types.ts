import { StackNavigationProp } from '@react-navigation/stack';
import { Recipe } from './recipe.interface';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamsList = {
  Splash: undefined;
  Home: undefined;
  Search: undefined;
  RecipeDetails: { item: Recipe };
};

export type SplashScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Splash'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>;
export type SearchScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Search'>;

export type RecipeDetailsRoute = RouteProp<RootStackParamsList, 'RecipeDetails'>;
export type RecipeDetailsScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'RecipeDetails'>;
