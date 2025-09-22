import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import prisma from "@lib/prisma";
import { uploadImages } from "@lib/cloudinary/uploadImage";

export const createUpdatePost = defineAction({
  accept: "form",
  input: z.object({
    id: z.string().optional(),
    title: z.string().min(3).max(50),
    description: z.string().min(3).max(255),
    content: z.string().min(10),
    image: z.instanceof(File).optional(),
    tags: z.string().min(3).max(200),
    slug: z.string().min(5).max(30).optional(),
    categories: z.array(z.string().min(3)).or(z.string().min(3)),
    userId: z.string().min(1),
  }),
  handler: async ({
    id,
    title,
    description,
    content,
    image,
    tags,
    slug,
    categories,
    userId,
  }) => {
    const DEFAULT_IMAGE_URL = "/images/code.png";

    try {
      const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
      const slugifiedTitle = title.toLowerCase().replace(/\s+/g, "-");

      const categoriesArray = Array.isArray(categories)
        ? categories
        : [categories];

      const existingCategories = await prisma.category.findMany({
        where: {
          id: {
            in: categoriesArray,
          },
        },
      });

      if (existingCategories.length !== categoriesArray.length) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "One or more categories do not exist in the database",
        });
      }

      let imageUrl = DEFAULT_IMAGE_URL;

      if (image && image.size > 0) {
        try {
          const uploadedUrl = await uploadImages(image);
          console.log(uploadImages);
          imageUrl =
            uploadedUrl.find((url) => url !== null) || DEFAULT_IMAGE_URL;
        } catch (uploadError) {
          console.error("Error uploading image:", uploadError);
        }
      }

      console.log(imageUrl);

      if (id) {
        const updatedPost = await prisma.post.update({
          where: { id },
          data: {
            title,
            description,
            content,
            image: imageUrl,
            tags: { set: tagsArray },
            slug,
            userId,
            categories: {
              set: categoriesArray.map((categoryId) => ({ id: categoryId })),
            },
          },
        });
        return updatedPost;
      } else {
        const newPost = await prisma.post.create({
          data: {
            title,
            description,
            content,
            image: imageUrl,
            tags: { set: tagsArray },
            slug: slug || slugifiedTitle,
            userId,
            categories: {
              connect: categoriesArray.map((categoryId) => ({
                id: categoryId,
              })),
            },
          },
        });

        console.log(newPost);
        return newPost;
      }
    } catch (e) {
      console.error("Error creating/updating post:", e);
      console.log(e);
      throw new ActionError({
        code: "BAD_REQUEST",
        message:
          "Error updating the post: " +
          (e instanceof Error ? e.message : String(e)),
      });
    }
  },
});
