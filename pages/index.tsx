import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/layout";
import { Droppable } from "react-beautiful-dnd";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import CategoryColumn from "../components/CategoryColumn";
import prisma from "../lib/prisma";

const Home = ({ categoriesData }) => {
    const [categories, setCategories] = useState(categoriesData);
    console.log({ categories });
    console.log(categories.name);

    const DragDropContext = dynamic(
        () =>
            import("react-beautiful-dnd").then((mod) => {
                return mod.DragDropContext;
            }),
        { ssr: false }
    );

    const onDragEnd = (result) => {
        console.log(result);
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const sourceColumn = categories.find(
            (column) => column.name === source.droppableId
        );
        const columnIndex = categories.indexOf(sourceColumn);
        const newCards = Array.from(sourceColumn.cards);
        const [removedTask] = newCards.splice(source.index, 1);
        newCards.splice(destination.index, 0, removedTask);
        const newColumn = {
            ...sourceColumn,
            cards: newCards,
        };
        const newState = Array.from(categories);
        newState[columnIndex] = newColumn;
        setCategories(newState);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Flex direction="row">
                {categories.map((category, index) => (
                    <Droppable droppableId={category.name} key={category.id}>
                        {(provided) => (
                            <CategoryColumn
                                category={category}
                                key={category.id}
                                index={index}
                                provided={provided}
                            />
                        )}
                    </Droppable>
                ))}
            </Flex>
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
