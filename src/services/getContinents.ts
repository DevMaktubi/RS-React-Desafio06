import axios from 'axios';

interface Continent {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const getContinents = async (): Promise<Continent[]> => {
  const response = await axios.get(
    'https://world-trip-jade.vercel.app/api/continents'
  );
  return response.data;
};
