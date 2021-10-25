import React from 'react';
import { Box, Text } from "@chakra-ui/layout";
import DemoForm from './hero-form.component';

const IndexHero = () => (
  <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "center", md: "space-between"}} alignItems="center">
    <Box fontSize={{ base: "20", md: "32" }} flex="1">
      <Box
        transform="rotate(2deg)"
        fontWeight="semibold"
        textDecoration="underline"
        textAlign="left"
        display="flex"
        flexDirection="column"
      >
        <Text>Learn language through conversation.</Text>
        <Text>Connect with others.</Text>
      </Box>
      <Box>
        THIS IS WHERE AN EXAMPLE CONVERSATION WILL GO
      </Box>
    </Box>
    <Box py={{ base: "4", md: '' }} flex="1" px={{ base: '', md: '4' }}>
      <Text fontSize="20" fontWeight="semibold">Let's get started!</Text>
      <DemoForm />
    </Box>
  </Box>
);

export default IndexHero;