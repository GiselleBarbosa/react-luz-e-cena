import axios from 'axios';
import type { Movie } from '../types';

const BASE_URL = 'http://localhost:3000';

export const getMovies = async (): Promise<Movie[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await axios.get<Movie[]>(`${BASE_URL}/movies`);
  return response.data;
};
