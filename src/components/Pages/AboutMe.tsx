import { Flex, Text } from "@chakra-ui/react";
import {
  paragraphSizes,
  sectionHeadingSizes,
} from "../../services/typography-breakpoints";

const AboutMe = () => {
  return (
    <Flex w="100%" py="50px" id="aboutme" flexDir="column" alignItems="center">
      <Text fontSize={sectionHeadingSizes}>About Me</Text>
      <Text
        px="75px"
        my="15px"
        fontSize={paragraphSizes}
        textAlign="center"
        lineHeight="40px"
      >
        Hello, I’m Kyle Robison. I’m a full stack software engineer with just
        over two years of experience building professional, modern, full stack
        web applications at Edward Jones. In 2020, I decided to leave behind a
        four year career in financial services to pursue my passion for using
        technology to make cool stuff. Man was that the right decision! I love
        what I do now, and I’m always open to new opportunities, so if you’re
        working on something cool and need a stellar developer, I’d love the
        chance to earn a spot on your team!
      </Text>
    </Flex>
  );
};

export default AboutMe;
