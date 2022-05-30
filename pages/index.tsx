import { useState, useReducer } from "react";
import { useDisclosure, Button, useBoolean } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { Switch } from "@chakra-ui/react";
import prisma from "../lib/prisma";
import fetcher from "../lib/fetcher";
import AddCardModal from "./AddCardModal";
import Board from "./Board";

const Home = ({ categoriesData }) => {
    const [categories, setCategories] = useState(categoriesData);
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [showArchive, setShowArchive] = useBoolean(false);

    const DragDropContext = dynamic(
        () =>
            import("react-beautiful-dnd").then((mod) => {
                return mod.DragDropContext;
            }),
        { ssr: false }
    );

    const updateCard = async (cardId, categoryId) => {
        const data = { cardId, categoryId };
        fetcher("/updateCard", data);
    };

    const onDragEnd = (result) => {
        console.log("DnD event:", result);
        const { destination, source, draggableId } = result;
        const sourceColumn = categories.find(
            (column) => column.name === source.droppableId
        );
        const destinationColumn = categories.find(
            (column) => column.name === destination.droppableId
        );
        const sourceColumnIndex = categories.indexOf(sourceColumn);
        const destinationColumnIndex = categories.indexOf(destinationColumn);

        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        if (sourceColumn === destinationColumn) {
            const newCards = Array.from(sourceColumn.cards);
            const [removedCard] = newCards.splice(source.index, 1);

            newCards.splice(destination.index, 0, removedCard);

            const newColumn = {
                ...sourceColumn,
                cards: newCards,
            };

            // Copies an array of categories
            const newState = Array.from(categories);
            // Replaces updated column based on sourceColumnIndex
            newState[sourceColumnIndex] = newColumn;

            setCategories(newState);
        } else {
            const newSourceCards = Array.from(sourceColumn.cards);
            const [removedCard] = newSourceCards.splice(source.index, 1);
            console.log({ removedCard });
            const newSourceColumn = {
                ...sourceColumn,
                cards: newSourceCards,
            };

            const newDestinationCards = Array.from(destinationColumn.cards);
            newDestinationCards.splice(destination.index, 0, removedCard);

            const newDestinationColumn = {
                ...destinationColumn,
                cards: newDestinationCards,
            };

            // Update state with new cards
            const newState = Array.from(categories);
            newState[sourceColumnIndex] = newSourceColumn;
            newState[destinationColumnIndex] = newDestinationColumn;
            console.log({ newDestinationColumn });

            setCategories(newState);
            updateCard(removedCard.id, newDestinationColumn.id);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {isOpen && (
                <AddCardModal
                    isOpen={isOpen}
                    onClose={onClose}
                    categories={categories}
                />
            )}
            <Board
                showArchive={showArchive}
                categories={categories}
                onOpen={onOpen}
                isOpen={isOpen}
            />{" "}
            Test Button
            <Switch onChange={setShowArchive.toggle}>Show Archive </Switch>
        </DragDropContext>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await prisma.category.findMany({
        include: {
            cards: true,
        },
    });

    return {
        props: {
            categoriesData: categories,
        },
    };
};

export default Home;
