import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";

const SectionTabs = () => {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Tabs
      isFitted
      variant="line"
      w="100%"
      size={["md", "lg"]}
      mb="100px"
      id="tabs"
      bg={bg}
      borderRadius={10}
      shadow="lg"
    >
      <TabList mb="1em" h="75px">
        <Tab borderTopLeftRadius={10}>Skills</Tab>
        <Tab>Portfolio</Tab>
        <Tab borderTopRightRadius={10}>Resume</Tab>
      </TabList>
      <TabPanels p={4}>
        <TabPanel>
          <Skills />
        </TabPanel>
        <TabPanel>
          <Portfolio />
        </TabPanel>
        <TabPanel>
          <Resume />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SectionTabs;
