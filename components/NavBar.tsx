import { Box } from "@chakra-ui/layout";
import { Button, Stack, Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AddIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import fetcher from "../lib/fetcher";
import AddCatModal from "../pages/AddCatModal";

const NavBar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const router = useRouter();
    return (
        <Box height="70px">
            {isOpen && <AddCatModal isOpen={isOpen} onClose={onClose} />}{" "}
            <Box paddingY="5px" paddingX="10px">
                <Flex h="16" alignItems="center" justify="space-between">
                    <Box width="150px" height="50px">
                        <Logo />
                    </Box>
                    <Flex alignItems="center">
                        <Stack direction="row" spacing={7}>
                            <Button
                                variant="primary"
                                leftIcon={<AddIcon />}
                                onClick={onOpen}
                            >
                                Add Category
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    fetcher("/logout");
                                    // router.reload();
                                }}
                            >
                                {" "}
                                Logout{" "}
                            </Button>
                            <Button variant="primary">Home</Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default NavBar;
