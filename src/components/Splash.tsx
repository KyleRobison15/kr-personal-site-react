import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import headShot from "../assets/Headshot_No_Background_2.png";

const Splash = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid templateAreas={`"left right"`} templateColumns={"45% 55%"}>
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
          boxSize="65%"
          objectFit="cover"
          pos="absolute"
          top="15vh"
        />
        <Box
          pos="absolute"
          bg={colorMode === "light" ? "gray.200" : "gray.700"}
          h="45%"
          w="100%"
          clipPath="polygon(0 55%, 100% 0, 100% 100%, 0 100%);"
          bottom="0"
          left="0"
        ></Box>
      </GridItem>
      <GridItem
        area="right"
        bg={colorMode === "light" ? "gray.100" : "gray.900"}
      >
        <Center h="100%">
          <MainHeading />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Splash;
