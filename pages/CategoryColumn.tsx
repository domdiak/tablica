import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "./Card";
import CatDropdown from "./CatDropdown";

const CategoryColumn = ({ category, provided, onOpen, showArchive }) => {
    return (
        <Box>
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
                <CatDropdown category={category} />
                {category.cards.map((card, index) => (
                    <Card card={card} key={card.id} index={index} />
                ))}
                {provided.placeholder}
                <Button onClick={onOpen}>
                    {" "}
                    <AddIcon />{" "}
                </Button>
            </Box>
        </Box>
    );
};

export default CategoryColumn;
