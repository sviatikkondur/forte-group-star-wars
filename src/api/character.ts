import { StarWarsCharacter } from '../types/TCharacter';
import { client } from '../utils/fetchClient';

export const getCharacter = (id: string) => {
  return client.get<StarWarsCharacter>(`/people/${id}`);
};
