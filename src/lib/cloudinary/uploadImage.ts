import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_CLOUDNAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "astro:env/server";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUDNAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export async function uploadImages(images: File[] | File) {
  try {
    const imageArray = Array.isArray(images) ? images : [images];

    const uploadPromises = imageArray.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64File = Buffer.from(buffer).toString("base64");
        const mimeType = image.type;

        const res = await cloudinary.uploader.upload(
          `data:${mimeType};base64,${base64File}`,
          {
            folder: "iett",
            resource_type: "auto",
          },
        );

        return res.secure_url || null;
      } catch (e) {
        console.log(e);
        return null;
      }
    });

    const uploadImages = await Promise.all(uploadPromises);

    return uploadImages;
  } catch (e) {
    console.error("Error uploading images", e);
    return [];
  }
}