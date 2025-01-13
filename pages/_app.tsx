import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, defaultSystem, Flex } from '@chakra-ui/react';
import { Sidemenu } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Sidemenu mainContent={<Component {...pageProps} />} />
    </ChakraProvider>
  );
}
