import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/menu";

import { AiOutlineMenu } from 'react-icons/ai';

const NavMenu = () => (
  <Menu>
    <MenuButton as={IconButton} variant="outlined" aria-label="Menu" icon={<AiOutlineMenu />} mx="0" size="lg"/>
    <MenuList>
      <MenuGroup>
        {/* <MenuItem>
          Discover
        </MenuItem> */}
        <MenuItem>
          Login
        </MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);

export default NavMenu;