import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onChange: (searchText: string) => void;
  selectedCategory: string;
}

const SearchInput = ({ onChange, selectedCategory }: Props) => {
  return (
    <Box flex={1} maxW="500px" minW="250px">
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder={
            selectedCategory === "All Skills"
              ? "Search my skills..."
              : `Search my ${selectedCategory} skills...`
          }
          variant="filled"
          onChange={(event) => onChange(event.target.value)}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
