import { useEditableControls, ButtonGroup, IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const EditableControls = () => {
    const { isEditing, getSubmitButtonProps } = useEditableControls();

    return isEditing ? (
        <IconButton
            marginX="5px"
            icon={<CheckIcon />}
            {...getSubmitButtonProps()}
        />
    ) : null;
};

export default EditableControls;
