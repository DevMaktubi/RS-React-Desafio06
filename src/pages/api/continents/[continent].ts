import { NextApiRequest, NextApiResponse } from 'next';

interface HCitiesData {
  name: string;
  country: string;
  image: string;
  flag: string;
}

interface ContinentData {
  name: string;
  image: string;
  Countries?: number;
  SpokenLanguages?: number;
  HCitiesCount?: number;
  HCitiesExample?: HCitiesData[];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const asiaData: ContinentData = {
    name: 'Ásia',
    image: '/images/continents/Asia.jpg',
    Countries: 50,
    SpokenLanguages: 60,
    HCitiesCount: 15,
    HCitiesExample: [
      {
        name: 'Kuala Lumpur',
        country: 'Malaysia',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Beijing',
        country: 'China',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Tokyo',
        country: 'Japan',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Seoul',
        country: 'South Korea',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Shanghai',
        country: 'China',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
    ],
  };
  const NAData: ContinentData = {
    name: 'América do Norte',
    Countries: 60,
    image: '/images/continents/North_America.jpg',
    SpokenLanguages: 80,
    HCitiesCount: 10,
    HCitiesExample: [
      {
        name: 'New York',
        country: 'United States',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Los Angeles',
        country: 'United States',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Chicago',
        country: 'United States',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Houston',
        country: 'United States',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Washington',
        country: 'United States',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
    ],
  };
  const SAData: ContinentData = {
    name: 'América do Sul',
    Countries: 5,
    image: '/images/continents/South_America.jpg',
    SpokenLanguages: 10,
    HCitiesCount: 5,
    HCitiesExample: [
      {
        name: 'Brasilia',
        country: 'Brazil',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Sao Paulo',
        country: 'Brazil',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Buenos Aires',
        country: 'Argentina',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Santiago',
        country: 'Chile',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Lima',
        country: 'Peru',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
    ],
  };
  const EUData: ContinentData = {
    name: 'Europa',
    image: '/images/continents/Europe.png',
    Countries: 25,
    SpokenLanguages: 30,
    HCitiesCount: 27,
    HCitiesExample: [
      {
        name: 'London',
        country: 'United Kingdom',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Paris',
        country: 'France',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Berlin',
        country: 'Germany',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Madrid',
        country: 'Spain',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Rome',
        country: 'Italy',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
    ],
  };
  const OCData: ContinentData = {
    name: 'Oceania',
    image: '/images/continents/Oceania.jpg',
    Countries: 10,
    SpokenLanguages: 30,
    HCitiesCount: 13,
    HCitiesExample: [
      {
        name: 'Sydney',
        country: 'Australia',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Melbourne',
        country: 'Australia',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Brisbane',
        country: 'Australia',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Perth',
        country: 'Australia',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Adelaide',
        country: 'Australia',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
    ],
  };
  const AfricaData: ContinentData = {
    name: 'África',
    image: '/images/continents/Africa.jpg',
    Countries: 60,
    SpokenLanguages: 80,
    HCitiesCount: 10,
    HCitiesExample: [
      {
        name: 'Cairo',
        country: 'Egypt',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Nairobi',
        country: 'Kenya',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Kampala',
        country: 'Uganda',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Johannesburg',
        country: 'South Africa',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
      {
        name: 'Lagos',
        country: 'Nigeria',
        image:
          'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
        flag: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/b0/c7b0c7b0-c7b0-11e8-a9c9-005056a52704.jpg',
      },
    ],
  };

  if (req.method === 'GET') {
    const { continent } = req.query;

    switch (continent) {
      case 'Asia':
        return res.json(asiaData);
      case 'North_America':
        return res.json(NAData);
      case 'South_America':
        return res.json(SAData);
      case 'Europe':
        return res.json(EUData);
      case 'Oceania':
        return res.json(OCData);
      case 'Africa':
        return res.json(AfricaData);
      default:
        return res.status(400).json({ error: 'Invalid continent' });
    }
  }

  return res.send(200);
};
