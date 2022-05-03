import { Box, List, ListItem } from "@chakra-ui/layout";
import { useCard } from "../lib/hooks";

const Board = () => {
    const { cards } = useCard();
    console.log("Cards from useCard:", cards);

    return (
        <Box>
            <List>
                {cards.map((card) => (
                    <ListItem key={card.id}>{card.title}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Board;
