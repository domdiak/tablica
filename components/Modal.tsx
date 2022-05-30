import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalCloseButton,
    Button,
    ModalHeader,
} from "@chakra-ui/react";

const ModalWindow = ({ isOpen, onClose, handleDelete }) => {
    console.log(handleDelete);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader>Are you sure?</ModalHeader>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleDelete}>
                        Confirm
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalWindow;
