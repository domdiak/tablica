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

const AddCard = ({ isOpen, onClose, categories }) => {
    const router = useRouter();
    const [inputData, setInputData] = useState({
        title: "",
        description: "",
        link: "",
        categoryId: 1,
    });

    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]:
                e.target.name === "categoryId"
                    ? parseInt(e.target.value)
                    : e.target.value,
        });
    };
    const handleSubmit = async (data) => {
        console.log("Data from add new card:", data);
        await fetcher("/addNewCard", data);
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
                            <FormLabel> Category</FormLabel>
                            <Select
                                placeholder="Select category"
                                onChange={handleChange}
                                name="categoryId"
                            >
                                {categories.map((category) => {
                                    return (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {" "}
                                            {category.name}{" "}
                                        </option>
                                    );
                                })}
                            </Select>
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
