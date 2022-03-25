import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

export const Hero = (): ReactElement => {
  return (
    <Flex
      backgroundImage="/images/Background.png"
      bgSize="cover"
      w="100%"
      h={335}
    >
      <Flex flex="1" align="center" justify="center" direction="column">
        <VStack maxW={500}>
          <Text
            fontSize="4xl"
            color="white.heading"
            fontWeight="bold"
            alignSelf="flex-start"
          >
            7 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text fontSize="2xl" color="white.heading">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
      </Flex>
      <Flex flex="1" justify="center" align="center">
        <Image src="/images/Airplane.svg" alt="Airplane" mb="-28" />
      </Flex>
    </Flex>
  );
};
