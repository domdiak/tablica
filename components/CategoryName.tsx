import {
    Box,
    Spacer,
    Editable,
    EditablePreview,
    EditableInput,
    Input,
    Flex,
    Tooltip,
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
                <Tooltip label="Click to edit">
                    <EditablePreview _hover={{ background: "main.300" }} />
                </Tooltip>
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
