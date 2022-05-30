import { Box } from "@chakra-ui/layout";
import { Button, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "./Card";
import CatDropdown from "./CatDropdown";
import CategoryName from "../components/CategoryName";

const CategoryColumn = ({ category, provided, onOpen, snapshot }) => {
    return (
        <Flex
            basis="30%"
            minWidth="300px"
            height="600px"
            // bg="main.100"
            margin="10px"
            borderRadius="10px"
            ref={provided.innerRef}
            {...provided.droppableProps}
            direction="column"
            justifyContent="space-between"
            bg={snapshot.isDraggingOver ? "main.200" : "main.100"}
        >
            <div>
                <Flex margin="5px" justify="space-between">
                    <CategoryName category={category} />
                    {category.name !== "Archived" && (
                        <CatDropdown category={category} />
                    )}
                </Flex>
                <Flex
                    direction="column"
                    justify="flex-start"
                    height="500px"
                    overflowY="auto"
                >
                    {category.cards.map((card, index) => (
                        <Card card={card} key={card.id} index={index} />
                    ))}
                    {provided.placeholder}
                </Flex>
            </div>
            {category.name !== "Archived" && (
                <Button
                    variant="primary"
                    onClick={onOpen}
                    leftIcon={<AddIcon />}
                    bottom="1rem"
                    width="90%"
                    marginX="10px"
                >
                    {" "}
                    Add Card{" "}
                </Button>
            )}
        </Flex>
    );
};

export default CategoryColumn;
