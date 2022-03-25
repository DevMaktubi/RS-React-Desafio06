import { Flex, SimpleGrid } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { SecondGridItem } from './SecondGridItem';

export const SecondHero = (): ReactElement => {
  return (
    <Flex w="100%" justify="center" align="center" h={335} mt="4">
      <SimpleGrid columns={[2, 3, 5]} spacing={[5, 10, 20]}>
        <SecondGridItem image="/images/cocktail" title="vida noturna" />
        <SecondGridItem image="/images/surf" title="praia" />
        <SecondGridItem image="/images/building" title="moderno" />
        <SecondGridItem image="/images/museum" title="clássico" />
        <SecondGridItem image="/images/earth" title="e mais..." />
      </SimpleGrid>
    </Flex>
  );
};
