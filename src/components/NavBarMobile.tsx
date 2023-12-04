import { HStack, Image, useColorMode } from "@chakra-ui/react";
import darkLogo from "../assets/KR_Logo_Dark.png";
import lightLogo from "../assets/KR_Logo_Light.png";
import ColorModeSwitch from "./ColorModeSwitch";
import NavMenu from "./NavMenu";

const NavBarMobile = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      position="fixed"
      zIndex="1000"
      w="100%"
      top="0"
      h="70px"
      p="10px 20px"
      justifyContent="space-between"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
    >
      <Image
        src={colorMode === "light" ? darkLogo : lightLogo}
        boxSize="38px"
      />
      <ColorModeSwitch />
      <NavMenu />
    </HStack>
  );
};

export default NavBarMobile;
