import { MoviesResponse } from '../types/TMovie';
import { client } from '../utils/fetchClient';

export const getMovies = () => {
  return client.get<MoviesResponse>(`/films`);
};
