import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
    const cards = await prisma.card.findMany({
        where: {
            userId: user.id,
        },
    });

    res.json(cards);
});
