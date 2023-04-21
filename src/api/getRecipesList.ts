import axios from 'axios';
import { CONFIG } from '../../config';

export const getRecipesList = async ({ tags = '', size = 15 }: { tags?: string; size?: number }) => {
  const url = 'https://tasty.p.rapidapi.com/recipes/list';
  const headers = {
    'X-RapidAPI-Key': CONFIG.API_KEY,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  };
  const params = {
    from: '0',
    size: String(size),
    tags,
  };

  try {
    return await axios.get(url, { headers, params });
  } catch (error) {
    console.error(error);
    throw error;
  }
};