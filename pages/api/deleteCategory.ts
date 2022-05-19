import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
    try {
        const { categoryId } = req.body;

        console.log("server side", categoryId);

        const deleteCards = await prisma.card.deleteMany({
            where: {
                categoryId,
            },
        });

        const deleteCategory = await prisma.category.delete({
            where: {
                id: categoryId,
            },
        });

        res.status(200).json(deleteCategory, deleteCards);
    } catch (error) {
        res.status(400).json();
        console.log("Error", error);
    }
});
