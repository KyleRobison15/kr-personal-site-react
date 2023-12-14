import { AspectRatio } from "@chakra-ui/react";
import resume from "../../assets/Resume_KyleRobison.pdf";

const Resume = () => {
  return (
    <AspectRatio>
      <embed src={resume} />
    </AspectRatio>
  );
};

export default Resume;
