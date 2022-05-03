import Head from "next/head";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/layout";
import { useCard, useCategory } from "../lib/hooks";
import CategoryColumn from "../components/CategoryColumn";

const Home = () => {
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

export default Home;
