import { Box } from "@chakra-ui/layout";
import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "./Card";
import CatDropdown from "./CatDropdown";

const CategoryColumn = ({ category, provided, onOpen }) => {
    return (
        <Box
            basis="30%"
            minWidth="300px"
            height="600px"
            bg="lightgrey"
            margin="20px"
            position="relative"
            overflowY="auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
        >
            <Flex padding="5px">
                <Heading size="lg"> {category.name} </Heading>
                <Spacer />
                <CatDropdown category={category} />
            </Flex>
            <Flex direction="column" justify="center">
                {category.cards.map((card, index) => (
                    <Card card={card} key={card.id} index={index} />
                ))}
                {provided.placeholder}
            </Flex>

            <Button
                onClick={onOpen}
                leftIcon={<AddIcon />}
                position="absolute"
                bottom="1rem"
                width="90%"
                marginX="10px"
            >
                {" "}
                Add Card{" "}
            </Button>
        </Box>
    );
};

export default CategoryColumn;
