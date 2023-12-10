import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
  selectedCategory: string;
}

const SearchInput = ({ onSearch, selectedCategory }: Props) => {
  // Here because we only have one field in this form, it's easiest to just use the useRef hook to keep track of our form state

  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box flex={1} maxW="500px" minW="250px">
      <form
        onSubmit={(event) => {
          // Prevent the form from being posted to the server
          // this is
          event.preventDefault();
          // Use our ref to submit the form
          if (ref.current) {
            // Pass the search text to our app component
            onSearch(ref.current.value);
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder={
              selectedCategory === "All Skills"
                ? "Search my skills..."
                : `Search my ${selectedCategory} skills...`
            }
            variant="filled"
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
