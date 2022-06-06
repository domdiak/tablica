import { Button, Flex, useDisclosure, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FunctionComponent } from "react";
import Card from "./Card";
import CatDropdown from "./CatDropdown";
import CategoryName from "./CategoryName";
import AddCardModal from "./AddCardModal";
import { Category } from "../APIResponsesTypes";

type CategoryColumnProps = {
    index: number;
    category: Category;
    provided: any;
    snapshot: any;
    archiveId: number;
    isOpen: boolean;
    onOpen: () => void;
    showArchive: boolean;
};

const CategoryColumn: FunctionComponent<CategoryColumnProps> = ({
    category,
    provided,
    snapshot,
    archiveId,
}: CategoryColumnProps) => {
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
                        <CatDropdown category={category} />
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
