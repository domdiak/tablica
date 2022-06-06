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

const ModalEditCard = ({ isOpen, onClose, card }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        const updatedData = { ...data, id: card.id };
        await fetcher("/editCard", updatedData);
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
                    {(errors.title || errors.description || errors.link) && (
                        <Alert status="error">
                            <AlertIcon />
                            <AlertTitle> All fields are required </AlertTitle>
                        </Alert>
                    )}

                    <form id="edit-card" onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel> Job Role</FormLabel>
                            <Input
                                type="description"
                                name="description"
                                defaultValue={card.description}
                                {...register("description", {
                                    required: "Required field",
                                })}
                            />
                            <FormLabel> Company Name</FormLabel>
                            <Input
                                type="title"
                                name="title"
                                defaultValue={card.title}
                                {...register("title", {
                                    required: "Required field",
                                })}
                            />
                            <FormLabel> Link to Job Add</FormLabel>
                            <Input
                                type="link"
                                name="link"
                                defaultValue={card.link}
                                {...register("link", {
                                    required: "Required field",
                                })}
                            />
                        </FormControl>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" variant="primary" form="edit-card">
                        {" "}
                        Make changes{" "}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalEditCard;
