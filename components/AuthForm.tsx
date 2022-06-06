import {
    Box,
    Flex,
    Input,
    Button,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Alert,
    AlertIcon,
    AlertTitle,
    Heading,
    Text,
    Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../lib/mutations";
import Logo from "./Logo";

const AuthForm: FunctionComponent<{ mode: "signin" | "signup" }> = ({
    mode,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (values) => {
        setIsLoading(true);

        const res = await auth(mode, values);
        setError(res.error);
        setIsLoading(false);
        router.push("/");
    };

    return (
        <Flex minH="100vh" align="center" justify="center">
            <Stack spacing={8} mx="auto" maxW="lg" py="12" px="6" minW="25%">
                {mode === "signup" && (
                    <Stack align="center">
                        <Logo />
                        <Heading fontSize="4xl">Sign up now!</Heading>
                        <Text fontSize="xl" color="gray.600">
                            Stay on top of your job search process!{" "}
                        </Text>
                    </Stack>
                )}
                {mode === "signin" && (
                    <Stack align="center">
                        <Logo />
                        <Heading fontSize="4xl">
                            Sign in to your account
                        </Heading>
                        <Text fontSize="xl" color="gray.600">
                            and stay on top of your job search process!{" "}
                        </Text>
                    </Stack>
                )}
                <Box
                    padding="50px"
                    rounded="lg"
                    borderRadius="6px"
                    boxShadow="xl"
                    data-cy="signin-form"
                    bg="main.100"
                >
                    <Stack spacing="4">
                        {error && (
                            <Alert status="error">
                                <AlertIcon />
                                <AlertTitle> {error} </AlertTitle>
                            </Alert>
                        )}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl id="email" isInvalid={errors.password}>
                                <FormLabel> Email address </FormLabel>
                                <Input
                                    placeholder="email"
                                    type="email"
                                    variant="primary"
                                    {...register("email", {
                                        required: "Required field",
                                    })}
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
                                    variant="primary"
                                    {...register("password", {
                                        required: "Required field",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "Min length is 3 characters",
                                        },
                                    })}
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
                                variant="primary"
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
                            Do not have an account? Sign up{" "}
                            <Link href="/signup" fontWeight="bold">
                                {" "}
                                here.{" "}
                            </Link>{" "}
                        </Box>
                    )}
                </Box>
            </Stack>
        </Flex>
    );
};

export default AuthForm;
