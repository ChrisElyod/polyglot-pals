import React, { useEffect, useState } from 'react';
import { Box, Text } from "@chakra-ui/layout";
import NavItems from './nav-items.component';
import NavMenu from './nav-menu.component';

import Link from 'next/link'

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('scroll', () => setScrollHeight(window.pageYOffset));
    return () => window.removeEventListener('scroll', () => setScrollHeight(window.pageYOffset));
  }, [])

  return (
    <Box
      position="fixed"
      t="0"
      width="100%"
      display="flex"
      alignItems="center"
      h={{ base: '60px', sm: '80px' }}
      px={{ base: "6", sm: "10" }}
      fontFamily="Gideon Roman"
      bg={scrollHeight === 0 ? 'transparent' : 'white'}
      sx={{ transitionDuration: '500ms' }}
      zIndex={1000}
    >
      <Text fontSize={{ base: "22", md: "32" }} fontWeight="bold"><Link href="/">PolyPals</Link></Text>
      <Box ml="auto" display={{ base: 'none', sm: 'inline-flex' }}>
        <NavItems />
      </Box>
      <Box ml="auto" display={{ base: 'inline-flex', sm: 'none' }}>
        <NavMenu />
      </Box>
    </Box>
  )
};

export default Header;