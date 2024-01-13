import axios from 'axios';

type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

const fetchStarshipTitle = async (url: string): Promise<string> => {
  try {
    const response = await axios.get<Starship>(url);
    return response.data.name;
  } catch (error) {
    console.error(`Error fetching starship title for URL ${url}:`, error);
    return 'Unknown Starship';
  }
};

export const getStarshipTitles = async (starshipUrls: string[]): Promise<string[]> => {
  const titlePromises = starshipUrls.map(url => fetchStarshipTitle(url));
  return Promise.all(titlePromises);
};