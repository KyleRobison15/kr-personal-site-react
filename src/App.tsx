import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid gridTemplateAreas={`"nav"`} gridTemplateColumns={`"1fr"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
    </Grid>
  );
}

export default App;
