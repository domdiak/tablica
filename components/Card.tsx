import { Box } from "@chakra-ui/layout";
import { Heading, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { Draggable, resetServerContext } from "react-beautiful-dnd";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FunctionComponent } from "react";
import CardDropdown from "./CardDropdown";
import { Card as CardType } from "../APIResponsesTypes";

type CardProps = {
    card: CardType;
    index: number;
    archiveId: number;
};

const Card: FunctionComponent<CardProps> = ({ card, index, archiveId }) => {
    resetServerContext();

    return (
        <Box>
            <Draggable draggableId={card.description} index={index}>
                {(provided, snapshot) => (
                    <Grid
                        width="270px"
                        height="100px"
                        margin="10px"
                        padding="5px"
                        borderRadius="10px"
                        boxShadow="md"
                        templateRows="1fr 1fr"
                        templateColumns="3fr 1fr"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        bg={snapshot.isDragging ? "main.500" : "main.300"}
                        data-cy="cardContainer"
                    >
                        <GridItem margin="5px">
                            <Heading size="md"> {card.description} </Heading>
                        </GridItem>
                        <GridItem justifySelf="end" margin="5px">
                            <CardDropdown archiveId={archiveId} card={card} />
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
