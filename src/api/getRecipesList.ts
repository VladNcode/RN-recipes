import axios from 'axios';
import { CONFIG } from '../../config';
import { Recipe } from '../constants/recipe.interface';
import { getRandomArbitrary } from '../utils/utils';

export const getRecipesList = async ({ tags = '', size = 15 }: { tags?: string; size?: number }) => {
  const url = 'https://tasty.p.rapidapi.com/recipes/list';
  const headers = {
    'X-RapidAPI-Key': CONFIG.API_KEY,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  };

  const params = {
    from: String(Math.floor(getRandomArbitrary())),
    size: String(size),
    tags,
  };

  try {
    return await axios.get<{ count: number; results: Recipe[] }>(url, { headers, params });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
