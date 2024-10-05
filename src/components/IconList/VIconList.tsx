import { Icon, Link, VStack } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { navItems } from "../../services/nav-menu-options";
import SmoothScroll from "../SmoothScroll";

interface Props {
  onNavChange: (tabIndex: number | null) => void;
}

const VIconList = ({ onNavChange }: Props) => {
  return (
    <VStack gap={["50px", "60px"]} pos="absolute" bottom="0" right="8%" mb={7}>
      <Link href="https://github.com/KyleRobison15" isExternal>
        <Icon as={BsGithub} boxSize={["32px", "40px"]} />
      </Link>
      <Link href="https://www.linkedin.com/in/kyle-robison/" isExternal>
        <Icon as={BsLinkedin} boxSize={["32px", "40px"]} />
      </Link>
      <SmoothScroll
        key={navItems[4].title}
        to={navItems[4].for}
        offset={navItems[4].offset}
        onNavChange={() => onNavChange(navItems[4].tabIndex)}
      >
        <Icon as={MdAlternateEmail} boxSize={["34px", "42px"]} />
      </SmoothScroll>
    </VStack>
  );
};

export default VIconList;
