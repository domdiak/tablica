import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "reset-css";

const theme = extendTheme({
    colors: {
        main: {
            100: "#CCDACF",
            200: "#BCD3C0",
            300: "#ACCCB1",
            400: "#9CC5A1",
            500: "#73B38D",
            600: "#49A078",
            700: "#358471",
            800: "#2b766d",
            900: "#216869",
            1000: "#f1f1f1",
        },
    },
    components: {
        Button: {
            variants: {
                primary: {
                    bg: "main.500",
                    _hover: {
                        bg: "main.300",
                    },
                },
            },
        },
    },
});

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            {Component.authPage ? (
                <Component {...pageProps} />
            ) : (
                <Layout>
                    <Component {...pageProps} />;
                </Layout>
            )}
        </ChakraProvider>
    );
};

export default MyApp;
