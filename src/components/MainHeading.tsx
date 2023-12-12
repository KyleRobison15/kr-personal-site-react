import { Flex, Heading, Text } from "@chakra-ui/react";
import { headingSizes, textSizes } from "../services/typography-breakpoints";

const MainHeading = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading size={headingSizes}>Kyle Robison</Heading>
      <Text mt={4} fontSize={textSizes}>
        Full Stack Developer
      </Text>
    </Flex>
  );
};

export default MainHeading;
