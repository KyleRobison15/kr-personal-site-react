import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { skillsIconMap, mapLabelsToNames } from "../hooks/useSkills";

interface Props {
  skillLabels: string[];
}

const SkillsIconList = ({ skillLabels }: Props) => {
  const color = useColorModeValue("gray.700", "gray.100");

  const skillNames = mapLabelsToNames(skillLabels);

  return (
    <HStack marginY={2}>
      {skillNames.map((skill) => (
        <Icon
          key={skill}
          as={skillsIconMap[skill]}
          boxSize={[6, 6, 7]}
          color={color}
        />
      ))}
    </HStack>
  );
};

export default SkillsIconList;
