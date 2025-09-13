import { ActionError, defineAction } from "astro:actions";
import prisma from "@lib/prisma";

export const getComments = defineAction({
    accept: 'form',
    handler: async () => {
        try {
            const comments = await prisma.comment.findMany({
                include: {
                    author: true,
                    post: true,
                    content: true,
                    parent: true,
                    replies: true
                }
            });
            return comments;
        } catch (e) {
            throw new ActionError({
                code: "BAD_REQUEST",
                message: "Error fetching comments" + (e instanceof Error ? e.message : String(e))
            });
        }
    }
});