import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";

export const createUpdatePost = defineAction({
    accept: 'form',
    input: z.object({
        id: z.string().optional(),
        title: z.string().min(3).max(50),
        content: z.string().min(10),
        image: z.array(z.string().url()),
        tags: z.string().min(3).max(20),
        slug: z.string().min(5).max(30),
        // author: z.number(),
        categories: z.array(z.string().min(3).max(50)),
    }),
    handler: async ({ id, title, content, image, tags, slug, categories }) => {
        try {
            console.log(id, title, content, image, tags, slug, categories);
            const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase());
            const categoriesArray = categories.map(category => category.trim().toLowerCase());

            if (id) {
                const updatedPost = await prisma.post.update({
                    where: { id },
                    data: {
                        title,
                        content,
                        image,
                        tags: { set: tagsArray },
                        slug,
                        // author: { connect: { id: author } },
                        categories: {
                            connect: categories.map(name => ({ name }))
                        }
                    }
                });
                return updatedPost;
            } else { 

            const newPost = await prisma.post.create({
                data: {
                    title,
                    content,
                    image,
                    tags: { set: tagsArray },
                    slug,
                    // author: { connect: { id: author } },
                    categories: {
                        connect: categories.map(name => ({ name }))
                    }
                }
            });
            return newPost;
            }
        } catch (e) {
            console.error("Error creating/updating post:", e);
            throw new ActionError({
                code: "BAD_REQUEST",
                message: "Error to updating the post" + (e instanceof Error ? e.message : String(e))
            });
        }
    }

});