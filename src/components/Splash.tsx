import {
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import headShot from "../assets/Headshot_No_Background_2.png";
import IconList from "./IconList";

const Splash = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      templateAreas={{
        base: `"left"`,
        md: `"left right"`,
        lg: `"left right"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "45% 55%",
        lg: "45% 55%",
      }}
      // templateAreas={`"left right"`}
      // templateColumns={"45% 55%"}
    >
      <GridItem
        area="left"
        h="100vh"
        w="100%"
        bg={colorMode === "light" ? "gray.50" : "gray.600"}
        display="flex"
        alignItems="flex-end"
        pos="relative"
        zIndex="0"
      >
        <Image
          src={headShot}
          w="525px"
          h="65%"
          objectFit="cover"
          pos="absolute"
          bottom="20%"
        />
        <Flex
          bg={colorMode === "light" ? "gray.200" : "gray.700"}
          h="45%"
          w="100%"
          clipPath="polygon(0 55%, 100% 0, 100% 100%, 0 100%);"
          pos="relative"
          justifyContent="center"
        >
          <IconList />
        </Flex>
      </GridItem>
      <Show above="md">
        <GridItem
          area="right"
          bg={colorMode === "light" ? "gray.100" : "gray.900"}
        >
          <Center h="100%">
            <MainHeading />
          </Center>
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Splash;
