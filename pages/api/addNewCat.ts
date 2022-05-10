import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
    try {
        const { name } = req.body;
        const addCategory = await prisma.category.create({
            data: {
                name,
                userId: user.id,
            },
        });

        res.status(200).json(addCategory);
    } catch (error) {
        res.status(400).json();
    }
});
