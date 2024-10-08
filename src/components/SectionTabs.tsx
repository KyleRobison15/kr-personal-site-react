import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

interface Props {
  tabIndex: number;
}

const SectionTabs = ({ tabIndex }: Props) => {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box bg={bg} px="50px" pb="50px" minH="calc(100vh - 127px)">
      <Tabs
        isFitted
        variant="line"
        w="100%"
        size={["md", "lg"]}
        id="tabs"
        index={tabIndex}
      >
        <TabList hidden>
          <Tab>Portfolio</Tab>
          <Tab borderTopLeftRadius={10}>Skills</Tab>
          <Tab borderTopRightRadius={10}>Resume</Tab>
          <Tab>Contact</Tab>
        </TabList>
        <TabPanels p={4}>
          <TabPanel>
            <Portfolio />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Contact />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SectionTabs;
