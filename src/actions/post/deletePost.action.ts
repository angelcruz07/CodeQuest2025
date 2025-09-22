import { z } from "astro:schema";
import prisma from "@lib/prisma";
import { ActionError, defineAction } from "astro:actions";
import { deleteImage } from "@lib/cloudinary/deleteImage";

export const deletePost = defineAction({
  input: z.object({
    id: z.string(),
  }),
  handler: async ({ id }) => {
    try {
      const post = await prisma.post.findUnique({
        where: { id },
      });

      if (!post) {
        throw new ActionError({
          code: "NOT_FOUND",
          message: "Post not found",
        });
      }

      //Elimina la foto de cloudinary
      if (post.image) {
        if (Array.isArray(post.image)) {
          for (const imgUrl of post.image) {
            if (imgUrl) await deleteImage(imgUrl);
          }
        } else if (typeof post.image === "string") {
          await deleteImage(post.image);
        }
      }

      //Elimina la foto de la base de datos
      const deletedPost = await prisma.post.delete({
        where: { id: id },
      });
      return deletedPost;
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message:
          "Error to delete the post" +
          (e instanceof Error ? e.message : String(e)),
      });
    }
  },
});
