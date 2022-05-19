import { Box } from "@chakra-ui/layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";
import ModalEditCard from "./ModalEditCard";
import CardDropdown from "./CardDropdown";

const Card = ({ card, index }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    resetServerContext();

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
                        onClick={(e) => {
                            e.stopPropagation();
                            // onOpen();
                        }}
                    >
                        {card.title} // {card.categoryId}
                        <CardDropdown card={card} onOpen={onOpen} />
                    </Box>
                )}
            </Draggable>
        </Box>
    );
};

export default Card;
