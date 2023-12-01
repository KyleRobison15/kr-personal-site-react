import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBarMobile from "./components/NavBarMobile";

function App() {
  return (
    <Grid gridTemplateAreas={`"nav"`} gridTemplateColumns={`"1fr"`}>
      <GridItem area="nav">
        <NavBarMobile />
      </GridItem>
    </Grid>
  );
}

export default App;
