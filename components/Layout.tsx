import { Box } from "@chakra-ui/layout";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <Box width="100vh" height="100vh">
            <Box position="absolute" width="100vw" top="0" left="0">
                {" "}
                <NavBar />
            </Box>
            <Box paddingTop="50px">{children}</Box>
        </Box>
    );
};

export default Layout;
