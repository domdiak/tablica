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
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent data-cy="modal">
                <ModalCloseButton />
                <ModalHeader>Are you sure?</ModalHeader>
                <ModalFooter>
                    <Button variant="primary" mr={3} onClick={handleDelete}>
                        Confirm
                    </Button>
                    <Button variant="primary" bg="main.100" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalWindow;
