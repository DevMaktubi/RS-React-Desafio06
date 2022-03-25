import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { AiOutlineInfoCircle } from 'react-icons/ai';

interface HCitiesData {
  name: string;
  country: string;
  image: string;
  flag: string;
}

interface ContinentData {
  name: string;
  image: string;
  Countries: number;
  SpokenLanguages: number;
  HCitiesCount: number;
  HCitiesExample: HCitiesData[];
}

interface ContinentProps {
  continent: ContinentData;
}

const Continent = ({ continent }: ContinentProps): ReactElement => {
  const {
    name,
    image,
    Countries,
    SpokenLanguages,
    HCitiesCount,
    HCitiesExample,
  } = continent;
  return (
    <Flex flexDir="column">
      <Flex
        as="header"
        w="100%"
        h={500}
        bgImage={`url(${image}) `}
        bgSize="cover"
        bgPos="center"
        px="40"
        py="20"
        align="flex-end"
      >
        <Text
          fontSize="6xl"
          fontWeight="bold"
          color="white.heading"
          textAlign="left"
        >
          {name}
        </Text>
      </Flex>
      <Flex w="100%" px="40" py="20">
        <Box flex={1}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.600" maxW={560}>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a lesta pela divisórias de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso e o mar Negro a sudeste
          </Text>
        </Box>
        <SimpleGrid
          flex={1}
          spacing="4"
          columns={3}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="5xl" color="yellow.400" fontWeight="bold">
              {Countries}
            </Text>
            <Text fontSize="3xl" color="gray.heading" fontWeight="bold">
              Países
            </Text>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="5xl" color="yellow.400" fontWeight="bold">
              {SpokenLanguages}
            </Text>
            <Text fontSize="3xl" color="gray.heading" fontWeight="bold">
              Línguas
            </Text>
          </Box>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="5xl" color="yellow.400" fontWeight="bold">
              {HCitiesCount}
            </Text>
            <Text
              display="flex"
              alignItems="center"
              fontSize="3xl"
              color="gray.heading"
              fontWeight="bold"
            >
              cidades +100{' '}
              <Tooltip
                label="Cidades +100 são as 100 cidades mais visitadas do mundo"
                fontSize="md"
              >
                <Flex as="span">
                  <Icon
                    _hover={{ cursor: 'pointer' }}
                    as={AiOutlineInfoCircle}
                    size="1.5em"
                    color="gray.info"
                    ml="2"
                  />
                </Flex>
              </Tooltip>
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex w="100%" px="40" py="20" flexDir="column">
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color="gray.heading"
          alignSelf="flex-start"
          py="6"
        >
          Cidades +100
        </Text>
        <SimpleGrid spacing={[4, 8]} columns={[1, 2, 4]}>
          {HCitiesExample.map((city, index) => (
            <Box
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Image
                w="100%"
                borderTopRadius="8px"
                h={200}
                src={city.image}
                alt={city.name}
                zIndex={-2}
              />
              <Flex
                bg="whiteAlpha"
                w="100%"
                px="6"
                py="4"
                justify="center"
                align="center"
                border="1px"
                borderTop="0px"
                borderColor="yellow.300"
                borderBottomRadius="8px"
              >
                <Box
                  display="flex"
                  flexDir="column"
                  justifyContent="flex-start"
                >
                  <Text fontSize="2xl" fontWeight="bold" color="gray.heading">
                    {city.name}
                  </Text>
                  <Text fontSize="1xl" fontWeight="bold" color="gray.400">
                    {city.country}
                  </Text>
                </Box>
                <Flex ml="auto">
                  <Image
                    borderRadius="50%"
                    w="50px"
                    h="50px"
                    justifyContent="center"
                    alignItems="center"
                    objectFit="cover"
                    objectPosition="center"
                    border="1px"
                    borderColor="gray.200"
                    src={city.flag}
                    alt={city.name}
                  />
                </Flex>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { continent } = params;
  const response = await axios.get(
    `http://localhost:3000/api/continents/${continent}`
  );
  return {
    props: {
      continent: response.data,
    },
    redirect: 60 * 60, // 1 Hour
  };
};

export default Continent;
