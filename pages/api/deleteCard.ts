import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res) => {
    try {
        const { cardId } = req.body;
        const addCard = await prisma.card.delete({
            where: {
                id: cardId,
            },
        });

        res.status(200).json(addCard);
    } catch (error) {
        res.status(400).json();
        error.log("Error", error);
    }
});
