import { Flex, Text } from "@chakra-ui/react";
import SkillsGrid from "../SkillsGrid";
import useSkills, { skillCategories } from "../../hooks/useSkills";
import CategorySelector from "../CategorySelector";
import { useState } from "react";
import SearchInput from "../SearchInput";
import GridHeading from "../GridHeading";

const Skills = () => {
  const skills = useSkills();

  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const [searchString, setSearchString] = useState("");

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
    <>
      <GridHeading
        heading={"Skills"}
        selectedCategory={selectedCategory}
        defaultCategory={"All Skills"}
      />
      <Flex px="12px" flexWrap="wrap" gap={2}>
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
          categories={skillCategories}
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
    </>
  );
};

export default Skills;
