import { Icon, Link, VStack } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const VIconList = () => {
  return (
    <VStack gap={["50px", "60px"]} pos="absolute" bottom="0" right="8%" mb={7}>
      <Link href="https://github.com/KyleRobison15" isExternal>
        <Icon as={BsGithub} boxSize={["32px", "40px"]} />
      </Link>
      <Link href="https://www.linkedin.com/in/kyle-robison/" isExternal>
        <Icon as={BsLinkedin} boxSize={["32px", "40px"]} />
      </Link>
      <Link href="mailto: kylerobison15@gmail.com" isExternal>
        <Icon as={MdAlternateEmail} boxSize={["34px", "42px"]} />
      </Link>
    </VStack>
  );
};

export default VIconList;
