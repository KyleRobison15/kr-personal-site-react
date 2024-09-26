import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Heading,
  Icon,
  Tag,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Skill } from "../hooks/useSkills";
import {
  cardHeadingSizes,
  cardTextSizes,
} from "../services/typography-breakpoints";

interface Props {
  skill: Skill;
}

const SkillCard = ({ skill }: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  const cardBg = useColorModeValue("gray.50", "gray.700");
  const cardHeaderBg = useColorModeValue("gray.100", "gray.900");

  return (
    <Card p={3} bg={cardBg} variant="outline" boxShadow="md" borderRadius={10}>
      <CardHeader
        display="flex"
        flexDir="column"
        alignItems="center"
        bg={cardHeaderBg}
        borderRadius={10}
        flexWrap="wrap"
      >
        <Icon as={skill.icon} boxSize={["40px", "50px"]} m={1} />
        <Heading size={cardHeadingSizes} m={1} textAlign="center">
          {skill.label}
        </Heading>
      </CardHeader>
      <CardBody>
        <Collapse startingHeight={172} in={isOpen} animateOpacity>
          <Text m={0} fontSize={cardTextSizes}>
            {skill.text}
          </Text>
        </Collapse>
        <Button mb={2} onClick={onToggle} variant="link">
          {isOpen ? "See less..." : "See more..."}
        </Button>
      </CardBody>
      <CardFooter display="flex" justifyContent="space-between" flexWrap="wrap">
        <Text m={0} fontSize={cardTextSizes} fontWeight="bold">
          Experience:
        </Text>
        <Tag bg={cardHeaderBg} fontWeight="bold">
          {skill.yearsExperience}
        </Tag>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
