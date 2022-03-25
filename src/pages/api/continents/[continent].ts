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
          'https://images.unsplash.com/photo-1581981657871-77c0d8adc84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a3VhbGElMjBsdW1wdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/rippled-blue-yellow-red-and-white-malaysian-flag-picture-id154050406?k=20&m=154050406&s=612x612&w=0&h=Vr8mslXR-qIcPEPCy20uKnDPU0k3aDczD0VsIJ6-5MM=',
      },
      {
        name: 'Beijing',
        country: 'China',
        image:
          'https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVpamluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/china-flag-picture-id1310357496?b=1&k=20&m=1310357496&s=170667a&w=0&h=HMZmCAfqmDy5RLcstPV01NLInSyEe1xyJhHKJbBf-0E=',
      },
      {
        name: 'Tokyo',
        country: 'Japan',
        image:
          'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/japanese-flag-picture-id455691841?b=1&k=20&m=455691841&s=170667a&w=0&h=1SErr7TGN9DctLgTJaejZ-m_KXEnsD1MhLlu4S3h6lo=',
      },
      {
        name: 'Seoul',
        country: 'South Korea',
        image:
          'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VvdWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/south-korean-flag-background-on-white-picture-id455169703?b=1&k=20&m=455169703&s=170667a&w=0&h=2OSoDaNWpx0OYx1H6m4SuNcdDrYSTnHDDxKaStWjIyE=',
      },
      {
        name: 'Shanghai',
        country: 'China',
        image:
          'https://images.unsplash.com/photo-1614221330834-9399e5631af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoYW5naGFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/china-flag-picture-id1310357496?b=1&k=20&m=1310357496&s=170667a&w=0&h=HMZmCAfqmDy5RLcstPV01NLInSyEe1xyJhHKJbBf-0E=',
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
          'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/flag-picture-id1138912104?b=1&k=20&m=1138912104&s=170667a&w=0&h=6gmHW3Q8R0T5n1EOJOU1d7Kcp3fumlLd8uc6cpKDnlA=',
      },
      {
        name: 'Los Angeles',
        country: 'United States',
        image:
          'https://images.unsplash.com/photo-1492086517200-9393d4eb53bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxvcyUyMGFuZ2VsZXMlMjBub29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/flag-picture-id1138912104?b=1&k=20&m=1138912104&s=170667a&w=0&h=6gmHW3Q8R0T5n1EOJOU1d7Kcp3fumlLd8uc6cpKDnlA=',
      },
      {
        name: 'Chicago',
        country: 'United States',
        image:
          'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2Fnb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/flag-picture-id1138912104?b=1&k=20&m=1138912104&s=170667a&w=0&h=6gmHW3Q8R0T5n1EOJOU1d7Kcp3fumlLd8uc6cpKDnlA=',
      },
      {
        name: 'Houston',
        country: 'United States',
        image:
          'https://images.unsplash.com/photo-1572809596417-eea1f4c375d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c3RvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/flag-picture-id1138912104?b=1&k=20&m=1138912104&s=170667a&w=0&h=6gmHW3Q8R0T5n1EOJOU1d7Kcp3fumlLd8uc6cpKDnlA=',
      },
      {
        name: 'Washington',
        country: 'United States',
        image:
          'https://images.unsplash.com/photo-1520525003249-2b9cdda513bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FzaGluZ3RvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/flag-picture-id1138912104?b=1&k=20&m=1138912104&s=170667a&w=0&h=6gmHW3Q8R0T5n1EOJOU1d7Kcp3fumlLd8uc6cpKDnlA=',
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
          'https://images.unsplash.com/photo-1625426078245-6911839409dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJhc2lsaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/national-flag-of-brazil-picture-id652754032?b=1&k=20&m=652754032&s=170667a&w=0&h=1DGS-Smv4wYwxZZXHW1JGZ_oVITKEBIhN6s0ia-xYjg=',
      },
      {
        name: 'Sao Paulo',
        country: 'Brazil',
        image:
          'https://images.unsplash.com/photo-1583788758158-7a28a8c989ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbyUyMHBhdWxvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/national-flag-of-brazil-picture-id652754032?b=1&k=20&m=652754032&s=170667a&w=0&h=1DGS-Smv4wYwxZZXHW1JGZ_oVITKEBIhN6s0ia-xYjg=',
      },
      {
        name: 'Buenos Aires',
        country: 'Argentina',
        image:
          'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVlbm9zJTIwYWlyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/flag-of-argentina-picture-id610426496?b=1&k=20&m=610426496&s=170667a&w=0&h=1sqoiBOfanxZmTComgo5-BofOIXsNNYjV_m910UbILE=',
      },
      {
        name: 'Santiago',
        country: 'Chile',
        image:
          'https://images.unsplash.com/photo-1595113230152-956f9b179e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FudGlhZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/chile-flag-picture-id474104367?b=1&k=20&m=474104367&s=170667a&w=0&h=2jy3LAvyO9Clp2fverzm-YE8-n6S_5SLnVJF2aEJC68=',
      },
      {
        name: 'Lima',
        country: 'Peru',
        image:
          'https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGltYSUyMHBlcnV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/national-flag-of-peru-picture-id652754126?b=1&k=20&m=652754126&s=170667a&w=0&h=_kJizcgCVv0QVkmwIrXUybafubzAvjGEqfEFRS4E-lM=',
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
          'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/full-frame-image-of-england-flag-picture-id479199262?b=1&k=20&m=479199262&s=170667a&w=0&h=DRBqnGtB0CjhKkp38Urpp-vpVAWz1OO9-wfjs-BogD0=',
      },
      {
        name: 'Paris',
        country: 'France',
        image:
          'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/flag-of-france-horizontal-picture-id481690890?b=1&k=20&m=481690890&s=170667a&w=0&h=_dkuKQNuXEYlN2DFzSwjW-Rb0m6GbOVfbze28kRkvsY=',
      },
      {
        name: 'Berlin',
        country: 'Germany',
        image:
          'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVybGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/german-flag-symbol-of-germany-picture-id994137398?b=1&k=20&m=994137398&s=170667a&w=0&h=xqmRuawFJEJwq3NZnKMw_JSmQTyWRMgtaeGeHyQvaRk=',
      },
      {
        name: 'Madrid',
        country: 'Spain',
        image:
          'https://images.unsplash.com/photo-1577788922620-a85ef7281842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hZHJpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/full-frame-flag-of-spain-flag-picture-id479224872?b=1&k=20&m=479224872&s=170667a&w=0&h=rshpQtaimsvrQO7jwsIdpn1KFBjyGocYDklzRdkbYJA=',
      },
      {
        name: 'Rome',
        country: 'Italy',
        image:
          'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/flag-of-italy-picture-id585788002?b=1&k=20&m=585788002&s=170667a&w=0&h=dUHYMXntwTPhBkpRvRz0JYeEtRwS1Q-dFkYwdWEQ8AM=',
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
          'https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3lkbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/australia-flag-picture-id530234485?b=1&k=20&m=530234485&s=170667a&w=0&h=FRoK_iZuz7sixQ_-D4E8_HIRLGbwFgZWVXvqLmEoN_g=',
      },
      {
        name: 'Melbourne',
        country: 'Australia',
        image:
          'https://images.unsplash.com/photo-1514395629347-41e19e338c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVsYm91cm5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/australia-flag-picture-id530234485?b=1&k=20&m=530234485&s=170667a&w=0&h=FRoK_iZuz7sixQ_-D4E8_HIRLGbwFgZWVXvqLmEoN_g=',
      },
      {
        name: 'Brisbane',
        country: 'Australia',
        image:
          'https://images.unsplash.com/photo-1548661625-a30d197ce439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJpc2JhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/australia-flag-picture-id530234485?b=1&k=20&m=530234485&s=170667a&w=0&h=FRoK_iZuz7sixQ_-D4E8_HIRLGbwFgZWVXvqLmEoN_g=',
      },
      {
        name: 'Perth',
        country: 'Australia',
        image:
          'https://images.unsplash.com/photo-1524586410818-196d249560e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/australia-flag-picture-id530234485?b=1&k=20&m=530234485&s=170667a&w=0&h=FRoK_iZuz7sixQ_-D4E8_HIRLGbwFgZWVXvqLmEoN_g=',
      },
      {
        name: 'Adelaide',
        country: 'Australia',
        image:
          'https://images.unsplash.com/photo-1597058342663-4130321d69aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWRlbGFpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/australia-flag-picture-id530234485?b=1&k=20&m=530234485&s=170667a&w=0&h=FRoK_iZuz7sixQ_-D4E8_HIRLGbwFgZWVXvqLmEoN_g=',
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
          'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fpcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/egyptian-flag-picture-id472216325?b=1&k=20&m=472216325&s=170667a&w=0&h=IIxGmSSIdQLPby4x_97zza-tWQ41AEVwCevbfLPj3e8=',
      },
      {
        name: 'Nairobi',
        country: 'Kenya',
        image:
          'https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/highly-detailed-flag-of-kenya-kenya-flag-high-detail-national-flag-picture-id1309828548?b=1&k=20&m=1309828548&s=170667a&w=0&h=2V7QuuhilEUUoanYnWpp5dF3q_x0nJuZ72p1x-Pqs64=',
      },
      {
        name: 'Kampala',
        country: 'Uganda',
        image:
          'https://images.unsplash.com/photo-1610397909731-995882394aaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2FtcGFsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/republic-of-uganda-national-fabric-flag-textile-background-picture-id1181626142?b=1&k=20&m=1181626142&s=170667a&w=0&h=QlB-cu4yHoBvAlyLuxLNVtr2Gd7-_nHIZdPIlX4NJsE=',
      },
      {
        name: 'Johannesburg',
        country: 'South Africa',
        image:
          'https://media.istockphoto.com/photos/johannesburg-city-skyline-and-nelson-mandela-bridge-at-sunset-picture-id1201928833?b=1&k=20&m=1201928833&s=170667a&w=0&h=3mXvoIwsahD9L27hEva0_FiE-PRDwIhAUqV_IldXNZc=',
        flag: 'https://media.istockphoto.com/photos/south-african-flag-picture-id462515999?b=1&k=20&m=462515999&s=170667a&w=0&h=epva_khMQSXgQZKJioLXGLyxlvNkBvi6eOtVhGMS8kc=',
      },
      {
        name: 'Lagos',
        country: 'Nigeria',
        image:
          'https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFnb3MlMjBuaWdlcmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        flag: 'https://media.istockphoto.com/photos/nigeria-flag-picture-id471793397?b=1&k=20&m=471793397&s=170667a&w=0&h=6jAghePLCOCTmIYvaNJZsGKr0wgzuP0SbDzyeHg-X6s=',
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
