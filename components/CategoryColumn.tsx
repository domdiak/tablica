import { Box } from "@chakra-ui/layout";
import Card from "./Card";

const CategoryColumn = ({ category }) => {
    return (
        <Box width="200px" height="600px" bg="lightgrey" margin="20px">
            {category.name}
            <Card />
        </Box>
    );
};

export default CategoryColumn;
