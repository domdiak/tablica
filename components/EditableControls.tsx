import { useEditableControls, ButtonGroup, IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import fetcher from "../lib/fetcher";

const EditableControls = ({ input, category }) => {
    const router = useRouter();

    const { isEditing, getSubmitButtonProps } = useEditableControls();

    const handleChange = async (name, id) => {
        const data = { name, id };

        await fetcher("/editCategory", data);
        router.reload();
    };

    return isEditing ? (
        <IconButton
            aria-label="Confirm changed name"
            marginX="5px"
            icon={<CheckIcon />}
            {...getSubmitButtonProps()}
            onClick={() => {
                handleChange(input, category.id);
            }}
        />
    ) : null;
};

export default EditableControls;
