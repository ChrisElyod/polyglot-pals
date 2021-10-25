import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import SectionHeader from '../section-header';

const IndexDemo = () => (
  <Box py="8" display="flex" flexDirection="column">
    <SectionHeader>How you'll connect</SectionHeader>
    <Box mt="6">
      Insert images of the create lf-pal screen and the main forum for lf-pal's
    </Box>
    <Text fontWeight="light" fontSize="14">Unfortunately, we're only available through this site at this time. (We've got you covered, though. <i> Plans to expand to a mobile app as well!</i>)</Text>
  </Box>
)

export default IndexDemo;