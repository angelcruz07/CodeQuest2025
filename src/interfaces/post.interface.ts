import { type User, type Category } from "@prisma/client";

export interface Post {
  title: string;
  description: string;
  content: string;
  image: string;
  author: User;
  tags: string[];
  slug: string;
  categories: Category[];
  createdAt: Date;
}
