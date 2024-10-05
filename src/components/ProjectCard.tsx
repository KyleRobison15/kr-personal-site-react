import {
  Card,
  CardBody,
  Image,
  CardHeader,
  Text,
  CardFooter,
  Button,
  Icon,
  Flex,
  Heading,
  Collapse,
  Link,
  Box,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import { Project } from "../hooks/useProjects";
import { SiGithub } from "react-icons/si";
import { LinkIcon } from "@chakra-ui/icons";
import SkillsIconList from "./SkillsIconList";
import { useState } from "react";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const [show, setShow] = useState(false);
  const cardBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Card bg={cardBg} boxShadow="lg" variant="outline" p={2}>
      <CardHeader pb={2}>
        <Flex flexDir="column">
          <Heading size={["md", "lg"]}>
            <Link href={project.projectUrl}>{project.label}</Link>
          </Heading>
          <SkillsIconList skillLabels={project.skills} />
        </Flex>
      </CardHeader>
      <CardBody>
        <Collapse startingHeight={148} in={show}>
          <Text pl={1}>{project.description}</Text>
        </Collapse>
        <Button my={3} variant="link" onClick={() => setShow(!show)}>
          Show {show ? "less..." : "more..."}
        </Button>
        <AspectRatio ratio={3 / 2}>
          <Image
            src={project.image}
            alt={`${project.label} Image`}
            borderRadius={4}
          />
        </AspectRatio>
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
        pt={1}
      >
        <Box
          as={Link}
          href={project.projectUrl}
          flex="1"
          display="flex"
          justifyContent="center"
        >
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<LinkIcon boxSize="20px" />}
          >
            See the project
          </Button>
        </Box>
        <Box
          as={Link}
          href={project.gitHubUrl}
          flex="1"
          display="flex"
          justifyContent="center"
          textDecor="none"
        >
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<Icon as={SiGithub} boxSize="22px" />}
          >
            See the code
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
