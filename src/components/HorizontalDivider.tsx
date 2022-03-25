import { Divider } from '@chakra-ui/react';
import { ReactElement } from 'react';

export const HorizontalDivider = (): ReactElement => {
  return (
    <Divider
      orientation="horizontal"
      w={100}
      mx="auto"
      color="gray.heading"
      opacity="1"
      borderColor="gray.heading"
      my="8"
    />
  );
};
