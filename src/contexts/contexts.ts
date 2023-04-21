import React from 'react';

import { Recipe } from '../constants/recipe.interface';

type RecipesContextType = { recipes: Recipe[]; setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>> } | undefined;
type HealthyRecipesContextType =
  | { healthyRecipes: Recipe[]; setHealthyRecipes: React.Dispatch<React.SetStateAction<Recipe[]>> }
  | undefined;

export const RecipesContext = React.createContext<RecipesContextType>(undefined);
export const HealthyRecipesContext = React.createContext<HealthyRecipesContextType>(undefined);
