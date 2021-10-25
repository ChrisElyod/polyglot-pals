import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import SectionHeader from '../section-header';

const WhyUs = () => (
  <Box display="flex" flexDirection="column">
    <SectionHeader>Why choose PolyPals?</SectionHeader>
    <Box mt="6">
      <Text mt="auto">
        PolyPals is a site created by a language learner, for language learners.
        <br />
        <br />
        <Text fontWeight="semibold" as="i">Note from the site's creator: </Text>
        Getting a grasp of conversational language has always been one of the more difficult parts of learning languages for me, I wanted a way of connecting with others that are learning as well to push myself to learn in a more casual environment
      </Text>
    </Box>
    {/* <Box pt="6">
      <Text as="i" fontWeight="semibold" fontSize="20">Note from the creator:</Text>
      <Text>
        I started learning different languages later in life.
        Being from Ontario (Canada), French was part of the school curriculum from grades 1 through 9.
      </Text>
    </Box> */}
  </Box>
);

export default WhyUs;