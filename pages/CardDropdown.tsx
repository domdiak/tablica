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
import React, { FunctionComponent } from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import fetcher from "../lib/fetcher";
import ModalEditCard from "./ModalEditCard";
import ModalWindow from "../components/Modal";
import { Card } from "../APIResponsesTypes";

type CardDropdownProps = {
    card: Card;
    archiveId: number;
};

const CardDropdown: FunctionComponent<CardDropdownProps> = ({
    card,
    archiveId,
}) => {
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
                {card.categoryId !== archiveId && (
                    <MenuItem
                        icon={<BsFillArchiveFill />}
                        onClick={() => {
                            updateCard(card.id, archiveId);
                            router.reload();
                        }}
                    >
                        Archive
                    </MenuItem>
                )}
                <MenuItem icon={<DeleteIcon />} onClick={onOpenModal}>
                    Delete
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default CardDropdown;
