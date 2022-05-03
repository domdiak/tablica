import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
    const categories = await prisma.category.findMany({
        where: {
            userId: user.id,
        },
    });

    res.json(categories);
});
