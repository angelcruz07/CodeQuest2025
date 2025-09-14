import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";
import { post } from "@actions/post";
import { ACTION_API_CONTEXT_SYMBOL } from "astro/actions/runtime/utils.js";

export const getCommentsByPostId =  defineAction({
    accept: 'form',
    input: z.object({
        postId: z.number()
    }),
    handler: async ({postId}) => {
        try {
            const commentByPostId = await prisma.comment.findUnique({
                where: {id: postId},
                include: {
                    author: true,
                    post: true,
                    content: true,
                    parent: true,
                    replies: true
                }
            });
            return commentByPostId;
        } catch (e) {
            throw new ActionError({
                code: "BAD_REQUEST",
                message: "Error to fetch comments by post ID" + (e instanceof Error ? e.message : String(e))
            });
        }
    }
});