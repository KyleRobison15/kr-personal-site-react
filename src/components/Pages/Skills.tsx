import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { sectionHeadingSizes } from "../../services/typography-breakpoints";
import SkillsGrid from "../SkillsGrid";
import useSkills from "../../hooks/useSkills";
import CategorySelector from "../CategorySelector";
import { useState } from "react";

const Skills = () => {
  const skills = useSkills();

  const [selectedCategory, setSelectedCategory] = useState("All Skills");

  const bg = useColorModeValue("gray.50", "gray.900");

  const filteredSkills = skills.filter((skill) =>
    skill.categories.find((cat) => cat === selectedCategory)
  );

  return (
    <Box w="100%" p="50px" id="skills" bg={bg} borderRadius={10}>
      <Text fontSize={sectionHeadingSizes} textAlign="center">
        {selectedCategory === "All Skills"
          ? "My Skills"
          : `My ${selectedCategory} Skills`}
      </Text>
      <HStack px="12px">
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </HStack>
      <SkillsGrid
        skills={selectedCategory === "All Skills" ? skills : filteredSkills}
      />
    </Box>
  );
};

export default Skills;
