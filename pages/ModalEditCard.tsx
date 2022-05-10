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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import fetcher from "../lib/fetcher";

const ModalEditCard = ({ isOpen, onClose, card }) => {
    const router = useRouter();
    const [cardData, setCardData] = useState(card);

    const handleChange = (e) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (data) => {
        await fetcher("/editCard", data);
        router.reload();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Edit card:
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                    <form
                        id="edit-card"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(cardData);
                        }}
                    >
                        <FormControl>
                            <FormLabel> Title</FormLabel>
                            <Input
                                type="title"
                                name="title"
                                defaultValue={card.title}
                                onChange={handleChange}
                            />
                            <FormLabel> Description</FormLabel>
                            <Input
                                type="description"
                                name="description"
                                defaultValue={card.description}
                                onChange={handleChange}
                            />
                            <FormLabel> Link</FormLabel>
                            <Input
                                type="link"
                                name="link"
                                defaultValue={card.link}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" form="edit-card">
                        {" "}
                        Make changes{" "}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalEditCard;
