import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";

export const createUpdatePost = defineAction({
    accept: 'form',
    input: z.object({
        id: z.string().optional(),
        title: z.string().min(3).max(50),
        description: z.string().min(3).max(255),
        content: z.string().min(10),
        image: z.array(z.string().url()),
        tags: z.string().min(3).max(200), 
        slug: z.string().min(5).max(30),
        categories: z.array(z.string().min(3).max(50)),
        userId: z.string().min(1), 
    }),
    handler: async ({ id, title, description, content, image, tags, slug, categories, userId }) => {
        try {
            const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase());

            if (id) {
                const updatedPost = await prisma.post.update({
                    where: { id },
                    data: {
                        title,
                        description,
                        content,
                        image,
                        tags: { set: tagsArray },
                        slug,
                        userId,
                        categories: {
                            connect: categories.map(categoryId => ({ id: categoryId }))
                        }
                    }
                });
                return updatedPost;
            } else {
                const newPost = await prisma.post.create({
                    data: {
                        title,
                        description,
                        content,
                        image,
                        tags: { set: tagsArray },
                        slug,
                        userId,
                        categories: {
                            connect: categories.map(categoryId => ({ id: categoryId }))
                        }
                    }
                });
                return newPost;
            }
        } catch (e) {
            console.error("Error creating/updating post:", e);
            throw new ActionError({
                code: "BAD_REQUEST",
                message: "Error updating the post: " + (e instanceof Error ? e.message : String(e))
            });
        }
    }
});