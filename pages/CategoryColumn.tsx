import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Droppable, resetServerContext } from "react-beautiful-dnd";
import Card from "./Card";
import CatDropdown from "./CatDropdown";

const CategoryColumn = ({ category, provided, onOpen, isOpen }) => {
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
            <CatDropdown />
            {category.cards.map((card, index) => (
                <Card card={card} key={card.id} index={index} />
            ))}
            {provided.placeholder}
            <Button onClick={onOpen}>
                {" "}
                <AddIcon />{" "}
            </Button>
        </Box>
    );
};

export default CategoryColumn;
