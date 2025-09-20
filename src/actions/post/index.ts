import { createUpdatePost } from "./createUpdatePost.action";
import { deletePost } from "./deletePost.action";
import { getPostBySlug } from "./getPostBySlug.action";
import { getPosts } from "./getPosts.action";
import { getPostsByPage } from "./getPostsByPage.action";

export const post = {
  createUpdatePost,
  deletePost,
  getPostBySlug,
  getPostsByPage,
  getPosts,
};
