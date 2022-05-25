import { Box } from "@chakra-ui/layout";
import Image from "next/image";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <Box height="50px" border="solid 1px">
            {" "}
            <Box paddingY="5px" paddingX="10px">
                <Stack spacing={4} direction="row" align="left">
                    <Logo />
                    <Button colorScheme="teal"> Logout</Button>
                    <Button colorScheme="teal">Home</Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default NavBar;
