import { Button, HStack, Image, useColorMode } from "@chakra-ui/react";
import darkLogo from "../../assets/KR_Logo_Dark.png";
import lightLogo from "../../assets/KR_Logo_Light.png";
import ColorModeSwitch from "../ColorModeSwitch";
import SmoothScroll from "../SmoothScroll";
import { navItems } from "../../services/nav-menu-options";

interface Props {
  onNavChange: (tabIndex: number) => void;
}

const NavBar = ({ onNavChange }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      zIndex="1000"
      as="nav"
      position="fixed"
      w="100%"
      top="0"
      h="70px"
      p="10px 20px"
      justifyContent="space-between"
      bg={colorMode === "light" ? "gray.50" : "gray.900"}
      shadow="sm"
    >
      <SmoothScroll to={"splash"} offset={0} onNavChange={() => onNavChange(0)}>
        <Image
          src={colorMode === "light" ? darkLogo : lightLogo}
          boxSize="38px"
          cursor="pointer"
        />
      </SmoothScroll>
      {navItems.map((navItem) => (
        <SmoothScroll
          key={navItem.title}
          to={navItem.for}
          offset={navItem.offset}
          onNavChange={() => onNavChange(navItem.tabIndex)}
        >
          <Button variant="link">{navItem.title}</Button>
        </SmoothScroll>
      ))}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
