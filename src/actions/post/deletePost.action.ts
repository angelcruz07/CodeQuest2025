import { z } from "astro:schema";
import prisma from "@lib/prisma";
import { ActionError, defineAction } from "astro:actions";

export const deletePost = defineAction({ 
    accept: 'form',
    input: z.object({
        id: z.string()
    }),
    handler: async({id}) => { 
        try { 
            const deletedPost = await prisma.post.delete({ 
                where: {id: id}
                
            });
            return deletedPost;
        } catch(e) { 
            throw new ActionError({
                code: "BAD_REQUEST",
                message: "Error to delete the post" + (e instanceof Error ? e.message : String(e))
            });
        }
    }
});