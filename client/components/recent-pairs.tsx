import React from "react";
import Icon from "@chakra-ui/icon";
import { Box, Text, Divider } from "@chakra-ui/layout";

import { BsArrowLeftRight } from 'react-icons/bs';

const RecentPairs = () => {
  return (
    <Box borderRadius="sm" bg="white" p="8" shadow="md">
      <Text textDecoration="underline" fontSize="18" fontWeight="semibold">Recent Common Pairings</Text>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box pt="4">
          English
          <Icon as={BsArrowLeftRight} mx="2" w="6" h="auto" />
          Korean
        </Box>
        <Divider pt="4" />
        <Box pt="4">
          English
          <Icon as={BsArrowLeftRight} mx="2" w="6" h="auto" />
          Korean
        </Box>
        <Divider pt="4" />
        <Box pt="4">
          English
          <Icon as={BsArrowLeftRight} mx="2" w="6" h="auto" />
          Korean
        </Box>
        <Divider pt="4" />
        <Box pt="4">
          English
          <Icon as={BsArrowLeftRight} mx="2" w="6" h="auto" />
          Korean
        </Box>
        <Divider pt="4" />
        <Box pt="4">
          English
          <Icon as={BsArrowLeftRight} mx="2" w="6" h="auto" />
          Korean
        </Box>
      </Box>
    </Box>
  );
}

export default RecentPairs;