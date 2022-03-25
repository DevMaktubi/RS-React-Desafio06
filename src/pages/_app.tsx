import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { Header } from '../components/Header';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
