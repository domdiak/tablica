import Head from "next/head";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/layout";
import CategoryColumn from "../components/CategoryColumn";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useCard, useCategory } from "../lib/hooks";

const Home = () => {
    const { cards } = useCard();
    const { categories } = useCategory();
    console.log("Cards from useCard:", cards);

    const onDragEnd = () => {};

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Flex direction="row">
                {categories.map((category) => (
                    <CategoryColumn category={category} key={category.id} />
                ))}
            </Flex>
        </DragDropContext>
    );
};

export default Home;
