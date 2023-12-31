import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
  categories: string[];
}

const CategorySelector = ({
  onSelectCategory,
  selectedCategory,
  categories,
}: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedCategory || "All Categories"}
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategorySelector;
