import { Button, Flex, useDisclosure, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Card from "./Card";
import CatDropdown from "./CatDropdown";
import CategoryName from "../components/CategoryName";
import AddCardModal from "./AddCardModal";

const CategoryColumn = ({ category, provided, snapshot, archiveId }) => {
    // console.log({ category });

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Box>
            {isOpen && (
                <AddCardModal
                    isOpen={isOpen}
                    onClose={onClose}
                    category={category}
                />
            )}
            <Flex
                minWidth="300px"
                height="600px"
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
                        align="center"
                        height="470px"
                        overflowY="auto"
                    >
                        {category.cards.map((card, index) => (
                            <Card
                                card={card}
                                archiveId={archiveId}
                                key={card.id}
                                index={index}
                            />
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
        </Box>
    );
};

export default CategoryColumn;
