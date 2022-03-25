import { NextApiRequest, NextApiResponse } from 'next';

interface ContinentData {
  name: string;
  slug: string;
  image: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const continents: ContinentData[] = [
    {
      name: 'Europa',
      slug: 'Europe',
      image: '/images/continents/Europe.png',
      description: 'O continente mais antigo',
    },
    {
      name: 'América do Sul',
      slug: 'South_America',
      image: '/images/continents/South_America.jpg',
      description: 'O Continente mais caloroso.',
    },
    {
      name: 'América do Norte',
      slug: 'North_America',
      image: '/images/continents/North_America.jpg',
      description: 'O Continente mais gelado',
    },
    {
      name: 'Ásia',
      slug: 'Asia',
      image: '/images/continents/Asia.jpg',
      description: 'O Continente mais sábio',
    },
    {
      name: 'Oceania',
      slug: 'Oceania',
      image: '/images/continents/Oceania.jpg',
      description: 'O Continente mais energizado',
    },
    {
      name: 'África',
      slug: 'Africa',
      image: '/images/continents/Africa.jpg',
      description: 'O Continente mais selvagem',
    },
  ];

  if (req.method === 'GET') {
    return res.status(200).json(continents);
  }

  return res.send(200);
};
