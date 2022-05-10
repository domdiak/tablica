import Router from "next/router";
import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
    console.log(req.body);

    try {
        const { id, title, description, link } = req.body;
        const editCard = await prisma.card.update({
            where: {
                id,
            },
            data: {
                title,
                description,
                link,
            },
        });

        res.status(200).json(editCard);
    } catch (error) {
        res.status(400).json();
    }
});
