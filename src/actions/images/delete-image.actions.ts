import { z } from "astro:schema";
import { deleteImage } from "@lib/cloudinary/deleteImage";
import { ActionError, defineAction } from "astro:actions";

export const deleteCloudinaryImage = defineAction({
  input: z.object({
    url: z.string().url(),
  }),
  handler: async ({ url }) => {
    try {
      const response = deleteImage(url);
      return response;
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
