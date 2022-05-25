import { Box } from "@chakra-ui/layout";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <Box
            width="100%"
            height="100vh"
            margin="0"
            padding="0"
            boxSizing="border-box"
        >
            <Box position="absolute" width="100vw" top="0" left="0">
                {" "}
                <NavBar />
            </Box>
            <Box paddingTop="50px">{children}</Box>
        </Box>
    );
};

export default Layout;
