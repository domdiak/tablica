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
    FormHelperText,
    Input,
    Button,
    Select,
} from "@chakra-ui/react";

import { useState } from "react";
import { useRouter } from "next/router";

import fetcher from "../lib/fetcher";

const AddCatModal = ({ isOpen, onClose }) => {
    const router = useRouter();
    const [inputData, setInputData] = useState({
        name: "",
    });

    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (data) => {
        console.log("Data from add new card:", data);
        await fetcher("/addNewCat", data);
        router.reload();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Add a new category:
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                    <form
                        id="add-card"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(inputData);
                        }}
                    >
                        <FormControl>
                            <FormLabel> Title</FormLabel>
                            <Input
                                onChange={handleChange}
                                type="name"
                                name="name"
                            />
                        </FormControl>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" form="add-card">
                        {" "}
                        Add{" "}
                    </Button>
                    <Button onClick={onClose}> Close </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddCatModal;
