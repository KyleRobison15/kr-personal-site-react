import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  // Image,
  useColorMode,
} from "@chakra-ui/react";
import MainHeading from "./MainHeading";
// import headShot from "../assets/Headshot_No_Background_2.png";

const Splash = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid templateAreas={`"left right"`} templateColumns={"1fr 1fr"}>
      <GridItem area="left" h="100vh">
        {/* <Image src={headShot} boxSize="65%" objectFit="cover" /> */}
        <Flex
          bg={colorMode === "light" ? "gray.50" : "gray.600"}
          h="100vh"
          alignItems="flex-end"
        >
          <Box
            bg={colorMode === "light" ? "gray.200" : "gray.700"}
            h="55%"
            w="100%"
            clipPath="polygon(0 55%, 100% 0, 100% 100%, 0 100%);"
          ></Box>
        </Flex>
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
