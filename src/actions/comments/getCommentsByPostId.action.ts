import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";

export const getCommentsByPostId = defineAction({
  accept: "form",
  input: z.object({
    postId: z.string(),
  }),
  handler: async ({ postId }) => {
    try {
      const commentByPostId = await prisma.comment.findUnique({
        where: { id: postId },
        include: {
          user: true,
          post: true,
          parent: true,
          replies: true,
        },
      });
      return commentByPostId;
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message:
          "Error to fetch comments by post ID" +
          (e instanceof Error ? e.message : String(e)),
      });
    }
  },
});

