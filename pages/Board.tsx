import { Flex } from "@chakra-ui/layout";
import { Button, useBoolean } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BsFillArchiveFill } from "react-icons/bs";
import { Droppable } from "react-beautiful-dnd";
import CategoryColumn from "./CategoryColumn";

const Board = ({ categories, onOpen, isOpen }) => {
    const [showArchive, setShowArchive] = useBoolean(false);

    return (
        <Flex justify="space-evenly" marginY="20px">
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
            <Button
                height="600px"
                margin="10px"
                borderRadius="10px"
                bg="lightblue"
                onClick={setShowArchive.toggle}
            >
                {" "}
                <BsFillArchiveFill size="30px" />{" "}
            </Button>
        </Flex>
    );
};

export default Board;
