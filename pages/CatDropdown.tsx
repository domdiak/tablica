import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import React from "react";
import fetcher from "../lib/fetcher";

const CatDropdown: React.FunctionComponent = ({ category }) => {
    const router = useRouter();

    const handleDelete = async (data) => {
        await fetcher("/deleteCategory", { categoryId: data });
        router.reload();
    };
    return (
        <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />}>
                Click here...
            </MenuButton>
            <MenuList>
                <MenuItem icon={<EditIcon />}>Edit Name</MenuItem>
                <MenuItem
                    icon={<DeleteIcon />}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(category.id);
                    }}
                >
                    Delete Category
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CatDropdown;
