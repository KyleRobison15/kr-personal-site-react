import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { navMenuItems } from "../services/nav-menu-options";

const NavMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon h="24px" w="24px" />}
        variant="outline"
      />
      <MenuList>
        {navMenuItems.map((menuItem) => (
          <MenuItem key={menuItem} onClick={() => console.log(menuItem)}>
            {menuItem}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
