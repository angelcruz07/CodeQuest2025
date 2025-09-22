import prisma from "@/lib/prisma";
import { z } from "astro:schema";
import { ActionError, defineAction } from "astro:actions";

export const createUpdateLike = defineAction({
  accept: "form",
  input: z.object({
    postId: z.string(),
    increment: z.boolean(),
  }),
  handler: async ({ postId, increment }) => {
    try {
      const post = await prisma.post.update({
        where: { id: postId },
        data: {
          likes: {
            [increment ? "increment" : "decrement"]: 1,
          },
        },
      });
      return post;
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message:
          "Error to update likes: " +
          (e instanceof Error ? e.message : String(e)),
      });
    }
  },
});
