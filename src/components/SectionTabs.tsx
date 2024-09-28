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
    <Box>
      <Tabs
        isFitted
        variant="line"
        w="100%"
        size={["md", "lg"]}
        id="tabs"
        bg={bg}
        borderRadius={10}
        shadow="lg"
        index={tabIndex}
      >
        <TabList hidden>
          <Tab>Portfolio</Tab>
          <Tab borderTopLeftRadius={10}>Skills</Tab>
          <Tab borderTopRightRadius={10}>Resume</Tab>
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
