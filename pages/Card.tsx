import { Box } from "@chakra-ui/layout";
import { Draggable, resetServerContext } from "react-beautiful-dnd";

const Card = ({ card, index }) => {
    resetServerContext();
    return (
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
                >
                    {card.title} // {card.categoryId}
                </Box>
            )}
        </Draggable>
    );
};

export default Card;
