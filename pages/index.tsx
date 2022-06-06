import { useState, FunctionComponent } from "react";
import { useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import jwt from "jsonwebtoken";
import { GetServerSideProps } from "next";
import { DropResult } from "react-beautiful-dnd";
import Board from "./Board";
import prisma from "../lib/prisma";
import { Category } from "../APIResponsesTypes";
import fetcher from "../lib/fetcher";

type HomeProps = {
    categoriesData: Category[];
};

const Home: FunctionComponent<HomeProps> = ({ categoriesData }) => {
    const [categories, setCategories] = useState(categoriesData);
    const { isOpen, onOpen } = useDisclosure();

    // correct DragDrop context *****
    const DragDropContext: any = dynamic(
        () =>
            import("react-beautiful-dnd").then((mod) => {
                return mod.DragDropContext;
            }),
        { ssr: false }
    );

    const updateCard = async (cardId, categoryId) => {
        const data = { cardId, categoryId };
        await fetcher("/updateCard", data);
    };

    const onDragEnd = (result: DropResult): void => {
        const { destination, source } = result;
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

            updateCard(removedCard.id, newDestinationColumn.id);
            setCategories(newState);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Board categories={categories} onOpen={onOpen} isOpen={isOpen} />{" "}
        </DragDropContext>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const token = req.cookies.ACCESS_TOKEN;
    const { id } = jwt.verify(token, "hello");

    const categories = await prisma.category.findMany({
        where: {
            userId: id,
        },
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
