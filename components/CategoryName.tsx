import { CheckIcon } from "@chakra-ui/icons";
import {
    Box,
    Spacer,
    Editable,
    EditablePreview,
    EditableInput,
    Input,
    Flex,
    useEditableControls,
    IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import EditableControls from "./EditableControls";

const CategoryName = ({ category }) => {
    const [input, setInput] = useState(category.name);

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
                    <Input
                        as={EditableInput}
                        fontSize="3xl"
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                    <EditableControls input={input} category={category} />
                </Flex>
            </Editable>
            <Spacer />
        </Box>
    );
};

export default CategoryName;
