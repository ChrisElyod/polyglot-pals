import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Link from 'next/link';

const NavItems = () => {
  const isAuthenticated = true;
  return (
    <Box>
      {
        isAuthenticated ? <Button variant="nav" size="md"><Link href="/discover">Discover</Link></Button> : null
      }
      
      <Button variant="nav" size="md">
        Log In
      </Button>
    </Box>
  );
}

export default NavItems;