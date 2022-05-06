import { Box } from "@chakra-ui/layout";
import { Droppable, resetServerContext } from "react-beautiful-dnd";
import Card from "./Card";
import { useCard } from "../lib/hooks";

const CategoryColumn = ({ category, provided }) => {
    return (
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
            {category.cards.map((card, index) => (
                <Card card={card} key={card.id} index={index} />
            ))}
            {provided.placeholder}
        </Box>
    );
};

export default CategoryColumn;
