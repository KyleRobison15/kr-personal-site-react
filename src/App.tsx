import { Box, Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import Splash from "./components/Pages/Splash";
import AboutMe from "./components/Pages/AboutMe";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import NavBar from "./components/NavBar/NavBar";
import SectionTabs from "./components/SectionTabs";

function App() {
  return (
    <Grid gridTemplateAreas={`"nav" "main"`} gridTemplateColumns={`"1fr"`}>
      <GridItem area="nav">
        <Show below="md">
          <NavBarMobile />
        </Show>
        <Hide below="md">
          <NavBar />
        </Hide>
      </GridItem>
      <GridItem area="main">
        <Splash />
        <Box px={["", "", "75px"]} py="75px">
          <AboutMe />
          <SectionTabs />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
