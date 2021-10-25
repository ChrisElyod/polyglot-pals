import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { Box, Heading } from '@chakra-ui/layout';
import { theme } from '../theme/theme';
import Header from '../components/header.component';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Header />
      <Box pt={{ base: '60px', sm: '80px' }} display="flex" justifyContent="center" width="100%">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default MyApp;
