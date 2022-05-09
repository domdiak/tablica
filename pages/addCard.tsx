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
} from "@chakra-ui/react";

import { useState } from "react";

import fetcher from "../lib/fetcher";

const AddCard = ({ isOpen, onClose }) => {
    const [inputData, setInputData] = useState({
        title: "",
        description: "",
        link: "",
    });

    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };
    const addNewCard = async (data) => {
        console.log("Data from add new card:", data);
        await fetcher("/addNewCard", data);
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Add a new card:
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                    <form
                        id="add-card"
                        onSubmit={(e) => {
                            e.preventDefault();
                            addNewCard(inputData);
                        }}
                    >
                        <FormControl>
                            <FormLabel> Title</FormLabel>
                            <Input
                                onChange={handleChange}
                                type="title"
                                name="title"
                            />
                            <FormLabel> Description</FormLabel>
                            <Input
                                onChange={handleChange}
                                type="description"
                                name="description"
                            />
                            <FormLabel> Link</FormLabel>
                            <Input
                                onChange={handleChange}
                                type="link"
                                name="link"
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

export default AddCard;
