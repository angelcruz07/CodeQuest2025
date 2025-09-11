import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";

export const createUpdatePost = defineAction({
    accept: 'form',
    input: z.object({
        title: z.string().min(2).max(100),
        description: z.string().min(10).max(500),
        content: z.string().min(20)
    }), //valores que se esperan recibir
    handler: async({title, description, content}) => {
        try { 
            const newPost = await prisma.post.create({
                data: {
                    title,
                    description,
                    content
                }
            })
        } catch (e) { 
            console.error(e);
        }
    } //Parametros para el post
})