import { Box } from "@chakra-ui/layout";
import { Button, Stack, Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AddIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import fetcher from "../lib/fetcher";
import AddCatModal from "../pages/AddCatModal";

const NavBar = () => {
    const router = useRouter();
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Box height="70px" border="solid 1px">
            {isOpen && <AddCatModal isOpen={isOpen} onClose={onClose} />}{" "}
            <Box paddingY="5px" paddingX="10px">
                <Flex h="16" alignItems="center" justify="space-between">
                    <Logo />
                    <Flex alignItems="center">
                        <Stack direction="row" spacing={7}>
                            <Button
                                colorScheme="teal"
                                leftIcon={<AddIcon />}
                                onClick={onOpen}
                            >
                                Add Category
                            </Button>
                            <Button colorScheme="teal">Show Archive</Button>
                            <Button
                                colorScheme="teal"
                                onClick={() => fetcher("/logout")}
                            >
                                {" "}
                                Logout{" "}
                            </Button>
                            <Button colorScheme="teal">Home</Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default NavBar;
