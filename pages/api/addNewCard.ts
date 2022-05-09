import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
    console.log("two");
    console.log(req.body);

    try {
        const { title, description, link } = req.body;
        const addCard = await prisma.card.create({
            data: {
                title,
                description,
                link,
                userId: user.id,
            },
        });
        res.status(200).json(addCard);
    } catch (error) {
        res.status(400).json();
    }
});
