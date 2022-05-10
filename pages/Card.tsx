import { Box } from "@chakra-ui/layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";
import { useRouter } from "next/router";
import fetcher from "../lib/fetcher";
import ModalEditCard from "./ModalEditCard";

const Card = ({ card, index }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const router = useRouter();
    resetServerContext();

    const handleDeleteCard = async (data) => {
        await fetcher("/deleteCard", { cardId: data });
        router.reload();
    };

    return (
        <Box>
            {isOpen && (
                <ModalEditCard isOpen={isOpen} onClose={onClose} card={card} />
            )}
            <Draggable draggableId={card.title} index={index}>
                {(provided) => (
                    <Box
                        width="150px"
                        height="200px"
                        bg="lightpink"
                        margin="5px"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        onClick={onOpen}
                    >
                        {card.title} // {card.categoryId}
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCard(card.id);
                            }}
                        >
                            {" "}
                            Delete{" "}
                        </Button>
                    </Box>
                )}
            </Draggable>
        </Box>
    );
};

export default Card;
