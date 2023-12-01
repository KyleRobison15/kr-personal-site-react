import { Button, HStack, Image, useColorMode } from "@chakra-ui/react";
import darkLogo from "../assets/KR_Logo_Dark.png";
import lightLogo from "../assets/KR_Logo_Light.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const navLinks = ["About", "Skills", "Portfolio", "Resume", "Blog"];

  return (
    <HStack
      h="70px"
      p="10px 20px"
      justifyContent="space-between"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
    >
      <Image
        src={colorMode === "light" ? darkLogo : lightLogo}
        boxSize="38px"
      />
      {navLinks.map((link) => (
        <Button key={link} onClick={() => console.log(link)} variant="link">
          {link}
        </Button>
      ))}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
