import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";

export const getLikesByPostId = defineAction({ 
    input: z.object({
        postId: z.string(),
    }),
    handler: async ({ postId }) => { 
        try { 
            const likes = await prisma.like.findMany({
                where: { postId },
            }); 
            return { count: likes.length, likes };
        } catch (e) { 
            throw new ActionError({ 
                code: "BAD_REQUEST",
                message: "Error fetching likes for post." + (e instanceof Error ? e.message : String(e)),
            })
        }
        
    }
})