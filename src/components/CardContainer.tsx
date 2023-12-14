import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

// This is the standard way to define our typescript interface when our component will take other child components as it's Props!!
// In other words, when we wrap other components with this "GameCardContainer" component,  we expect to recieve it's children as props
// We can then take the child components and do things with them, in this case wrapping them in a simple styled container
interface Props {
  children: ReactNode;
  borderRadius?: string;
  overflow?: string;
}

const CardContainer = ({ children, borderRadius, overflow }: Props) => {
  return (
    // Here we use the generic "Box" component from Chakra UI which is just Chakra's version of a <div>
    // Doing it this way, gives us access to Chakra's style props
    <Box width="100%" borderRadius={borderRadius} overflow={overflow}>
      {children}
    </Box>
  );
};

export default CardContainer;
