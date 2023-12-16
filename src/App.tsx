import { Box, Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import "./App.css";
import Splash from "./components/Pages/Splash";
import AboutMe from "./components/Pages/AboutMe";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import NavBar from "./components/NavBar/NavBar";
import SectionTabs from "./components/SectionTabs";
import { useState } from "react";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleNavChange = (index: number | null) => {
    if (index === null) {
      return;
    } else {
      setTabIndex(index);
    }
  };

  return (
    <Grid gridTemplateAreas={`"nav" "main"`} gridTemplateColumns={`"1fr"`}>
      <GridItem area="nav">
        <Show below="md">
          <NavBarMobile onNavChange={(index) => handleNavChange(index)} />
        </Show>
        <Hide below="md">
          <NavBar onNavChange={(index) => handleNavChange(index)} />
        </Hide>
      </GridItem>
      <GridItem area="main" minH="2425px">
        <Splash />
        <Box px={["", "", "75px"]} py="75px">
          <AboutMe />
          <SectionTabs tabIndex={tabIndex} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
