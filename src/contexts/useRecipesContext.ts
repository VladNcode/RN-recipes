import { useContext } from 'react';

import { RecipesContext } from './contexts';

export const useRecipesContext = () => {
  const recipesContext = useContext(RecipesContext);

  if (!recipesContext) {
    throw new Error('No RecipesContext.Provider found when calling useRecipesContext.');
  }

  return recipesContext;
};
