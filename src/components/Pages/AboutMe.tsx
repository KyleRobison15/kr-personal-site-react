import {
  Flex,
  HStack,
  Text,
  Image,
  Highlight,
  useColorModeValue,
  Link as ChakraLink,
  Button} from "@chakra-ui/react";
import waveEmoji from "../../assets/wave.png";
import {
  paragraphSizes,
  sectionHeadingSizes,
} from "../../services/typography-breakpoints";
import { IoDocumentText } from "react-icons/io5";

const AboutMe = () => {
  /**
   * Additional About Me:
   *
   * In 2020, I decided to leave behind a four year career in financial services to pursue my passion for using technology to make cool stuff. Man was that the right decision!
   *
   * with just over two years of experience building professional, modern, full stack
   * web applications at Edward Jones.
   *
   */

  const highlightColor = useColorModeValue("gray.200", "gray.600");
  const fontColor = useColorModeValue("black", "whiteAlpha.900");

  const highlightArray = [
    "RESTful",
    "Javascript",
    "Java",
    "Spring",
    "NoSQL",
    "document-based databases",
    "MongoDB",
    "relational databases",
    "MySQL",
    "React",
    "Typescript",
    "CSS",
    "I’d love the chance to earn a spot on your team!",
  ];

  return (
    <Flex w="100%" my="125px" id="aboutme" flexDir="column" alignItems="center">
      <HStack>
        <Image
          src={waveEmoji}
          aria-label="Waving hand emoji"
          boxSize="35px"
          mb={4}
          mr={2}
        />
        <Text fontSize={["xl", "2xl"]}>Hello!</Text>
      </HStack>
      <Text fontSize={sectionHeadingSizes} fontWeight="bold" mb="30px">
        I'm Kyle Robison
      </Text>
      <Text
        px="75px"
        my="15px"
        fontSize={paragraphSizes}
        textAlign="center"
        lineHeight={["40px", "40px", "60px"]}
      >
        <Highlight
          query={highlightArray}
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: highlightColor,
            fontWeight: "bold",
            color: fontColor,
          }}
        >
          I'm a software engineer with over two years of experience building
          modern full stack web applications. I specialize in developing RESTful
          web services using Java and Spring and have experience with both
          NoSQL, document-based databases like MongoDB and more traditional
          relational databases like MySQL. On the front end, I excel at building
          dynamic user interfaces with React, Javascript and Typescript, and I
          make them shine with sound CSS fundamentals. My experience
          encapsulates the entire software development lifecycle and showcases a
          commitment to producing innovative and reliable solutions for the end
          user. I love what I do, and I'm always open to new opportunities, so
          if you're working on something cool and need a passionate developer,
          I'd love the chance to earn a spot on your team!
        </Highlight>
      </Text>
      <ChakraLink href="https://bold.pro/my/kyle-robison">
        <Button
          aria-label="Call Us"
          leftIcon={<IoDocumentText fontSize="20px" />}
          size="lg"
          variant="solid"
          p="12px"
          mt="20px"
        >
          View My Resume
        </Button>
      </ChakraLink>
    </Flex>
  );
};

export default AboutMe;
