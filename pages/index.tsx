import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/layout";
import {
    DragDropContext,
    Droppable,
    resetServerContext,
} from "react-beautiful-dnd";
import CategoryColumn from "../components/CategoryColumn";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";
import { validateRoute } from "../../lib/auth";
import fetcher from "../lib/fetcher";
// import category from "./api/category";

const Home = ({ categoriesData }) => {
    const [categories, setCategories] = useState(categoriesData);
    console.log({ categories });
    const { user } = useMe();
    console.log({ user });

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
        console.log(sourceColumn);

        const newCards = Array.from(sourceColumn.cards);
        const [removedTask] = newCards.splice(source.index, 1);
        newCards.splice(destination.index, 0, removedTask);
        const newColumn = {
            ...sourceColumn,
            cards: newCards,
        };
        console.log({ newColumn });
        // setCategories({
        //     ...categories,
        // });
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

export const getServerSideProps = validateRoute(async (req, res, user) => {
    resetServerContext();
    const categories = await prisma.category.findMany({
        where: {
            userId: user.id,
        },
        include: {
            cards: true,
        },
    });

    return {
        props: { categoriesData: categories },
    };
});

export default Home;
