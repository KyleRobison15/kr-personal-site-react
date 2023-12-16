import {
  Box,
  Flex,
  Grid,
  GridItem,
  Hide,
  Image,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import MainHeading from "../MainHeading";
import headShot from "../../assets/Headshot_No_Background_2.png";
import HIconList from "../IconList/HIconList";
import VIconList from "../IconList/VIconList";
import MobileHeading from "../MobileHeading";
import ScrollButton from "../ScrollButton";

const Splash = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      id="splash"
      templateAreas={{
        base: `"left"`,
        lg: `"left right"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "40% 60%",
      }}
    >
      <GridItem
        area="left"
        h="100vh"
        w="100%"
        bg={colorMode === "light" ? "gray.50" : "gray.600"}
        display="flex"
        alignItems="flex-end"
        pos="relative"
      >
        <Image
          src={headShot}
          w={["450px", "525px"]}
          h="65%"
          objectFit="cover"
          pos="absolute"
          bottom="19%"
        />
        <Flex
          bg={colorMode === "light" ? "gray.200" : "gray.700"}
          h="45%"
          w="100%"
          clipPath="polygon(0 55%, 100% 0, 100% 100%, 0 100%);"
          pos="relative"
          justifyContent={["", "", "", "center"]}
        >
          <Hide above="lg">
            <MobileHeading />
            <VIconList />
          </Hide>
          <Show above="lg">
            <HIconList />
          </Show>
        </Flex>
      </GridItem>
      <Show above="lg">
        <GridItem
          area="right"
          bg={colorMode === "light" ? "gray.100" : "gray.900"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          pos="relative"
        >
          <MainHeading />
          <Box pos="absolute" bottom="85px">
            <ScrollButton
              text={"About Me"}
              to={"aboutme"}
              offset={-145}
              lightBg={"gray.100"}
              darkBg={"gray.900"}
            />
          </Box>
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Splash;
