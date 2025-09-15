-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'AUTHOR', 'USER');

-- CreateTable
CREATE TABLE "public"."category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "postId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT[],
    "tags" TEXT[],
    "slug" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_PostCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PostCategories_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "public"."category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "post_slug_key" ON "public"."post"("slug");

-- CreateIndex
CREATE INDEX "post_slug_idx" ON "public"."post"("slug");

-- CreateIndex
CREATE INDEX "_PostCategories_B_index" ON "public"."_PostCategories"("B");

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PostCategories" ADD CONSTRAINT "_PostCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PostCategories" ADD CONSTRAINT "_PostCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
