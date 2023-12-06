import { Heading, Text, Box } from "@chakra-ui/react";
import { headingSizes, textSizes } from "../services/typography-breakpoints";

const MobileHeading = () => {
  return (
    <Box pos="absolute" mb={7} bottom="0" left="8%">
      <Heading size={headingSizes}>Kyle Robison</Heading>
      <Text mb="0" fontSize={textSizes}>
        Full Stack Developer
      </Text>
    </Box>
  );
};

export default MobileHeading;
