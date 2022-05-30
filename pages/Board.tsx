import { Flex } from "@chakra-ui/layout";
import { Button, useBoolean } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BsFillArchiveFill } from "react-icons/bs";
import { Droppable } from "react-beautiful-dnd";
import CategoryColumn from "./CategoryColumn";

const Board = ({ categories, onOpen, isOpen }) => {
    const [showArchive, setShowArchive] = useBoolean(false);
    console.log({ categories });

    return (
        <Flex justify="space-evenly" marginY="20px">
            {categories
                .filter((category) => {
                    if (showArchive) {
                        return true;
                    }
                    return category.name !== "Archived";
                })
                .sort((a, b) => (a.name === "Archived" ? 1 : -1))
                .map((category, index) => (
                    <Droppable droppableId={category.name} key={category.id}>
                        {(provided, snapshot) => (
                            <CategoryColumn
                                category={category}
                                key={category.id}
                                index={index}
                                provided={provided}
                                snapshot={snapshot}
                                onOpen={onOpen}
                                isOpen={isOpen}
                                showArchive={showArchive}
                            />
                        )}
                    </Droppable>
                ))}

            <Button
                variant="primary"
                height="600px"
                margin="10px"
                borderRadius="10px"
                onClick={setShowArchive.toggle}
            >
                {" "}
                <BsFillArchiveFill size="30px" />{" "}
            </Button>
        </Flex>
    );
};

export default Board;
