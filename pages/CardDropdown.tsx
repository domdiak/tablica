import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import React from "react";
import fetcher from "../lib/fetcher";
import ModalEditCard from "./ModalEditCard";
import ModalWindow from "../components/Modal";

const CatDropdown: React.FunctionComponent = ({ card }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {
        isOpen: isOpenModal,
        onClose: onCloseModal,
        onOpen: onOpenModal,
    } = useDisclosure();

    const router = useRouter();

    const handleDelete = async (data) => {
        await fetcher("/deleteCard", { cardId: data });
        router.reload();
    };

    const updateCard = async (cardId, categoryId) => {
        const data = { cardId, categoryId };
        fetcher("/updateCard", data);
    };

    return (
        <Menu>
            {isOpenModal && (
                <ModalWindow
                    isOpen={isOpenModal}
                    onClose={onCloseModal}
                    handleDelete={() => handleDelete(card.id)}
                />
            )}
            {isOpen && (
                <ModalEditCard isOpen={isOpen} onClose={onClose} card={card} />
            )}
            <MenuButton size="sm" as={IconButton} icon={<HamburgerIcon />}>
                Click here. ..
            </MenuButton>
            <MenuList>
                <MenuItem icon={<EditIcon />} onClick={onOpen}>
                    Edit
                </MenuItem>
                <MenuItem
                    icon={<EditIcon />}
                    onClick={() => {
                        updateCard(card.id, 5);
                    }}
                >
                    Archive
                </MenuItem>
                <MenuItem icon={<DeleteIcon />} onClick={onOpenModal}>
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CatDropdown;
