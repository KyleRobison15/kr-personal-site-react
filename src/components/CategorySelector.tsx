import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { skillCategories } from "../hooks/useSkills";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const CategorySelector = ({ onSelectCategory, selectedCategory }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedCategory || "All Categories"}
      </MenuButton>
      <MenuList>
        {skillCategories.map((category) => (
          <MenuItem key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategorySelector;
