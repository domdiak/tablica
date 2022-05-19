import { Box, Heading } from "@chakra-ui/layout";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const NavBar = () => {
    return (
        <Box height="50px" border="solid 1px">
            {" "}
            <Box paddingY="5px" paddingX="10px">
                <Stack spacing={4} direction="row" align="left">
                    <Heading width="200px" size="md">
                        {" "}
                        Kanban App{" "}
                    </Heading>
                    {/* <Button leftIcon={<AddIcon />} colorScheme="teal">
                        {" "}
                        Add Role
                    </Button> */}
                    <Button colorScheme="teal"> Logout</Button>
                    <Button colorScheme="teal">Home</Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default NavBar;
