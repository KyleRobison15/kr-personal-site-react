import { Box, Text } from "@chakra-ui/react";
import { textSizes } from "../../services/typography-breakpoints";

const Skills = () => {
  return (
    <Box h="2000px" w="100%" pt={8} pb={8} id="skills">
      <Text fontSize={textSizes} textAlign="center">
        Skills
      </Text>
    </Box>
  );
};

export default Skills;
