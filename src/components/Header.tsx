import { Flex, Image } from '@chakra-ui/react';
import { ReactElement } from 'react';

export const Header = (): ReactElement => {
  return (
    <Flex justify="center" align="center" h="20" w="100%" as="header">
      <Image src="/images/logo.svg" alt="logo" h="10" />
    </Flex>
  );
};
