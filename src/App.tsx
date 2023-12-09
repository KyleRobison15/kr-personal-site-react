import { Box, Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import Splash from "./components/Pages/Splash";
import AboutMe from "./components/Pages/AboutMe";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Pages/Skills";
import Portfolio from "./components/Pages/Portfolio";

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
        <Box px={["", "", "100px", "150px"]}>
          <AboutMe />
          <Skills />
          <Portfolio />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
