import { Box } from "@chakra-ui/layout";
import { Button, Stack, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <Box height="70px" border="solid 1px">
            {" "}
            <Box paddingY="5px" paddingX="10px">
                <Flex h="16" alignItems="center" justify="space-between">
                    <Logo />
                    <Flex alignItems="center">
                        <Stack direction="row" spacing={7}>
                            <Button colorScheme="teal" leftIcon={<AddIcon />}>
                                Add Category
                            </Button>
                            <Button colorScheme="teal">Show Archive</Button>
                            <Button colorScheme="teal"> Logout</Button>
                            <Button colorScheme="teal">Home</Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default NavBar;
