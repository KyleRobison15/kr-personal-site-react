import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import ContactForm from "../ContactForm";

const Contact = () => {
  const cardBg = useColorModeValue("gray.50", "gray.900");
  return (
    <Box minH="700px" mt="75px" display="flex" justifyContent="center">
      <Flex justify="center">
        <Box
          p="28px"
          boxShadow="lg"
          borderWidth="1px"
          borderRadius="5px"
          minW={["340px", "425px", "450px"]}
          maxH="585px"
          bg={cardBg}
        >
          <ContactForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
