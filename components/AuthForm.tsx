import {
    Box,
    Flex,
    Input,
    Button,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Logo from "./Logo";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // console.log({ email });
    // console.log({ password });

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);

    //     await auth(mode, { email, password });
    //     setIsLoading(false);
    //     router.push("/");
    // };

    console.log({ errors });
    const isError = password === "";

    const onSubmit = (data) => console.log("data", data);

    return (
        <Flex minH="100vh" align="center" justify="center" bg="gray.200">
            <Stack spacing={8} mx="auto" maxW="lg" py="12" px="6" minW="25%">
                <Stack align="center">
                    <Logo />
                </Stack>
                <Box
                    padding="50px"
                    rounded="lg"
                    borderRadius="6px"
                    boxShadow="xl"
                    data-cy="signin-form"
                >
                    <Stack spacing="4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl id="email" isInvalid={errors.password}>
                                <FormLabel> Email address </FormLabel>
                                <Input
                                    placeholder="email"
                                    type="text"
                                    {...register("email", {
                                        required: "Required field",
                                    })}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email?.message && (
                                    <FormErrorMessage>
                                        {" "}
                                        {errors.email.message}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl isInvalid={errors.password}>
                                <FormLabel> Password </FormLabel>
                                <Input
                                    placeholder="password"
                                    type="password"
                                    {...register("password", {
                                        required: "Required field",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Min length is 3 characters",
                                        },
                                    })}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {errors.password?.message && (
                                    <FormErrorMessage>
                                        {" "}
                                        {errors.password.message}
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                            <Button
                                type="submit"
                                bg="gray.400"
                                _hover={{ bg: "gray.500" }}
                                isLoading={isLoading}
                                marginY="3"
                            >
                                {" "}
                                {mode === "signin" && "Sign In"}
                                {mode === "signup" && "Sign Up"}
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
