import { Box, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { FaInfoCircle } from 'react-icons/fa';

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
              <Icon as={FaInfoCircle} size="1.5em" color="gray.info" ml="2" />
            </Text>
          </Box>
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
  };
};

export default Continent;
