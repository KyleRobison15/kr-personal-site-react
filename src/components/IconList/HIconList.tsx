import { HStack, Icon, Link } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const HIconList = () => {
  return (
    <HStack gap="90px" pos="absolute" bottom="80px">
      <Link href="https://github.com/KyleRobison15" isExternal>
        <Icon as={BsGithub} boxSize="40px" />
      </Link>
      <Link href="https://www.linkedin.com/in/kyle-robison/" isExternal>
        <Icon as={BsLinkedin} boxSize="40px" />
      </Link>
      <Link href="mailto: kylerobison15@gmail.com" isExternal>
        <Icon as={MdAlternateEmail} boxSize="42px" />
      </Link>
    </HStack>
  );
};

export default HIconList;
