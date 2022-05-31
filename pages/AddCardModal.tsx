import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

import fetcher from "../lib/fetcher";

const ModalAddCard = ({ isOpen, onClose, category }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const error = "All fields are required";
    const router = useRouter();
    const [inputData, setInputData] = useState({
        title: "",
        description: "",
        link: "",
        categoryId: category.id,
    });

    const onSubmit = async (data) => {
        const updatedData = { ...data, categoryId: category.id };
        await fetcher("/addNewCard", updatedData);
        router.reload();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Add a new card:
                    <ModalCloseButton />
                </ModalHeader>
                {error && (
                    <Alert status="error">
                        <AlertIcon />
                        <AlertTitle> {error} </AlertTitle>
                    </Alert>
                )}
                <ModalBody>
                    <form id="add-card" onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isRequired>
                            <FormLabel> Title</FormLabel>
                            <Input
                                type="title"
                                name="title"
                                {...register("title", {
                                    required: "Required field",
                                })}
                            />
                            <FormLabel> Description</FormLabel>
                            <Input
                                {...register("description", {
                                    required: "Required field",
                                })}
                                type="description"
                                name="description"
                            />
                            <FormLabel> Link</FormLabel>
                            <Input
                                {...register("link", {
                                    required: "Required field",
                                })}
                                type="link"
                                name="link"
                            />
                        </FormControl>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        type="submit"
                        form="add-card"
                        variant="primary"
                        margin="5px"
                    >
                        {" "}
                        Add{" "}
                    </Button>
                    <Button variant="primary" margin="5px" bg="main.1000">
                        {" "}
                        Close{" "}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalAddCard;
