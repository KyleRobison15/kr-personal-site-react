import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { navItems } from "../../services/nav-menu-options";
import SmoothScroll from "../SmoothScroll";

interface Props {
  onNavChange: (tabIndex: number) => void;
}

const NavMenu = ({ onNavChange }: Props) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon h="24px" w="24px" />}
        variant="outline"
      />
      <MenuList>
        {navItems.map((navItem) => (
          <SmoothScroll
            key={navItem.title}
            to={navItem.for}
            offset={navItem.offset}
            onNavChange={() => onNavChange(navItem.tabIndex)}
          >
            <MenuItem>{navItem.title}</MenuItem>
          </SmoothScroll>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
