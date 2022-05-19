import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

import React from "react";

const CatDropdown: React.FunctionComponent = () => {
    return (
        <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />}>
                Click here
            </MenuButton>
            <MenuList>
                <MenuItem icon={<EditIcon />}>Edit Name</MenuItem>
                <MenuItem icon={<DeleteIcon />}>Delete Category</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CatDropdown;
