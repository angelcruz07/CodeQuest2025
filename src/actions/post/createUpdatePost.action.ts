import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";

export const createUpdatePost = defineAction({
    accept: 'form',
    input: z.object({
        id: z.string().optional(),
        title: z.string().min(3).max(50),
        content: z.string().min(10),
        likes: z.number(),
        images: z.array(z.string().url()).optional(),
        tags: z.array(z.string().min(3).max(20)),
        slug: z.string().min(5).max(30),
        author: z.number(),
        categories: z.array(z.string().min(3).max(50)),
        comments: z.array(z.string().min(10).max(250))
    }),
    handler: async({id, title, content, likes, images, tags, slug, author, categories, comments}) => {
        try {
            if (id) {
                const updatedPost = await prisma.post.update({
                    where: { id: Number(id) },
                    data: {
                        title,
                        content,
                        likes,
                        images,
                        tags,
                        slug,
                        author: { connect: { id: author } },
                        categories: {
                            connect: categories.map(name => ({ name }))
                        },
                        comments: {
                            create: comments.map(content => ({ content }))
                        }
                    }
                });
                return updatedPost;
            } else {
                const newPost = await prisma.post.create({
                    data: {
                        title,
                        content,
                        likes,
                        images,
                        tags,
                        slug,
                        author: { connect: { id: author } },
                        categories: {
                            connect: categories.map(name => ({ name }))
                        },
                        comments: {
                            create: comments.map(content => ({ content }))
                        }
                    }
                });
                return newPost;
            }
        } catch (e) {
            if (id) { 
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: "Error to update the post" + (e instanceof Error ? e.message : String(e))
                });
            } else { 
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: "Error to create the post" + (e instanceof Error ? e.message : String(e))
                });
            }
        }
    }
});