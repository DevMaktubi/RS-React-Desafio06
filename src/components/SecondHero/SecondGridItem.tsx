import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface SecondGridItemProps {
  image: string;
  title: string;
}

export const SecondGridItem = ({
  image,
  title,
  ...rest
}: SecondGridItemProps): ReactElement => {
  return (
    <Flex flexDir="column" justify="center" align="center" {...rest}>
      <Image src={`${image}.svg`} alt={title} h={[12, 20, 28]} />
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
