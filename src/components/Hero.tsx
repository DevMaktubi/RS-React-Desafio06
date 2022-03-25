import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

export const Hero = (): ReactElement => {
  return (
    <Flex
      backgroundImage="/images/Background.png"
      bgSize="cover"
      w="100%"
      h={[170, 335]}
      mb={[8, 0]}
    >
      <Flex flex="1" align="center" justify="center" direction="column">
        <VStack maxW={[355, 500]} px={['8', '0']}>
          <Text
            fontSize={['xl', '2xl', '4xl']}
            color="white.heading"
            fontWeight="bold"
            alignSelf="flex-start"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text fontSize={['0.9rem', '1xl', '2xl']} color="white.heading">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
      </Flex>
      <Flex display={['none', 'flex']} flex="1" justify="center" align="center">
        <Image src="/images/Airplane.svg" alt="Airplane" mb="-28" />
      </Flex>
    </Flex>
  );
};
