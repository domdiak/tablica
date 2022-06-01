import {
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
import { useRouter } from "next/router";

import fetcher from "../lib/fetcher";

const ModalAddCard = ({ isOpen, onClose, category }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

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
                {errors.title || errors.description || errors.link ? (
                    <Alert status="error">
                        <AlertIcon />
                        <AlertTitle> All fields are required </AlertTitle>
                    </Alert>
                ) : (
                    <Alert status="warning">
                        <AlertIcon />
                        <AlertTitle> Fill out all fields </AlertTitle>
                    </Alert>
                )}
                <ModalBody>
                    <form id="add-card" onSubmit={handleSubmit(onSubmit)}>
                        <FormControl
                            isInvalid={
                                errors.title ||
                                errors.description ||
                                errors.link
                            }
                        >
                            <FormLabel> Job Role</FormLabel>
                            <Input
                                type="title"
                                name="title"
                                {...register("title", {
                                    required: "Required field",
                                })}
                            />
                            <FormLabel> Company Name</FormLabel>
                            <Input
                                type="description"
                                name="description"
                                {...register("description", {
                                    required: "Required field",
                                })}
                            />
                            <FormLabel> Link to Job Add</FormLabel>
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
                    <Button
                        variant="primary"
                        margin="5px"
                        bg="main.1000"
                        onClick={onClose}
                    >
                        {" "}
                        Close{" "}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalAddCard;
