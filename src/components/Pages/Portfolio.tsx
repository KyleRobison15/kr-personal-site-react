import ProjectsGrid from "../ProjectsGrid";
import useProjects from "../../hooks/useProjects";
import { useState } from "react";
import GridHeading from "../GridHeading";
import { Flex } from "@chakra-ui/react";
import CategorySelector from "../CategorySelector";
import { projectSkillsLabels } from "../../hooks/useSkills";

const Portfolio = () => {
  const projects = useProjects();

  const [selectedCategory, setSelectedCategory] = useState("All Skills");

  const filterProjects = () => {
    const filteredProjects = [...projects];

    if (selectedCategory === "All Skills") {
      return filteredProjects;
    } else {
      return filteredProjects.filter((project) =>
        project.skills.find((cat) => cat === selectedCategory)
      );
    }
  };

  return (
    <>
      <GridHeading
        heading={"Portfolio"}
        selectedCategory={selectedCategory}
        defaultCategory={"All Skills"}
      />
      <Flex px="12px" flexWrap="wrap" gap={2}>
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
          categories={projectSkillsLabels}
        />
      </Flex>
      <ProjectsGrid projects={filterProjects()} />
    </>
  );
};

export default Portfolio;
