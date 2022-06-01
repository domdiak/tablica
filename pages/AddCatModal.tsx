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

import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import fetcher from "../lib/fetcher";

const AddCatModal = ({ isOpen, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        await fetcher("/addNewCat", data);
        router.reload();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent top="6rem">
                <ModalHeader>
                    Add a new category:
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                    {errors.name && (
                        <Alert status="error">
                            <AlertIcon />
                            <AlertTitle> The field is empty </AlertTitle>
                        </Alert>
                    )}
                    <form id="add-card" onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel> Title</FormLabel>
                            <Input
                                type="name"
                                name="name"
                                {...register("name", {
                                    required: "Required field",
                                })}
                            />
                        </FormControl>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="primary"
                        type="submit"
                        form="add-card"
                        margin="5px"
                    >
                        {" "}
                        Add{" "}
                    </Button>
                    <Button variant="primary" onClick={onClose} margin="5px">
                        {" "}
                        Close{" "}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddCatModal;
