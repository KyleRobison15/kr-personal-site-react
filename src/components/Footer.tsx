import {
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
import darkLogo from "../assets/KR_Logo_Dark.png";
import lightLogo from "../assets/KR_Logo_Light.png";

const Footer = () => {
  const footerBg = useColorModeValue("gray.50", "gray.900");
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      as="footer"
      id="footer"
      minH="64px"
      w="100%"
      px="32px"
      py="10px"
      justifyContent="space-between"
      alignItems="center"
      bg={footerBg}
      borderTopWidth="1px"
    >
      <HStack>
        <Icon as={FaRegCopyright} boxSize="12px" />
        <Text fontSize="sm" p="0" m="0">
          2024 Kyle Robison
        </Text>
      </HStack>
      <Stack direction="row" alignItems="center">
        <Text fontSize="sm" p="0" m="0">
          Website created by Kyle Robison:
        </Text>
        <HStack spacing={3} alignItems="center">
          <Link href="https://github.com/KyleRobison15" isExternal>
            <Icon as={BsGithub} boxSize="18px" />
          </Link>
          <Link href="https://www.linkedin.com/in/kyle-robison/" isExternal>
            <Icon as={BsLinkedin} boxSize="18px" />
          </Link>
          <Link href="https://kylerobison.com" isExternal pt="4px">
            <Image
              src={colorMode === "light" ? darkLogo : lightLogo}
              boxSize="19px"
              cursor="pointer"
            />
          </Link>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default Footer;
