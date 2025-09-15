/*
  Warnings:

  - The primary key for the `_PostCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."_PostCategories" DROP CONSTRAINT "_PostCategories_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_PostCategories" DROP CONSTRAINT "_PostCategories_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."comment" DROP CONSTRAINT "comment_parentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."comment" DROP CONSTRAINT "comment_postId_fkey";

-- AlterTable
ALTER TABLE "public"."_PostCategories" DROP CONSTRAINT "_PostCategories_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_PostCategories_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "public"."category" DROP CONSTRAINT "category_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "category_id_seq";

-- AlterTable
ALTER TABLE "public"."comment" DROP CONSTRAINT "comment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "postId" SET DATA TYPE TEXT,
ALTER COLUMN "authorId" SET DATA TYPE TEXT,
ALTER COLUMN "parentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "comment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "comment_id_seq";

-- AlterTable
ALTER TABLE "public"."post" DROP CONSTRAINT "post_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "post_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "post_id_seq";

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PostCategories" ADD CONSTRAINT "_PostCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PostCategories" ADD CONSTRAINT "_PostCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
