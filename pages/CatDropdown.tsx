import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import React from "react";
import fetcher from "../lib/fetcher";
import ModalWindow from "../components/Modal";

type CatDropdownProps = {
    category: object;
};

type CategoryProps = {
    category: object;
    id: number;
    name: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
};

const CatDropdown: React.FunctionComponent<CatDropdownProps> = ({
    category,
}: CategoryProps) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const router = useRouter();
    console.log({ category });

    const handleDelete = async (data) => {
        await fetcher("/deleteCategory", { categoryId: data });
        router.reload();
    };
    return (
        <Menu>
            {isOpen && (
                <ModalWindow
                    isOpen={isOpen}
                    onClose={onClose}
                    handleDelete={() => handleDelete(category.id)}
                />
            )}
            <MenuButton as={IconButton} icon={<HamburgerIcon />}>
                Click here...
            </MenuButton>
            <MenuList>
                <MenuItem icon={<DeleteIcon />} onClick={onOpen}>
                    Delete Category
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CatDropdown;
