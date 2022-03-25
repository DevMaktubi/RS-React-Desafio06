import { Flex, Image } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export const Header = (): ReactElement => {
  const router = useRouter();

  if (router.pathname !== '/') {
    return (
      <Flex
        justify="space-around"
        px="50"
        align="center"
        h="8rem"
        w="100%"
        as="header"
      >
        <Link href="/" passHref>
          <ChevronLeftIcon
            position="absolute"
            left="10"
            _hover={{ cursor: 'pointer' }}
            fontSize="3xl"
          />
        </Link>
        <Image flex="1" src="/images/logo.svg" alt="logo" h="16" />
      </Flex>
    );
  }
  return (
    <Flex justify="center" align="center" h="8rem" w="100%" as="header">
      <Image src="/images/logo.svg" alt="logo" h="16" />
    </Flex>
  );
};
