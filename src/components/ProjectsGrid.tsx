import { SimpleGrid } from "@chakra-ui/react";
import { Project } from "../hooks/useProjects";
import CardContainer from "./CardContainer";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
      padding="12px"
      spacing={4}
      w="100%"
    >
      {projects.map((project) => (
        <CardContainer key={project.name} borderRadius="10px">
          <ProjectCard project={project} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProjectsGrid;
