import { Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { headingSizes, textSizes } from "../services/typography-breakpoints";
import waveEmoji from "../assets/wave.png";

const MainHeading = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <HStack mb={3}>
        <Image
          src={waveEmoji}
          aria-label="Waving hand emoji"
          boxSize="50px"
          mb={2}
          mr={2}
        />
        <Text fontSize={textSizes}>Hi there! I am,</Text>
      </HStack>
      <Heading size={headingSizes}>Kyle Robison</Heading>
      <Text mt={4} fontSize={textSizes}>
        Full Stack Developer
      </Text>
    </Flex>
  );
};

export default MainHeading;
