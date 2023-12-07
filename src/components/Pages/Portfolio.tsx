import { Box, Text } from "@chakra-ui/react";
import { textSizes } from "../../services/typography-breakpoints";

const Portfolio = () => {
  return (
    <Box h="2000px" w="100%" pt={8} pb={8} bg="gray.300" id="portfolio">
      <Text fontSize={textSizes} textAlign="center">
        Portfolio
      </Text>
    </Box>
  );
};

export default Portfolio;
