/* eslint-disable import/no-unresolved */
import { ReactElement, SetStateAction, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Flex, Text } from '@chakra-ui/react';

import 'swiper/css'; // core Swiper
import 'swiper/css/pagination'; // Swiper pagination module
import 'swiper/css/navigation'; // Swiper navigation module
import Link from 'next/link';
import { getContinents } from '../../services/getContinents';

interface Continent {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const Carousel = (): ReactElement => {
  const [continents, setContinents] = useState<Continent[]>([]);

  const getData = async (): Promise<void> => {
    const data = await getContinents();
    setContinents(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Flex w={['100%', 1240]} mx="auto" mt="20" mb="16">
      <Swiper
        navigation
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
      >
        {continents &&
          continents.map((continent, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <Flex
                w="100%"
                h={450}
                bg="rgba(0,0,0,.5)"
                _before={{
                  content: '""',
                  pos: 'absolute',
                  bgSize: 'cover',
                  bgPos: 'center',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgImage: `url(${continent.image})`,
                  opacity: '0.9',
                  zIndex: '-1',
                }}
                flexDir="column"
                align="center"
                justify="center"
              >
                <Link href={`/continents/${continent.slug}`} passHref>
                  <Text
                    as="a"
                    fontSize="5xl"
                    fontWeight="bold"
                    color="white.heading"
                    _hover={{ color: 'yellow' }}
                    transition=".5s"
                  >
                    {continent.name}
                  </Text>
                </Link>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="white.heading"
                  mt="2"
                >
                  {continent.description}
                </Text>
              </Flex>
            </SwiperSlide>
          ))}
      </Swiper>
    </Flex>
  );
};
