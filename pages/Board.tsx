import { Flex } from "@chakra-ui/layout";
import { Droppable } from "react-beautiful-dnd";
import CategoryColumn from "./CategoryColumn";

const Board = ({ showArchive, categories, onOpen, isOpen }) => {
    return (
        <Flex direction="row">
            {!showArchive &&
                categories
                    .filter((category) => category.name !== "Archived")
                    .map((category, index) => (
                        <Droppable
                            droppableId={category.name}
                            key={category.id}
                        >
                            {(provided) => (
                                <CategoryColumn
                                    category={category}
                                    key={category.id}
                                    index={index}
                                    provided={provided}
                                    onOpen={onOpen}
                                    isOpen={isOpen}
                                    showArchive={showArchive}
                                />
                            )}
                        </Droppable>
                    ))}
            {showArchive &&
                categories.map((category, index) => (
                    <Droppable droppableId={category.name} key={category.id}>
                        {(provided) => (
                            <CategoryColumn
                                category={category}
                                key={category.id}
                                index={index}
                                provided={provided}
                                onOpen={onOpen}
                                isOpen={isOpen}
                                showArchive={showArchive}
                            />
                        )}
                    </Droppable>
                ))}
        </Flex>
    );
};

export default Board;
