import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import NavBarMobile from "./components/NavBarMobile";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";

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
      </GridItem>
    </Grid>
  );
}

export default App;
