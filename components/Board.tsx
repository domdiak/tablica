import { Box, List, ListItem, Flex } from "@chakra-ui/layout";
// import { FC } from "react";
import { useCard, useCategory } from "../lib/hooks";
import CategoryColumn from "./CategoryColumn";

const Board = () => {
    const { cards } = useCard();
    const { categories } = useCategory();
    console.log("Cards from useCard:", cards);

    return (
        <Flex direction="row">
            {categories.map((category) => (
                <CategoryColumn category={category} key={category.id} />
            ))}
        </Flex>
    );
};

export default Board;
