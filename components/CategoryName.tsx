import { CheckIcon } from "@chakra-ui/icons";
import {
    Box,
    Spacer,
    Editable,
    EditablePreview,
    EditableInput,
    Input,
    Flex,
} from "@chakra-ui/react";
import EditableControls from "./EditableControls";

const CategoryName = ({ category }) => {
    return (
        <Box>
            <Editable
                defaultValue={category.name}
                fontSize="3xl"
                fontWeight="bold"
                paddingX="10px"
            >
                <EditablePreview />
                <Flex width="60%">
                    <Input as={EditableInput} fontSize="3xl" />
                    <EditableControls />
                </Flex>
            </Editable>
            <Spacer />
        </Box>
    );
};

export default CategoryName;
