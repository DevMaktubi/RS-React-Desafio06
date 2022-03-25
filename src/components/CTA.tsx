import { Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

export const CTA = (): ReactElement => {
  return (
    <Flex
      w="100%"
      flexDir="column"
      justify="center"
      align="center"
      h="100"
      py="4"
    >
      <Text fontSize="5xl" fontWeight="medium" color="gray.heading">
        Vamos nessa?
      </Text>
      <Text fontSize="5xl" fontWeight="medium" color="gray.heading">
        Então escolha seu continente
      </Text>
    </Flex>
  );
};
