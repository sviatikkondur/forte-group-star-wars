import axios from 'axios';

type Species = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string | null;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

const fetchSpeciesName = async (url: string): Promise<string> => {
  try {
    const response = await axios.get<Species>(url);
    return response.data.name;
  } catch (error) {
    console.error(`Error fetching species name for URL ${url}:`, error);
    return 'Unknown Species';
  }
};

export const getSpeciesNames = async (
  speciesUrls: string[]
): Promise<string[]> => {
  const namePromises = speciesUrls.map((url) => fetchSpeciesName(url));
  return Promise.all(namePromises);
};
