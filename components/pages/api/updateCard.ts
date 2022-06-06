import prisma from "../../../lib/prisma";
import { validateRoute } from "../../../lib/auth";

export default validateRoute(async (req, res) => {
    try {
        const { cardId, categoryId } = req.body;
        const updateCard = await prisma.card.update({
            where: {
                id: cardId,
            },
            data: {
                categoryId,
            },
        });
        res.status(200).json(updateCard);
    } catch (error) {
        res.status(400).json();
    }
});
