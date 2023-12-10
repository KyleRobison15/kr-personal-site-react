import { SimpleGrid } from "@chakra-ui/react";
import SkillCardContainer from "./SkillCardContainer";
import SkillCard from "./SkillCard";
import { Skill } from "../hooks/useSkills";

interface Props {
  skills: Skill[];
}

const SkillsGrid = ({ skills }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 4 }}
      padding="12px"
      spacing={4}
      w="100%"
    >
      {skills.map((skill) => (
        <SkillCardContainer key={skill.name}>
          <SkillCard skill={skill} />
        </SkillCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default SkillsGrid;
