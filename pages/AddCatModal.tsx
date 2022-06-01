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
    // const [inputData, setInputData] = useState({
    //     name: "",
    // });

    const onSubmit = async (data) => {
        console.log("Data from add new card:", data);
        await fetcher("/addNewCat", data);
        router.reload();
    };

    // const handleChange = (e) => {
    //     setInputData({
    //         ...inputData,
    //         [e.target.name]: e.target.value,
    //     });
    // };
    // const handleSubmit = async (data) => {
    //     console.log("Data from add new card:", data);
    //     await fetcher("/addNewCat", data);
    //     router.reload();
    // };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
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
