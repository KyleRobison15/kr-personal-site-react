import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import SmoothScroll from "./SmoothScroll";

interface Props {
  text: string;
  to: string;
  offset: number;
  lightBg: string;
  darkBg: string;
}

const ScrollButton = ({ text, to, offset, lightBg, darkBg }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <SmoothScroll to={to} offset={offset}>
      <Button
        h="75px"
        display="flex"
        flexDirection="column"
        fontSize={["xl"]}
        gap={1}
        bg={colorMode === "light" ? lightBg : darkBg}
      >
        {text}
        <Icon as={BsChevronDoubleDown} fontSize="xl" />
      </Button>
    </SmoothScroll>
  );
};

export default ScrollButton;
