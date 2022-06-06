import prisma from "../../../lib/prisma";
import { validateRoute } from "../../../lib/auth";

export default validateRoute(async (req, res) => {
    try {
        const { id, name } = req.body;
        const updateCategory = await prisma.category.update({
            where: {
                id,
            },
            data: {
                name,
            },
        });
        res.status(200).json(updateCategory);
    } catch (error) {
        res.status(400).json();
    }
});
