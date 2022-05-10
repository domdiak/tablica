import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";
import { useRouter } from "next/router";
import fetcher from "../lib/fetcher";

const Card = ({ card, index }) => {
    const router = useRouter();
    resetServerContext();

    const handleDeleteCard = async (data) => {
        await fetcher("/deleteCard", { cardId: data });
        router.reload();
    };

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
                    <Button onClick={() => handleDeleteCard(card.id)}>
                        {" "}
                        Delete{" "}
                    </Button>
                </Box>
            )}
        </Draggable>
    );
};

export default Card;
