import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";
import { post } from "@actions/post";

export const createUpdateComment = defineAction({
    accept: 'form',
    input: z.object({
        id: z.string().optional(),
        content: z.array(z.string().min(3).max(250)),
        postId: z.number(),
        authorId: z.number(),
        parent: z.number().optional(),
        replies: z.array(z.string().min(3).max(250)).optional()
    }),
    handler: async ({ id, content, postId, authorId, parent, replies }) => {
        try {
            if (id) {
                const updatedComment = await prisma.comment.update({
                    where: { id: Number(id) },
                    data: {
                        content,
                        post: { connect: { id: postId } },
                        author: { connect: { id: authorId } },
                        parent: parent ? { connect: { id: parent } } : undefined,
                        replies: replies ? { set: replies.map(reply => ({ id: Number(reply) })) } : undefined
                    }
                });
                return updatedComment;
            }
            const newPost = await prisma.comment.create({
                data: {
                    content: content.join(' '),
                    post: { connect: { id: postId } },
                    author: { connect: { id: authorId } },
                    parent: parent ? { connect: { id: parent } } : undefined,
                    replies: replies ? { set: replies.map(reply => ({ id: Number(reply) })) } : undefined
                }
            });
            return newPost;

        } catch (e) {
            if (id) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: "Error to update the comment" + (e instanceof Error ? e.message : String(e))
                });
            } else {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: "Error to create the comment" + (e instanceof Error ? e.message : String(e))
                });
            }
        }
    }
});