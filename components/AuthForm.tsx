import {
    Box,
    Flex,
    Input,
    Button,
    Stack,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { auth } from "../lib/mutations";
import { getPrismaClient } from "@prisma/client/runtime";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    console.log({ email });
    console.log({ password });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        await auth(mode, { email, password });
        setIsLoading(false);
        router.push("/");
    };

    return (
        <Flex minH="100vh" align="center" justify="center" bg="white">
            <Stack spacing={8} mx="auto" maxW="lg" py="12" px="6">
                <Stack align="center">
                    <Logo />
                </Stack>
                <Box
                    padding="50px"
                    rounded="lg"
                    borderRadius="6px"
                    boxShadow="lg"
                    data-cy="signin-form"
                >
                    <Stack spacing="4">
                        <form onSubmit={handleSubmit}>
                            <FormControl id="email">
                                <FormLabel> Email address </FormLabel>
                                <Input
                                    placeholder="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel> Password </FormLabel>
                                <Input
                                    placeholder="password"
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                bg="gray.400"
                                _hover={{ bg: "gray.500" }}
                                isLoading={isLoading}
                            >
                                {" "}
                                Signin{" "}
                            </Button>
                        </form>
                    </Stack>
                    {mode === "signin" && (
                        <Box data-cy="1">
                            {" "}
                            Don't have an account? Sign up{" "}
                            <Link href="/signup"> here. </Link>{" "}
                        </Box>
                    )}
                </Box>
            </Stack>
        </Flex>
    );
};

export default AuthForm;
