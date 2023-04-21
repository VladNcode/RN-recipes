import { useContext } from 'react';
import { HealthyRecipesContext } from './contexts';

export const useHealthyRecipesContext = () => {
  const healthyRecipesContext = useContext(HealthyRecipesContext);

  if (!healthyRecipesContext) {
    throw new Error('No RecipesContext.Provider found when calling useHealthyRecipesContext.');
  }

  return healthyRecipesContext;
};
