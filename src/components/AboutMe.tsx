import { Box, Text } from "@chakra-ui/react";
import { textSizes } from "../services/typography-breakpoints";

const AboutMe = () => {
  return (
    <Box h="2000px" w="100%" pt={8} pb={8} bg="gray.100" id="aboutme">
      <Text fontSize={textSizes} textAlign="center">
        Get to know me!
      </Text>
    </Box>
  );
};

export default AboutMe;
