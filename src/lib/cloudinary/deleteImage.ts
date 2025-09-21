import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_CLOUDNAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "astro:env/server";

cloudinary.config({
  CLOUDINARY_CLOUDNAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
});

export async function deleteImage(imageUrl: string) {
  if (!imageUrl.startsWith("http")) {
    return {
      ok: false,
      message: "Error: doesn't delete image",
    };
  }

  const imageName = imageUrl.split("/").pop()?.split(".")[0] ?? "";

  try {
    await cloudinary.uploader.destroy(imageName);

    return {
      ok: true,
      message: "Image deleted successfully",
    };
  } catch (e) {
    console.log(e);
    return {
      ok: false,
      message: "Error: doesn't delete image",
    };
  }
}