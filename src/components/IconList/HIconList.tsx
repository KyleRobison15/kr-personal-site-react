import { HStack, Icon, Link } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import SmoothScroll from "../SmoothScroll";
import { navItems } from "../../services/nav-menu-options";

interface Props {
  onNavChange: (tabIndex: number | null) => void;
}

const HIconList = ({onNavChange}: Props) => {
  return (
    <HStack gap="90px" pos="absolute" bottom="85px">
      <Link href="https://github.com/KyleRobison15" isExternal>
        <Icon as={BsGithub} boxSize="40px" />
      </Link>
      <Link href="https://www.linkedin.com/in/kyle-robison/" isExternal>
        <Icon as={BsLinkedin} boxSize="40px" />
      </Link>
      <SmoothScroll
        key={navItems[4].title}
        to={navItems[4].for}
        offset={navItems[4].offset}
        onNavChange={() => onNavChange(navItems[4].tabIndex)}
      >
        <Icon as={MdAlternateEmail} boxSize="42px" cursor="pointer"/>
      </SmoothScroll>
    </HStack>
  );
};

export default HIconList;
