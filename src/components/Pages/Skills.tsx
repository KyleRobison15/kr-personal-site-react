import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { sectionHeadingSizes } from "../../services/typography-breakpoints";
import SkillsGrid from "../SkillsGrid";
import useSkills from "../../hooks/useSkills";
import CategorySelector from "../CategorySelector";
import { useState } from "react";
import SearchInput from "../SearchInput";

const Skills = () => {
  const skills = useSkills();

  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const [searchString, setSearchString] = useState("");

  const bg = useColorModeValue("gray.50", "gray.900");

  const filterSkills = () => {
    const filteredSkills = [...skills];

    if (searchString === "" && selectedCategory === "All Skills") {
      return filteredSkills;
    } else if (searchString !== "" && selectedCategory === "All Skills") {
      return filteredSkills.filter((skill) =>
        skill.label.toLowerCase().includes(searchString.toLowerCase())
      );
    } else {
      return filteredSkills
        .filter((skill) =>
          skill.categories.find((cat) => cat === selectedCategory)
        )
        .filter((skill) =>
          skill.label.toLowerCase().includes(searchString.toLowerCase())
        );
    }
  };

  return (
    <Box w="100%" p="50px" id="skills" bg={bg} borderRadius={10} shadow="lg">
      <Text fontSize={sectionHeadingSizes} textAlign="center" pb={5}>
        {selectedCategory === "All Skills"
          ? "My Skills"
          : `My ${selectedCategory} Skills`}
      </Text>
      <Flex px="12px" flexWrap="wrap" gap={2}>
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <SearchInput
          onChange={(value) => setSearchString(value)}
          selectedCategory={selectedCategory}
        />
      </Flex>
      {filterSkills().length === 0 ? (
        <Text textAlign="center" mt="50px">
          {selectedCategory === "All Skills"
            ? `Whoops! No skills were found for '${searchString}'.`
            : `Whoops! No '${selectedCategory}' skills were found for '${searchString}'.`}
        </Text>
      ) : (
        <SkillsGrid skills={filterSkills()} />
      )}
    </Box>
  );
};

export default Skills;
