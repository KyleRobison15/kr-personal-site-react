import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { sectionHeadingSizes } from "../../services/typography-breakpoints";
import ProjectsGrid from "../ProjectsGrid";
import useProjects from "../../hooks/useProjects";

const Portfolio = () => {
  const projects = useProjects();

  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box
      w="100%"
      h="1000px"
      p="50px"
      my="100px"
      id="portfolio"
      bg={bg}
      borderRadius={10}
      shadow="lg"
    >
      <Text fontSize={sectionHeadingSizes} textAlign="center" pb={5}>
        My Portfolio
      </Text>
      <ProjectsGrid projects={projects} />
    </Box>
  );
};

export default Portfolio;
