import { Flex } from "@chakra-ui/layout";
import { Button, useBoolean } from "@chakra-ui/react";
import { BsFillArchiveFill } from "react-icons/bs";
import { Droppable } from "react-beautiful-dnd";
import { FunctionComponent } from "react";
import CategoryColumn from "./CategoryColumn";
import { Category } from "../APIResponsesTypes";

type BoardProps = {
    categories: Category[];
    onOpen: () => void;
    isOpen: boolean;
};

const Board: FunctionComponent<BoardProps> = ({
    categories,
    onOpen,
    isOpen,
}) => {
    const [showArchive, setShowArchive] = useBoolean(false);

    const archiveArrayId = categories
        .filter(({ name }) => name === "Archived")
        .map(({ id }) => id);

    const archiveId: number = archiveArrayId[0];

    return (
        <Flex justify="flex-start" marginY="20px">
            {categories
                .filter((category) => {
                    if (showArchive) {
                        return true;
                    }
                    return category.name !== "Archived";
                })
                .sort((a) => (a.name === "Archived" ? 1 : -1))
                .map((category, index: number) => (
                    <Droppable droppableId={category.name} key={category.id}>
                        {(provided, snapshot) => (
                            <CategoryColumn
                                category={category}
                                archiveId={archiveId}
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
                marginY="10px"
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
