import { Box } from "@chakra-ui/layout";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";
import CardDropdown from "./CardDropdown";

const Card = ({ card, index }) => {
    resetServerContext();

    return (
        <Box>
            <Draggable draggableId={card.title} index={index}>
                {(provided) => (
                    <Box
                        width="90%"
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
                        <CardDropdown card={card} />
                    </Box>
                )}
            </Draggable>
        </Box>
    );
};

export default Card;
