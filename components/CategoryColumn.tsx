import { Box } from "@chakra-ui/layout";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import { useCard } from "../lib/hooks";

const CategoryColumn = ({ category }) => {
    const { cards } = useCard();
    console.log({ cards });

    const cardsByColumn = cards.filter(
        (card) => card.categoryId === category.id
    );

    return (
        <Droppable droppableId={category.name}>
            {(provided) => (
                <Box
                    width="200px"
                    height="600px"
                    bg="lightgrey"
                    margin="20px"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {category.name}
                    {category.id}
                    {cardsByColumn.map((card, index) => (
                        <Card card={card} key={card.id} index={card.index} />
                    ))}
                    {provided.placeholder}
                </Box>
            )}
        </Droppable>
    );
};

export default CategoryColumn;
