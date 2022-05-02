import NextImage from "next/image";
import { Box } from "@chakra-ui/layout";

const NavBar = () => {
    return (
        <Box width="100%" height="50px" border="solid 1px">
            {" "}
            <Box paddingY="5px">
                <Box paddingX="10px">
                    <NextImage src="/tablicalogo.png" height={40} width={100} />
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;
