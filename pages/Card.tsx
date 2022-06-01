import { Box } from "@chakra-ui/layout";
import {
    Button,
    useDisclosure,
    Heading,
    IconButton,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import CardDropdown from "./CardDropdown";

const Card = ({ card, index }) => {
    const router = useRouter();
    resetServerContext();

    return (
        <Box>
            <Draggable draggableId={card.title} index={index}>
                {(provided, snapshot) => (
                    <Grid
                        width="300px"
                        height="90px"
                        margin="10px"
                        padding="5px"
                        borderRadius="10px"
                        boxShadow="md"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="3fr 1fr"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        bg={snapshot.isDragging ? "main.500" : "main.300"}
                    >
                        <GridItem margin="5px">
                            <Heading size="md"> {card.description} </Heading>
                        </GridItem>
                        <GridItem justifySelf="end" margin="5px">
                            <CardDropdown card={card} />
                        </GridItem>
                        <GridItem margin="5px">
                            <Heading size="sm"> {card.title} </Heading>
                        </GridItem>
                        <GridItem justifySelf="end" margin="5px">
                            <a
                                href={`http://${card.link}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IconButton
                                    aria-label="See the job ad"
                                    size="sm"
                                    icon={<ExternalLinkIcon />}
                                    // onClick={() =>
                                    //     router.push(`http://${card.link}`)
                                    // }
                                >
                                    {" "}
                                </IconButton>
                            </a>
                        </GridItem>
                    </Grid>
                )}
            </Draggable>
        </Box>
    );
};

export default Card;
