import { Box } from "@chakra-ui/layout";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ card }) => {
    return (
        <Draggable draggableId={card.title} index={card.id}>
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
