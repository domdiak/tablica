import { Box } from "@chakra-ui/layout";
import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "./Card";
import CatDropdown from "./CatDropdown";

const CategoryColumn = ({ category, provided, onOpen }) => {
    return (
        <Flex
            basis="30%"
            minWidth="300px"
            height="600px"
            bg="lightgrey"
            margin="20px"
            // position="relative"

            ref={provided.innerRef}
            {...provided.droppableProps}
            direction="column"
            justifyContent="space-between"
        >
            <div>
                <Flex padding="5px">
                    <Heading size="lg"> {category.name} </Heading>
                    <Spacer />
                    <CatDropdown category={category} />
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

            <Button
                onClick={onOpen}
                leftIcon={<AddIcon />}
                // position="absolute"
                bottom="1rem"
                width="90%"
                marginX="10px"
            >
                {" "}
                Add Card{" "}
            </Button>
        </Flex>
    );
};

export default CategoryColumn;
