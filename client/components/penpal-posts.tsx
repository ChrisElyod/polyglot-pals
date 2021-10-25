import { Box, Divider } from "@chakra-ui/layout";
import React, { FC } from "react";
import PenPalPost from "./penpal-post";

const PenPalPosts: FC = ({ children }) => {
  return (
    <Box position="relative" display="flex" flexDirection="column">
      <PenPalPost />
      <Divider />
      <PenPalPost />
      <Divider />
      <PenPalPost />
      <Divider />
      <PenPalPost />
      <Divider />
      <PenPalPost />
      <Divider color="blackAlpha.900" />
      <PenPalPost />
    </Box>
  );
}

export default PenPalPosts;