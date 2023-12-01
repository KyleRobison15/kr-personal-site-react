import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import NavBarMobile from "./components/NavBarMobile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid gridTemplateAreas={`"nav"`} gridTemplateColumns={`"1fr"`}>
      <GridItem area="nav">
        <Show below="md">
          <NavBarMobile />
        </Show>
        <Hide below="md">
          <NavBar />
        </Hide>
      </GridItem>
    </Grid>
  );
}

export default App;
