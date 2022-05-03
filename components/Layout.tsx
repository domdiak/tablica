import { Box } from "@chakra-ui/layout";
import NavBar from "./NavBar";
import Board from "./Board";

const Layout = ({ children }) => {
    return (
        <Box width="100vh" height="100vh">
            <Box position="absolute" top="0" width="100%" left="0">
                {" "}
                <NavBar />
            </Box>
            <Box paddingTop="50px">
                {children}
                <Board />
            </Box>
        </Box>
    );
};

export default Layout;
