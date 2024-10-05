import { Text } from "@chakra-ui/react";
import { sectionHeadingSizes } from "../services/typography-breakpoints";

interface Props {
  heading: string;
  selectedCategory: string;
  defaultCategory: string;
}

const GridHeading = ({ heading, selectedCategory, defaultCategory }: Props) => {
  return (
    <Text fontSize={sectionHeadingSizes} textAlign="center">
      {selectedCategory === defaultCategory
        ? `My ${heading}`
        : `My ${selectedCategory} ${heading}`}
    </Text>
  );
};

export default GridHeading;
