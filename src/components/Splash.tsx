import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { headingSizes, textSizes } from "../services/typography-breakpoints";
import waveEmoji from "../assets/wave.png";

const Splash = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid templateAreas={`"left right"`} templateColumns={"1fr 1fr"}>
      <GridItem area="left" h="calc(100vh - 70px)">
        Left
      </GridItem>
      <GridItem
        area="right"
        bg={colorMode === "light" ? "gray.200" : "gray.800"}
      >
        <Flex justifyContent="center" h="100%" alignItems="center">
          <Flex flexDirection="column" alignItems="end">
            <HStack mb={3}>
              <Image
                src={waveEmoji}
                aria-label="Waving hand emoji"
                boxSize="50px"
                mb={2}
                mr={2}
              />
              <Text fontSize={textSizes}>Hi there! I am,</Text>
            </HStack>
            <Heading size={headingSizes}>Kyle Robison</Heading>
            <Text fontSize={textSizes}>Full Stack Developer</Text>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Splash;
