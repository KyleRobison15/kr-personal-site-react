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

  return (
    <Card boxShadow="lg" variant="outline">
      <CardHeader pb={2}>
        <Flex flexDir="column">
          <Heading size={["md", "lg"]}>
            <Link href={project.projectUrl}>{project.label}</Link>
          </Heading>
          <SkillsIconList skills={project.skills} />
        </Flex>
      </CardHeader>
      <CardBody>
        <Collapse startingHeight={100} in={show}>
          <Text pl={1}>{project.description}</Text>
        </Collapse>
        <Button my={3} variant="link" onClick={() => setShow(!show)}>
          Show {show ? "less..." : "more..."}
        </Button>
        <Image
          h="300px"
          w="100%"
          src={project.image}
          alt={`${project.label} Image`}
          borderRadius={4}
        />
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<LinkIcon boxSize="20px" />}>
          See the project
        </Button>
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<Icon as={SiGithub} boxSize="22px" />}
        >
          See the code
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;