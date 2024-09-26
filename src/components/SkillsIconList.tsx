import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { skillsIconMap, mapLabelsToNames } from "../hooks/useSkills";

interface Props {
  skillLabels: string[];
}

const SkillsIconList = ({ skillLabels }: Props) => {
  const color = useColorModeValue("gray.700", "gray.100");

  const skillNames = mapLabelsToNames(skillLabels);

  return (
    <Flex flexWrap="wrap" marginY={2} gap={1}>
      {skillNames.map((skill) => (
        <Icon
          key={skill}
          as={skillsIconMap[skill]}
          boxSize={[5, 5, 6]}
          color={color}
        />
      ))}
    </Flex>
  );
};

export default SkillsIconList;
