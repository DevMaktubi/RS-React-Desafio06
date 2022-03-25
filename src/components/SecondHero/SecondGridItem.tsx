import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface SecondGridItemProps {
  image: string;
  title: string;
}

export const SecondGridItem = ({
  image,
  title,
}: SecondGridItemProps): ReactElement => {
  return (
    <Flex flexDir="column" justify="center" align="center">
      <Image src={`${image}.svg`} alt={title} />
      <Text
        color="gray.heading"
        fontWeight="bold"
        fontSize={['lg', '2xl', '4xl']}
      >
        {title}
      </Text>
    </Flex>
  );
};
