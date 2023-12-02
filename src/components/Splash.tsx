import { Center, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import MainHeading from "./MainHeading";

const Splash = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid templateAreas={`"left right"`} templateColumns={"1fr 1fr"}>
      <GridItem
        area="left"
        h="calc(100vh - 70px)"
        bg={colorMode === "light" ? "gray.50" : "gray.700"}
      >
        Left
      </GridItem>
      <GridItem
        area="right"
        bg={colorMode === "light" ? "gray.200" : "gray.800"}
      >
        <Center h="100%">
          <MainHeading />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Splash;
