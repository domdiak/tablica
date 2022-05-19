import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
    try {
        const { categoryId } = req.body;
        const addCard = await prisma.category.delete({
            where: {
                id: cardId,
            },
        });

        res.status(200).json(addCard);
    } catch (error) {
        res.status(400).json();
        console.log("Error", error);
    }
});
