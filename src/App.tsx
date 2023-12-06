import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import Splash from "./components/Splash";
import AboutMe from "./components/AboutMe";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import NavBar from "./components/NavBar/NavBar";

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
        <AboutMe />
      </GridItem>
    </Grid>
  );
}

export default App;
