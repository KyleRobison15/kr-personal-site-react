import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { skillsIconMap } from "../hooks/useSkills";

interface Props {
  skills: string[];
}

const SkillsIconList = ({ skills }: Props) => {
  const color = useColorModeValue("gray.700", "gray.100");

  return (
    <HStack marginY={2}>
      {skills.map((skill) => (
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
