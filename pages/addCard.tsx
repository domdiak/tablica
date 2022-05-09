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

const AddCard = ({ isOpen, onClose }) => {
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
                        }}
                    >
                        <FormControl isRequired>
                            <FormLabel> Title</FormLabel>
                            <Input type="title" />
                            <FormLabel> Description</FormLabel>
                            <Input type="description" />
                            <FormLabel> Link</FormLabel>
                            <Input type="link" />
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
