import { Text } from "@chakra-ui/react";
import { sectionHeadingSizes } from "../../services/typography-breakpoints";
import ProjectsGrid from "../ProjectsGrid";
import useProjects from "../../hooks/useProjects";

const Portfolio = () => {
  const projects = useProjects();

  return (
    <>
      <Text fontSize={sectionHeadingSizes} textAlign="center" pb={5}>
        My Portfolio
      </Text>
      <ProjectsGrid projects={projects} />
    </>
  );
};

export default Portfolio;
